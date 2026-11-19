"use client";
import { useState } from "react";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "NexoSuite ERP (e-CF DGII)", href: "https://nexosuite.lat/landing", external: true, highlight: true },
  { name: "Soluciones por Escala", href: "#soluciones" },
  { name: "¿Por qué IA? (Video)", href: "#impacto-ia" },
  { name: "Capacidades IA", href: "#capacidades" },
  { name: "Casos de Éxito", href: "#portfolio" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Diagnóstico IA", href: "#evaluador" },
  { name: "Contacto", href: "#contact" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="kura_tm_mobile_menu w-full h-auto fixed top-0 left-0 right-0 block lg:hidden z-[9999]">
      {/* Topbar Bar */}
      <div className="w-full bg-[#090a0f]/95 backdrop-blur-xl border-b border-zinc-800/80 px-4 py-3 flex items-center justify-between shadow-2xl relative z-20">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group shrink-0" onClick={handleLinkClick}>
          <div className="relative w-8 h-8 shrink-0">
            <img
              className="w-8 h-8 object-contain"
              src="/assets/img/logo/logo.png"
              alt="SMARTDEV Logo"
            />
            <div className="absolute inset-0 bg-[#ff4522]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <span className="text-sm font-black tracking-tight text-white flex items-center">
            SMART<span className="text-[#ff4522]">DEV11</span>
          </span>
        </a>

        {/* Custom Animated Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="w-10 h-10 shrink-0 rounded-xl bg-zinc-900 border border-zinc-700/80 flex flex-col items-center justify-center gap-[5px] focus:outline-none hover:border-[#ff4522]/60 transition-colors shadow-lg active:scale-95"
        >
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px] bg-[#ff4522]" : "bg-white"
              }`}
          />
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-0 bg-[#ff4522]" : "bg-white"
              }`}
          />
          <span
            className={`block w-5 h-0.5 rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px] bg-[#ff4522]" : "bg-white"
              }`}
          />
        </button>
      </div>

      {/* Dropdown Menu Container */}
      <div
        className={`w-full bg-[#090a0f]/98 backdrop-blur-2xl border-b border-zinc-800/90 transition-all duration-300 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] ${isOpen ? "max-h-[500px] opacity-100 py-6 px-6" : "max-h-0 opacity-0 py-0 px-6 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-3">
          {/* Tag badge */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#ff4522] animate-ping" />
            <span className="text-[11px] font-mono text-[#ff8066] uppercase tracking-wider font-semibold">
              AGENCIA IA & SOFTWARE FACTORY
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col divide-y divide-zinc-800/60">
            {navLinks.map((link, idx) => (
              <li key={idx} className="py-2.5">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={handleLinkClick}
                  className={`text-sm font-semibold transition-colors flex items-center justify-between ${
                    link.highlight
                      ? "text-[#ff6a49] hover:text-[#ff8066]"
                      : "text-zinc-200 hover:text-[#ff4522]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4522] animate-pulse" />
                    )}
                    {link.name}
                  </span>
                  <span className="text-zinc-500 text-xs font-mono">
                    {link.external ? "↗" : "✦"}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Direct CTA */}
          <div className="pt-3">
            <a
              href="https://wa.me/18093962749?text=Hola%20SmartDev!%20Deseo%20cotizar%20un%20proyecto%20de%20software%20o%20inteligencia%20artificial."
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,69,34,0.4)]"
            >
              <span>Hablar con un Ingeniero</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
