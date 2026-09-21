"use client";
import React from "react";
import TiltCard from "./3d/TiltCard";

const servicesList = [
  {
    id: "ai-automation",
    title: "IA & Automatización de Procesos",
    badge: "Retorno Rápido",
    desc: "Para empresas que desean eliminar tareas manuales, automatizar la atención a clientes y extraer datos de documentos sin digitación.",
    features: [
      "Agentes de IA autónomos en WhatsApp & Web",
      "Extracción inteligente de facturas y recibos (OCR)",
      "Conexión con tu base de datos o software actual",
      "Automatización de flujos repetitivos y alertas",
      "Entrega de primer prototipo funcional en 15 días",
    ],
    highlight: false,
    cta: "Cotizar Solución de IA",
  },
  {
    id: "custom-software",
    title: "Desarrollo de Software a Medida",
    badge: "Más Solicitado",
    desc: "Para empresas que necesitan digitalizar sus operaciones con una plataforma web o aplicación móvil de alta gama diseñada desde cero.",
    features: [
      "Plataforma Web (Next.js / React) con panel de control",
      "Aplicación Móvil iOS & Android (Flutter / React Native)",
      "Integración de hardware (Cámaras, GPS, Bluetooth POS)",
      "Arquitectura Cloud escalable en AWS / Docker",
      "Código fuente 100% de tu propiedad",
    ],
    highlight: true,
    cta: "Cotizar Software a Medida",
  },
  {
    id: "enterprise-transformation",
    title: "Ecosistema Corporativo + IA Dedicada",
    badge: "Nivel Corporativo",
    desc: "Para corporaciones y empresas en rápida expansión que buscan un aliado tecnológico integral para liderar su industria con IA.",
    features: [
      "Sistemas RAG privados sobre documentos confidenciales",
      "Ecosistema Completo: Web + App Móvil + Microservicios",
      "Zero Data Retention y seguridad de grado bancario",
      "Auditoría continua de procesos y pipelines CI/CD",
      "SLA de disponibilidad 99.99% y soporte prioritario",
    ],
    highlight: false,
    cta: "Cotizar Alianza Corporativa",
  },
];

const Priceing = () => {
  return (
    <section
      className="kura_tm_section w-full py-24 relative overflow-hidden bg-[#08090c]"
      id="price"
    >
      {/* Background Ambience */}
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-[#ff4522]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Modelos de Solución & Desarrollo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Soluciones reales para objetivos ambiciosos
          </h2>
          <p className="text-base text-zinc-400">
            Trabajamos con presupuestos transparentes y metas claras. Construimos tecnología robusta con métricas que justifican cada peso invertido.
          </p>
        </div>

        {/* 3D Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {servicesList.map((service) => (
            <TiltCard
              key={service.id}
              maxTilt={8}
              className={`p-8 rounded-3xl flex flex-col justify-between group shadow-xl transition-all ${service.highlight
                  ? "bg-gradient-to-b from-zinc-900/95 via-black to-zinc-950 border-2 border-[#ff4522] shadow-[0_0_40px_rgba(255,69,34,0.3)] relative"
                  : "bg-zinc-900/70 border border-zinc-800 hover:border-[#ff4522]/50"
                }`}
            >
              {/* {service.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] text-white text-[11px] font-black uppercase tracking-wider shadow-lg">
                  ⭐ Recomendado
                </div>
              )} */}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/15 px-3 py-1 rounded-md border border-[#ff4522]/30">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff4522] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <div className="w-full h-[1px] bg-zinc-800 mb-6" />

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Qué incluye esta solución:
                  </div>
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="text-[#ff4522] text-sm mt-[-2px]">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#contact"
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center block ${service.highlight
                    ? "bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] text-white shadow-[0_0_20px_rgba(255,69,34,0.4)] hover:shadow-[0_0_30px_rgba(255,69,34,0.7)] hover:scale-102"
                    : "bg-zinc-800/80 hover:bg-[#ff4522] text-zinc-200 hover:text-white border border-zinc-700 hover:border-[#ff4522]"
                  }`}
              >
                {service.cta}
              </a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Priceing;
