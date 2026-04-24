"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { renovaContent } from "@/data/renova-content";

const navItems = [
  { label: "Protocolo", href: "#protocolo" },
  { label: "Ativos", href: "#ativos" },
  { label: "Kit", href: "#kit" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-5 pt-6 md:px-8 md:pt-8 lg:px-10">
        
        {/* HEADER BAR */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 md:pb-5">
          
          {/* LOGO */}
          <a
            href="#topo"
            className="relative block h-[48px] w-[160px] shrink-0 md:h-[70px] md:w-[230px]"
          >
            <Image
              src="/logo.png"
              alt={`${renovaContent.brand.name} ${renovaContent.brand.line}`}
              fill
              priority
              className="object-contain object-left"
            />
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] font-medium uppercase tracking-[0.20em] text-white transition-all duration-300 hover:text-white/70"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <a
            href="#protocolo"
            className="hidden lg:inline-flex items-center text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 hover:text-white/70 group"
          >
            <span>Conheça o protocolo</span>
            <span className="ml-3 h-px w-8 bg-white transition-all duration-300 group-hover:w-12" />
          </a>

          {/* MENU MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* OVERLAY BACKDROP (clicar fora fecha) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* MENU MOBILE */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-50 flex flex-col ${
          open ? "pointer-events-auto" : "pointer-events-none"
        } lg:hidden`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10 bg-[#120b08]/95 backdrop-blur-xl px-6 text-center">
          
          {/* BOTÃO FECHAR EXPLÍCITO */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-white"
          >
            <X size={28} />
          </button>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[16px] font-medium uppercase tracking-[0.20em] text-white transition-all duration-300 hover:text-white/70"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#protocolo"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            Conheça o protocolo
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}