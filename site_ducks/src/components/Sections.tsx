// src/components/About.jsx
import { about } from "../data/content";
import { useFadeIn } from "../hooks/UseFadeIn";

export default function About() {
  const { ref, visible } = useFadeIn();
  return (
    <section id="about" style={styles.section}>
      <div style={styles.label}>Sobre</div>
      <div ref={ref} style={{ ...styles.grid, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s, transform 0.6s" }}>
        <div>
          <h2 style={styles.h2}>{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} style={styles.p}>{p}</p>
          ))}
        </div>
        <div style={styles.statsCol}>
          {about.stats.map((s, i) => (
            <div key={i} style={{ ...styles.stat, borderRadius: i === 0 ? "12px 12px 0 0" : i === about.stats.length - 1 ? "0 0 12px 12px" : 0 }}>
              <span style={styles.statLabel}>{s.label}</span>
              <span style={styles.statVal}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/Skills.jsx — exportado no mesmo arquivo por brevidade
import { skills } from "../data/content";

export function Skills() {
  const { ref, visible } = useFadeIn();
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.label}>Habilidades</div>
      <div ref={ref} style={{ ...styles.skillsGrid, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s, transform 0.6s" }}>
        {skills.map((s) => (
          <div key={s.name} style={styles.skillCard}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-dim)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--surface)")}
          >
            <div style={{ fontSize: 24, marginBottom: 10 }}>{s.icon}</div>
            <div style={styles.skillName}>{s.name}</div>
            <div style={styles.tags}>
              {s.tags.map(t => <span key={t} style={styles.tag}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// src/components/Projects.jsx
import { projects } from "../data/content";

export function Projects() {
  const { ref, visible } = useFadeIn();
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.label}>Projetos</div>
      <div ref={ref} style={{ ...styles.projectList, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s, transform 0.6s" }}>
        {projects.map((p) => (
          <a key={p.num} href={p.url} style={styles.project}
            onMouseEnter={e => {
                const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement | null;
                if (arrow) {
                    arrow.style.background = "var(--ink)";
                    arrow.style.color = "var(--bg)";
                }
                e.currentTarget.style.background = "var(--accent-dim)";
                }}
            onMouseLeave={e => {
                const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement | null;
                if (arrow) {
                    arrow.style.background = "transparent";
                    arrow.style.color = "var(--ink-3)";
                }
                e.currentTarget.style.background = "var(--surface)";
                }}
          >
            <div>
              <div style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 6, letterSpacing: "0.06em" }}>{p.num}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{p.desc}</div>
              <div style={styles.tags}>
                {p.stack.map(t => <span key={t} style={styles.tag}>{t}</span>)}
              </div>
            </div>
            <div className="arrow" style={styles.arrow}>↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}

// src/components/Contact.jsx
import { siteConfig } from "../data/content";

export function Contact() {
  const { ref, visible } = useFadeIn();
  return (
    <section id="contact" style={styles.section}>
      <div ref={ref} style={{ ...styles.contactBox, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.6s, transform 0.6s" }}>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: 42, fontWeight: 400, color: "var(--bg)", marginBottom: "1rem" }}>
          Vamos construir algo juntos.
        </h2>
        <p style={{ color: "rgba(248,247,244,0.6)", marginBottom: "2rem" }}>
          Aberto a trabalhos freelance, colaborações e conversas interessantes.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            ["✉", "E-mail", `mailto:${siteConfig.email}`],
            ["⌥", "GitHub", siteConfig.github],
            ["◈", "LinkedIn", siteConfig.linkedin],
          ].map(([icon, label, href]) => (
            <a key={label} href={href} style={styles.contactLink}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(248,247,244,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/Footer.jsx
export function Footer() {
  return (
    <footer style={styles.footer}>
      <span>🦆 Duck's Code</span>
      <span>Feito com carinho · 2025</span>
    </footer>
  );
}

// ─── Styles compartilhados ────────────────────────────────────────────────────
const styles: { [key: string]: React.CSSProperties } = {
  section: { padding: "6rem 3rem", maxWidth: 900, margin: "0 auto" },
  label: {
    fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
    color: "var(--ink-3)", marginBottom: "3rem",
    display: "flex", alignItems: "center", gap: 10,
  },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" },
  h2: { fontFamily: "var(--serif)", fontSize: 36, fontWeight: 400, lineHeight: 1.2, marginBottom: "1.25rem" },
  p: { color: "var(--ink-2)", marginBottom: "1rem" },
  statsCol: { display: "flex", flexDirection: "column", gap: 1 },
  stat: {
    background: "var(--surface)", border: "1px solid var(--border)",
    padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  statLabel: { fontSize: 12, color: "var(--ink-3)", letterSpacing: "0.06em" },
  statVal: { fontFamily: "var(--serif)", fontSize: 28, color: "var(--accent)" },
  skillsGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 1, background: "var(--border)", borderRadius: 12,
    overflow: "hidden", border: "1px solid var(--border)",
  },
  skillCard: { background: "var(--surface)", padding: "1.5rem", transition: "background 0.2s" },
  skillName: { fontSize: 14, fontWeight: 500, marginBottom: 6 },
  tags: { display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 },
  tag: {
    fontSize: 11, padding: "2px 8px",
    background: "var(--bg)", border: "1px solid var(--border)",
    borderRadius: 4, color: "var(--ink-2)",
  },
  projectList: {
    display: "flex", flexDirection: "column", gap: 1,
    background: "var(--border)", borderRadius: 12,
    overflow: "hidden", border: "1px solid var(--border)",
  },
  project: {
    background: "var(--surface)", padding: "1.75rem 2rem",
    display: "grid", gridTemplateColumns: "1fr auto",
    alignItems: "center", gap: "1rem",
    transition: "background 0.2s", cursor: "pointer", textDecoration: "none", color: "inherit",
  },
  arrow: {
    width: 40, height: 40, borderRadius: "50%",
    border: "1px solid var(--border)",
    display: "flex", alignItems: "center", justifyContent: "center",
    color: "var(--ink-3)", fontSize: 18, flexShrink: 0, transition: "all 0.2s",
  },
  contactBox: {
    background: "var(--ink)", borderRadius: 12,
    padding: "3.5rem", textAlign: "center",
  },
  contactLink: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "10px 20px", fontFamily: "var(--mono)",
    fontSize: 13, color: "var(--bg)",
    border: "1px solid rgba(248,247,244,0.2)",
    borderRadius: 6, textDecoration: "none", transition: "all 0.2s",
  },
  footer: {
    padding: "2rem 3rem",
    borderTop: "1px solid var(--border)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    maxWidth: 900, margin: "0 auto",
    fontSize: 12, color: "var(--ink-3)",
  },
};