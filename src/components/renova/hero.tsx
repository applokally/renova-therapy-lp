"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const heroItems = [
  "SHAMPOO",
  "CONDICIONADOR",
  "TÔNICO CAPILAR",
  "SUPLEMENTO GUMMY",
];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[820px] w-full overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          className="object-cover object-[70%_center] md:object-center"
        />
      </div>

      {/* MOBILE GRADIENT */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,11,8,0.05)_0%,rgba(17,11,8,0.25)_50%,rgba(17,11,8,0.75)_100%)] md:hidden" />

      {/* DESKTOP OVERLAY */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(17,11,8,0.18)_0%,rgba(17,11,8,0.08)_24%,rgba(17,11,8,0.16)_100%)] md:block" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(17,11,8,0.26)_0%,rgba(17,11,8,0.18)_20%,rgba(17,11,8,0.07)_42%,rgba(17,11,8,0.10)_100%)] md:block" />

      {/* ===== DESKTOP ===== */}
      <div className="relative z-20 hidden h-full w-full items-center justify-center md:flex">
        <div className="grid w-full grid-cols-1 items-center gap-10 px-6 md:px-10 lg:grid-cols-[1fr_260px] lg:px-14 xl:px-20">

          <motion.div className="flex flex-col items-start text-left lg:pl-8 xl:pl-12">
            <p className="text-[12px] uppercase tracking-[0.30em] text-white/88">
              PROTOCOLO DE FORA PARA DENTRO E DE DENTRO PARA FORA
            </p>

            <h1 className="mt-6 leading-[0.95] text-white">
              <span className="block text-[46px] lg:text-[58px] xl:text-[66px]">
                Elimine a <strong>queda capilar</strong>
              </span>
              <span className="block text-[46px] lg:text-[58px] xl:text-[66px]">
                durante o <strong>processo de</strong>
              </span>
              <span className="block text-[46px] lg:text-[58px] xl:text-[66px]">
                <strong>emagrecimento.</strong>
              </span>
            </h1>

            <p className="mt-8 max-w-[760px] text-[20px] leading-relaxed text-white/88">
              Conheça o Kit Renova Therapy e descubra uma rotina completa para reduzir drasticamente a queda, fortalecer os fios e devolver mais vitalidade ao cabelo.
            </p>
          </motion.div>

          <motion.aside className="mx-auto mt-16 w-full max-w-[260px] lg:mt-28 lg:justify-self-end xl:mt-32">
            <div className="overflow-hidden rounded-[22px] shadow-[0_18px_48px_rgba(18,10,7,0.22)] backdrop-blur-sm">

              <div className="relative aspect-square">
                <Image src="/renovatherapykit.png" alt="" fill className="rounded-t-[22px] object-cover" />
              </div>

              <div className="rounded-b-[22px] bg-[rgba(249,241,232,0.96)] px-5 py-5">

                <p className="text-[11px] uppercase tracking-[0.22em] text-[#9d7b5c]">
                  KIT COMPLETO
                </p>

                <h2 className="mt-2 text-[18px] font-medium text-[#241710]">
                  Renova Therapy
                </h2>

                <div className="mt-4">
                  <p className="text-[13px] uppercase tracking-[0.18em] text-[#9d7b5c]">
                    Valor do kit
                  </p>

                  <p className="mt-1 text-[26px] font-semibold tracking-[-0.03em] text-[#241710]">
                    R$239,90
                  </p>

                  <div className="mt-4 space-y-2 border-t border-[#e6d9c9] pt-4">
                    <p className="text-[13px] text-[#4b392d]">
                      <strong>15% OFF no PIX</strong>
                    </p>

                    <p className="text-[13px] text-[#4b392d]">
                      ou <strong>3x sem juros</strong> no cartão
                    </p>

                    <p className="text-[12px] uppercase tracking-[0.12em] text-[#9d7b5c]">
                      FRETE GRÁTIS
                    </p>
                  </div>
                </div>

                <a
                  href="https://pagar.vindi.com.br/f0c69fdf39539221dfbb8109d7bc67641bc9e233"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#241710] px-5 py-3 text-[12px] text-white"
                >
                  Adquirir Kit
                  <ArrowRight className="h-4 w-4" />
                </a>

              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="relative z-30 flex h-full flex-col justify-center px-5 pb-[160px] pt-[120px] text-white md:hidden">

        <div className="max-w-[320px]">
          <p className="text-[12px] uppercase tracking-[0.28em] text-white/85">
            PROTOCOLO DE FORA PARA DENTRO E DE DENTRO PARA FORA
          </p>

          <h1 className="mt-3 text-[28px] font-semibold leading-[1.05]">
            Elimine a <strong>queda capilar</strong><br />
            durante o processo<br />
            de <strong>emagrecimento</strong>.
          </h1>

          <p className="mt-4 text-[16px] leading-relaxed text-white/85">
            Conheça o Kit Renova Therapy e descubra uma rotina completa para reduzir drasticamente a queda, fortalecer os fios e devolver mais vitalidade ao cabelo.
          </p>
        </div>

        {/* CARD MOBILE */}
        <div className="absolute bottom-[105px] left-0 right-0 px-3">
          <div className="flex overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]">

            <div className="relative min-w-[95px] w-[95px]">
              <Image src="/renovatherapykit.png" alt="" fill className="object-cover" />
            </div>

            <div className="flex flex-1 items-center justify-between gap-2 px-3 py-3">

              <div className="flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#9d7b5c]">
                  KIT COMPLETO
                </p>

                <h3 className="text-[14px] text-[#241710]">
                  Renova Therapy
                </h3>

                <span className="text-[18px] font-semibold text-[#241710]">
                  R$239,90
                </span>

                <p className="text-[11px] text-[#4b392d]">
                  <strong>15% OFF PIX</strong> ou 3x sem juros
                </p>

                <p className="text-[10px] uppercase text-[#9d7b5c]">
                  FRETE GRÁTIS
                </p>
              </div>

              <a
                href="https://pagar.vindi.com.br/f0c69fdf39539221dfbb8109d7bc67641bc9e233"
                className="rounded-full bg-[#241710] px-3 py-2 text-[11px] text-white"
              >
                Comprar →
              </a>

            </div>
          </div>
        </div>

      </div>

      {/* STRIP */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="grid grid-cols-2 border-t border-white/20 px-4 py-3 text-white md:grid-cols-4 md:px-10">
          {heroItems.map((item) => (
            <div key={item} className="flex justify-center text-[10px] uppercase tracking-[0.16em]">
              {item}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}