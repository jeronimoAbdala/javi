import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* Static particle positions — avoids random() on each render */
const PARTICLES = [
  { l: '8%',  t: '15%', s: 2,   d: 6, dl: 0,   c: 'rgba(74,139,223,0.6)'   },
  { l: '92%', t: '72%', s: 3,   d: 8, dl: 2,   c: 'rgba(160,0,109,0.5)'   },
  { l: '23%', t: '38%', s: 1.5, d: 5, dl: 1,   c: 'rgba(255,255,255,0.25)' },
  { l: '67%', t: '55%', s: 2.5, d: 7, dl: 3,   c: 'rgba(74,139,223,0.5)'   },
  { l: '45%', t: '82%', s: 3,   d: 9, dl: 0.5, c: 'rgba(160,0,109,0.4)'   },
  { l: '81%', t: '28%', s: 1,   d: 6, dl: 2.5, c: 'rgba(255,255,255,0.2)'  },
  { l: '12%', t: '65%', s: 2,   d: 8, dl: 1.5, c: 'rgba(74,139,223,0.45)'  },
  { l: '56%', t: '9%',  s: 3.5, d: 5, dl: 3.5, c: 'rgba(160,0,109,0.35)'  },
  { l: '34%', t: '91%', s: 1.5, d: 7, dl: 0.8, c: 'rgba(255,255,255,0.2)'  },
  { l: '78%', t: '43%', s: 2,   d: 6, dl: 2.2, c: 'rgba(74,139,223,0.55)'  },
  { l: '6%',  t: '58%', s: 3,   d: 9, dl: 1.2, c: 'rgba(160,0,109,0.45)'  },
  { l: '89%', t: '22%', s: 1,   d: 7, dl: 3.2, c: 'rgba(255,255,255,0.3)'  },
  { l: '41%', t: '76%', s: 2.5, d: 5, dl: 0.3, c: 'rgba(74,139,223,0.4)'   },
  { l: '63%', t: '47%', s: 1.5, d: 8, dl: 2.8, c: 'rgba(255,255,255,0.2)'  },
  { l: '17%', t: '88%', s: 3,   d: 6, dl: 1.8, c: 'rgba(160,0,109,0.3)'   },
  { l: '73%', t: '33%', s: 2,   d: 7, dl: 3.8, c: 'rgba(74,139,223,0.5)'   },
  { l: '29%', t: '14%', s: 1,   d: 9, dl: 0.6, c: 'rgba(255,255,255,0.25)' },
  { l: '51%', t: '69%', s: 3,   d: 5, dl: 2.6, c: 'rgba(160,0,109,0.4)'   },
  { l: '84%', t: '96%', s: 2.5, d: 6, dl: 1.6, c: 'rgba(74,139,223,0.35)'  },
  { l: '38%', t: '25%', s: 1.5, d: 8, dl: 3.6, c: 'rgba(255,255,255,0.3)'  },
]

const LogoIcon = () => (
  <svg width="52" height="52" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="16" stroke="url(#hg1)" strokeWidth="2" fill="rgba(255,255,255,0.08)" />
    <path d="M6 20L11 20L13.5 13L16.5 27L19 17L21.5 23L24 20L34 20"
      stroke="url(#hg1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <defs>
      <linearGradient id="hg1" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5fa3f7" />
        <stop offset="100%" stopColor="#d060b8" />
      </linearGradient>
    </defs>
  </svg>
)

