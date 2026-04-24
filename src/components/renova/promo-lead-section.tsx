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
          <motion.div className="grid gap-4 border-y border-[#d4c2ad] py-5 md:grid-cols-3">
            {promoItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-4 px-2 py-3 text-[#241710] md:px-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c5a98c] bg-[#fffaf3] text-[#241710] shadow-sm">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <span>
                    <strong className="block text-[12px] uppercase tracking-[0.20em] text-[#241710]">
                      {item.title}
                    </strong>
                    <span className="text-[14px] text-[#5d493b]">
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
      <section className="relative w-full overflow-hidden bg-[#241710] md:min-h-0">
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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,8,0.10)_0%,rgba(18,11,8,0.18)_55%,rgba(18,11,8,0.46)_100%)]" />

        <div className="relative z-10 flex min-h-[760px] items-center py-16 md:absolute md:inset-0 md:min-h-0 md:py-0">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:grid-cols-[0.68fr_1.32fr] md:px-10 lg:px-14 xl:px-20">
            {/* TEXTO */}
            <motion.div className="max-w-[330px] text-left md:max-w-[360px]">
              <p className="text-xs uppercase tracking-widest text-white/78">
                Condições exclusivas
              </p>

              <h2 className="mt-4 text-[38px] leading-[1.08] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.28)] md:max-w-[8.5ch] md:text-[58px] lg:text-[64px]">
                <span className="block">Garanta as melhores promoções</span>
                <span className="block">do Renova Therapy.</span>
              </h2>

              <p className="mt-6 max-w-[28ch] text-base leading-relaxed text-white/86 drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]">
                Aproveite a condição especial para garantir o seu protocolo
                completo.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div className="ml-auto flex w-full max-w-[560px] flex-col gap-5 rounded-[28px] border border-white/16 bg-[#241710]/78 p-6 text-left shadow-2xl backdrop-blur-md md:p-7 lg:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-white/72">
                Kit Renova Therapy
              </p>

              <div>
                <p className="text-sm font-medium text-white/76">Por apenas</p>

                <p className="mt-2 text-[54px] leading-none text-white md:text-[64px]">
                  R$239,90
                </p>
              </div>

              <div className="grid gap-3 text-[15px] leading-relaxed text-white/86">
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/72" />
                  15% de desconto à vista no PIX.
                </p>

                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/72" />
                  Ou em até 3x sem juros no cartão.
                </p>

                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/72" />
                  Frete grátis.
                </p>
              </div>

              <a
                href="#"
                className="mt-2 inline-flex min-h-[58px] items-center justify-center rounded-full bg-white px-8 py-4 text-center text-[#241710] transition hover:bg-white/90"
              >
                Garantir agora mesmo o meu Kit
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}