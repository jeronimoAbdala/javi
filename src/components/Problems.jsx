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
    <section style={{ background: C.pale, overflow: 'hidden' }}>
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
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: Math.floor(i / 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                x: i % 2 === 0 ? 4 : -4,
                boxShadow: '0 8px 28px rgba(160,0,109,0.1)',
                transition: { duration: 0.2 },
              }}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '16px 20px', borderRadius: 12,
                border: `1px solid ${C.border}`,
                background: C.white,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Left accent bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.floor(i / 2) * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                  background: 'linear-gradient(180deg, #4A8BDF, #A0006D)',
                  transformOrigin: 'top',
                }}
              />

              <motion.span
                whileHover={{ scale: 1.2, rotate: 8, transition: { duration: 0.25 } }}
                style={{
                  fontSize: '1.2rem', flexShrink: 0, width: 38, height: 38,
                  borderRadius: 9, background: 'rgba(160,0,109,0.09)',
                  border: '1px solid rgba(160,0,109,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >{icon}</motion.span>

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
