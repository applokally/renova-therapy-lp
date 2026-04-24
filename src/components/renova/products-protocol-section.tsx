"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const highlights = [
  "Atuação de fora para dentro e de dentro para fora",
  "Rotina completa para queda capilar pós-emagrecimento",
  "Ativos com percepção de força, reconstrução e crescimento",
];

const productCards = [
  {
    title: "Shampoo Purificante Antiqueda",
    image: "/shampoo.png",
    description:
      "Limpeza estratégica para o couro cabeludo, ajudando a equilibrar a raiz e sustentar uma rotina com foco em redução da queda capilar.",
    bullets: [
      "Niacinamida para equilíbrio da oleosidade e fortalecimento da raiz",
      "Cafeína para estímulo de crescimento e energia para os fios",
      "Jaborandi como ativo natural antiqueda",
    ],
  },
  {
    title: "Condicionador Intense Reconstrutor",
    image: "/condicionador.png",
    description:
      "Reconstrução, selagem e resistência para fios sensibilizados, com menos quebra, menos frizz e mais brilho.",
    bullets: [
      "Proteína do arroz para força e elasticidade",
      "Queratina para reconstrução profunda dos fios",
      "Ceramidas, óleo de rícino e argan para selagem, nutrição e maciez",
    ],
  },
  {
    title: "Tônico Capilar 7 Extratos de Ervas",
    image: "/tonico.png",
    description:
      "Ação direta no couro cabeludo com ativos voltados ao fortalecimento da raiz e à percepção de crescimento capilar.",
    bullets: [
      "Niacinamida e cafeína para fortalecimento e estímulo",
      "Biotina e D-pantenol para resistência, hidratação e equilíbrio",
      "Sete ervas e vitamina A para renovação e suporte ao crescimento",
    ],
  },
  {
    title: "Suplemento Gummy Sabor Morango",
    image: "/goma.png",
    description:
      "O complemento de dentro para fora do protocolo, trazendo praticidade e reforçando a proposta de cuidado completo.",
    bullets: [
      "Parte interna do protocolo Renova Therapy",
      "Formato gummy, prático para o dia a dia",
      "Complemento estratégico da rotina antiqueda",
    ],
  },
];

export function ProductsProtocolSection() {
  return (
    <section
      id="protocolo"
      className="relative bg-[#f6f2eb] px-6 py-20 md:px-10 lg:px-14 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOPO */}
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">

          <motion.div className="max-w-[680px]">
            <h2 className="text-[34px] font-medium leading-[1.04] tracking-[-0.05em] text-[#241710] sm:text-[42px] md:text-[56px]">
              Protocolo capilar que reduz drasticamente a queda capilar, no processo de emagrecimento.
            </h2>

            <p className="mt-6 max-w-[58ch] text-[16px] leading-8 text-[#5e4a3c] md:text-[18px]">
              O protocolo Renova Therapy combina limpeza inteligente, reconstrução,
              ação tópica no couro cabeludo e complemento interno em gummy para
              construir uma rotina mais coerente, completa e persuasiva.
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map((item) => (
                <div key={item} className="grid grid-cols-[36px_1fr] gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#241710] text-white">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-[15px] leading-7 text-[#3d2c20] md:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGEM KIT */}
          <motion.div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px]">

              {/* MOBILE */}
              <div className="relative w-full md:hidden">
                <Image
                  src="/kitrenova2.png"
                  alt="Kit Renova Therapy"
                  width={900}
                  height={900}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* DESKTOP */}
              <div className="hidden md:block relative h-[75vh] min-h-[420px] max-h-[760px]">
                <Image
                  src="/kitrenova2.png"
                  alt="Kit Renova Therapy"
                  fill
                  className="object-contain rounded-[28px]"
                />
              </div>

            </div>
          </motion.div>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[24px] border border-[#eadfce] bg-white shadow-sm"
            >

              {/* IMAGEM */}
              <div className="w-full">

                {/* MOBILE → GRANDE, SEM CORTE, SEM MARGEM */}
                <div className="block md:hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={900}
                    height={900}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* DESKTOP */}
                <div className="hidden md:block relative h-[360px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

              </div>

              {/* TEXTO */}
              <div className="px-5 py-6">

                <h4 className="text-[20px] md:text-[22px] font-medium leading-tight text-[#241710]">
                  {card.title}
                </h4>

                <p className="mt-4 text-[14px] md:text-[15px] leading-7 text-[#5c493b]">
                  {card.description}
                </p>

                <div className="mt-6 border-t border-[#efe6da] pt-5 space-y-3">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3">
                      <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-[#b38a57]" />
                      <p className="text-[13px] md:text-[14px] leading-6 text-[#3f2f24]">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}