"use client";
import React, { useContext, useState } from "react";
import { context } from "@/context/context";
import dynamic from "next/dynamic";
import TiltCard from "./3d/TiltCard";

const Hero3DCanvas = dynamic(() => import("./3d/Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center min-h-[380px]">
      <div className="w-12 h-12 rounded-full border-2 border-[#ff4522] border-t-transparent animate-spin" />
    </div>
  ),
});

const heroVisuals = [
  {
    id: "command_center",
    title: "Headquarters de Software & IA",
    tag: "3D COMMAND CENTER",
    src: "/assets/img/hero/smartdev_hero_composition_3d.jpg",
    desc: "Cerebro neuronal conectado a plataformas web y aplicaciones móviles empresariales.",
    metrics: "99.9% Uptime • Latencia < 50ms",
  },
  {
    id: "neural_core",
    title: "Cerebro Cognitivo Empresarial",
    tag: "NEURAL CORE 8K",
    src: "/assets/img/hero/smartdev_ai_brain_3d.jpg",
    desc: "Modelos privados de lenguaje, visión artificial y agentes autónomos de alta precisión.",
    metrics: "Zero Data Leakage • VPC Privada",
  },
  {
    id: "modular_software",
    title: "Monolito de Software Modular",
    tag: "OCTANE 3D RENDER",
    src: "/assets/img/hero/smartdev_hero_3d.jpg",
    desc: "Arquitectura escalable en la nube con microservicios y sincronización de datos en tiempo real.",
    metrics: "Next.js • Flutter • AWS",
  },
];

