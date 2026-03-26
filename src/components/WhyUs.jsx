import { motion } from 'framer-motion'

const PARTICLES = [
  { l: '5%',  t: '20%', s: 2,   d: 7, dl: 0   },
  { l: '95%', t: '60%', s: 3,   d: 9, dl: 2   },
  { l: '30%', t: '85%', s: 1.5, d: 5, dl: 1   },
  { l: '70%', t: '15%', s: 2.5, d: 8, dl: 3   },
  { l: '50%', t: '50%', s: 1,   d: 6, dl: 0.5 },
  { l: '15%', t: '70%', s: 3,   d: 7, dl: 2.5 },
  { l: '80%', t: '35%', s: 2,   d: 9, dl: 1.5 },
  { l: '40%', t: '10%', s: 1.5, d: 6, dl: 3.5 },
  { l: '60%', t: '78%', s: 2.5, d: 8, dl: 0.8 },
  { l: '22%', t: '45%', s: 1,   d: 7, dl: 2.2 },
]

const reasons = [
  { icon: '👨‍⚕️', text: 'Equipo médico con experiencia real en financiadores y prestadores' },
  { icon: '🔭', text: 'Visión integral: clínica, económica, normativa y operativa' },
  { icon: '💎', text: 'Expertiz en patologías y módulos de alto impacto económico' },
  { icon: '🧩', text: 'Resolución de casos complejos con enfoque técnico-científico' },
  { icon: '🤝', text: 'Capacidad de interlocución con prestadores, proveedores e importadores' },
  { icon: '📐', text: 'Enfoque basado en evidencia y trazabilidad de decisiones' },
  { icon: '🗺️', text: 'Adaptación a la realidad regulatoria argentina' },
]

export default function WhyUs() {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #050f1e 0%, #0c1e3f 40%, #150720 70%, #050f1e 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(74,139,223,0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Animated mesh blobs */}
      <div className="whyus-blob-1" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'radial-gradient(ellipse at 10% 55%, rgba(74,139,223,0.15) 0%, transparent 50%)' }} />
      <div className="whyus-blob-2" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, background: 'radial-gradient(ellipse at 90% 30%, rgba(160,0,109,0.12) 0%, transparent 48%)' }} />

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
        {PARTICLES.map((p, i) => (
          <div key={i} style={{
            position: 'absolute', left: p.l, top: p.t,
            width: p.s, height: p.s, borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(74,139,223,0.5)' : 'rgba(160,0,109,0.4)',
            animation: `particle-float ${p.d}s ease-in-out ${p.dl}s infinite`,
          }} />
        ))}
      </div>

      {/* Scanning light */}
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, zIndex: 2, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          width: '20%', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(160,0,109,0.4), rgba(74,139,223,0.35), transparent)',
          animation: 'scan-line 12s linear 1s infinite reverse',
        }} />
      </div>

      <div className="section-container" style={{ position: 'relative', zIndex: 3 }}>

        <motion.div className="section-header dark-section"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#ffffff' }}>¿Por qué elegirnos?</h2>
          <div className="section-divider" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, maxWidth: 900, margin: '0 auto 64px' }} className="whyus-grid">
          {reasons.map(({ icon, text }, i) => (
            <motion.div key={text}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '16px 20px', borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span style={{
                fontSize: '1.2rem', width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: 'rgba(74,139,223,0.18)',
                border: '1px solid rgba(74,139,223,0.32)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{icon}</span>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.82)', fontWeight: 500, lineHeight: 1.5 }}>{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: 800, margin: '0 auto',
            borderRadius: 20, padding: '40px 48px',
            textAlign: 'center', position: 'relative',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 0 80px rgba(160,0,109,0.12), 0 24px 64px rgba(0,0,0,0.35)',
          }}
        >
          <span style={{
            position: 'absolute', top: -24, left: '50%', transform: 'translateX(-50%)',
            fontSize: '4rem', lineHeight: 1,
            background: 'linear-gradient(135deg, #4A8BDF, #A0006D)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>"</span>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', fontWeight: 500, lineHeight: 1.8, fontStyle: 'italic' }}>
            Acompañamos a financiadores y prestadores a equilibrar calidad médica y sostenibilidad económica
            en un sistema de alta complejidad regulatoria.
          </p>
          <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#d070b8' }}>— Consultora M&S</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) { .whyus-grid { grid-template-columns: 1fr !important; } }
        .whyus-blob-1 { animation: mesh-drift 18s ease-in-out infinite; }
        .whyus-blob-2 { animation: mesh-drift 22s ease-in-out 5s infinite reverse; }
      `}</style>
    </section>
  )
}
