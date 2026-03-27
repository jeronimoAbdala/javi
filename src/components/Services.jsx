import { motion } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const services = [
  { emoji: '🔍', title: 'Auditoría de prestaciones médicas',       desc: 'Auditoría ambulatoria e internación con criterios clínicos, normativos y económicos actualizados.' },
  { emoji: '📋', title: 'Evaluación de pertinencia médica',         desc: 'Evaluación según PMO vigente, garantizando la adecuada indicación y cobertura de cada prestación.' },
  { emoji: '✅', title: 'Calidad y pertinencia médica',             desc: 'Revisión de procesos asistenciales orientada a la mejora de estándares y seguridad del paciente.' },
  { emoji: '💰', title: 'Control de costos y gestión de desvíos',   desc: 'Identificación y corrección de desvíos en el gasto médico con foco en sostenibilidad y eficiencia.' },
  { emoji: '🧾', title: 'Auditoría de facturación y débitos',       desc: 'Control documental y financiero para garantizar transparencia y trazabilidad en los procesos de facturación.' },
  { emoji: '💊', title: 'Medicamentos y laboratorios de alto costo', desc: 'Manejo especializado de indicaciones, cobertura y seguimiento de medicamentos e insumos de alto impacto económico.' },
  { emoji: '🏥', title: 'Asesoramiento institucional',              desc: 'Asesoramiento integral a obras sociales, prepagas y clínicas para optimizar sus circuitos de auditoría.' },
  { emoji: '📊', title: 'Indicadores y mejora continua',            desc: 'Implementación de tableros de indicadores y reportes periódicos para la gestión prestacional.' },
  { emoji: '⚙️', title: 'Gestión de materiales de alto costo',     desc: 'Análisis, control y negociación en el uso de materiales e insumos de alto costo con enfoque técnico.' },
  { emoji: '🤝', title: 'Contacto con proveedores e importadores',  desc: 'Capacidad de interlocución directa con proveedores e importadores para optimizar costos y garantizar calidad.' },
]

export default function Services() {
  return (
    <section id="servicios" style={{ background: C.white }}>
      <div className="section-container">

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>Nuestros Servicios</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            ¿Qué servicios ofrecemos?
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: `0 12px 32px rgba(160,0,109,0.1)` }}
              style={{ background: C.pale, border: `1px solid ${C.border}`, borderRadius: 14, padding: '24px 22px', cursor: 'default', transition: 'box-shadow 0.2s' }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: 12 }}>{s.emoji}</div>
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
