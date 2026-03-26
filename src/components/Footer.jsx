import { motion } from 'framer-motion'

const C = { primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', border: '#C8DEFA', white: '#FFFFFF' }

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ duration: 0.6 }}
      style={{ background: C.dark, color: 'rgba(255,255,255,0.7)', padding: '32px 24px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: C.white }}>Consultora M&S</span>
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)' }}>Auditoría Médica</span>
        </div>

        <p style={{ fontSize: '0.85rem' }}>© 2025 Consultora M&S. Todos los derechos reservados.</p>

        <div style={{ display: 'flex', gap: 20 }}>
          {['#inicio', '#servicios', '#contacto'].map((href, i) => (
            <a key={href} href={href} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = C.white}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >{['Inicio', 'Servicios', 'Contacto'][i]}</a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
