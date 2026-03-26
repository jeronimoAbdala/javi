import { motion } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const reasons = [
  { icon: '👨‍⚕️', text: 'Equipo médico con experiencia real en financiadores y prestadores' },
  { icon: '🔭', text: 'Visión integral: clínica, económica, normativa y operativa' },
  { icon: '💎', text: 'Expertiz en patologías y módulos de alto impacto económico' },
  { icon: '🧩', text: 'Resolución de casos complejos con enfoque técnico-científico' },
  { icon: '🤝', text: 'Capacidad de interlocución con prestadores, proveedores e importadores' },
  { icon: '📐', text: 'Enfoque basado en evidencia y trazabilidad de decisiones' },
  { icon: '🗺️', text: 'Adaptación a la realidad regulatoria argentina' },
]

export default function WhyUs() {
  return (
    <section style={{ background: C.pale }}>
      <div className="section-container">

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>¿Por qué elegirnos?</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, maxWidth: 900, margin: '0 auto 64px' }} className="whyus-grid">
          {reasons.map(({ icon, text }, i) => (
            <motion.div key={text}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ x: 4 }}
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 12, background: C.white, border: `1px solid ${C.border}` }}
            >
              <span style={{ fontSize: '1.2rem', width: 38, height: 38, borderRadius: 10, flexShrink: 0, background: `rgba(74,139,223,0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
              <span style={{ fontSize: '0.9rem', color: C.dark, fontWeight: 500, lineHeight: 1.5 }}>{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 800, margin: '0 auto', background: C.white, border: `1px solid ${C.border}`, borderRadius: 20, padding: '40px 48px', textAlign: 'center', position: 'relative' }}
        >
          <span style={{ position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)', fontSize: '4rem', lineHeight: 1, background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>"</span>
          <p style={{ fontSize: '1.05rem', color: C.dark, fontWeight: 500, lineHeight: 1.8, fontStyle: 'italic' }}>
            Acompañamos a financiadores y prestadores a equilibrar calidad médica y sostenibilidad económica
            en un sistema de alta complejidad regulatoria.
          </p>
          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: C.accent }}>— Consultora M&S</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) { .whyus-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .quote-box { padding: 28px 24px !important; } }
      `}</style>
    </section>
  )
}
