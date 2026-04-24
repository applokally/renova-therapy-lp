"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const results = [
  { src: "/resultado01.png", alt: "Resultado real 01 Renova Therapy" },
  { src: "/resultado02.png", alt: "Resultado real 02 Renova Therapy" },
  { src: "/resultado03.png", alt: "Resultado real 03 Renova Therapy" },
  { src: "/resultado04.png", alt: "Resultado real 04 Renova Therapy" },
  { src: "/resultado05.png", alt: "Resultado real 05 Renova Therapy" },
];

const loopedResults = [...results, ...results];

export function BeforeAfterSection() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden bg-[#f6f2eb] px-6 py-20 md:px-10 lg:px-14 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-[900px] text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#9c7b5b]">
            Resultado de eficácia comprovado
          </p>

          <h2 className="mt-4 text-[32px] font-medium leading-[1.02] tracking-[-0.05em] text-[#241710] sm:text-[40px] md:text-[52px]">
            Resultados reais que devolvem confiança, fortalecem a autoestima e mostram a força do protocolo.
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-[linear-gradient(90deg,#f6f2eb_0%,rgba(246,242,235,0)_100%)] md:w-24 lg:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-[linear-gradient(270deg,#f6f2eb_0%,rgba(246,242,235,0)_100%)] md:w-24 lg:w-32" />

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max gap-6"
            >
              {loopedResults.map((item, index) => (
                <article
                  key={`${item.src}-${index}`}
                  className="relative w-[280px] shrink-0 overflow-hidden rounded-[28px] bg-white shadow-[0_18px_40px_rgba(34,23,15,0.08)] md:w-[340px] xl:w-[380px]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 280px, (max-width: 1280px) 340px, 380px"
                      className="object-cover"
                    />
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#kit"
            className="inline-flex items-center gap-3 rounded-full bg-[#241710] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9a7244] hover:shadow-[0_18px_35px_rgba(18,10,7,0.20)]"
          >
            <span>Leve este resultado para casa agora!</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}