"use client";
import React, { useState } from "react";
import TiltCard from "./3d/TiltCard";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & Experiencias 3D",
    desc: "Interfaces ultra-rápidas, reactivas y con aceleración por hardware WebGL.",
    skills: [
      { name: "React.js & Next.js", level: 98, note: "Server Components & SSR" },
      { name: "Three.js / WebGL 3D", level: 92, note: "Shaders & Modelos 3D" },
      { name: "TailwindCSS & Design Systems", level: 96, note: "Arquitectura CSS" },
      { name: "TypeScript", level: 94, note: "Tipado estricto & robustez" },
    ],
  },
  {
    id: "mobile",
    title: "Apps Móviles Nativas & Cross-Platform",
    desc: "Soluciones móviles de grado de producción publicadas en App Store y Google Play.",
    skills: [
      { name: "React Native", level: 96, note: "iOS & Android Híbrido" },
      { name: "Flutter & Dart", level: 90, note: "Alto rendimiento visual" },
      { name: "Hardware & Bluetooth SDKs", level: 95, note: "POS, Impresoras, QR" },
      { name: "Offline-First Sync", level: 92, note: "Persistencia local" },
    ],
  },
  {
    id: "backend",
    title: "Backend, APIs & Cloud Architecture",
    desc: "Microservicios escalables, bases de datos optimizadas y seguridad empresarial.",
    skills: [
      { name: "Node.js & Express / Nest", level: 96, note: "APIs REST & WebSockets" },
      { name: "Python / FastAPI & Django", level: 90, note: "IA & Automatización" },
      { name: "PostgreSQL & Redis", level: 94, note: "Bases de datos de alto tráfico" },
      { name: "AWS & Docker & CI/CD", level: 92, note: "Despliegues automatizados" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section
      className="kura_tm_section w-full py-24 relative overflow-hidden bg-[#07080b]"
      id="skills"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#ff4522]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4522]/10 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Capacidades Técnicas & Stack 3D
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Tecnología sin límites para tu negocio
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            En SmartDev combinamos las tecnologías más avanzadas del mercado con ingeniería de software rigurosa. Creamos arquitecturas robustas preparadas para escalar de 1 a millones de usuarios.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-3 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${
                activeTab === cat.id
                  ? "bg-[#ff4522] border-[#ff4522] text-white shadow-[0_0_20px_rgba(255,69,34,0.4)]"
                  : "bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        {skillCategories
          .filter((cat) => cat.id === activeTab)
          .map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Skills Breakdown */}
              <div className="lg:col-span-7 space-y-5">
                <p className="text-sm text-zinc-400 mb-6 italic">
                  {category.desc}
                </p>

                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-[#ff4522]/40 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-base">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                          {skill.note}
                        </span>
                      </div>
                      <span className="text-sm font-extrabold text-[#ff6a49]">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar with Glow */}
                    <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden relative">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] shadow-[0_0_10px_rgba(255,69,34,0.7)] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: 3D Tech Architecture Node */}
              <div className="lg:col-span-5">
                <TiltCard
                  maxTilt={10}
                  className="p-8 rounded-2xl bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border border-zinc-800 text-center relative overflow-hidden group shadow-2xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#ff4522]/15 border border-[#ff4522]/40 flex items-center justify-center mx-auto mb-6 text-2xl text-[#ff4522] shadow-[0_0_25px_rgba(255,69,34,0.3)]">
                    ⚡
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">
                    Ecosistema SmartDev Cloud
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    Infraestructura modular desacoplada con pipelines automatizados de CI/CD, auditorías de seguridad continua y balanceo de carga global.
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">
                        Disponibilidad
                      </div>
                      <div className="text-base font-bold text-white">99.98%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">
                        Respuesta API
                      </div>
                      <div className="text-base font-bold text-[#ff6a49]">&lt; 45ms</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">
                        Cobertura Tests
                      </div>
                      <div className="text-base font-bold text-white">&gt; 90%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">
                        Metodología
                      </div>
                      <div className="text-base font-bold text-[#ff6a49]">Agile / Scrum</div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
