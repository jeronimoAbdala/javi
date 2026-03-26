import { useState } from 'react'
import { motion } from 'framer-motion'

const C = { pale: '#EFFAFD', primary: '#4A8BDF', accent: '#A0006D', dark: '#1B3A6B', muted: '#4A6890', border: '#C8DEFA', white: '#FFFFFF' }

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const team = [
  { initials: 'MJ', name: 'Dr. Miara Jonathan', role: 'Director', phone: '354 – 8468381', wa: '543548468381', color: 'linear-gradient(135deg, #4A8BDF, #3A7BCF)' },
  { initials: 'SJ', name: 'Dr. Sbaffo Javier',  role: 'Director', phone: '351 – 5148738', wa: '543515148738', color: 'linear-gradient(135deg, #A0006D, #C0007F)' },
]

const inputBase = { padding: '10px 14px', border: `1.5px solid ${C.border}`, borderRadius: 8, fontSize: '0.875rem', fontFamily: 'inherit', color: C.dark, outline: 'none', background: C.white, width: '100%', transition: 'border-color 0.2s, box-shadow 0.2s' }
const focus = (e) => { e.target.style.borderColor = C.primary; e.target.style.boxShadow = `0 0 0 3px rgba(74,139,223,0.12)` }
const blur  = (e) => { e.target.style.borderColor = C.border;   e.target.style.boxShadow = 'none' }

function Field({ label, required, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: C.dark }}>
        {label} {required && <span style={{ color: C.accent }}>*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3000)
  }

  return (
    <section id="contacto" style={{ background: C.white }}>
      <div className="section-container">

        <motion.div className="section-header"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}
        >
          <h2>Contacto</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Estamos listos para ayudarte</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="contact-grid">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: C.pale, border: `1px solid ${C.border}`, borderRadius: 20, padding: 40 }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: C.dark, marginBottom: 6 }}>Solicitar Consulta</h3>
            <p style={{ fontSize: '0.875rem', color: C.muted, marginBottom: 28 }}>Complete el formulario y nos pondremos en contacto con usted</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <Field label="Nombre Completo" required><input type="text" placeholder="Su nombre completo" required style={inputBase} onFocus={focus} onBlur={blur} /></Field>
                <Field label="Email" required><input type="email" placeholder="su@email.com" required style={inputBase} onFocus={focus} onBlur={blur} /></Field>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <Field label="Teléfono"><input type="tel" placeholder="+54 351 000-0000" style={inputBase} onFocus={focus} onBlur={blur} /></Field>
                <Field label="Organización"><input type="text" placeholder="Nombre de su organización" style={inputBase} onFocus={focus} onBlur={blur} /></Field>
              </div>
              <Field label="Mensaje" required>
                <textarea rows={4} placeholder="Describa brevemente sus necesidades de auditoría médica..." required style={{ ...inputBase, resize: 'vertical' }} onFocus={focus} onBlur={blur} />
              </Field>

              <motion.button type="submit" className="btn btn-gradient" whileTap={{ scale: 0.97 }}
                style={{ width: '100%', padding: '14px', fontSize: '1rem', borderRadius: 10, background: sent ? 'linear-gradient(135deg, #22C55E, #16A34A)' : undefined }}
              >{sent ? '¡Consulta enviada!' : 'Enviar Consulta'}</motion.button>
              <p style={{ fontSize: '0.75rem', color: C.muted, textAlign: 'center' }}>* Campos obligatorios. Su información será tratada de forma confidencial.</p>
            </form>
          </motion.div>

          {/* Team + email */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <div style={{ background: C.pale, border: `1px solid ${C.border}`, borderRadius: 20, padding: 32 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: C.dark, marginBottom: 6 }}>Nuestro Equipo</h3>
              <p style={{ fontSize: '0.875rem', color: C.muted, marginBottom: 24 }}>Contáctese directamente con nuestros especialistas</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {team.map(({ initials, name, role, phone, wa, color }, i) => (
                  <motion.div key={name}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 + 0.2 }}
                    whileHover={{ x: 4 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', border: `1px solid ${C.border}`, borderRadius: 14, background: C.white }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: color, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>{initials}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: 700, fontSize: '0.9rem', color: C.dark }}>{name}</p>
                      <p style={{ fontSize: '0.78rem', color: C.accent, fontWeight: 600 }}>{role}</p>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', color: C.muted, marginTop: 2 }}><PhoneIcon />{phone}</span>
                    </div>
                    <motion.a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer"
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                      style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, flexShrink: 0, textDecoration: 'none' }}
                    ><WaIcon /></motion.a>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a href="mailto:consultoraauditoriaMS@gmail.com"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -3, boxShadow: `0 8px 24px rgba(74,139,223,0.15)` }}
              style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', borderRadius: 16, background: C.pale, border: `1px solid ${C.border}`, textDecoration: 'none' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #4A8BDF, #A0006D)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.white, flexShrink: 0 }}><MailIcon /></div>
              <div>
                <p style={{ fontSize: '0.78rem', color: C.muted, fontWeight: 500 }}>Correo electrónico</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: C.dark }}>consultoraauditoriaMS@gmail.com</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
