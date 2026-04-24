import { Header } from "@/components/renova/header";
import { Hero } from "@/components/renova/hero";
import { ProductsProtocolSection } from "@/components/renova/products-protocol-section";
import { ModelCtaSection } from "@/components/renova/model-cta-section";
import { BeforeAfterSection } from "@/components/renova/before-after-section";
import { PromoLeadSection } from "@/components/renova/promo-lead-section";
import { Footer } from "@/components/renova/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8f3ed_0%,#f3eee8_100%)]">
      <Header />
      <Hero />
      <ProductsProtocolSection />
      <ModelCtaSection />
      <BeforeAfterSection />
      <PromoLeadSection />
      <Footer />
    </main>
  );
}