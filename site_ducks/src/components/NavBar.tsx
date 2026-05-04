// src/components/Navbar.jsx
import { siteConfig } from "../data/content";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>
        <span>🦆</span> {siteConfig.name}
      </a>
      <ul style={styles.links}>
        {[
          ["#about",    "Sobre"],
          ["#skills",   "Habilidades"],
          ["#projects", "Projetos"],
          ["#contact",  "Contato"],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} style={styles.link}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-2)")}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 3rem", height: 64,
    background: "rgba(248,247,244,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--border)",
  },
  logo: {
    fontFamily: "var(--serif)", fontSize: 20,
    color: "var(--ink)", textDecoration: "none",
    display: "flex", alignItems: "center", gap: 8,
  },
  links: {
    display: "flex", gap: "2rem", listStyle: "none",
  },
  link: {
    color: "var(--ink-2)", textDecoration: "none",
    fontSize: 13, letterSpacing: "0.03em", transition: "color 0.2s",
  },
};