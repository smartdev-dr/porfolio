"use client";
import React, { useState } from "react";
import TiltCard from "./3d/TiltCard";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const whatsappUrl = `https://wa.me/18093962749?text=${encodeURIComponent(
    `Hola SmartDev! Mi nombre es ${name || "Cliente"}, mi correo es ${email || "N/A"
    }. Mensaje: ${message || "Deseo cotizar un proyecto de software a medida."}`
  )}`;

  return (
    <section
      className="kura_tm_section w-full py-24 relative overflow-hidden bg-[#07080b]"
      id="contact"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#ff4522]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/10 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff4522]" />
            Hablemos de tu Próximo Proyecto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Iniciemos la conversación
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            ¿Tienes una visión o un desafío tecnológico en tu empresa? Escríbenos directamente o envíanos un mensaje por WhatsApp para una asesoría técnica sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & 3D Tilt Card */}
          <div className="lg:col-span-5">
            <TiltCard
              maxTilt={8}
              className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-6 shadow-2xl"
            >
              <div>
                <span className="text-xs font-mono text-[#ff8066] uppercase tracking-wider">
                  Contacto Directo
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                  SMARTDEV SRL
                </h3>
                <p className="text-xs text-zinc-400">
                  Desarrollo de software a medida y consultoría tecnológica empresarial.
                </p>
              </div>

              <div className="w-full h-[1px] bg-zinc-800" />

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4522]/15 border border-[#ff4522]/30 flex items-center justify-center text-[#ff6a49] shrink-0">
                    📍
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">
                      Ubicación
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Santo Domingo, República Dominicana
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4522]/15 border border-[#ff4522]/30 flex items-center justify-center text-[#ff6a49] shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">
                      Teléfono / WhatsApp
                    </div>
                    <a
                      href="tel:+18093962749"
                      className="text-sm font-semibold text-white hover:text-[#ff4522] transition-colors"
                    >
                      +1 809 396 2749
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4522]/15 border border-[#ff4522]/30 flex items-center justify-center text-[#ff6a49] shrink-0">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">
                      Correo Electrónico
                    </div>
                    <a
                      href="mailto:smartdev.dr@gmail.com"
                      className="text-sm font-semibold text-white hover:text-[#ff4522] transition-colors"
                    >
                      smartdev.dr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4522]/15 border border-[#ff4522]/30 flex items-center justify-center text-[#ff6a49] shrink-0">
                    🌐
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">
                      Sitio Web Oficial
                    </div>
                    <span className="text-sm font-semibold text-white">
                      https://smartdevsrl.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/18093962749"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:scale-102"
                >
                  <span>Chatear por WhatsApp Inmediato</span>
                  <span>💬</span>
                </a>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Modern 3D Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Envíanos los detalles de tu proyecto
              </h3>
              <p className="text-xs text-zinc-400 mb-8">
                Completa los datos y te responderemos con una propuesta técnica y estimada en menos de 24 horas.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(whatsappUrl, "_blank");
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="client_name"
                      className="block text-xs font-mono text-zinc-400 mb-2 uppercase"
                    >
                      Tu Nombre
                    </label>
                    <input
                      id="client_name"
                      type="text"
                      placeholder="Ej. Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff4522] focus:ring-1 focus:ring-[#ff4522] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="client_email"
                      className="block text-xs font-mono text-zinc-400 mb-2 uppercase"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="client_email"
                      type="email"
                      placeholder="Ej. juan@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff4522] focus:ring-1 focus:ring-[#ff4522] transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="client_message"
                    className="block text-xs font-mono text-zinc-400 mb-2 uppercase"
                  >
                    ¿Qué software o solución necesitas desarrollar?
                  </label>
                  <textarea
                    id="client_message"
                    rows={4}
                    placeholder="Describe las funciones, plataformas (Web, Móvil, Backend) o requerimientos de tu empresa..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-700/80 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff4522] focus:ring-1 focus:ring-[#ff4522] transition-all text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff4522] to-[#ff2a5f] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(255,69,34,0.4)] hover:shadow-[0_0_35px_rgba(255,69,34,0.7)] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-3"
                  >
                    <span>Enviar y Abrir en WhatsApp</span>
                    <span className="text-base">🚀</span>
                  </button>
                  <p className="text-[11px] font-mono text-zinc-500 text-center mt-3">
                    🔒 Tus datos están protegidos y se utilizarán exclusivamente para evaluar tu requerimiento.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
