import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Gera em .next/standalone um servidor autocontido, já com apenas o
   * subconjunto de node_modules que o runtime usa (traced pelo Next).
   * É o que permite descartar o node_modules completo na imagem final.
   */
  output: "standalone",
};

export default nextConfig;
