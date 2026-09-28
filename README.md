[![CI](https://github.com/diogolpievan/caesegatosbirigui/actions/workflows/ci.yml/badge.svg)](https://github.com/diogolpievan/caesegatosbirigui/actions/workflows/ci.yml)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Testes

Testes unitários com [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com).

```bash
npm test           # roda a suíte uma vez
npm run test:watch # modo watch
npm run test:coverage
```

A cada push/PR na `main`, o workflow `.github/workflows/ci.yml` instala as dependências, roda os testes e faz o build.

## Docker

A imagem usa multi-stage build e o `output: "standalone"` do Next, resultando em ~81 MB.

```bash
# build (opcionalmente: --build-arg NEXT_PUBLIC_SITE_URL=https://seu-dominio)
docker build -t caesegatosbirigui:1.0 .

# executar
docker run -d --name caes-web -p 3000:3000 caesegatosbirigui:1.0

# verificar
curl -I http://localhost:3000
docker ps
```

O container roda como usuário não-root (`node`) e expõe a porta 3000.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
