import { motion } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const propostas = [
  { icon: '🎯', text: 'Enfoque técnico-estratégico con mejora continua' },
  { icon: '📊', text: 'Decisiones basadas en datos' },
  { icon: '💡', text: 'Optimización de costos sin afectar la calidad' },
  { icon: '📜', text: 'Adaptación a normativas locales y nacionales' },
]

const valores = [
  { icon: '⚖️', label: 'Ética profesional' },
  { icon: '🔍', label: 'Transparencia' },
  { icon: '🔬', label: 'Rigor científico' },
  { icon: '🔒', label: 'Confidencialidad' },
  { icon: '🔄', label: 'Mejora continua' },
  { icon: '⚡', label: 'Respuesta ágil y eficaz' },
]

export default function ValueProps() {
  return (
    <section style={{ background: C.pale }}>
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="vp-grid">

          {/* Propuesta de valor */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: C.dark, marginBottom: 8 }}>Propuesta de valor</h2>
            <div style={{ width: 50, height: 4, background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', borderRadius: 2, marginBottom: 28 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {propostas.map(({ icon, text }, i) => (
                <motion.div key={text}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: C.white, borderRadius: 12, border: `1px solid ${C.border}` }}
                >
                  <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: '0.925rem', color: C.dark, fontWeight: 500 }}>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h2 style={{ fontSize: '1.7rem', fontWeight: 800, color: C.dark, marginBottom: 8 }}>Valores que nos caracterizan</h2>
            <div style={{ width: 50, height: 4, background: 'linear-gradient(135deg, #A0006D, #4A8BDF)', borderRadius: 2, marginBottom: 28 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {valores.map(({ icon, label }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -3 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', borderRadius: 12, background: C.white, border: `1px solid ${C.border}` }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{icon}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: C.dark }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .vp-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  )
}
