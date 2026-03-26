import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L36 34H4L20 4Z" stroke="url(#ng1)" strokeWidth="2.5" fill="none" />
    <path d="M20 12L28 28H12L20 12Z" fill="url(#ng1)" opacity="0.3" />
    <path d="M15 22L20 12L25 22" stroke="url(#ng1)" strokeWidth="2" fill="none" />
    <defs>
      <linearGradient id="ng1" x1="4" y1="4" x2="36" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4A8BDF" />
        <stop offset="100%" stopColor="#A0006D" />
      </linearGradient>
    </defs>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Inicio',        href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Servicios',     href: '#servicios' },
    { label: 'Contacto',      href: '#contacto' },
  ]

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        borderBottom: `1px solid ${C.border}`,
        background: scrolled ? 'rgba(239,250,253,0.9)' : C.white,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(74,139,223,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          height: scrolled ? 56 : 64,
          display: 'flex', alignItems: 'center', gap: 32,
          transition: 'height 0.3s ease',
        }}>
          <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <LogoIcon />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{ fontWeight: 700, fontSize: '1rem', color: C.dark }}>Consultora M&S</span>
              <span style={{ fontWeight: 400, fontSize: '0.68rem', color: C.muted }}>Auditoría Médica</span>
            </div>
          </a>

          <ul style={{ display: 'flex', listStyle: 'none', gap: 28, flex: 1, justifyContent: 'center', margin: 0, padding: 0 }} className="nav-links-desktop">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{ textDecoration: 'none', color: C.dark, fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = C.accent}
                  onMouseLeave={e => e.target.style.color = C.dark}
                >{l.label}</a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }} className="nav-ctas-desktop">
            <a href="#" className="btn btn-outline" style={{ padding: '8px 18px' }}>Acceso Clientes</a>
            <a href="#contacto" className="btn btn-primary" style={{ padding: '8px 18px' }}>Consultar Ahora</a>
          </div>

          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginLeft: 'auto' }}
            className="hamburger-btn"
            aria-label="Menú"
          >
            {[0, 1, 2].map(i => (
              <motion.span key={i}
                animate={menuOpen
                  ? i === 0 ? { rotate: 45, y: 7 }
                  : i === 1 ? { opacity: 0 }
                  : { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0, opacity: 1 }
                }
                style={{ display: 'block', width: 22, height: 2, background: C.dark, borderRadius: 2 }}
              />
            ))}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ position: 'sticky', top: 56, zIndex: 99, background: 'rgba(239,250,253,0.97)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.border}`, overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: 12 }}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: 'none', color: C.dark, fontWeight: 500, fontSize: '0.95rem' }}
                >{l.label}</a>
              ))}
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a href="#" className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>Acceso Clientes</a>
                <a href="#contacto" className="btn btn-primary" onClick={() => setMenuOpen(false)} style={{ flex: 1, justifyContent: 'center' }}>Consultar Ahora</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop, .nav-ctas-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
