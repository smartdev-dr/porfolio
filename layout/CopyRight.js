const CopyRight = () => {
  return (
    <footer className="kura_tm_section w-full border-t border-zinc-800/80 bg-black">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text">
            <p className="text-xs text-zinc-400">
              Copyright © 2025 <span className="text-white font-semibold">SMARTDEV</span>. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <span className="font-mono text-[11px] text-[#ff6846]">
              ● Santo Domingo, República Dominicana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default CopyRight;
