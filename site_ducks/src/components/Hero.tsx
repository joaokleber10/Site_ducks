// src/components/Hero.jsx
import { hero } from "../data/content";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.label}>{hero.label}</div>

      <h1 style={styles.h1}>
        {hero.headline[0]}<br />
        <em style={styles.em}>{hero.headline[1]}</em><br />
        {hero.headline[2]}
      </h1>

      <p style={styles.sub}>{hero.sub}</p>

      <div style={styles.actions}>
        <a href="#projects" style={{ ...styles.btn, ...styles.btnPrimary }}
          onMouseEnter={e => Object.assign(e.currentTarget.style, { background: "var(--accent)", borderColor: "var(--accent)", color: "var(--ink)" })}
          onMouseLeave={e => Object.assign(e.currentTarget.style, { background: "var(--ink)", borderColor: "var(--ink)", color: "var(--bg)" })}
        >
          Ver Projetos →
        </a>
        <a href="#contact" style={{ ...styles.btn, ...styles.btnGhost }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--ink)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
        >
          Entrar em contato
        </a>
      </div>

      <div style={styles.scroll}>
        <div style={styles.scrollLine} />
        role para explorar
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    minHeight: "100vh", display: "flex", flexDirection: "column",
    justifyContent: "center", padding: "6rem 3rem 4rem",
    maxWidth: 900, margin: "0 auto",
  },
  label: {
    fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
    color: "var(--accent)", marginBottom: "1.5rem",
    display: "flex", alignItems: "center", gap: 8,
  },
  h1: {
    fontFamily: "var(--serif)", fontSize: "clamp(52px, 9vw, 88px)",
    lineHeight: 1.05, color: "var(--ink)", marginBottom: "1.5rem", fontWeight: 400,
  },
  em: { fontStyle: "italic", color: "var(--accent)" },
  sub: {
    fontSize: 16, color: "var(--ink-2)", maxWidth: 480,
    lineHeight: 1.8, marginBottom: "2.5rem",
  },
  actions: { display: "flex", gap: "1rem", flexWrap: "wrap" },
  btn: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "12px 24px", fontFamily: "var(--mono)",
    fontSize: 13, fontWeight: 500, letterSpacing: "0.04em",
    borderRadius: 6, textDecoration: "none", transition: "all 0.2s",
  },
  btnPrimary: {
    background: "var(--ink)", color: "var(--bg)", border: "1px solid var(--ink)",
  },
  btnGhost: {
    background: "transparent", color: "var(--ink)", border: "1px solid var(--border)",
  },
  scroll: {
    marginTop: "5rem", fontSize: 12, color: "var(--ink-3)",
    letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 10,
  },
  scrollLine: { width: 40, height: 1, background: "var(--ink-3)" },
};