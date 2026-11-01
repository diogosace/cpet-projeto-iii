import { createFileRoute } from "@tanstack/react-router";
import Produtos from "../pages/Produtos.jsx";
import { seo } from "../lib/seo.js";

export const Route = createFileRoute("/produtos")({
  head: () =>
    seo(
      "produtos e preços · nimbushost",
      "tabela de hospedagem de sites a partir de R$ 12,90, vps a partir de R$ 29,90 e scripts de automação.",
    ),
  component: Produtos,
});
