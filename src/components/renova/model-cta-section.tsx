"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ModelCtaSection() {
  return (
    <section id="resultado" className="relative h-screen min-h-[760px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/modelo.png"
          alt="Modelo Renova Therapy"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,11,8,0.82)_0%,rgba(18,11,8,0.72)_14%,rgba(18,11,8,0.58)_28%,rgba(18,11,8,0.38)_40%,rgba(18,11,8,0.18)_50%,rgba(18,11,8,0.00)_100%)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex min-h-[68vh] max-w-[50vw] min-w-[320px] flex-col justify-center py-10 md:min-h-[70vh] md:py-14"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/82 sm:text-[12px]">
              <span className="block">Recupere sua confiança</span>
              <span className="block">fio após fio</span>
            </p>

            <h2 className="mt-5 font-medium leading-[0.96] tracking-[-0.05em] text-white">
              <span className="block text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[58px]">
                Agora você não precisa
              </span>
              <span className="block text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[58px]">
                sofrer com queda capilar
              </span>
              <span className="block text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[58px]">
                durante o seu processo
              </span>
              <span className="block text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[58px]">
                de emagrecimento.
              </span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-[16px] leading-8 text-white/86 md:text-[18px]">
              O protocolo Renova Therapy foi pensado para quem quer reduzir drasticamente a queda,
              fortalecer os fios e manter a autoestima em alta durante a transformação do corpo.
            </p>

            <a
              href="https://pagar.vindi.com.br/f0c69fdf39539221dfbb8109d7bc67641bc9e233"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#241710] px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9a7244] hover:shadow-[0_18px_35px_rgba(18,10,7,0.28)] md:px-7"
            >
              <span>Obter Kit Renova Therapy</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}