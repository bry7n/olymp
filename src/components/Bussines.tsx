"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, HandCoins, Vault } from "@phosphor-icons/react";

export function History() {
  return (
    <section id="historia" className="bg-[#050505] w-full py-32 px-4 border-t border-slate-900/50">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Imagem Temática sobre a placa / logo */}
          <div className="aspect-square bg-zinc-950 rounded-3xl border border-zinc-900 flex items-center justify-center overflow-hidden relative group drop-shadow-[0_20px_50px_rgba(202,153,73,0.15)]">
            <img
              src="/about_image.png"
              alt="Hambúrgueres Deuses do Olympus"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradiente sutil para garantir leitura da badge inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>

            <div className="absolute bottom-8 left-8 right-8 border-t border-zinc-800/80 pt-4 flex justify-between text-xs text-[#CA9949] font-medium z-10">
              <span>FUNDADO NAS SOMBRAS</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div id="about" className="flex items-center gap-3 text-[#CA9949] font-medium uppercase tracking-widest text-xs mb-8">
            <span className="h-[1px] w-6 bg-[#CA9949]"></span>
            Aí tudo começou
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-slate-100 mb-8 leading-[1.1]">
            Roubamos o fogo das panelas noturnas para moldar o{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#CA9949] to-[#b3853d] bg-clip-text text-transparent italic">
              Olimpo.
            </span>
          </h2>

          <div className="space-y-6 text-slate-400 leading-relaxed text-lg max-w-[55ch]">
            <p>
              O Deuses do Olympus nasceu não como mais uma hamburgueria, mas como uma obsessão inabalável pela perfeição. Foram anos testando o calor indomável das brasas, as proporções exatas dos cortes e o ponto divinal da carne, em um estudo incansável nos bastidores da gastronomia.
            </p>
            <p>
              O objetivo era apenas um: ascender. Deixar para trás as lanchonetes comuns e erguer um verdadeiro santuário onde a qualidade implacável dos ingredientes fosse a única regra. Uma busca incessante pelo umami e por uma experiência que merecesse ser chamada de mitológica.
            </p>
            <p>
              Assim forjamos as bases do nosso império gastronômico. Sem atalhos ou milagres. Apenas lenha estalando, força braçal, honra à arte da grelha e o domínio absoluto do fogo. Hoje, os imensos portões do Olimpo estão abertos para você.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Franchise() {
  return (
    <section className="bg-[#050505] w-full py-24 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[#0a0a0a] skew-y-[-2deg] transform origin-top-left -z-10"></div>

      <div className="max-w-[1400px] mx-auto flex flex-col items-center">

        <div className="text-center max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-[#CA9949] font-medium uppercase tracking-widest text-xs mb-6"
          >
            Invista no Panteão
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tighter text-slate-100 mb-6 leading-[1.1]"
          >
            A Hamburgueria Temática Que Mais Expande no Limiar dos Céus.
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-zinc-100 text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 mx-auto transition-colors hover:bg-white"
          >
            SEJA UM FRANQUEADO <ArrowUpRight weight="bold" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <MotionCard
            delay={0}
            title="Faturamento Médio"
            value="R$ 4mi"
            subtext="Anual por unidade. Varia consoante PIB da cidade."
            icon={<Vault size={32} weight="duotone" className="text-[#CA9949]" />}
          />
          <MotionCard
            delay={0.1}
            title="Lucro Estimado"
            value="22%"
            subtext="Alta margem sobre produtos de valor agregado."
            icon={<HandCoins size={32} weight="duotone" className="text-[#CA9949]" />}
          />
          <MotionCard
            delay={0.2}
            title="Investimento Inicial"
            value="R$ 450k"
            subtext="Modelagem completa, do projeto ao forno a lenha."
            icon={<ArrowUpRight size={32} weight="duotone" className="text-[#CA9949]" />}
          />
        </div>
      </div>
    </section>
  );
}

function MotionCard({ delay, title, value, subtext, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      whileHover={{ y: -5 }}
      className="glass-panel p-8 rounded-3xl flex flex-col gap-4 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-3 bg-zinc-900 rounded-2xl w-fit border border-zinc-800 relative z-10">
        {icon}
      </div>

      <div className="mt-4 relative z-10">
        <h4 className="text-sm font-medium text-slate-400 mb-1">{title}</h4>
        <div className="text-4xl font-black tracking-tighter text-white font-mono">{value}</div>
      </div>

      <p className="text-xs text-slate-500 mt-2 leading-relaxed relative z-10">{subtext}</p>
    </motion.div>
  );
}
