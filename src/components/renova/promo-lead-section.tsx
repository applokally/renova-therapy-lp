"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgePercent,
  ChevronDown,
  CreditCard,
  Truck,
} from "lucide-react";

const promoItems = [
  {
    icon: CreditCard,
    title: "Parcele em até 3x sem juros",
    description: "Facilite sua rotina de cuidado completo.",
  },
  {
    icon: BadgePercent,
    title: "15% de desconto no PIX",
    description: "Garanta o melhor valor na compra à vista.",
  },
  {
    icon: Truck,
    title: "Frete grátis",
    description: "Receba seu protocolo com condição especial.",
  },
];

const faqItems = [
  {
    category: "Produto",
    question: "O que vem no Kit Protocolo Renova Therapy?",
    answer:
      "O kit reúne shampoo, condicionador, tônico capilar e suplemento gummy.",
  },
  {
    category: "Produto",
    question: "Preciso usar os quatro produtos juntos?",
    answer: "Sim. O protocolo funciona com a combinação completa.",
  },
  {
    category: "Princípios ativos",
    question: "Quais ativos se destacam?",
    answer: "Niacinamida, cafeína, biotina, queratina e extratos naturais.",
  },
  {
    category: "Eficácia",
    question: "Para quem é indicado?",
    answer: "Para quem sofre com queda capilar durante emagrecimento.",
  },
  {
    category: "Resultado",
    question: "Em quanto tempo vejo resultados?",
    answer: "Depende da constância e do organismo.",
  },
  {
    category: "Venda",
    question: "Quais promoções estão disponíveis?",
    answer: "3x sem juros, 15% no PIX e frete grátis.",
  },
  {
    category: "Entrega",
    question: "Como funciona o envio?",
    answer: "Envio conforme região após confirmação.",
  },
];

function FaqItem({ category, question, answer, isOpen, onToggle }: any) {
  return (
    <div className="border-b border-[#ded1c0]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full justify-between gap-6 py-6 text-left"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-[#9b7857]">
            {category}
          </p>
          <p className="mt-2 text-xl text-[#241710]">{question}</p>
        </div>

        <ChevronDown
          className={`text-[#241710] transition ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && <p className="pb-6 text-[#5d493b]">{answer}</p>}
    </div>
  );
}

export function PromoLeadSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="bg-[#f6f2eb] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-tight text-[#241710]">
                Perguntas frequentes
              </h2>
            </div>

            <div>
              {faqItems.map((item, i) => (
                <FaqItem
                  key={i}
                  {...item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f2eb] px-6 pb-10 md:px-10 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div className="grid gap-4 border-y border-[#cdb9a1] py-5 md:grid-cols-3">
            {promoItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-4 px-2 py-3 text-[#241710] md:px-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b99673] bg-[#fffaf3] text-[#241710] shadow-sm">
                    <Icon size={19} strokeWidth={2} />
                  </span>

                  <span>
                    <strong className="block text-[12px] uppercase tracking-[0.20em] text-[#241710]">
                      {item.title}
                    </strong>
                    <span className="text-[14px] text-[#4f3c30]">
                      {item.description}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* BLOCO FINAL */}
      <section className="relative w-full overflow-hidden bg-[#241710]">
        {/* DESKTOP */}
        <img
          src="/final.png"
          alt=""
          className="hidden h-auto w-full object-contain md:block"
        />

        {/* MOBILE BG */}
        <img
          src="/final.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
        />

        {/* OVERLAY 15% */}
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 min-h-[760px] md:absolute md:inset-0 md:min-h-0">
          {/* TEXTO SUPERIOR */}
          <motion.div className="absolute left-1/2 top-[8%] w-full max-w-[920px] -translate-x-1/2 px-6 text-center md:top-[7%]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-xs">
              Condições exclusivas
            </p>

            <h2 className="mx-auto mt-3 max-w-[820px] text-[30px] leading-[1.08] text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.42)] md:text-[42px] lg:text-[50px]">
              Garanta as melhores promoções
              <span className="block">do Renova Therapy.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.38)] md:text-base">
              Aproveite a condição especial para garantir o seu protocolo completo.
            </p>
          </motion.div>

          {/* CTA CENTRAL INFERIOR */}
          <motion.div className="absolute bottom-[7%] left-1/2 flex w-full max-w-[620px] -translate-x-1/2 flex-col items-center px-6 text-center md:bottom-[8%]">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/86 drop-shadow-[0_2px_10px_rgba(0,0,0,0.38)] md:text-xs">
              Kit Renova Therapy
            </p>

            <p className="mt-4 text-sm font-medium text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.38)]">
              Por apenas
            </p>

            <p className="mt-1 text-[52px] leading-none text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.48)] md:text-[68px] lg:text-[76px]">
              R$239,90
            </p>

            <div className="mt-5 flex flex-col items-center gap-2 text-[14px] leading-relaxed text-white/92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.42)] md:text-[15px]">
              <p>15% de desconto à vista no PIX.</p>
              <p>Ou em até 3x sem juros no cartão + frete grátis.</p>
            </div>

            <a
              href="#"
              className="mt-7 inline-flex min-h-[54px] w-full max-w-[480px] items-center justify-center rounded-full bg-white px-8 py-4 text-center text-[#241710] shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition hover:bg-white/90"
            >
              Garantir agora mesmo o meu Kit
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}