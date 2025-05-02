// pages/soporte.tsx
import React from 'react';
import Head from 'next/head';

export default function Soporte() {
  return (
    <>
      <Head>
        <title>Soporte | Cuentadomino</title>
        <meta name="description" content="Ayuda y soporte técnico para la app Cuentadomino de SmartDev." />
      </Head>

      <main style={styles.main}>
        <div style={styles.card}>
          <h1 style={styles.title}>Soporte de Cuentadomino</h1>
          <p style={styles.subtitle}>
            Encuentra ayuda, preguntas frecuentes y cómo contactarnos si tienes algún problema con la app.
          </p>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Preguntas Frecuentes</h2>
            <ul style={styles.list}>
              <li>¿Cómo escaneo las fichas? — Abre la cámara desde la app y enfoca las fichas.</li>
              <li>¿Puedo compartir el puntaje? — Sí, varias personas pueden verlo y editarlo en tiempo real.</li>
              <li>¿La app guarda las partidas? — Sí, todas las partidas quedan guardadas sin límite.</li>
              <li>¿Necesito internet? — No, puedes usarla completamente sin conexión.</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Contacto por correo</h2>
            <p>¿Necesitas ayuda directa? Escríbenos:</p>
            <a href="mailto:soporte@smartdev.com.do" style={styles.link}>
              soporte@smartdev.com.do
            </a>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Soporte por WhatsApp</h2>
            <p>También puedes contactarnos vía WhatsApp:</p>
            <a
              href="https://wa.me/18295551234"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsappButton}
            >
              Chatear por WhatsApp
            </a>
          </section>

          <footer style={styles.footer}>
            © {new Date().getFullYear()} SmartDev. Todos los derechos reservados.
          </footer>
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '32px',
    maxWidth: '700px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '12px',
    color: '#4f46e5',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '24px',
  },
  section: {
    marginBottom: '24px',
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#333',
  },
  list: {
    paddingLeft: '20px',
    color: '#444',
    lineHeight: '1.6',
  },
  link: {
    display: 'inline-block',
    marginTop: '8px',
    color: '#4f46e5',
    textDecoration: 'none',
    fontWeight: 500,
  },
  whatsappButton: {
    display: 'inline-block',
    marginTop: '10px',
    backgroundColor: '#25D366',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: '32px',
    fontSize: '0.85rem',
    color: '#888',
  },
};
