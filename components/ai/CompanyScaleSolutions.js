"use client";
import React, { useState } from "react";
import TiltCard from "../3d/TiltCard";

const tiers = [
  {
    id: "pymes",
    badge: "Para Pequeñas Empresas & Startups",
    title: "Automatización Rápida & Ventas con IA",
    subtitle: "Comienza a generar resultados desde la primera semana sin costos astronómicos.",
    image: "/assets/img/service/smartdev_pymes_scale_3d.jpg",
    imageTag: "POS 3D • WHATSAPP AGENT • CONTROL",
    imageDesc: "Terminal inteligente de facturación con agente de WhatsApp y métricas en tiempo real.",
    painPoint:
      "Equipos reducidos desbordados por tareas manuales: responder mensajes repetitivos en WhatsApp, enviar cotizaciones manuales y llevar el control en libretas o notas sueltas.",
    solutions: [
      {
        icon: "💬",
        title: "Agente IA en WhatsApp 24/7",
        desc: "Atiende clientes, responde preguntas de catálogo, califica leads y agenda citas en tiempo real.",
      },
      {
        icon: "⚡",
        title: "Generador de Cotizaciones Automático",
        desc: "Transforma mensajes de clientes en cotizaciones formales en PDF listas para enviar en 15 segundos.",
      },
      {
        icon: "📊",
        title: "Software Básico de Control en la Nube",
        desc: "Accede a tus ventas, clientes y caja desde tu teléfono o computadora de forma segura.",
      },
      {
        icon: "🔄",
        title: "Automatización de Tareas Repetitivas",
        desc: "Conexión automática entre correos, formularios y hojas de cálculo para ahorrar hasta 20 horas semanales.",
      },
    ],
    kpi: "Ahorra 15 a 25 horas semanales de trabajo manual",
    cta: "Consultar Solución para PyMEs",
  },
  {
    id: "medianas",
    badge: "Para Medianas Empresas en Expansión",
    title: "Integración de IA en tus Procesos & ERP Existente",
    subtitle: "Multiplica la productividad de tu equipo operativo sin reemplazar tu software actual.",
    image: "/assets/img/service/smartdev_ai_agents_3d.jpg",
    imageTag: "AUTONOMOUS AGENTS • ERP INTEGRATION",
    imageDesc: "Agentes autónomos de datos sincronizados con ERP, facturación y operaciones en campo.",
    painPoint:
      "Sistemas heredados desconectados, dispersión de datos en múltiples hojas de cálculo y personal en campo (choferes, obras, ventas) sin herramientas digitales en tiempo real.",
    solutions: [
      {
        icon: "🔌",
        title: "Capa de Inteligencia sobre tu ERP",
        desc: "Conectamos IA a tu sistema actual (SAP, Odoo, SQL, Excel) para extraer reportes y alertas inteligentes sin migrar de software.",
      },
      {
        icon: "📱",
        title: "Apps Móviles para Operación en Calle",
        desc: "Desarrollo de apps para choferes, cobros en ruta con Bluetooth, control de acceso y escaneo de inventario (como ENTER e InverAgro).",
      },
      {
        icon: "📄",
        title: "Visión por Computadora & OCR Inteligente",
        desc: "Lectura automática de facturas de proveedores, órdenes de compra y recibos sin digitación manual.",
      },
      {
        icon: "📈",
        title: "Predicción de Demanda e Inventario",
        desc: "Modelos de Machine Learning que anticipan qué productos necesitas comprar para evitar quiebres de stock.",
      },
    ],
    kpi: "Reduce hasta un 65% el tiempo de procesamiento de órdenes",
    cta: "Consultar Integración para Medianas Empresas",
  },
  {
    id: "corporativos",
    badge: "Para Grandes Empresas & Corporaciones",
    title: "Modelos Privados RAG, Soberanía & Alta Concurrencia",
    subtitle: "Infraestructura de IA privada y arquitecturas en la nube con seguridad de grado bancario.",
    image: "/assets/img/service/smartdev_rag_search_3d.jpg",
    imageTag: "ENTERPRISE RAG • VECTOR DATABASE",
    imageDesc: "Búsqueda semántica sobre repositorios documentales masivos con citación verificada.",
    painPoint:
      "Miles de documentos confidenciales difíciles de auditar, altos costos de soporte interno, procesos burocráticos y necesidad estricta de privacidad (Zero-Data Leakage).",
    solutions: [
      {
        icon: "🛡️",
        title: "Sistemas RAG Privados (Knowledge Base)",
        desc: "Un copiloto de IA entrenado exclusivamente con las políticas, contratos y manuales de tu corporación con citación verificable de fuentes.",
      },
      {
        icon: "☁️",
        title: "Nubes Privadas & Zero Data Retention",
        desc: "Tus datos nunca se utilizan para entrenar modelos públicos. Despliegues en VPC privada en AWS o servidores locales.",
      },
      {
        icon: "⚡",
        title: "Arquitectura de Microservicios 99.99%",
        desc: "Sistemas de alta concurrencia diseñados para soportar millones de transacciones por segundo con tolerancia a fallos.",
      },
      {
        icon: "🔐",
        title: "Auditoría de Seguridad & Compliance",
        desc: "Cifrado de extremo a extremo, control de roles granular y registro inmutable de acciones para auditorías regulatorias.",
      },
    ],
    kpi: "Consultas documentales complejas en < 2 segundos",
    cta: "Consultar Solución Corporativa",
  },
];

