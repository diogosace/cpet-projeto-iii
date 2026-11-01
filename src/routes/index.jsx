import { createFileRoute } from "@tanstack/react-router";
import Empresa from "../pages/Empresa.jsx";
import { seo } from "../lib/seo.js";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "nimbushost · hospedagem, vps e automações",
      "hospedagem de sites, vps e scripts com liberação automática após o pagamento por pix ou cartão.",
    ),
  component: Empresa,
});
