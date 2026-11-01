import { z } from "zod";

export const assuntos = [
  { valor: "comercial", rotulo: "dúvida comercial" },
  { valor: "suporte", rotulo: "suporte técnico" },
  { valor: "financeiro", rotulo: "financeiro / faturas" },
  { valor: "migracao", rotulo: "migração de outra hospedagem" },
];

export const esquemaContato = z.object({
  nome: z.string().trim().min(2, "informe seu nome.").max(80, "nome muito longo."),
  email: z.string().trim().email("e-mail inválido. ex.: voce@dominio.com.br"),
  assunto: z
    .string()
    // z.enum nao pegava o "" do select vazio com a msg certa, refine resolve
    .refine((v) => assuntos.some((a) => a.valor === v), "escolha um assunto."),
  produto: z.string().optional(),
  mensagem: z.string().trim().min(10, "escreva pelo menos 10 caracteres.").max(2000, "máximo de 2000 caracteres."),
});

/**
 * Hoje so simula. Retorna { ok, protocolo }.
 * @param {z.infer<typeof esquemaContato>} dados
 */
export async function enviarContato(dados) {
  // TODO back-end: trocar por fetch("POST /api/contato") quando a api existir
  await new Promise((r) => setTimeout(r, 700));

  // gatilho pra testar o estado de erro sem back-end (usa "erro@teste.com")
  if (dados.email === "erro@teste.com") {
    throw new Error("falha simulada no envio.");
  }

  return { ok: true, protocolo: `NH-${Date.now().toString().slice(-6)}` };
}
