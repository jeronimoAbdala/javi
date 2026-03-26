const express  = require('express');
const path     = require('path');
const nodemailer = require('nodemailer');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// ─── Contact endpoint ────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { nombre, email, telefono, organizacion, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // tu cuenta Gmail remitente
      pass: process.env.GMAIL_PASS, // App Password de Google (no tu contraseña normal)
    },
  });

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1B3A6B; border-bottom: 3px solid #4A8BDF; padding-bottom: 8px;">
        Nueva consulta — Consultora M&S
      </h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #4A6890; width: 160px;"><strong>Nombre:</strong></td>    <td style="padding: 8px 0;">${nombre}</td></tr>
        <tr><td style="padding: 8px 0; color: #4A6890;"><strong>Email:</strong></td>      <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding: 8px 0; color: #4A6890;"><strong>Teléfono:</strong></td>   <td style="padding: 8px 0;">${telefono || '—'}</td></tr>
        <tr><td style="padding: 8px 0; color: #4A6890;"><strong>Organización:</strong></td><td style="padding: 8px 0;">${organizacion || '—'}</td></tr>
      </table>
      <div style="margin-top: 16px; background: #EFFAFD; border-left: 4px solid #A0006D; padding: 16px; border-radius: 0 8px 8px 0;">
        <p style="color: #4A6890; margin: 0 0 6px;"><strong>Mensaje:</strong></p>
        <p style="color: #1B3A6B; margin: 0; white-space: pre-wrap;">${mensaje}</p>
      </div>
      <p style="margin-top: 24px; font-size: 12px; color: #94A3B8;">
        Este mensaje fue enviado desde el formulario de contacto de consultorams.com
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Consultora M&S Web" <${process.env.GMAIL_USER}>`,
      to:   'jeroabdalala@gmail.com',
      replyTo: email,
      subject: `Nueva consulta de ${nombre}`,
      html,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Error enviando email:', err.message);
    res.status(500).json({ error: 'No se pudo enviar el mensaje. Intentá de nuevo.' });
  }
});

// ─── SPA fallback ─────────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
