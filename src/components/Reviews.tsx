"use client";

import { motion } from "framer-motion";
import { Star, UserCircle, StarHalf } from "@phosphor-icons/react";

const REVIEWS = [
  {
    name: "Carlos Eduardo Silva",
    time: "um mês atrás",
    rating: 5,
    text: "Experiência sensacional! O hambúrguer artesanal é de outro mundo, você sente o sabor impecável da lenha. A temática dos Deuses gregos deixa tudo mais incrível no salão.",
    avatar: "C"
  },
  {
    name: "Mariana Costa",
    time: "2 meses atrás",
    rating: 5,
    text: "Melhor pizzaria e hamburgueria de Teresópolis, sem dúvidas. O atendimento é rápido mesmo quando a casa está cheia e a pizza de massa de longa fermentação é perfeita.",
    avatar: "M"
  },
  {
    name: "Rafael Nogueira",
    time: "3 semanas atrás",
    rating: 5,
    text: "O ambiente é espetacular. Pedi o 'Zeus Burger' e a carne veio no ponto exato, muito suculenta. Preço justo pela qualidade premium que oferecem. Recomendo demais!",
    avatar: "R"
  },
  {
    name: "Juliana Mendes",
    time: "4 meses atrás",
    rating: 5,
    text: "Fiquei surpresa com o capricho da embalagem no delivery. A fumaça e o sabor chegam intactos em casa. Peço toda sexta-feira e nunca me decepcionaram.",
    avatar: "J"
  },
  {
    name: "Thiago Almeida",
    time: "um mês atrás",
    rating: 5,
    text: "Uma verdadeira viagem ao Olimpo. Atendimento cordial, cervejas sempre trincando e os defumados da casa dão um toque exclusivo que você não acha em nenhum outro lugar.",
    avatar: "T"
  },
  {
    name: "Bruna Oliveira",
    time: "2 meses atrás",
    rating: 5,
    text: "Lugar familiar, música boa (rock na medida certa) e a pizza de confete é a melhor forma de terminar a refeição. As crianças amaram e nós também. Cinco estrelas com louvor!",
    avatar: "B"
  }
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-[#050505] w-full py-32 px-4 border-t border-slate-900/50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#CA9949] font-medium uppercase tracking-widest text-xs mb-4">
            A Voz dos Mortais
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-slate-100 mb-6 leading-[1.1]">
            O que dizem sobre o{" "}
            <span className="bg-gradient-to-r from-[#CA9949] to-[#b3853d] bg-clip-text text-transparent italic">
              Olympus
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 text-slate-300">
            <div className="font-medium text-4xl">4.9</div>
            <div className="flex flex-col items-start gap-1">
              <div className="flex text-[#CA9949]">
                <Star weight="fill" size={20} />
                <Star weight="fill" size={20} />
                <Star weight="fill" size={20} />
                <Star weight="fill" size={20} />
                <Star weight="fill" size={20} />
              </div>
              <span className="text-xs text-slate-500">Avaliações do Google</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index }: { review: any, index: number }) {
  // Cores inspiradas nas iniciais do Google
  const colors = [
    "bg-red-900 text-red-100",
    "bg-blue-900 text-blue-100",
    "bg-green-900 text-green-100",
    "bg-purple-900 text-purple-100",
    "bg-orange-900 text-orange-100",
    "bg-teal-900 text-teal-100"
  ];

  const avatarColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-4"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium ${avatarColor}`}>
          {review.avatar}
        </div>
        <div className="flex flex-col">
          <span className="text-slate-200 font-medium text-sm">{review.name}</span>
          <span className="text-slate-500 text-xs">{review.time}</span>
        </div>
      </div>

      <div className="flex gap-1 text-[#CA9949]">
        {[...Array(5)].map((_, i) => (
          <Star key={i} weight={i < review.rating ? "fill" : "regular"} size={16} />
        ))}
      </div>

      <p className="text-slate-400 text-sm leading-relaxed">
        "{review.text}"
      </p>
    </motion.div>
  );
}
