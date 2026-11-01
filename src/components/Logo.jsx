/**
 * @param {{ variante?: "clara" | "escura", soSimbolo?: boolean }} props
 * variante "escura" = pra usar sobre fundo escuro (rodape)
 */
export default function Logo({ variante = "clara", soSimbolo = false }) {
  const tinta = variante === "escura" ? "#F5F4F0" : "#12161C";
  const fundo = variante === "escura" ? "#12161C" : "#F5F4F0";

  return (
    <span className="logo" style={{ color: tinta }}>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="30" height="30" rx="4" fill={fundo} stroke={tinta} strokeWidth="2" />
        <rect x="7" y="8" width="18" height="3" fill={tinta} />
        <circle cx="22" cy="9.5" r="1.3" fill="#1E9E6A" />
        <rect x="7" y="14.5" width="14" height="3" fill={tinta} />
        <rect x="7" y="21" width="10" height="3" fill={tinta} />
      </svg>
      {!soSimbolo && <span className="logo-texto">nimbushost</span>}
    </span>
  );
}
