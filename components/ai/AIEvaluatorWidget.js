"use client";
import React, { useState } from "react";
import TiltCard from "../3d/TiltCard";

export default function AIEvaluatorWidget() {
  const [size, setSize] = useState("medianas");
  const [pain, setPain] = useState("procesos");
  const [goal, setGoal] = useState("costos");

  const recommendations = {
    pymes_atencion_ventas: {
      title: "Agente IA Conversacional en WhatsApp + CRM Ligero",
      impact: "Capta y atiende prospectos las 24 horas sin perder ningún cliente.",
      timeline: "10 a 15 días",
      features: [
        "Responde preguntas de catálogo y precios",
        "Califica prospectos y los envía a tu WhatsApp o CRM",
        "Envía cotizaciones automáticas en PDF",
      ],
    },
    medianas_procesos_costos: {
      title: "Integración de IA con ERP + OCR de Facturas + App en Campo",
      impact: "Automatiza hasta un 65% de la carga administrativa en oficina y calle.",
      timeline: "3 a 5 semanas",
      features: [
        "Lectura automática de facturas y recibos sin digitación",
        "Conexión con tu base de datos actual para reportes en tiempo real",
        "App móvil para choferes o personal con sincronización",
      ],
    },
    corporativos_documentos_control: {
      title: "Sistema RAG Privado + Microservicios Cloud AWS de Alta Concurrencia",
      impact: "Búsqueda semántica instantánea sobre millones de páginas y seguridad bancaria.",
      timeline: "4 a 8 semanas",
      features: [
        "Copiloto entrenado con tus contratos y políticas internas",
        "Zero Data Retention: tus datos nunca salen de tu VPC privada",
        "SLA de disponibilidad garantizado y soporte prioritario",
      ],
    },
  };

  const key = `${size}_${pain}_${goal}`;
  const rec =
    recommendations[key] || recommendations["medianas_procesos_costos"];

  const sizeLabels = {
    pymes: "PyME (1-10 personas)",
    medianas: "Mediana Empresa (11-50 personas)",
    corporativos: "Corporación (50+ personas)",
  };

  const painLabels = {
    atencion: "Atención al cliente lenta o desbordada",
    procesos: "Tareas manuales repetitivas en Excel/papel",
    documentos: "Muchos documentos y contratos difíciles de auditar",
  };

  const goalLabels = {
    ventas: "Aumentar ventas y captación 24/7",
    costos: "Reducir costos operativos y tiempos",
    control: "Tener control y visibilidad en tiempo real",
  };

  const whatsappMsg = `Hola SmartDev! Realicé el diagnóstico en su web:%0A- Tamaño de empresa: ${sizeLabels[size]}%0A- Desafío principal: ${painLabels[pain]}%0A- Meta principal: ${goalLabels[goal]}%0A- Solución recomendada: ${rec.title}%0AMe gustaría agendar una llamada de 15 minutos para ver cómo implementarlo en mi negocio.`;

  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-[#090a0f] border-t border-zinc-800/60"
      id="evaluador"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#ff4522]/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Diagnóstico Rápido Interactivo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Descubre la solución exacta que tu empresa necesita
          </h2>
          <p className="text-base text-zinc-400">
            Selecciona tus parámetros operativos y obtén una recomendación técnica inmediata con tiempos estimados y arquitectura sugerida.
          </p>
        </div>

        {/* 2-Column Evaluator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-6 space-y-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <label className="block text-xs font-mono text-[#ff8066] uppercase tracking-wider mb-3">
                1. Tamaño de tu Empresa
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "pymes", label: "PyME", sub: "1-10 pers." },
                  { id: "medianas", label: "Mediana", sub: "11-50 pers." },
                  { id: "corporativos", label: "Corporativo", sub: "50+ pers." },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSize(item.id)}
                    className={`p-3 rounded-xl text-center transition-all ${
                      size === item.id
                        ? "bg-[#ff4522] text-white font-bold shadow-[0_0_15px_rgba(255,69,34,0.4)]"
                        : "bg-black/50 border border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <div className="text-xs">{item.label}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <label className="block text-xs font-mono text-[#ff8066] uppercase tracking-wider mb-3">
                2. Mayor Desafío u Obstáculo Operativo
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: "atencion",
                    label: "Atención al cliente lenta o pérdida de leads",
                    sub: "WhatsApp desbordado y cotizaciones manuales lentas",
                  },
                  {
                    id: "procesos",
                    label: "Muchas tareas manuales y digitación en Excel",
                    sub: "Facturas de proveedores, conciliación y control de inventario",
                  },
                  {
                    id: "documentos",
                    label: "Documentos dispersos y consultas complejas",
                    sub: "Contratos, manuales y políticas difíciles de auditar",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPain(item.id)}
                    className={`w-full p-3.5 rounded-xl text-left transition-all ${
                      pain === item.id
                        ? "bg-[#ff4522]/20 border border-[#ff4522] text-white"
                        : "bg-black/50 border border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <div className="text-xs font-bold text-white mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-zinc-400">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <label className="block text-xs font-mono text-[#ff8066] uppercase tracking-wider mb-3">
                3. Meta Principal a 6 Meses
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "ventas", label: "Más Ventas 24/7" },
                  { id: "costos", label: "Bajar Costos" },
                  { id: "control", label: "Control Total" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id)}
                    className={`p-3 rounded-xl text-center transition-all ${
                      goal === item.id
                        ? "bg-[#ff4522] text-white font-bold shadow-[0_0_15px_rgba(255,69,34,0.4)]"
                        : "bg-black/50 border border-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <div className="text-xs">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Instant Recommendation Output */}
          <div className="lg:col-span-6">
            <TiltCard
              maxTilt={7}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900/95 via-black to-zinc-950 border-2 border-[#ff4522]/60 shadow-[0_0_50px_rgba(255,69,34,0.25)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/20 px-3 py-1 rounded-md border border-[#ff4522]/40">
                    Arquitectura Recomendada
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    ⏱ Entrega en ~{rec.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3 leading-snug">
                  {rec.title}
                </h3>
                <p className="text-sm text-zinc-300 mb-6 font-medium leading-relaxed">
                  {rec.impact}
                </p>

                <div className="w-full h-[1px] bg-zinc-800 mb-6" />

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Funcionalidades Clave del Sistema:
                  </div>
                  {rec.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="text-[#ff4522] font-bold text-sm mt-[-2px]">✦</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                <a
                  href={`https://wa.me/18093962749?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,69,34,0.5)] hover:shadow-[0_0_35px_rgba(255,69,34,0.8)] transition-all hover:scale-102"
                >
                  <span>Recibir Diagnóstico y Cotización en WhatsApp</span>
                  <span>🚀</span>
                </a>
                <p className="text-[11px] font-mono text-zinc-500 text-center">
                  Sin compromiso • Respuesta técnica en menos de 2 horas
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
