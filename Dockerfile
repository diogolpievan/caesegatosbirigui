# syntax=docker/dockerfile:1

# ============================================================================
# Imagem Docker do site Cães e Gatos Birigui (Next.js 16 / React 19)
#
# Build multi-stage em 3 estágios. Só o último vira a imagem final: tudo que
# é usado apenas para compilar (devDependencies, código-fonte, toolchain do
# TypeScript/Tailwind) fica nos estágios intermediários e é descartado.
# ============================================================================

# Versão do Node centralizada num ARG global: um único ponto para atualizar,
# e a mesma base é reaproveitada pelos três estágios (baixada uma só vez).
ARG NODE_VERSION=24-alpine


# ---------------------------------------------------------------------------
# Estágio 1 — deps: resolve as dependências isoladamente
#
# Copia apenas os manifests antes de instalar. Assim a camada do `npm ci`
# só é invalidada quando package.json/package-lock.json mudam — editar
# código-fonte não força uma reinstalação completa.
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

COPY package.json package-lock.json ./

# `npm ci` (e não `npm install`): instalação determinística a partir do
# lockfile, sem resolver versões novas nem alterar o lock durante o build.
RUN npm ci


# ---------------------------------------------------------------------------
# Estágio 2 — builder: compila a aplicação
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

# Variáveis NEXT_PUBLIC_* são inlinadas no bundle em tempo de build, por isso
# entram como ARG aqui (e não como ENV de runtime) e podem ser sobrescritas
# com --build-arg NEXT_PUBLIC_SITE_URL=https://outro-dominio.
#
# O default é obrigatório: um ARG vazio viraria ENV="" e src/constants/seo.ts
# usa `??`, que só cai no fallback em null/undefined — string vazia passaria
# adiante e quebraria o `new URL()` na coleta de metadata.
ARG NEXT_PUBLIC_SITE_URL=https://www.caesegatosbirigui.com.br
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

# Evita a coleta de telemetria do Next durante o build (mais rápido e sem
# chamadas de rede desnecessárias).
ENV NEXT_TELEMETRY_DISABLED=1

# Reaproveita as dependências já resolvidas no estágio anterior.
COPY --from=deps /app/node_modules ./node_modules

# O código-fonte entra depois das dependências justamente porque muda com
# muito mais frequência: as camadas acima permanecem em cache.
COPY . .

# Com output: "standalone" no next.config.ts, este build produz:
#   .next/standalone -> servidor Node autocontido + node_modules mínimo
#   .next/static     -> assets estáticos com hash
RUN npm run build


# ---------------------------------------------------------------------------
# Estágio 3 — runner: imagem final, só com o necessário para servir
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# O server.js do standalone lê PORT e HOSTNAME. 0.0.0.0 é obrigatório para
# que o container aceite conexões de fora (127.0.0.1 só responderia interno).
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Roda como usuário sem privilégios. A imagem oficial do Node já traz o
# usuário `node` (uid 1000), então não é preciso criá-lo — uma camada a menos.
# O --chown evita um `RUN chown -R` posterior, que duplicaria os arquivos
# numa nova camada.
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

USER node

EXPOSE 3000

# Verificação de saúde: o `wget` do BusyBox já vem no Alpine, então não há
# necessidade de instalar curl (nenhum pacote extra na imagem final).
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --spider http://127.0.0.1:3000/ || exit 1

# Executa o servidor diretamente com node, em exec form: o processo vira o
# PID 1 e recebe SIGTERM do `docker stop`, permitindo shutdown limpo.
# Não usamos `npm start` para não manter o npm como processo pai intermediário.
CMD ["node", "server.js"]
