import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const LogoIcon = () => (
  <svg width="52" height="52" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L36 34H4L20 4Z" stroke="url(#hg1)" strokeWidth="2.5" fill="none" />
    <path d="M20 12L28 28H12L20 12Z" fill="url(#hg1)" opacity="0.3" />
    <path d="M15 22L20 12L25 22" stroke="url(#hg1)" strokeWidth="2" fill="none" />
    <defs>
      <linearGradient id="hg1" x1="4" y1="4" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4A8BDF" />
        <stop offset="100%" stopColor="#A0006D" />
      </linearGradient>
    </defs>
  </svg>
)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const blobY3 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const textY  = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imgY   = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={ref} id="inicio" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', background: C.white }}>

      {/* Parallax blobs */}
      <motion.div style={{ y: blobY1, position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(160,0,109,0.08) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div style={{ y: blobY2, position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,139,223,0.1) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div style={{ y: blobY3, position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,139,223,0.07) 0%, transparent 70%)' }} />
      </motion.div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', minHeight: '100vh', position: 'relative', zIndex: 1 }} className="hero-grid">

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: 22, y: textY }}
        >
          <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LogoIcon />
            <span style={{ fontSize: '2.2rem', fontWeight: 800, background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Consultora M&S
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: C.dark, lineHeight: 1.2, marginBottom: 10 }}>
              Auditoría Médica
            </h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              {['Gestión en Salud', 'Estrategia Sanitaria'].map((tag, i) => (
                <span key={tag} style={{
                  fontSize: '0.85rem', fontWeight: 600, padding: '4px 12px', borderRadius: 20,
                  background: i === 0 ? 'rgba(74,139,223,0.1)' : 'rgba(160,0,109,0.09)',
                  color: i === 0 ? C.primary : C.accent,
                  border: `1px solid ${i === 0 ? 'rgba(74,139,223,0.3)' : 'rgba(160,0,109,0.25)'}`,
                }}>{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.p variants={itemVariants} style={{ fontSize: '1rem', color: C.muted, maxWidth: 500, lineHeight: 1.8 }}>
            Consultoría en auditoría médica enfocada en optimizar la calidad asistencial y la gestión de costos
            en instituciones y prestadores de salud, mediante análisis basados en evidencia, control eficiente
            y estrategias de mejora continua.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#servicios" className="btn btn-gradient">Conocer Servicios</a>
            <a href="#contacto" className="btn btn-outline-dark">Contactar Ahora</a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 4 }}>
            {[
              { dot: C.primary, label: 'Basados en evidencia' },
              { dot: C.accent,  label: 'Equipo multidisciplinario' },
              { dot: C.primary, label: 'Mejora continua' },
            ].map(({ dot, label }) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: C.muted, fontWeight: 500 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: dot, display: 'inline-block' }} />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="hero-visual"
        >
          <div style={{ height: 480, borderRadius: 24, background: C.pale, border: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <motion.div animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '18%', left: '12%', width: 80, height: 80, borderRadius: 20, background: `rgba(74,139,223,0.15)`, border: `1px solid rgba(74,139,223,0.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🩺</motion.div>

            <motion.div animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              style={{ position: 'absolute', top: '12%', right: '14%', width: 64, height: 64, borderRadius: 16, background: `rgba(160,0,109,0.1)`, border: `1px solid rgba(160,0,109,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem' }}>📋</motion.div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              style={{ position: 'absolute', bottom: '20%', right: '10%', width: 72, height: 72, borderRadius: 18, background: `rgba(74,139,223,0.12)`, border: `1px solid rgba(74,139,223,0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>💊</motion.div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: C.white, borderRadius: 20, padding: '28px 32px', boxShadow: `0 20px 60px rgba(160,0,109,0.12)`, border: `1px solid ${C.border}`, maxWidth: 280, textAlign: 'center' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, margin: '0 auto 16px', background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem' }}>🏥</div>
              <p style={{ fontWeight: 700, fontSize: '1rem', color: C.dark, marginBottom: 6 }}>Auditoría Integral</p>
              <p style={{ fontSize: '0.8rem', color: C.muted, lineHeight: 1.6 }}>
                Calidad asistencial y gestión eficiente de costos con enfoque estratégico
              </p>
              <div style={{ marginTop: 16, padding: '8px 16px', background: 'linear-gradient(135deg, rgba(74,139,223,0.1), rgba(160,0,109,0.08))', borderRadius: 8, fontSize: '0.78rem', fontWeight: 600, color: C.accent }}>
                ✓ Ético · Riguroso · Eficaz
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; padding: 48px 20px !important; }
          .hero-visual { display: none !important; }
        }
      `}</style>
    </section>
  )
}
