// tipos em JSDoc: o projeto e em JS puro, mas o editor ainda entende os formatos

/**
 * @typedef {"sites" | "vps" | "scripts"} LinhaProduto
 */

/**
 * @typedef {"mes" | "licenca"} Periodo
 */

/**
 * Specs sao pares rotulo -> valor, exibidos em fonte mono.
 * @typedef {Record<string, string>} Specs
 */

/**
 * @typedef {Object} Produto
 * @property {string} id
 * @property {string} slug
 * @property {LinhaProduto} linha
 * @property {string} nome
 * @property {Specs} specs
 * @property {number} preco  em reais
 * @property {Periodo} periodo
 */

/**
 * @typedef {Object} Linha
 * @property {LinhaProduto} id
 * @property {string} titulo
 * @property {string} descricao
 * @property {string} rotuloPeriodo
 */

export {};
