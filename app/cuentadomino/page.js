"use client";

// import { FaApple, FaGooglePlay } from "react-icons/fa";

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f0f0f",
    color: "#e5e5e5",
    fontFamily: "sans-serif",
  },
  heroSection: {
    position: "relative",
    backgroundColor: "#1a1a1a",
    boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
  },
  heroImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    filter: "brightness(0.4)",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    color: "#ffffff",
    fontSize: "2.8rem",
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 60,
  },
  section: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "60px 20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#ffffff",
  },
  sectionText: {
    fontSize: "1.125rem",
    color: "#c0c0c0",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
    marginTop: "40px",
  },
  card: {
    backgroundColor: "#1f1f1f",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    textAlign: "left",
    transition: "transform 0.2s ease",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#ffffff",
  },
  cardText: {
    color: "#b5b5b5",
  },
  storeSection: {
    backgroundColor: "#161616",
    padding: "60px 20px",
  },
  storeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  storeCard: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #333",
    borderRadius: "10px",
    backgroundColor: "#1c1c1c",
    boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
    transition: "transform 0.2s ease, background 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  },
  icon: {
    fontSize: "2rem",
    marginRight: "16px",
    height:50
  },
  storeText: {
    fontWeight: "600",
    fontSize: "1.125rem",
    color: "#ffffff",
  },
  storeSub: {
    fontSize: "0.9rem",
    color: "#a1a1a1",
  },
};

export default function AboutPage() {
  return (
    <div style={styles.container}>
      {/* Hero */}
      <section style={styles.heroSection}>
        <img
          src="/assets/img/thumbs/Partida.png"
          alt="Cuenta Dominó Hero"
          style={styles.heroImage}
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Cuenta Dominó</h1>
        </div>
      </section>

      {/* Descripción */}
      <section style={styles.section}>
        <img src="/assets/img/logo/cuentadomino.png" style={styles.logo} />
        <h2 style={styles.sectionTitle}>
          Lleva el control de tu partida de dominó como nunca antes
        </h2>
        <p style={styles.sectionText}>
          <strong>Cuenta Dominó</strong> es la app ideal para todos los
          fanáticos del dominó. Con funciones diseñadas para hacer tu
          experiencia de juego más organizada y divertida, puedes registrar
          puntajes automáticamente, mantener el historial de tus partidas y
          contar las fichas restantes con facilidad.
        </p>

        {/* Funcionalidades */}
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>✔ Lleva la cuenta del puntaje</h3>
            <p style={styles.cardText}>
              Registra cada punto de forma automática y visual.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>✔ Historial de partidas</h3>
            <p style={styles.cardText}>
              Revisa tus juegos anteriores y mejora tu estrategia.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>✔ Conteo automático de dominós</h3>
            <p style={styles.cardText}>
              La app te dice cuántas fichas quedan en la mesa con solo unos
              toques.
            </p>
          </div>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>✔ Cuenta entre varias personas</h3>
            <p style={styles.cardText}>
              Juega con amigos y lleva el control de forma compartida.
            </p>
          </div>
        </div>
      </section>

      {/* Tiendas */}
      <section style={styles.storeSection}>
        <div style={styles.storeGrid}>
          <a
            href="https://apps.apple.com/us/app/cuenta-domino/id6745344491"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.storeCard}
          >
            {/* <FaApple style={{ ...styles.icon, color: "#ffffff" }} /> */}
            <img src="/assets/img/thumbs/icon_appstore__ev0z770zyxoy_large_2x.png" style={styles.icon} />
            <div>
              <div style={styles.storeText}>Descargar en App Store</div>
              <div style={styles.storeSub}>Compatible con iOS</div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.cuentadomino"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.storeCard}
          >
            <img src="/assets/img/thumbs/Google-Play-Logo.png" style={styles.icon} />
            {/* <FaGooglePlay style={{ ...styles.icon, color: "#34d399" }} /> */}
            <div>
              <div style={styles.storeText}>Descargar en Google Play</div>
              <div style={styles.storeSub}>Compatible con Android</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
