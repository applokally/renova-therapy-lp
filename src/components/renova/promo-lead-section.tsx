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
    title: "10% de desconto no PIX",
    description: "Garanta o melhor valor na compra à vista.",
  },
  {
    icon: Truck,
    title: "Frete grátis para Sul e Sudeste",
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
    answer: "3x sem juros, 10% no PIX e frete grátis.",
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

        <ChevronDown className={`transition ${isOpen ? "rotate-180" : ""}`} />
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
          <motion.div className="grid gap-4 border-y border-[#ded1c0] py-5 md:grid-cols-3">
            {promoItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-4 px-2 py-3 md:px-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9c8b5]">
                    <Icon size={18} />
                  </span>

                  <span>
                    <strong className="block text-[12px] uppercase tracking-[0.20em] text-[#241710]">
                      {item.title}
                    </strong>
                    <span className="text-[14px] text-[#6a5545]">
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

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,11,8,0.10)_0%,rgba(18,11,8,0.14)_55%,rgba(18,11,8,0.34)_100%)]" />

        <div className="relative z-10 flex min-h-[760px] items-center py-16 md:absolute md:inset-0 md:min-h-0 md:py-0">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 xl:px-20">

            {/* TEXTO */}
            <motion.div className="text-center md:text-left">

              <p className="text-xs uppercase tracking-widest text-white/72">
                Condições exclusivas
              </p>

              {/* MOBILE CORRETO EM 2 LINHAS FIXAS */}
              <h2 className="mt-4 text-[34px] leading-[1.1] text-white md:text-6xl md:max-w-[13ch]">
                <span className="block">Garanta as melhores promoções</span>
                <span className="block">do Renova Therapy.</span>
              </h2>

              <p className="mt-6 text-base text-white/78 md:max-w-[46ch]">
                Preencha seus dados para receber ofertas antes de todo mundo.
              </p>

            </motion.div>

            {/* FORM */}
            <motion.form className="flex flex-col gap-5 rounded-[28px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-md md:p-8">
              <input placeholder="Seu nome" className="border-b bg-transparent py-4 text-white" />
              <input placeholder="Seu e-mail" className="border-b bg-transparent py-4 text-white" />
              <input placeholder="WhatsApp com DDD" className="border-b bg-transparent py-4 text-white" />

              <button className="mt-3 rounded-full bg-white px-8 py-4 text-[#241710]">
                Enviar
              </button>
            </motion.form>

          </div>
        </div>
      </section>
    </>
  );
}