const Hero = () => {
  const { setServiceModal, modalToggle } = useContext(context);
  const [activeVisual, setActiveVisual] = useState(0);
  const [interactiveMode, setInteractiveMode] = useState(false);

  return (
    <section
      className="kura_tm_section w-full min-h-screen relative overflow-hidden  pb-[50px] sm:pb-[70px] flex items-center bg-[#07080c]"
      id="home"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] bg-[#ff4522]/10 sm:bg-[#ff4522]/15 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[550px] h-[250px] sm:h-[550px] bg-[#ff344f]/8 sm:bg-[#ff344f]/10 rounded-full blur-[120px] sm:blur-[190px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Dual Authority Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/40 text-[#ff6a49] text-[10px] sm:text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(255,69,34,0.2)]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff4522] animate-ping shrink-0" />
                AGENCIA IA APLICADA
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/40 text-[#ff6a49] text-[10px] sm:text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(255,69,34,0.2)]">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff4522] animate-ping shrink-0" />
                SOFTWARE FACTORY
              </span>

            </div>

            {/* Main Headline */}
            <h1 className="text-[1.75rem] leading-[1.12] sm:text-4xl md:text-5xl xl:text-6xl font-black text-white sm:leading-[1.08] mb-4 sm:mb-6 tracking-tight">
              Ingeniería de Software y{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4522] via-[#ff6846] to-[#ff344f]">
                Soluciones Reales de IA
              </span>{" "}
              para Empresas
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              Ayudamos a <strong>pequeñas, medianas y grandes empresas</strong> a integrar inteligencia artificial en sus operaciones diarias: automatizamos procesos manuales, creamos agentes autónomos y desarrollamos plataformas de software a medida que generan rentabilidad comprobable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#evaluador"
                className="px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(255,69,34,0.4)] hover:shadow-[0_0_35px_rgba(255,69,34,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Diagnosticar mi Empresa con IA</span>
                <span>✦</span>
              </a>
              <a
                href="#soluciones"
                className="px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-semibold text-xs sm:text-sm border border-zinc-700 hover:border-[#ff4522]/50 hover:text-white transition-all duration-300 text-center"
              >
                Ver Soluciones por Escala
              </a>
            </div>

            {/* Key Value Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-zinc-800/80">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  10<span className="text-[#ff4522]">+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
                  Años de Innovación
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  100<span className="text-[#ff4522]">+</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
                  Proyectos Entregados
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#ff6a49] tracking-tight">
                  -60<span className="text-white">%</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
                  Costos Operativos
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  99.9<span className="text-[#ff4522]">%</span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider">
                  Disponibilidad Cloud
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent High-Impact 3D Hero Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center w-full">
            {/* 3D Showcase Frame */}
            <TiltCard
              maxTilt={8}
              className="w-full aspect-[16/11] rounded-3xl bg-zinc-950/90 border-2 border-zinc-800 hover:border-[#ff4522]/70 p-2.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] relative group overflow-hidden"
            >
              {interactiveMode ? (
                <div className="w-full h-full relative rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                  <Hero3DCanvas />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-300 bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-zinc-800">
                    <span>WebGL 3D Core reactivo al cursor</span>
                    <span className="text-[#ff4522] font-bold">60 FPS</span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full relative rounded-2xl overflow-hidden bg-black">
                  <img
                    src={heroVisuals[activeVisual].src}
                    alt={heroVisuals[activeVisual].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Top floating HUD pill */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#ff4522]/40 text-white text-xs font-mono font-semibold shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#ff4522] animate-pulse" />
                    <span>{heroVisuals[activeVisual].tag}</span>
                  </div>

                  {/* Top right live badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-zinc-700 text-[11px] font-mono text-[#ff8066]">
                    {heroVisuals[activeVisual].metrics}
                  </div>

                  {/* Bottom details banner */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-zinc-300 bg-zinc-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-zinc-800 shadow-xl">
                    <div className="pr-2">
                      <div className="font-bold text-white text-sm">
                        {heroVisuals[activeVisual].title}
                      </div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">
                        {heroVisuals[activeVisual].desc}
                      </div>
                    </div>
                    <span className="text-[#ff4522] font-mono font-bold text-xs bg-[#ff4522]/15 px-2.5 py-1 rounded border border-[#ff4522]/30 shrink-0">
                      SMARTDEV
                    </span>
                  </div>
                </div>
              )}

              {/* Holographic corner badges */}
              <div className="absolute -top-2.5 -right-2.5 px-3 py-1 rounded-xl bg-zinc-900 border border-[#ff4522]/60 text-white text-[11px] font-semibold shadow-[0_0_20px_rgba(255,69,34,0.4)] backdrop-blur-md hidden sm:flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
                IA & Cloud 24/7
              </div>
            </TiltCard>

            {/* Thumbnail Selectors below the Hero Image */}
            <div className="flex items-center justify-between gap-2 mt-4 w-full">
              <div className="flex items-center gap-2">
                {heroVisuals.map((vis, idx) => (
                  <button
                    key={vis.id}
                    type="button"
                    onClick={() => {
                      setActiveVisual(idx);
                      setInteractiveMode(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${!interactiveMode && activeVisual === idx
                      ? "bg-[#ff4522] text-white border-[#ff4522] shadow-[0_0_15px_rgba(255,69,34,0.4)]"
                      : "bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                  >
                    <span className="w-4 h-4 rounded overflow-hidden shrink-0 border border-white/20 hidden sm:inline-block">
                      <img
                        src={vis.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span>
                      {idx === 0 ? "🏢 Sede IA" : idx === 1 ? "🧠 Cerebro" : "📦 Software"}
                    </span>
                  </button>
                ))}
              </div>

              {/* Three.js interactive toggle */}
              <button
                type="button"
                onClick={() => setInteractiveMode(!interactiveMode)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${interactiveMode
                  ? "bg-[#ff4522] text-white border-[#ff4522] shadow-[0_0_15px_rgba(255,69,34,0.4)]"
                  : "bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:text-[#ff8066] hover:border-[#ff4522]/40"
                  }`}
              >
                <span>✦</span>
                <span>{interactiveMode ? "Ver Render 3D" : "WebGL 3D"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
