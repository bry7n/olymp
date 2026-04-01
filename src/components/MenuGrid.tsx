"use client";

import { motion } from "framer-motion";
import { ArrowRight, Fire, ChartBar } from "@phosphor-icons/react";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "O Hambúrguer Zeus",
    desc: "Blend 160G, Farofa de Bacon, Queijo Mussarela e o famoso Molho de Cheddar.",
    type: "Destaque",
    img: "/burger_hero.png",
    col: "md:col-span-2",
    row: "md:row-span-2",
  },
  {
    id: 2,
    title: "Pizza Especial Olympus",
    desc: "Molho de tomate artesanal, Mussarela, Pernil Desfiado, Bacon Triturado, Cream Cheese, Barbecue, Cebola e Orégano.",
    type: "Fogo",
    img: "/pizza_apollo.png",
    col: "md:col-span-1",
    row: "md:row-span-2",
  },
  {
    id: 3,
    title: "Pizza de Confete",
    desc: "Deliciosa massa artesanal perfeitamente assada, coberta por abundante chocolate ao leite derretido e uma explosão de confetes coloridos e crocantes. A magia em forma de doce.",
    type: "Pizza Doce",
    img: "/pizza_confete.png",
    col: "md:col-span-3",
    row: "md:row-span-1",
  },
];

export function MenuGrid() {
  return (
    <section className="bg-[#050505] w-full py-24 md:py-32 px-4 relative">
      <div className="max-w-[1400px] mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl tracking-tighter text-white font-medium mb-4">
              O Banquete Principal
            </h2>
            <p className="text-slate-400 text-lg">
              Sem cardápios genéricos. Tudo aqui é desenhado para abalar o paladar.
            </p>
          </div>
          <a href="https://pedido.anota.ai/loja/olympus-delivery?f=ms" target="_blank" className="flex items-center gap-2 text-[#CA9949] font-medium group transition-all hover:text-white">
            Ver Todo o Cardápio
            <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ scale: 0.98 }}
              className={`glass-panel rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end ${item.col} ${item.row}`}
            >
              {/* Refraction effect background logic */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

              {/* Subtle hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-tr from-[#CA9949] to-transparent z-10"></div>

              {item.img && (
                <div className="absolute inset-0 w-full h-full z-0 transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className={`object-cover ${item.id === 1 ? 'object-[center_top]' : ''} opacity-80 mix-blend-lighten`}
                  />
                </div>
              )}

              <div className="relative z-20">
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 text-slate-300 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm max-w-[40ch] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
