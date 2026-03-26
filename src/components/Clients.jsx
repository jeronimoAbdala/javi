import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const clients = [
  { title: 'Obras sociales provinciales y nacionales', icon: '🏛️', desc: 'Brindamos auditoría de prestaciones, control de costos y gestión de desvíos con criterios normativos actualizados, optimizando el gasto sin comprometer la cobertura debida a los afiliados.' },
  { title: 'Empresas de medicina prepaga',             icon: '🏢', desc: 'Evaluación de pertinencia médica, auditoría de facturación y control de medicamentos e insumos de alto costo, con foco en la sostenibilidad financiera y calidad asistencial.' },
  { title: 'Sanatorios, clínicas y hospitales privados', icon: '🏥', desc: 'Auditoría concurrente y retrospectiva, revisión de casos complejos y control de calidad asistencial, con capacidad de interlocución técnica directa con equipos médicos y administrativos.' },
  { title: 'Gerenciadoras de salud',                   icon: '📈', desc: 'Implementación de indicadores, tableros de gestión y estrategias de mejora continua para optimizar la red prestacional y el control operativo.' },
  { title: 'ART y aseguradoras',                       icon: '🛡️', desc: 'Evaluación de pertinencia en prestaciones de alta complejidad, control de internaciones prolongadas y peritajes médicos con sustento técnico-científico.' },
  { title: 'Redes prestacionales y grupos médicos',    icon: '🤝', desc: 'Asesoramiento en estándares de calidad, criterios de autorización y circuitos de auditoría que optimicen la relación con financiadores.' },
  { title: 'Estudios jurídicos / peritajes médicos',   icon: '⚖️', desc: 'Elaboración de informes técnicos y peritajes médicos con enfoque en coherencia diagnóstica, trazabilidad de decisiones y resolución de situaciones con riesgo médico-legal.' },
]

export default function Clients() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section style={{ background: C.white }}>
      <div className="section-container">

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>Nuestros clientes potenciales</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Hacé clic en cada tipo de organización para conocer cómo los ayudamos</p>
        </motion.div>

        <div style={{ maxWidth: 780, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {clients.map(({ title, icon, desc }, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: i * 0.06 }}
                style={{
                  border: isOpen ? `1.5px solid ${C.primary}` : `1.5px solid ${C.border}`,
                  borderRadius: 14,
                  background: isOpen ? 'rgba(74,139,223,0.05)' : C.white,
                  overflow: 'hidden',
                  transition: 'border-color 0.25s, background 0.25s',
                }}
              >
                <button onClick={() => toggle(i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      fontSize: '1.3rem', width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: isOpen ? `rgba(74,139,223,0.12)` : `rgba(74,139,223,0.06)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'background 0.25s',
                    }}>{icon}</span>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', color: isOpen ? C.primary : C.dark, transition: 'color 0.2s' }}>
                      {title}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ flexShrink: 0, color: isOpen ? C.accent : C.muted, fontSize: '1.1rem' }}
                  >▾</motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 22px 20px 76px' }}>
                        <p style={{ fontSize: '0.9rem', color: C.muted, lineHeight: 1.75 }}>{desc}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
