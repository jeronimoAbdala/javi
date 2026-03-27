import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

function Counter({ to, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })

  useEffect(() => {
    if (!inView) return
    if (typeof to !== 'number') { setCount(to); return }
    let start = 0
    const step = 16
    const increment = to / (1800 / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) { setCount(to); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [inView, to])

  return (
    <span ref={ref} style={{ fontSize: '2rem', fontWeight: 800, background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      {typeof to === 'number' ? `${count}${suffix}` : count}
    </span>
  )
}

/* Minimalist animated DNA / helix decoration */
const HelixDecoration = () => (
  <svg
    width="80" height="320"
    viewBox="0 0 80 320"
    fill="none"
    style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', opacity: 0.18, pointerEvents: 'none' }}
    aria-hidden="true"
  >
    {/* Strand A */}
    <motion.path
      d="M40 0 C60 20 20 40 40 60 C60 80 20 100 40 120 C60 140 20 160 40 180 C60 200 20 220 40 240 C60 260 20 280 40 300 C60 320 40 320 40 320"
      stroke="url(#dnaA)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    />
    {/* Strand B */}
    <motion.path
      d="M40 0 C20 20 60 40 40 60 C20 80 60 100 40 120 C20 140 60 160 40 180 C20 200 60 220 40 240 C20 260 60 280 40 300 C20 320 40 320 40 320"
      stroke="url(#dnaB)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
    />
    {/* Rungs */}
    {[30, 60, 90, 120, 150, 180, 210, 240, 270].map((y, i) => (
      <motion.line
        key={y}
        x1="20" y1={y} x2="60" y2={y}
        stroke="url(#dnaA)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.12 + 0.6 }}
      />
    ))}
    <defs>
      <linearGradient id="dnaA" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#4A8BDF" />
        <stop offset="100%" stopColor="#A0006D" />
      </linearGradient>
      <linearGradient id="dnaB" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
        <stop offset="0%"   stopColor="#A0006D" />
        <stop offset="100%" stopColor="#4A8BDF" />
      </linearGradient>
    </defs>
  </svg>
)

const pvmCards = [
  {
    emoji: '🎯', title: 'Propósito',
    text: 'Contribuir a un sistema de salud más eficiente, transparente y centrado en el paciente, optimizando el uso de recursos sin comprometer la calidad de atención; mejorando los estándares de calidad y promoviendo la seguridad médica con una auditoría eficaz.',
    bg: 'rgba(74,139,223,0.07)', border: 'rgba(74,139,223,0.22)',
  },
  {
    emoji: '🌎', title: 'Visión',
    text: 'Ser un referente en auditoría médica y gestión sanitaria en el país, impulsando prácticas basadas en evidencia, innovación y ética profesional; que sean de utilidad para prestadores y gestores de salud, caracterizándonos por la eficacia y confiabilidad en la gestión.',
    bg: 'rgba(160,0,109,0.06)', border: 'rgba(160,0,109,0.2)',
  },
  {
    emoji: '⚙️', title: 'Misión',
    text: 'Brindar servicios de auditoría médica integrales que garanticen la calidad asistencial, la adecuada gestión de costos y el cumplimiento normativo, mediante análisis rigurosos, herramientas tecnológicas y un enfoque estratégico orientado a resultados.',
    bg: 'rgba(74,139,223,0.07)', border: 'rgba(74,139,223,0.22)',
  },
]

export default function About() {
  return (
    <section id="quienes-somos" style={{ background: C.pale, position: 'relative', overflow: 'hidden' }}>

      {/* Decorative circles */}
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '10%', left: '-60px', width: 220, height: 220,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,139,223,0.1) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', bottom: '5%', left: '30%', width: 160, height: 160,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(160,0,109,0.07) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>Conócenos</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 72, position: 'relative' }} className="about-grid">
          <motion.p
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.85 }}
          >
            Somos un grupo de médicos especialistas en Auditoría Médica con vasta pericia en el mercado,
            mediante la experiencia en el manejo de obras sociales provinciales y prepagas nacionales.
            Contamos con la experiencia necesaria para establecer diálogos, gestiones o negociaciones con
            grandes prestadores, contribuyendo a lograr objetivos claros basados en normativa científica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}
          >
            <HelixDecoration />
            <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.85 }}>
              Nuestro enfoque de la auditoría es integral mediante el trabajo en equipo multidisciplinario.
              Contamos con médicos especialistas en sectores de alto impacto como diabetología, cardiología,
              hemodinamia, neurocirugía, traumatología y cirugía general, entre otras.
            </p>
            <p style={{ fontSize: '1rem', color: C.muted, lineHeight: 1.85 }}>
              Nos especializamos en casos clínicos complejos con toma de decisiones de alto impacto,
              ofreciendo soluciones definitivas o una segunda opinión médico/auditora con informes técnicos
              y peritajes, enfoque en coherencia diagnóstica y optimización de recursos.
            </p>
          </motion.div>
        </div>

        {/* ADN title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: C.dark }}>Nuestro ADN</h3>
        </motion.div>

        {/* PVM cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 72 }} className="pvm-grid">
          {pvmCards.map(({ emoji, title, text, bg, border }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(27,58,107,0.1)', transition: { duration: 0.25 } }}
              style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, padding: '28px 24px' }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.3 } }}
                style={{ fontSize: '2rem', marginBottom: 12, display: 'inline-block' }}
              >{emoji}</motion.div>
              <h4 style={{ fontWeight: 700, fontSize: '1rem', color: C.dark, marginBottom: 10 }}>{title}</h4>
              <p style={{ fontSize: '0.875rem', color: C.muted, lineHeight: 1.75 }}>{text}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="stats-grid">
          {[
            { value: 'Nacional', label: 'Alcance en el país' },
            { value: 'Multidisciplinario', label: 'Equipo médico especializado' },
            { value: 100, suffix: '%', label: 'Enfoque ético y riguroso' },
          ].map(({ value, suffix, label }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(74,139,223,0.12)', transition: { duration: 0.2 } }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '24px 16px', background: C.white, borderRadius: 16, border: `1px solid ${C.border}` }}
            >
              <Counter to={value} suffix={suffix} />
              <span style={{ fontSize: '0.78rem', color: C.muted, fontWeight: 500, marginTop: 6 }}>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid  { grid-template-columns: 1fr !important; }
          .pvm-grid    { grid-template-columns: 1fr !important; }
          .stats-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
