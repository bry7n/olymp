"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const words = [
    "SABORES IRRESISTÍVEIS",
    "GRELHA DIVINA",
    "QUALIDADE",
    "BLEND SECRETO",
    "MOLHO DOS DEUSES",
    "ARTESANAL",
    "SABORES IRRESISTÍVEIS",
    "GRELHA DIVINA"
  ];

  return (
    <div className="w-full overflow-hidden bg-[#CA9949] py-8 flex items-center shrink-0 border-y border-[#B3853D] relative z-40 max-md:-mt-24">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="flex whitespace-nowrap items-center gap-12"
      >
        {words.map((word, i) => (
          <div key={i} className="flex items-center gap-12 text-black font-black text-4xl lg:text-5xl tracking-tighter uppercase">
            {word}
            <span className="w-4 h-4 rounded-full bg-black block mx-4 opacity-50"></span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-slate-500 py-24 px-4 border-t border-slate-900 mt-20 relative overflow-hidden">
      {/* Background grain constraint via CSS */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[rgba(202,153,73,0.05)] to-transparent pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">

        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tighter text-slate-200 mb-6 font-tenacious">Deuses do Olympus</h2>
          <p className="max-w-[40ch] text-sm leading-relaxed mb-8">
            A verdadeira refeição dos deuses. <br /> Hambúrgueres defumados e sabor inesquecível.
          </p>
          <div className="text-sm">
            <p className="mb-2">📍 R. São Martinho, 10 - Bairro São Pedro, Teresópolis</p>
            <p>🔥 Segunda a Domingo - 18h às 23h</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-300 mb-4 tracking-tight font-tenacious">Olympus</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><a target="_blank" href="https://www.google.com/maps/place/Deuses+do+Olympus/@-22.4211589,-42.9675458,17z/data=!3m1!4b1!4m6!3m5!1s0x984d12ddc2104d:0x5cd2d833d7a92dd9!8m2!3d-22.4211589!4d-42.9649709!16s%2Fg%2F11wbjvlmcf?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" className="hover:text-[#CA9949] transition-colors">Como chegar</a></li>
            <li><a href="#historia" className="hover:text-[#CA9949] transition-colors">Nossa História</a></li>
            <li><a href="#avaliacoes" className="hover:text-[#CA9949] transition-colors">Avaliações</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-slate-300 mb-4 tracking-tight font-tenacious">Faça o seu Pedido</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><a href="https://wa.me/5521976195529?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" className="hover:text-[#CA9949] transition-colors">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/deusesolympus/" target="_blank" className="hover:text-[#CA9949] transition-colors">Instagram</a></li>
            <li><a href="https://pedido.anota.ai/loja/olympus-delivery?f=ms" target="_blank" className="hover:text-[#CA9949] transition-colors">Anota AI</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs z-10 relative">
        <p>&copy; {new Date().getFullYear()} Deuses do Olympus. Todos os direitos reservados.</p>
        <p>Desenvolvido por StartDev.</p>
      </div>
    </footer>
  );
}