const cv = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const iv = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const textY  = useTransform(scrollYProgress, [0, 1], [0, 80])
  const imgY   = useTransform(scrollYProgress, [0, 1], [0, -60])
  const bgY    = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={ref} id="inicio" style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #050f1e 0%, #0c1e3f 35%, #170828 65%, #050f1e 100%)',
    }}>

      {/* Layer 1 – dot grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(74,139,223,0.18) 1px, transparent 1px)',
        backgroundSize: '38px 38px',
      }} />

      {/* Layer 2 – animated mesh blobs */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
        <div className="hero-blob-1" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 12% 45%, rgba(74,139,223,0.22) 0%, transparent 52%)' }} />
        <div className="hero-blob-2" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 88% 20%, rgba(160,0,109,0.18) 0%, transparent 48%)' }} />
        <div className="hero-blob-3" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 90%, rgba(74,139,223,0.12) 0%, transparent 45%)' }} />
      </motion.div>

      {/* Layer 3 – scanning light streak */}
      <div style={{
        position: 'absolute', top: '38%', left: 0, right: 0, height: 1,
        zIndex: 2, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          width: '22%', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(74,139,223,0.5), rgba(160,0,109,0.4), transparent)',
          animation: 'scan-line 9s linear 2s infinite',
        }} />
      </div>

      {/* Layer 4 – floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
        {PARTICLES.map((p, i) => (
          <div key={i} style={{
            position: 'absolute', left: p.l, top: p.t,
            width: p.s, height: p.s, borderRadius: '50%', background: p.c,
            animation: `particle-float ${p.d}s ease-in-out ${p.dl}s infinite`,
          }} />
        ))}
      </div>

      {/* Layer 5 – parallax blobs */}
      <motion.div style={{ y: blobY1, position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(160,0,109,0.07) 0%, transparent 70%)' }} />
      </motion.div>
      <motion.div style={{ y: blobY2, position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }}>
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,139,223,0.1) 0%, transparent 70%)' }} />
      </motion.div>

      {/* Layer 6 – content */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '80px 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48,
        alignItems: 'center', minHeight: '100vh', position: 'relative', zIndex: 4,
      }} className="hero-grid">

        {/* Text column */}
        <motion.div variants={cv} initial="hidden" animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: 22, y: textY }}
        >
          <motion.div variants={iv} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LogoIcon />
            <span style={{ fontSize: '2.2rem', fontWeight: 800, background: 'linear-gradient(135deg, #5fa3f7, #d060b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Consultora M&S
            </span>
          </motion.div>

          <motion.div variants={iv}>
            <h1 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: 10 }}>
              Auditoría Médica
            </h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              {['Gestión en Salud', 'Estrategia Sanitaria'].map((tag, i) => (
                <span key={tag} style={{
                  fontSize: '0.85rem', fontWeight: 600, padding: '4px 12px', borderRadius: 20,
                  background: i === 0 ? 'rgba(74,139,223,0.2)' : 'rgba(160,0,109,0.18)',
                  color: i === 0 ? '#7ab3f0' : '#d070b8',
                  border: `1px solid ${i === 0 ? 'rgba(74,139,223,0.42)' : 'rgba(160,0,109,0.4)'}`,
                  backdropFilter: 'blur(8px)',
                }}>{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Animated accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: 1,
              background: 'linear-gradient(90deg, rgba(74,139,223,0.9), rgba(160,0,109,0.7), transparent)',
              transformOrigin: 'left', maxWidth: 400,
            }}
          />

          <motion.p variants={iv} style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', maxWidth: 500, lineHeight: 1.8 }}>
            Consultoría en auditoría médica enfocada en optimizar la calidad asistencial y la gestión de costos
            en instituciones y prestadores de salud, mediante análisis basados en evidencia, control eficiente
            y estrategias de mejora continua.
          </motion.p>

          <motion.div variants={iv} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#servicios" className="btn btn-gradient">Conocer Servicios</a>
            <a href="#contacto" className="btn" style={{
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.85)',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(10px)',
            }}>Contactar Ahora</a>
          </motion.div>

          <motion.div variants={iv} style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 4 }}>
            {[
              { dot: '#4A8BDF', label: 'Basados en evidencia' },
              { dot: '#A0006D', label: 'Equipo multidisciplinario' },
              { dot: '#4A8BDF', label: 'Mejora continua' },
            ].map(({ dot, label }) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: dot, display: 'inline-block', boxShadow: `0 0 8px ${dot}99` }} />
                {label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual – glass card */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="hero-visual"
        >
          <div style={{
            height: 480, borderRadius: 24,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(14px)',
            position: 'relative', overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}>
            {/* inner glow */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 35% 40%, rgba(74,139,223,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />

            <motion.div
              animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '18%', left: '12%', width: 80, height: 80, borderRadius: 20, background: 'rgba(74,139,223,0.15)', border: '1px solid rgba(74,139,223,0.32)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🩺</motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              style={{ position: 'absolute', top: '12%', right: '14%', width: 64, height: 64, borderRadius: 16, background: 'rgba(160,0,109,0.16)', border: '1px solid rgba(160,0,109,0.32)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem' }}>📋</motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              style={{ position: 'absolute', bottom: '20%', right: '10%', width: 72, height: 72, borderRadius: 18, background: 'rgba(74,139,223,0.12)', border: '1px solid rgba(74,139,223,0.26)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem' }}>💊</motion.div>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
                borderRadius: 20,
                padding: '28px 32px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.13)',
                maxWidth: 280,
                textAlign: 'center',
              }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, margin: '0 auto 16px', background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', boxShadow: '0 8px 28px rgba(160,0,109,0.5)' }}>🏥</div>
              <p style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff', marginBottom: 6 }}>Auditoría Integral</p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                Calidad asistencial y gestión eficiente de costos con enfoque estratégico
              </p>
              <div style={{ marginTop: 16, padding: '8px 16px', background: 'linear-gradient(135deg, rgba(74,139,223,0.2), rgba(160,0,109,0.15))', borderRadius: 8, fontSize: '0.78rem', fontWeight: 600, color: '#d070b8', border: '1px solid rgba(160,0,109,0.32)' }}>
                ✓ Ético · Riguroso · Eficaz
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid    { grid-template-columns: 1fr !important; min-height: auto !important; padding: 48px 20px !important; }
          .hero-visual  { display: none !important; }
        }
        .hero-blob-1 { animation: mesh-drift 16s ease-in-out infinite; }
        .hero-blob-2 { animation: mesh-drift 20s ease-in-out 4s infinite reverse; }
        .hero-blob-3 { animation: mesh-drift 14s ease-in-out 2s infinite; }
      `}</style>
    </section>
  )
}
