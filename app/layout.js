import Preloader from "@/layout/Preloader";
import "@css/custom.css";
import "@css/dark.css";
import "@css/main.css";
import "@css/modalboxes.css";
import "@css/plugins.css";
import { Mulish, Poppins } from "next/font/google";
import "./globals.css";
import State from "/context/context";

/** google fonts */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mulish",
  display: "swap",
});

/** Font family */
const fontFamily = `${mulish.variable} ${poppins.variable}`;

export const metadata = {
  title: "SmartDev",
  description: "En SmartDev desarrollamos software a medida: apps móviles, plataformas web y soluciones de escritorio para empresas. 🚀 Mejora tu negocio con tecnología innovadora. ¡Contáctanos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <link rel="icon" type="image/svg+xml" href="/assets/img/logo/logo.png" />
      <meta name="google-site-verification" content="3yUvASO57j8k8w49UY_dFOfKYYMl9qJPudTZARWNyrM" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WBVPR4E1ZB"></script>
      <body className={`${fontFamily} dark opened bg-[#08090c] text-white`}>
        <Preloader />
        <State>{children}</State>
      </body>
    </html>
  );
}
