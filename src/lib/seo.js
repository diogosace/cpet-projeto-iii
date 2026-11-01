/**
 * Monta o head de cada rota (titulo, description, og).
 * @param {string} titulo
 * @param {string} descricao
 */
export const seo = (titulo, descricao) => ({
  meta: [
    { title: titulo },
    { name: "description", content: descricao },
    { property: "og:title", content: titulo },
    { property: "og:description", content: descricao },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});
