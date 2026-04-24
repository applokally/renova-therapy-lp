export function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Gostaria de saber mais sobre as landpages..."
  );

  const optimaWhatsappLink = `https://wa.me/5521920202614?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#241710] px-6 py-8 text-white md:px-10 lg:px-14 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-[13px] leading-6 text-white/70">
          © 2026 American Magic Hair. All rights reserved.
        </p>

        <a
          href={optimaWhatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-white/80 transition-colors duration-300 hover:text-[#d3ba6f]"
        >
          Criado por Optima Creative
        </a>
      </div>
    </footer>
  );
}