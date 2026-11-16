"use client";
import { kuraUtilit } from "@/utility";
import { useEffect, useState } from "react";

const Header = ({ dark = true }) => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    kuraUtilit.openNav(!isToggled);
  };

  useEffect(() => {
    kuraUtilit.audioSoundAndOpen();
    kuraUtilit.stickyNav();
    kuraUtilit.scrollToActiveNav();
  }, []);

  return (
    <header className="duration-300">
      <div className="wrapper w-full h-auto">
        <div className="topbar_inner w-full flex items-center justify-between py-4 px-6 md:px-12 bg-[#090a0f]/80 backdrop-blur-xl border-b border-zinc-800/80 transition-all duration-300">
          {/* Logo with 3D Aura */}
          <div className="logo flex items-center gap-3">
            <a href="#home" className="flex items-center gap-3 group">
              {/* <div className="relative">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                  src="/assets/img/logo/logo.png"
                  alt="SMARTDEV Logo"
                />
                <div className="absolute inset-0 bg-[#ff4522]/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div> */}
              <span className="text-lg md:text-xl font-black tracking-tight text-white flex items-center">
                SMART<span className="text-[#ff4522]">DEV</span>
              </span>
            </a>
          </div>

          {/* Nav Menu */}
          <div className="menu flex items-center gap-6">
            <nav className="list hidden md:block">
              <ul className="anchor_nav flex items-center gap-5" id="anchor_nav">
                <li>
                  <a
                    className="text-xs font-semibold text-zinc-300 hover:text-[#ff4522] transition-colors uppercase tracking-wider"
                    href="#home"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs font-semibold text-zinc-300 hover:text-[#ff4522] transition-colors uppercase tracking-wider"
                    href="#soluciones"
                  >
                    Soluciones
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs font-semibold text-zinc-300 hover:text-[#ff4522] transition-colors uppercase tracking-wider"
                    href="#capacidades"
                  >
                    Capacidades IA
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs font-semibold text-zinc-300 hover:text-[#ff4522] transition-colors uppercase tracking-wider"
                    href="#portfolio"
                  >
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs font-semibold text-zinc-300 hover:text-[#ff4522] transition-colors uppercase tracking-wider"
                    href="#metodologia"
                  >
                    Metodología
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs font-semibold text-zinc-300 hover:text-[#ff4522] transition-colors uppercase tracking-wider"
                    href="#evaluador"
                  >
                    Diagnóstico IA
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs font-semibold text-zinc-300 hover:text-[#ff4522] transition-colors uppercase tracking-wider"
                    href="#contact"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff4522]/15 border border-[#ff4522]/40 text-[#ff6a49] hover:bg-[#ff4522] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,69,34,0.2)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4522] animate-pulse" />
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
