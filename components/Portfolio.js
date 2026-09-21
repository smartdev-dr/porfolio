"use client";
import React, { useContext, useState } from "react";
import { context } from "@/context/context";
import TiltCard from "./3d/TiltCard";

const Portfolio = () => {
  const { setPortfolioModal, modalToggle } = useContext(context);
  const [filter, setFilter] = useState("all");

  const mkgPortfolio = {
    title: "Software de gestión de proyectos de construcción",
    shortTitle: "MKG Ingeniería",
    description:
      "El Software permite crear proyectos y gestionarlos de manera eficiente y sencilla. El software permite la creación de proyectos de construcción, gestión de proyectos, Inventario, Compras, Ventas, Contizacones, facturación, cuentas por cobrar.",
    client: "Mike Pichardo Santana",
    category: "Desarrollo aplicación web",
    type: "web",
    date: "Enero 2025",
    page: "https://mkg-front-main-production.up.railway.app/",
    hero: "/assets/img/portfolio/1mk.png",
    cardImg: "/assets/img/portfolio/0mk.png",
    tags: ["React", "Node.js", "PostgreSQL", "Cloud"],
    images: [
      { src: "/assets/img/portfolio/2mk.png", alt: "Dashboard" },
      { src: "/assets/img/portfolio/3mk.png", alt: "Inventario" },
      { src: "/assets/img/portfolio/4mk.png", alt: "Finanzas" },
    ],
    social: [
      {
        name: "Instagram",
        icon: "/assets/img/svg/social/instagram.svg",
        link: "https://www.instagram.com/mikrog_ingenieria/",
      },
    ],
  };

  const enterPorfolio = {
    title: "Sistema de gestión y control de acceso de personal",
    shortTitle: "ENTER Access & Control",
    description:
      "El Software permite registrar los empleados y gestionar el acceso del personal en la obra. El sistema web permite monitorear cuántos empleados hay en obra en tiempo real y gestionar permisos, visitas y pagos. La aplicación móvil permite escanear el QR del empleado para registrar entradas y salidas automáticamente.",
    client: "Edwin Marmolejos",
    category: "Plataforma Web • App Móvil • Cloud Backend",
    type: "mobile",
    date: "Enero 2025",
    page: "https://app.enter.com.do/Login",
    hero: "/assets/img/portfolio/2En.png",
    cardImg: "/assets/img/portfolio/0En.png",
    tags: ["Flutter", "Next.js", "QR Engine", "APIs"],
    images: [
      { src: "/assets/img/portfolio/1En.png", alt: "Web Portal" },
      { src: "/assets/img/portfolio/3En.png", alt: "Mobile App" },
      { src: "/assets/img/portfolio/4En.png", alt: "Control en Obra" },
    ],
    social: [],
  };

  const inverAgroPortfolio = {
    title: "Sistema de contabilidad, facturación y distribución móvil",
    shortTitle: "InverAgro ERP Móvil",
    description:
      "Plataforma completa para la gestión de contabilidad, facturación y activos empresariales. La aplicación móvil permite a los choferes y distribuidores generar facturas y cotizaciones en ruta, conectándose a impresoras láser y térmicas bluetooth.",
    client: "Aramis",
    category: "App Móvil • Backend Cloud • Facturación",
    type: "mobile",
    date: "Enero 2025",
    page: "https://app.enter.com.do/Login",
    hero: "/assets/img/portfolio/1IA.png",
    cardImg: "/assets/img/portfolio/0IA.png",
    tags: ["Mobile POS", "Bluetooth SDK", "Facturación"],
    images: [
      { src: "/assets/img/portfolio/2IA.png", alt: "Facturación Móvil" },
    ],
    social: [],
  };

  const logicpaqPortfolio = {
    title: "Logicpaq Logistics & Tracking App",
    shortTitle: "Logicpaq Courier",
    description:
      "Aplicación móvil para clientes de logística y paquetería express. Rastreo de paquetes en tiempo real, alertas de entrega, pre-alerta y gestión de pagos en línea.",
    client: "Logicpaq Dominicana",
    category: "App Móvil • Rastreo en Tiempo Real",
    type: "web",
    date: "2024",
    page: "https://do.logicpaq.com/app/",
    hero: "/assets/img/portfolio/0LP.jpg",
    cardImg: "/assets/img/portfolio/0LP.jpg",
    tags: ["Mobile", "GPS Tracking", "Pasarelas de Pago"],
    images: [{ src: "/assets/img/portfolio/0LP.jpg", alt: "Logicpaq" }],
    social: [],
  };

  const projects = [
    mkgPortfolio,
    enterPorfolio,
    inverAgroPortfolio,
    logicpaqPortfolio,
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <section
      className="kura_tm_section w-full py-24 relative overflow-hidden bg-[#090a0f]"
      id="portfolio"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4522]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4522]/10 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
              Casos de Éxito • Proyectos Reales
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Software que impulsa empresas
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-[#ff4522] text-white shadow-[0_0_15px_rgba(255,69,34,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Todos ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("web")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === "web"
                  ? "bg-[#ff4522] text-white shadow-[0_0_15px_rgba(255,69,34,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Web Platforms
            </button>
            <button
              type="button"
              onClick={() => setFilter("mobile")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === "mobile"
                  ? "bg-[#ff4522] text-white shadow-[0_0_15px_rgba(255,69,34,0.4)]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Apps Móviles
            </button>
          </div>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <TiltCard
              key={idx}
              maxTilt={7}
              className="bg-zinc-900/70 border border-zinc-800 hover:border-[#ff4522]/50 p-6 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Project Image View */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-black border border-zinc-800/80">
                  <img
                    src={project.cardImg || project.hero}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[11px] font-semibold bg-black/75 backdrop-blur-md border border-zinc-700 text-zinc-300">
                    {project.category}
                  </span>

                  {/* Client name pill */}
                  <span className="absolute top-3 right-3 text-[11px] font-mono text-[#ff8066] bg-[#ff4522]/20 px-2.5 py-1 rounded-md border border-[#ff4522]/40 backdrop-blur-md">
                    {project.date}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags?.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 border border-zinc-700/60"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#ff4522] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 line-clamp-3 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80">
                <button
                  type="button"
                  onClick={() => {
                    modalToggle(true);
                    setPortfolioModal(project);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#ff4522] transition-colors"
                >
                  <span>Explorar Detalles</span>
                  <span className="text-lg">→</span>
                </button>

                {project.page && (
                  <a
                    href={project.page}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-[#ff4522] text-zinc-300 hover:text-white text-xs font-semibold transition-all border border-zinc-700 hover:border-[#ff4522]"
                  >
                    <span>Ver Demo</span>
                    <span className="text-xs">↗</span>
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* GitHub / More Projects Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-[#ff4522]/10 to-zinc-900/90 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              ¿Quieres conocer más soluciones y código fuente?
            </h4>
            <p className="text-sm text-zinc-400">
              Visita nuestro ecosistema de repositorios y proyectos abiertos en GitHub.
            </p>
          </div>
          <a
            href="https://github.com/smartdev-dr"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 shadow-lg hover:scale-105"
          >
            <span>Explorar GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
