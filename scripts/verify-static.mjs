import { readFile } from "node:fs/promises";

// deu falha ao invés de publicar um site sem uma das páginas esperadas.
for (const page of ["index.html", "produtos/index.html", "contato/index.html", "faq/index.html"]) {
  const html = await readFile(new URL(`../dist/client/${page}`, import.meta.url), "utf8");
  if (!html.includes("<html") || !html.includes("nimbushost")) {
    throw new Error(`HTML inválido: ${page}`);
  }
  console.log(`HTML gerado: ${page}`);
}