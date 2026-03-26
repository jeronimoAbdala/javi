import { motion } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const problems = [
  { icon: '📈', text: 'Incremento del gasto médico no justificado' },
  { icon: '🛏️', text: 'Desvíos en internación prolongada' },
  { icon: '🔁', text: 'Sobreutilización de prácticas diagnósticas o terapéuticas' },
  { icon: '📝', text: 'Falta de criterios uniformes de autorización' },
  { icon: '💊', text: 'Dificultades en auditoría de medicamentos e insumos de alto costo' },
  { icon: '🧾', text: 'Debilidades en control de facturación y recupero' },
  { icon: '📊', text: 'Falta de indicadores para gestión prestacional' },
  { icon: '⚠️', text: 'Casos complejos con riesgo médico-legal o económico' },
]

export default function Problems() {
  return (
    <section style={{ background: C.pale }}>
      <div className="section-container">

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>¿Qué problemas ayudamos a resolver?</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Identificamos y resolvemos los principales desafíos de la gestión médica y financiera en salud
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }} className="problems-grid">
          {problems.map(({ icon, text }, i) => (
            <motion.div key={text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.floor(i / 2) * 0.1 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 20px', borderRadius: 12, border: `1px solid ${C.border}`, background: C.white }}
            >
              <span style={{ fontSize: '1.2rem', flexShrink: 0, width: 36, height: 36, borderRadius: 8, background: `rgba(160,0,109,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
              <span style={{ fontSize: '0.9rem', color: C.dark, fontWeight: 500, lineHeight: 1.5, paddingTop: 6 }}>{text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .problems-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
