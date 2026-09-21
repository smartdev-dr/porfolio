"use client";
import React from "react";
import TiltCard from "./3d/TiltCard";

const teamMembers = [
  {
    role: "Dirección & Levantamiento",
    name: "Joshua Marte Garcia",
    title: "CEO & Solutions Architect",
    desc: "Definición estratégica del producto, arquitectura de software de alto nivel y dirección técnica general.",
    badge: "Liderazgo",
    avatar: "JM",
  },
  {
    role: "Diseño de Producto",
    name: "Angel Rodríguez",
    title: "Senior UX & UI Designer",
    desc: "Interfaces intuitivas, sistemas de diseño coherentes y prototipado interactivo de alta fidelidad.",
    badge: "UI / UX",
    avatar: "AR",
  },
  {
    role: "Ingeniería Web",
    name: "Julio César Robles",
    title: "Senior Web Developer",
    desc: "Desarrollo frontend avanzado con Next.js, React, optimización de rendimiento y arquitecturas en la nube.",
    badge: "Web Cloud",
    avatar: "JR",
  },
  {
    role: "Ingeniería Móvil",
    name: "Luis Rodríguez",
    title: "Mobile App Developer",
    desc: "Despliegue y optimización de aplicaciones móviles cross-platform nativas para iOS y Android.",
    badge: "iOS & Android",
    avatar: "LR",
  },
  {
    role: "Crecimiento Digital",
    name: "Jennifer De Los Santos Díaz",
    title: "Digital Growth & Marketing",
    desc: "Estrategias de adquisición, posicionamiento y marketing de productos digitales y plataformas.",
    badge: "Marketing",
    avatar: "JD",
  },
];

const TimeLine = () => {
  return (
    <section
      className="kura_tm_section w-full py-24 relative overflow-hidden bg-[#08090c]"
      id="timeline"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#ff4522]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/10 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Equipo Multidisciplinario
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Talento que hace posible lo extraordinario
          </h2>
          <p className="text-base text-zinc-400">
            Un equipo de ingenieros, diseñadores y arquitectos comprometidos con entregar soluciones de software de clase mundial.
          </p>
        </div>

        {/* 3D Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <TiltCard
              key={idx}
              maxTilt={8}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#ff4522]/50 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff4522] to-[#ff2a5f] text-white font-black text-sm flex items-center justify-center shadow-[0_0_15px_rgba(255,69,34,0.4)]">
                    {member.avatar}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#ff4522]/15 text-[#ff8066] border border-[#ff4522]/30">
                    {member.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-zinc-400 uppercase mb-1">
                  {member.role}
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#ff4522] transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#ff6a49] mb-3">
                  {member.title}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>SMARTDEV CORE TEAM</span>
                <span className="text-[#ff4522]">✓ VERIFIED</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
