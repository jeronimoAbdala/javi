import { motion } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const stages = [
  {
    number: '01', title: 'Diagnóstico inicial', color: C.primary,
    items: ['Relevamiento de circuitos de auditoría', 'Identificación de desvíos críticos', 'Detección de oportunidades de mejora'],
  },
  {
    number: '02', title: 'Intervención técnica', color: C.accent,
    items: ['Auditoría concurrente / retrospectiva / prestacional', 'Revisión de casos complejos', 'Análisis de costos, pertinencia y cumplimiento normativo'],
  },
  {
    number: '03', title: 'Seguimiento y mejora continua', color: C.primary,
    items: ['Reportes periódicos', 'Tableros de indicadores', 'Recomendaciones correctivas', 'Acompañamiento técnico a la gestión'],
  },
]

export default function HowWeWork() {
  return (
    <section style={{ background: C.white }}>
      <div className="section-container">

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>¿Cómo trabajamos?</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Un proceso estructurado en tres etapas para garantizar resultados concretos</p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 32, left: '16.66%', right: '16.66%', height: 2, background: 'linear-gradient(90deg, #4A8BDF, #A0006D, #4A8BDF)', zIndex: 0 }} className="connector-line" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, position: 'relative', zIndex: 1 }} className="stages-grid">
            {stages.map(({ number, title, color, items }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
                  <motion.div whileHover={{ scale: 1.1 }}
                    style={{ width: 64, height: 64, borderRadius: '50%', background: C.white, border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', color: color, boxShadow: `0 0 0 6px ${color}18` }}
                  >{number}</motion.div>
                </div>

                <div style={{ background: C.pale, border: `1px solid ${C.border}`, borderRadius: 16, padding: '24px 22px', borderTop: `3px solid ${color}` }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: C.dark, marginBottom: 16 }}>
                    Etapa {i + 1}. {title}
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {items.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stages-grid { grid-template-columns: 1fr !important; }
          .connector-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}
