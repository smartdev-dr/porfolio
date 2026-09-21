"use client";
import React from "react";
import TiltCard from "../3d/TiltCard";

const steps = [
  {
    step: "01",
    phase: "Descubrimiento & Auditoría",
    duration: "Semana 1",
    title: "Mapeo de Procesos y Detección de Fugas de Tiempo",
    desc: "Nos sentamos con tu equipo operativo para identificar cuellos de botella manuales, tareas repetitivas y oportunidades donde la IA genera mayor ahorro inmediato.",
    deliverable: "Documento de Arquitectura y Análisis de Retorno de Inversión (ROI)",
  },
  {
    step: "02",
    phase: "Prototipado Ágil (PoC)",
    duration: "Días 8 a 20",
    title: "Prueba de Concepto Funcional en 15 Días",
    desc: "Construimos una primera versión funcional del agente o software con datos reales de tu empresa para validar precisión y viabilidad antes de hacer una gran inversión.",
    deliverable: "Demo operativa probada con casos reales de tu negocio",
  },
  {
    step: "03",
    phase: "Integración en Producción",
    duration: "Semanas 4 a 6",
    title: "Conexión Segura con tu Ecosistema Actual",
    desc: "Desplegamos la solución integrándola con tus bases de datos, ERPs, CRM o canales de WhatsApp sin interrumpir ni un solo minuto la operación diaria de tu empresa.",
    deliverable: "Sistema en producción con cifrado de grado bancario y backups automáticos",
  },
  {
    step: "04",
    phase: "Adopción & Escalamiento",
    duration: "Continuo",
    title: "Capacitación a tu Personal y Monitoreo de ROI",
    desc: "Entrenamos a tu equipo para sacar el máximo provecho de las nuevas herramientas de IA. Monitoreamos la precisión, optimizamos costos de inferencia y escalamos nuevas funciones.",
    deliverable: "Sesiones de capacitación grabadas y dashboard de rendimiento en tiempo real",
  },
];

export default function AIRoadmap() {
  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-[#07080b] border-t border-zinc-800/60"
      id="metodologia"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#ff4522]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Metodología Sin Fricción
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Cómo transformamos tu empresa paso a paso
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Eliminamos la incertidumbre tecnológica con un método ágil y estructurado. Sabes exactamente qué esperar en cada etapa, con entregables claros y validaciones constantes.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <TiltCard
              key={idx}
              maxTilt={7}
              className="p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#ff4522]/50 flex flex-col justify-between group shadow-xl relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff4522] to-[#ff344f]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                    {item.duration}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#ff8066] uppercase mb-1">
                  {item.phase}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#ff4522] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">
                  Entregable Clave:
                </div>
                <div className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <span className="text-[#ff4522]">✓</span>
                  <span>{item.deliverable}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
