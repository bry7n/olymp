"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, WhatsappLogo, InstagramLogo, X } from "@phosphor-icons/react";
import AnotaAIIcon from "./AnotaAIIcon";

export function Hero() {
  const [orderOpen, setOrderOpen] = useState(false);
  const [showPizza, setShowPizza] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);

  const hamburgerVideoRef = useRef<HTMLVideoElement>(null);
  const pizzaVideoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setShowStickyButton(true);
    } else {
      setShowStickyButton(false);
    }
  });

  useEffect(() => {
    // Alterna a cada 6 segundos
    const intervalId = setInterval(() => {
      setShowPizza((prev) => !prev);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  // Sync video playback to save resources on mobile
  useEffect(() => {
    if (showPizza) {
      pizzaVideoRef.current?.play().catch(() => {});
      hamburgerVideoRef.current?.pause();
    } else {
      hamburgerVideoRef.current?.play().catch(() => {});
      pizzaVideoRef.current?.pause();
    }
  }, [showPizza]);

  return (
    <>
      <section className="relative w-full h-[100dvh] bg-black flex items-center justify-center overflow-hidden">

        {/* ── Absolute Header (disappears on scroll) ─────────────────────────────────────── */}
        <div className="absolute top-0 inset-x-0 w-full max-w-[1400px] mx-auto px-4 py-6 md:px-8 flex items-center z-40 pointer-events-auto">
          <div className="text-[#CA9949] font-black text-xl tracking-widest uppercase drop-shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
            OLYMPUS
          </div>
          <div className="flex gap-4 sm:gap-4 ml-auto">
            <a
              href="https://wa.me/5521976195529?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform hover:scale-110 active:scale-95"
              title="WhatsApp"
            >
              <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full shadow-lg shadow-black/20" />
            </a>
            <a
              href="https://www.instagram.com/deusesolympus/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform hover:scale-110 active:scale-95"
              title="Instagram"
            >
              <img src="/icons/instagram.png" alt="Instagram" className="w-10 h-10 sm:w-11 sm:h-11 rounded-full shadow-lg shadow-black/20" />
            </a>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <div
            className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
          />
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

          {/* Dimmer overlay para melhorar a legibilidade do texto em cima do vídeo claro */}
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

          <div className="absolute inset-0 w-full h-full transform-gpu">
            {/* Vídeo do Hamburger - visível quando showPizza for false */}
            <video
              ref={hamburgerVideoRef}
              src="/media/hamburger.mp4"
              muted
              playsInline
              autoPlay
              preload="auto"
              loop
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 will-change-opacity ${!showPizza ? 'opacity-90' : 'opacity-0'}`}
              style={{ backfaceVisibility: 'hidden' }}
            />
            {/* Vídeo da Pizza - visível quando showPizza for true */}
            <video
              ref={pizzaVideoRef}
              src="/media/bubbling_pizza.mp4"
              muted
              playsInline
              autoPlay
              preload="metadata"
              loop
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 will-change-opacity ${showPizza ? 'opacity-90' : 'opacity-0'}`}
              style={{ backfaceVisibility: 'hidden' }}
            />
          </div>
        </div>

        <motion.div className="relative z-30 w-full max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 md:mt-0">
          <div className="flex flex-col gap-6">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex items-center gap-3 text-[#CA9949] font-medium tracking-wide text-sm"
            >
              <span className="h-[1px] w-8 bg-[#CA9949]" />
              Deuses do Olympus — Hamburgueria e Pizzaria
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-white"
            >
              O VERDADEIRO <br />
              <span className="text-[#CA9949]">TEMPERO</span> <br />
              DOS DEUSES.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="text-base md:text-lg text-slate-400 max-w-[45ch] leading-relaxed mt-4"
            >
              Sabores lendários e uma experiência mitológica digna dos deuses. Onde a lenha forja a perfeição artesanal 🔥
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mt-6 pointer-events-auto"
            >
              <motion.button
                onClick={() => setOrderOpen(true)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#CA9949] text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-colors hover:bg-[#d4a85f] shadow-xl"
              >
                Peça Já! <ArrowRight weight="bold" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

      </section>

      {/* ── Floating Sticky Button (appears on scroll) ─────────────────────────────────────── */}
      <AnimatePresence>
        {showStickyButton && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-6 right-6 z-[60] pointer-events-none"
          >
            <motion.button
              onClick={() => setOrderOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#CA9949] pointer-events-auto min-w-[160px] h-12 rounded-full relative flex items-center justify-center transition-colors hover:bg-[#d4a85f] shadow-[0_10px_30px_rgba(202,153,73,0.3)] border border-[#d4a85f]/50 group px-4"
            >
              {/* Ícone fixo à esquerda para não deslocar o texto do centro */}
              <div className="absolute left-4">
                <img src="/icons/anota_ai.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              
              {/* Texto centralizado de forma absoluta no eixo do botão */}
              <span className="text-black font-bold text-base tracking-tight leading-none">
                Peça Já!
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Order Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {orderOpen && (
          <motion.div
            key="order-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOrderOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          >
            <motion.div
              key="order-panel"
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 32 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-2xl p-8 shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setOrderOpen(false)}
                className="absolute top-5 right-5 text-slate-500 hover:text-[#CA9949] transition-colors"
              >
                <X size={20} weight="bold" />
              </button>

              {/* Header */}
              <div className="mb-8 text-center">
                <p className="text-[10px] uppercase tracking-widest text-[#CA9949] font-bold mb-2">Olympus Delivery</p>
                <h2 className="text-2xl font-bold tracking-tight text-white">Por onde prefere pedir?</h2>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3">

                {/* Anota AI */}
                <motion.a
                  href="https://pedido.anota.ai/loja/olympus-delivery?f=ms"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-4 transition-colors hover:border-[#CA9949]/50 hover:bg-[#CA9949]/8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CA9949]/15 text-[#CA9949] transition-colors group-hover:bg-[#CA9949]/25">
                    <img src="/icons/anota_ai.png" alt="Anota AI" className="w-8 h-8 object-contain" />
                  </span>
                  <div>
                    <p className="font-semibold text-white text-sm">Anota AI</p>
                    <p className="text-xs text-slate-500 mt-0.5">Cardápio online • pedido.anota.ai</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-600 group-hover:text-[#CA9949] transition-colors" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/5521976195529?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-4 transition-colors hover:border-[#CA9949]/50 hover:bg-[#CA9949]/8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CA9949]/15 text-[#CA9949] transition-colors group-hover:bg-[#CA9949]/25">
                    <WhatsappLogo size={24} weight="bold" />
                  </span>
                  <div>
                    <p className="font-semibold text-white text-sm">WhatsApp</p>
                    <p className="text-xs text-slate-500 mt-0.5">Fale direto com a gente</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-600 group-hover:text-[#CA9949] transition-colors" />
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/deusesolympus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-4 transition-colors hover:border-[#CA9949]/50 hover:bg-[#CA9949]/8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CA9949]/15 text-[#CA9949] transition-colors group-hover:bg-[#CA9949]/25">
                    <InstagramLogo size={24} weight="bold" />
                  </span>
                  <div>
                    <p className="font-semibold text-white text-sm">Instagram</p>
                    <p className="text-xs text-slate-500 mt-0.5">@deusesolympus</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-600 group-hover:text-[#CA9949] transition-colors" />
                </motion.a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
