import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl animate-fade-in">
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8rem] font-display leading-[0.9] text-white mb-6 brutalist-border border-white p-4 bg-accent">
            IMAFUT
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl font-display text-white mb-8 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            ACADEMIA DE FÚTBOL
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Entrenamiento de élite para jugadores de todas las edades. Desarrollamos talento, forjamos campeones.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary font-display text-2xl md:text-3xl px-8 md:px-12 py-4 md:py-6 brutalist-border border-primary hover-lift animate-slide-up"
            style={{ animationDelay: '0.6s', opacity: 0 }}
          >
            ÚNETE AHORA
          </a>
        </div>
      </div>
    </section>
  );
};
