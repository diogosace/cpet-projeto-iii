const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

/** @param {number} valor */
export const formatarPreco = (valor) => brl.format(valor);
