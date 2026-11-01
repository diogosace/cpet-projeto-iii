/** @typedef {import("../types/index.js").Produto} Produto */
/** @typedef {import("../types/index.js").Linha} Linha */

/** @type {Linha[]} */
export const linhas = [
  {
    id: "sites",
    titulo: "hospedagem de sites",
    descricao:
      "servidor compartilhado com isolamento por conta. bom para sites institucionais, blogs e lojas pequenas.",
    rotuloPeriodo: "por mês",
  },
  {
    id: "vps",
    titulo: "vps",
    descricao:
      "máquina virtual com root, ubuntu server e ipv4 dedicado. você administra; nós cuidamos do hardware e da rede.",
    rotuloPeriodo: "por mês",
  },
  {
    id: "scripts",
    titulo: "scripts e automações",
    descricao: "código que usamos na nossa própria operação. licença única, com 12 meses de atualizações.",
    rotuloPeriodo: "licença única",
  },
];

/** @type {Produto[]} */
export const produtos = [
  // linha 1 - sites
  {
    id: "s1",
    slug: "site-start",
    linha: "sites",
    nome: "site start",
    preco: 12.9,
    periodo: "mes",
    specs: { sites: "1", disco: "10 gb nvme", tráfego: "100 gb", extra: "ssl grátis" },
  },
  {
    id: "s2",
    slug: "site-pro",
    linha: "sites",
    nome: "site Pro",
    preco: 24.9,
    periodo: "mes",
    specs: { sites: "5", disco: "30 gb nvme", tráfego: "ilimitado*", extra: "5 contas de e-mail" },
  },
  {
    id: "s3",
    slug: "site-business",
    linha: "sites",
    nome: "site business",
    preco: 49.9,
    periodo: "mes",
    specs: { sites: "20", disco: "80 gb nvme", tráfego: "ilimitado*", extra: "backup diário" },
  },
  {
    id: "s4",
    slug: "revenda-50",
    linha: "sites",
    nome: "revenda 50",
    preco: 119.9,
    periodo: "mes",
    specs: { sites: "50 contas isoladas", disco: "200 gb nvme", tráfego: "ilimitado*", extra: "marca própria" },
  },

  // linha 2 - vps
  {
    id: "v1",
    slug: "vps-1",
    linha: "vps",
    nome: "vps 1",
    preco: 29.9,
    periodo: "mes",
    specs: { vcpu: "1", ram: "1 gb", disco: "20 gb nvme", tráfego: "1 TB" },
  },
  {
    id: "v2",
    slug: "vps-2",
    linha: "vps",
    nome: "vps 2",
    preco: 59.9,
    periodo: "mes",
    specs: { vcpu: "2", ram: "4 gb", disco: "50 gb nvme", tráfego: "2 TB" },
  },
  {
    id: "v3",
    slug: "vps-3",
    linha: "vps",
    nome: "vps 3",
    preco: 109.9,
    periodo: "mes",
    specs: { vcpu: "4", ram: "8 gb", disco: "100 gb nvme", tráfego: "4 TB" },
  },
  {
    id: "v4",
    slug: "vps-4",
    linha: "vps",
    nome: "vps 4",
    preco: 199.9,
    periodo: "mes",
    specs: { vcpu: "8", ram: "16 gb", disco: "200 gb nvme", tráfego: "8 TB" },
  },

  // linha 3 - scripts
  {
    id: "a1",
    slug: "bot-telegram",
    linha: "scripts",
    nome: "bot de avisos para telegram",
    preco: 89,
    periodo: "licenca",
    specs: { função: "avisa vendas, vencimentos e quedas" },
  },
  {
    id: "a2",
    slug: "bot-discord",
    linha: "scripts",
    nome: "bot de vendas para fiscord",
    preco: 149,
    periodo: "licenca",
    specs: { função: "libera cargos após pagamento Pix" },
  },
  {
    id: "a3",
    slug: "painel-cobranca-pix",
    linha: "scripts",
    nome: "painel de cobrança pix",
    preco: 349,
    periodo: "licenca",
    specs: { função: "faturas, webhooks e suspensão por atraso" },
  },
  {
    id: "a4",
    slug: "monitor-uptime",
    linha: "scripts",
    nome: "monitor de uptime com alertas",
    preco: 119,
    periodo: "licenca",
    specs: { função: "checagem a cada 60 s, página de status pública" },
  },
];

/** @param {string} linha */
export const produtosDaLinha = (linha) => produtos.filter((p) => p.linha === linha);

/** @param {string | undefined} slug */
export const acharProduto = (slug) => produtos.find((p) => p.slug === slug);
