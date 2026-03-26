import { motion } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const services = [
  { emoji: '🔍', title: 'Auditoría de prestaciones médicas',        desc: 'Auditoría ambulatoria e internación con criterios clínicos, normativos y económicos actualizados.' },
  { emoji: '📋', title: 'Evaluación de pertinencia médica',          desc: 'Evaluación según PMO vigente, garantizando la adecuada indicación y cobertura de cada prestación.' },
  { emoji: '✅', title: 'Calidad y pertinencia médica',              desc: 'Revisión de procesos asistenciales orientada a la mejora de estándares y seguridad del paciente.' },
  { emoji: '💰', title: 'Control de costos y gestión de desvíos',    desc: 'Identificación y corrección de desvíos en el gasto médico con foco en sostenibilidad y eficiencia.' },
  { emoji: '🧾', title: 'Auditoría de facturación y débitos',        desc: 'Control documental y financiero para garantizar transparencia y trazabilidad en los procesos de facturación.' },
  { emoji: '💊', title: 'Medicamentos y laboratorios de alto costo', desc: 'Manejo especializado de indicaciones, cobertura y seguimiento de medicamentos e insumos de alto impacto económico.' },
  { emoji: '🏥', title: 'Asesoramiento institucional',               desc: 'Asesoramiento integral a obras sociales, prepagas y clínicas para optimizar sus circuitos de auditoría.' },
  { emoji: '📊', title: 'Indicadores y mejora continua',             desc: 'Implementación de tableros de indicadores y reportes periódicos para la gestión prestacional.' },
  { emoji: '⚙️', title: 'Gestión de materiales de alto costo',      desc: 'Análisis, control y negociación en el uso de materiales e insumos de alto costo con enfoque técnico.' },
  { emoji: '🤝', title: 'Contacto con proveedores e importadores',   desc: 'Capacidad de interlocución directa con proveedores e importadores para optimizar costos y garantizar calidad.' },
]

export default function Services() {
  return (
    <section id="servicios" style={{ background: C.white, overflow: 'hidden' }}>
      <div className="section-container">

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>Nuestros Servicios</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Servicios especializados de auditoría médica para financiadores y prestadores de salud
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -10,
                boxShadow: `0 22px 48px rgba(160,0,109,0.14), 0 0 0 1.5px rgba(74,139,223,0.5)`,
                background: 'rgba(74,139,223,0.04)',
                transition: { duration: 0.25 },
              }}
              style={{
                background: C.pale,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: '24px 22px',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Shimmer on hover */}
              <motion.div
                style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'linear-gradient(105deg, transparent 40%, rgba(74,139,223,0.07) 50%, transparent 60%)',
                }}
                whileHover={{ x: ['-200%', '300%'], transition: { duration: 0.6, ease: 'easeInOut' } }}
              />

              <motion.div
                whileHover={{ scale: 1.25, rotate: 12, transition: { duration: 0.3 } }}
                style={{ fontSize: '1.75rem', marginBottom: 12, display: 'inline-block' }}
              >{s.emoji}</motion.div>

              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: C.dark, marginBottom: 8, lineHeight: 1.4 }}>{s.title}</h3>
              <p style={{ fontSize: '0.83rem', color: C.muted, lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
