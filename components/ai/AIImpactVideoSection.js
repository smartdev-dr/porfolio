"use client";
import React, { useRef, useState, useEffect } from "react";
import TiltCard from "../3d/TiltCard";

export default function AIImpactVideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => setCurrentTime(video.currentTime);
    const onLoadedMetadata = () => setDuration(video.duration || 20);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    // Auto-attempt play muted to attract visual attention
    video.play().catch(() => {
      // Autoplay with sound or without user interaction might be prevented
      setIsPlaying(false);
    });

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section
      className="w-full py-20 sm:py-28 relative overflow-hidden bg-[#07080c] border-t border-zinc-800/80"
      id="impacto-ia"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#ff4522]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#ff344f]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Context, Reasoning & Business Value */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4522]/15 border border-[#ff4522]/30 text-[#ff6846] text-xs font-semibold uppercase tracking-wider mb-5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#ff4522] animate-pulse" />
              Impacto Empresarial • Video Demostrativo
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-5">
              ¿Por qué debes integrar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4522] via-[#ff6846] to-[#ff344f]">
                Inteligencia Artificial
              </span>{" "}
              en los procesos de tu empresa?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
              La IA ya no es una opción de innovación futura: es la diferencia entre
              empresas que escalan eficientemente y aquellas atrapadas en cuellos de botella manuales.
              En este video te explicamos los motivos clave para dar el paso hoy.
            </p>

            {/* Key Takeaways Cards */}
            <div className="space-y-4 mb-8">
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-[#ff4522]/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff4522]/10 border border-[#ff4522]/30 flex items-center justify-center shrink-0 text-[#ff6846] text-lg">
                  ⚡
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">
                    Automatización de tareas repetitivas y manuales
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Libera a tu equipo de tareas rutinarias (digitación, cotizaciones, gestión de documentos y respuestas frecuentes) ahorrando decenas de horas a la semana.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-[#ff4522]/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff4522]/10 border border-[#ff4522]/30 flex items-center justify-center shrink-0 text-[#ff6846] text-lg">
                  📈
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">
                    Decisiones con datos y visión en tiempo real
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Conecta tus sistemas a modelos predictivos para anticipar demanda, detectar fugas operativas y optimizar inventarios con precisión.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-[#ff4522]/40 transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#ff4522]/10 border border-[#ff4522]/30 flex items-center justify-center shrink-0 text-[#ff6846] text-lg">
                  🚀
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">
                    Multiplica tu capacidad sin elevar desproporcionadamente la nómina
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Atiende 10x más clientes y procesa órdenes 24/7 manteniendo costos operativos controlados y márgenes rentables.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#evaluador"
                className="px-6 py-3.5 rounded-xl bg-[#ff4522] hover:bg-[#ff5535] text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(255,69,34,0.35)] hover:shadow-[0_0_30px_rgba(255,69,34,0.6)] flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Evaluar mi Empresa con IA</span>
                <span>→</span>
              </a>

              <a
                href="https://wa.me/18494721998?text=Hola,%20vi%20el%20video%20sobre%20integrar%20IA%20en%20los%20procesos%20de%20mi%20empresa%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-700/80 hover:border-[#25D366]/60 transition-all flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 9:16 Video Player styled as Modern Smartphone Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group/player w-full max-w-[320px] sm:max-w-[340px]">

              {/* Backlight Glow for the Smartphone */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff4522]/30 via-transparent to-[#ff344f]/30 rounded-[50px] blur-2xl opacity-75 group-hover/player:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Smartphone Chassis Container (9:16) */}
              <div className="relative rounded-[42px] p-[10px] bg-gradient-to-b from-zinc-700 via-zinc-900 to-black border-2 border-zinc-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">

                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center border border-zinc-800/80">
                  <div className="w-2 h-2 rounded-full bg-zinc-900 mr-2" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff4522]/60 animate-pulse" />
                </div>

                {/* Inner Screen (Aspect Ratio 9:16) */}
                <div
                  className="relative aspect-[9/16] w-full rounded-[34px] overflow-hidden bg-black flex items-center justify-center cursor-pointer select-none"
                  onClick={togglePlay}
                  onMouseEnter={() => setShowControls(true)}
                >
                  <video
                    ref={videoRef}
                    src="/assets/video/iaimpacto.mp4"
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    muted={isMuted}
                    preload="metadata"
                  />

                  {/* Gradient overlays for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

                  {/* Top Bar Indicators */}
                  <div className="absolute top-8 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                      9:16 VERTICAL
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-[#ff4522]/20 backdrop-blur-md border border-[#ff4522]/40 text-[10px] font-mono text-[#ff8066] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff4522] animate-ping" />
                      SMARTDEV REEL
                    </span>
                  </div>

                  {/* Big Center Play/Pause Overlay Button */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 backdrop-blur-[2px]">
                      <div className="w-16 h-16 rounded-full bg-[#ff4522] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,69,34,0.7)] group-hover/player:scale-110 transition-transform">
                        <svg
                          className="w-7 h-7 translate-x-0.5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Bottom Interactive Controls */}
                  <div
                    className={`absolute bottom-4 left-3 right-3 z-20 transition-opacity duration-300 ${showControls || !isPlaying ? "opacity-100" : "opacity-0 group-hover/player:opacity-100"
                      }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
                      <div
                        className="h-full bg-[#ff4522] rounded-full transition-all duration-100"
                        style={{
                          width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                        }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-300">
                      {/* Play/Pause & Sound toggle */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="p-1.5 rounded-lg bg-black/60 hover:bg-black/90 backdrop-blur-md text-white transition-colors"
                          title={isPlaying ? "Pausar" : "Reproducir"}
                        >
                          {isPlaying ? (
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={toggleMute}
                          className="px-2.5 py-1 rounded-lg bg-black/60 hover:bg-black/90 backdrop-blur-md text-white flex items-center gap-1.5 transition-colors border border-white/10"
                          title={isMuted ? "Activar Sonido" : "Silenciar"}
                        >
                          {isMuted ? (
                            <>
                              <svg className="w-4 h-4 fill-current text-[#ff6846]" viewBox="0 0 24 24">
                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                              </svg>
                              <span className="text-[11px] text-[#ff8066] font-semibold">Activar Audio</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                              </svg>
                              <span className="text-[11px]">Silenciar</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Time display & Fullscreen */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-zinc-300 bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>

                        <button
                          type="button"
                          onClick={toggleFullscreen}
                          className="p-1.5 rounded-lg bg-black/60 hover:bg-black/90 backdrop-blur-md text-white transition-colors"
                          title="Pantalla completa"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Caption Pill */}
              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-zinc-400">
                  ✦ Haz clic sobre el teléfono para pausar o reproducir
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
