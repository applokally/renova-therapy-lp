import { Header } from "@/components/renova/header";
import { Hero } from "@/components/renova/hero";
import { ProductsProtocolSection } from "@/components/renova/products-protocol-section";
import { ModelCtaSection } from "@/components/renova/model-cta-section";
import { BeforeAfterSection } from "@/components/renova/before-after-section";
import { PromoLeadSection } from "@/components/renova/promo-lead-section";
import { Footer } from "@/components/renova/footer";

const whatsappMessage =
  "Olá, estava vendo o Kit Renova Therapy na página de vendas e queria tirar algumas dúvidas.";

const whatsappUrl = `https://wa.me/5535999307836?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[linear-gradient(180deg,#f8f3ed_0%,#f3eee8_100%)]">
      <Header />
      <Hero />
      <ProductsProtocolSection />
      <ModelCtaSection />
      <BeforeAfterSection />
      <PromoLeadSection />
      <Footer />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp sobre o Kit Renova Therapy"
        className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_14px_35px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 md:bottom-7 md:right-7 md:h-16 md:w-16"
      >
        <img
          src="/whatsapp.svg"
          alt=""
          className="h-7 w-7 md:h-8 md:w-8"
        />
      </a>
    </main>
  );
}