export default function CompanyScaleSolutions() {
  const [activeTab, setActiveTab] = useState("medianas");

  const currentTier = tiers.find((t) => t.id === activeTab) || tiers[0];

  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-[#090a0f] border-t border-zinc-800/60"
      id="soluciones"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#ff4522]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Soluciones Reales de Software & IA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Diseñadas exactamente para la escala de tu empresa
          </h2>
          <p className="text-base text-zinc-400">
            No creemos en soluciones genéricas. Adaptamos la tecnología, el alcance y los modelos de IA según el tamaño de tu operación y el retorno de inversión que necesitas generar.
          </p>
        </div>

        {/* Tier Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              type="button"
              onClick={() => setActiveTab(tier.id)}
              className={`px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border flex items-center gap-2.5 ${
                activeTab === tier.id
                  ? "bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] border-[#ff4522] text-white shadow-[0_0_25px_rgba(255,69,34,0.4)] scale-105"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              <span>{tier.badge}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel with 3D Depth */}
        <div className="max-w-6xl mx-auto">
          <TiltCard
            maxTilt={5}
            className="p-6 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-2xl relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Information & Solutions (Col 7) */}
              <div className="lg:col-span-7">
                <span className="text-xs font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/15 px-3 py-1 rounded-md border border-[#ff4522]/30 mb-3 inline-block">
                  {currentTier.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                  {currentTier.title}
                </h3>
                <p className="text-sm text-zinc-300 mb-6 font-medium">
                  {currentTier.subtitle}
                </p>

                {/* Pain point highlight */}
                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 text-xs sm:text-sm text-zinc-400 mb-6">
                  <span className="text-white font-bold block mb-1">
                    ⚠️ El Reto Operativo Común:
                  </span>
                  {currentTier.painPoint}
                </div>

                {/* 4 Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-zinc-800/80">
                  {currentTier.solutions.map((sol, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-black/40 border border-zinc-800/90 hover:border-[#ff4522]/50 transition-all flex items-start gap-3 group/item"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#ff4522]/15 border border-[#ff4522]/30 flex items-center justify-center text-lg shrink-0">
                        {sol.icon}
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover/item:text-[#ff4522] transition-colors">
                          {sol.title}
                        </h4>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: 3D Visual Scene & Impact Metric (Col 5) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* 3D Scene Image Card */}
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-black border-2 border-zinc-800 group-hover:border-[#ff4522]/50 transition-all shadow-xl">
                  <img
                    src={currentTier.image}
                    alt={currentTier.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Top HUD Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#ff4522]/40 text-white text-[11px] font-mono font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#ff4522] animate-pulse" />
                    <span>{currentTier.imageTag}</span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-[11px] text-zinc-300 bg-zinc-950/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-zinc-800">
                    {currentTier.imageDesc}
                  </div>
                </div>

                {/* Metric & CTA Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-black to-zinc-950 border border-[#ff4522]/40 text-center flex flex-col justify-center">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Retorno Estimado de Inversión (ROI)
                  </div>
                  <div className="text-base sm:text-lg font-black text-[#ff6846] leading-snug mb-3.5">
                    {currentTier.kpi}
                  </div>
                  <a
                    href="#contact"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,69,34,0.4)]"
                  >
                    {currentTier.cta} →
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
