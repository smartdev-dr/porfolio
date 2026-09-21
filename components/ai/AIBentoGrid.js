"use client";
import React, { useState } from "react";
import TiltCard from "../3d/TiltCard";

export default function AIBentoGrid() {
  const [chatStep, setChatStep] = useState(1);

  return (
    <section
      className="w-full py-24 relative overflow-hidden bg-[#08090c]"
      id="capacidades"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-[#ff4522]/10 rounded-full blur-[190px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Ecosistema de Capacidades
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Tecnología aplicada para resolver problemas reales
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            No vendemos experimentos de laboratorio. Diseñamos herramientas e implementamos modelos de IA que se integran directamente en el flujo de trabajo de tu empresa.
          </p>
        </div>

        {/* Bento Grid Layout (Asymmetric, High Information Density) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1 (Large - Col 8): Agentes Autónomos & Chatbots de Acción */}
          <TiltCard
            maxTilt={5}
            className="md:col-span-12 lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-[11px] font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/15 px-3 py-1 rounded-md border border-[#ff4522]/30">
                  Agentes Cognitivos 24/7
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  WhatsApp • Web • ERP • APIs
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-[#ff4522] transition-colors">
                Agentes IA que no solo hablan: ejecutan acciones en tus sistemas
              </h3>
              <p className="text-sm text-zinc-300 mb-6 max-w-2xl leading-relaxed">
                Nuestros agentes se conectan a tu base de datos y ERP. Pueden consultar inventario, registrar pedidos, emitir facturas, agendar citas y cobrar en tiempo real sin intervención humana.
              </p>

              {/* Split layout: Interactive Chat Simulation + 3D Agent Pipeline Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Chat Simulation (Col 7) */}
                <div className="sm:col-span-7 p-4 rounded-2xl bg-black/80 border border-zinc-800 space-y-3 font-sans">
                  <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="font-semibold text-white">SmartDev Enterprise AI</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">BD Conectada</span>
                  </div>

                  {/* Simulated message 1 */}
                  <div className="flex justify-end">
                    <div className="bg-[#ff4522]/20 border border-[#ff4522]/40 text-zinc-200 text-xs px-3.5 py-2 rounded-2xl rounded-tr-none max-w-xs">
                      "Hola, ¿tienen disponibilidad de 50 sacos de cemento para la obra de Piantini?"
                    </div>
                  </div>

                  {/* Simulated message 2 */}
                  <div className="flex justify-start">
                    <div className="bg-zinc-800/80 border border-zinc-700/60 text-zinc-200 text-xs px-3.5 py-2 rounded-2xl rounded-tl-none">
                      <span className="text-[#ff8066] font-semibold block mb-1">
                        ✦ Inventario verificado en tiempo real:
                      </span>
                      "¡Sí! 120 disponibles. Total con flete: RD$ 24,500. ¿Deseas que genere la orden y el enlace de pago?"
                    </div>
                  </div>
                </div>

                {/* 3D Agent Visual Preview (Col 5) */}
                <div className="sm:col-span-5 relative rounded-2xl overflow-hidden bg-black border border-zinc-800 min-h-[160px] group/img">
                  <img
                    src="/assets/img/service/smartdev_ai_agents_3d.jpg"
                    alt="Agentes IA en Red 3D"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-700/60 text-[10px] font-mono text-zinc-300 flex items-center justify-between">
                    <span>Flujo Autónomo</span>
                    <span className="text-[#ff4522] font-bold">24/7 ACTIVO</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span>Reduce hasta un 80% las consultas manuales</span>
              <a href="#contact" className="text-[#ff6a49] font-bold hover:underline">
                Implementar Agente →
              </a>
            </div>
          </TiltCard>

          {/* Card 2 (Medium - Col 4): RAG & Base de Conocimiento Privada */}
          <TiltCard
            maxTilt={6}
            className="md:col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            <div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-zinc-800 mb-4 group/rag">
                <img
                  src="/assets/img/service/smartdev_rag_search_3d.jpg"
                  alt="RAG Búsqueda Vectorial 3D"
                  className="w-full h-full object-cover group-hover/rag:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#ff8066] border border-[#ff4522]/30">
                  RAG ARCHITECTURE 3D
                </span>
              </div>

              <span className="text-[11px] font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/15 px-3 py-1 rounded-md border border-[#ff4522]/30 mb-3 inline-block">
                Sistemas RAG
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-[#ff4522] transition-colors">
                Tu propio ChatGPT con los datos privados de tu empresa
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Indexamos tus manuales, contratos legales y políticas en una base de datos vectorial privada (pgvector / Pinecone).
              </p>

              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-black/60 border border-zinc-800 text-[11px] flex items-center gap-2 text-zinc-300">
                  <span className="text-[#ff4522]">✓</span>
                  <span>Búsqueda semántica instantánea &lt; 200ms</span>
                </div>
                <div className="p-2.5 rounded-xl bg-black/60 border border-zinc-800 text-[11px] flex items-center gap-2 text-zinc-300">
                  <span className="text-[#ff4522]">✓</span>
                  <span>Cita verificada del documento y página fuente</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80">
              <span className="text-[10px] font-mono text-zinc-500">
                PDF • DOCX • SQL • NOTION • API
              </span>
            </div>
          </TiltCard>

          {/* Card 3 (Col 4): Visión por Computadora & OCR */}
          <TiltCard
            maxTilt={6}
            className="md:col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-zinc-800 mb-4 group/ocr">
                <img
                  src="/assets/img/service/smartdev_web_3d.jpg"
                  alt="Visión por Computadora 3D"
                  className="w-full h-full object-cover group-hover/ocr:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#ff8066] border border-[#ff4522]/30">
                  NEURAL VISION OCR
                </span>
              </div>

              <span className="text-[11px] font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/15 px-3 py-1 rounded-md border border-[#ff4522]/30 mb-3 inline-block">
                Visión por Computadora
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-[#ff4522] transition-colors">
                Extracción inteligente de documentos & facturas
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Elimina la digitación manual. Nuestros modelos leen facturas de proveedores, recibos y cheques, cargándolos al ERP en segundos.
              </p>

              <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 font-mono text-[11px] text-[#ff8066] space-y-1">
                <div>&gt; Factura PDF escaneada...</div>
                <div>&gt; Proveedor: Ferretería Central</div>
                <div>&gt; Total: RD$ 48,200.00 [VALIDADO]</div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
              Precisión de lectura superior al 99.4%
            </div>
          </TiltCard>

          {/* Card 4 (Col 4): Software Factory & Apps a Medida */}
          <TiltCard
            maxTilt={6}
            className="md:col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-zinc-800 mb-4 group/back">
                <img
                  src="/assets/img/service/smartdev_backend_3d.jpg"
                  alt="Arquitectura Cloud 3D"
                  className="w-full h-full object-cover group-hover/back:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#ff8066] border border-[#ff4522]/30">
                  CLOUD ARCHITECTURE
                </span>
              </div>

              <span className="text-[11px] font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/15 px-3 py-1 rounded-md border border-[#ff4522]/30 mb-3 inline-block">
                Software Factory
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-[#ff4522] transition-colors">
                Desarrollo Web & Móvil de Grado Empresarial
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Plataformas web con Next.js y apps con Flutter preparadas para soportar millones de transacciones sin fallas.
              </p>

              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">
                  #Next.js 14+
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">
                  #Flutter
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">
                  #PostgreSQL
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">
                  #AWS
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
              Propiedad 100% tuya del código fuente
            </div>
          </TiltCard>

          {/* Card 5 (Col 4): Seguridad & Privacidad Bancaria */}
          <TiltCard
            maxTilt={6}
            className="md:col-span-12 lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-zinc-800 mb-4 group/sec">
                <img
                  src="/assets/img/hero/smartdev_ai_brain_3d.jpg"
                  alt="Seguridad y Servidores Privados 3D"
                  className="w-full h-full object-cover group-hover/sec:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[#ff8066] border border-[#ff4522]/30">
                  ZERO DATA RETENTION
                </span>
              </div>

              <span className="text-[11px] font-mono text-[#ff8066] font-semibold uppercase tracking-wider bg-[#ff4522]/15 px-3 py-1 rounded-md border border-[#ff4522]/30 mb-3 inline-block">
                Soberanía & Seguridad
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-[#ff4522] transition-colors">
                Privacidad Total & Modelos en Servidores Privados
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Tu información financiera y de clientes nunca se comparte con terceros ni entrena modelos públicos. Acuerdos NDA estrictos.
              </p>

              <div className="p-2.5 rounded-xl bg-black/60 border border-zinc-800 text-[11px] text-zinc-300 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff4522]">🔒</span>
                  <span>Cifrado AES-256 en reposo y tránsito</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff4522]">🛡️</span>
                  <span>VPC Privada y aislamiento corporativo</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400">
              Cumplimiento normativo y auditoría de accesos
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
