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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,8,0.08)_0%,rgba(18,11,8,0.18)_58%,rgba(18,11,8,0.58)_100%)] md:bg-[linear-gradient(90deg,rgba(18,11,8,0.18)_0%,rgba(18,11,8,0.04)_34%,rgba(18,11,8,0.06)_64%,rgba(18,11,8,0.16)_100%)]" />

        <div className="relative z-10 flex min-h-[760px] items-end py-10 md:absolute md:inset-0 md:min-h-0 md:items-center md:py-0">
          <div className="mx-auto grid w-full max-w-7xl items-end gap-7 px-6 md:grid-cols-[0.82fr_1.18fr] md:items-center md:px-10 lg:px-14 xl:px-20">
            {/* TEXTO */}
            <motion.div className="max-w-[360px] rounded-[24px] border border-white/12 bg-[#241710]/42 p-5 text-left backdrop-blur-[3px] md:self-end md:mb-12 md:max-w-[390px] md:bg-[#241710]/30 md:p-6 lg:mb-16">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/76">
                Condições exclusivas
              </p>

              <h2 className="mt-3 text-[34px] leading-[1.05] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)] md:text-[42px] lg:text-[48px]">
                Garanta as melhores promoções do Renova Therapy.
              </h2>

              <p className="mt-4 max-w-[31ch] text-[15px] leading-relaxed text-white/84 drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]">
                Aproveite a condição especial para garantir o seu protocolo
                completo.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div className="ml-auto flex w-full max-w-[500px] flex-col rounded-[28px] border border-[#e7d9c8] bg-[#f6f2eb]/94 p-6 text-left shadow-[0_24px_70px_rgba(36,23,16,0.22)] backdrop-blur-md md:p-7 lg:max-w-[520px] lg:p-8">
              <p className="text-[12px] uppercase tracking-[0.24em] text-[#8d6b50]">
                Kit Renova Therapy
              </p>

              <div className="mt-5">
                <p className="text-sm font-medium text-[#6a5545]">
                  Por apenas
                </p>

                <p className="mt-1 text-[50px] leading-none text-[#241710] md:text-[60px] lg:text-[64px]">
                  R$239,90
                </p>
              </div>

              <div className="mt-6 grid gap-3 text-[15px] leading-relaxed text-[#4f3c30]">
                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b7857]" />
                  15% de desconto à vista no PIX.
                </p>

                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b7857]" />
                  Ou em até 3x sem juros no cartão.
                </p>

                <p className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b7857]" />
                  Frete grátis.
                </p>
              </div>

              <a
                href="#"
                className="mt-7 inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#241710] px-8 py-4 text-center text-white transition hover:bg-[#3a271c]"
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