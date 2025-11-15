import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
        <div className="w-full max-w-full animate-fade-in">
          <div className="brutalist-border border-white p-6 md:p-8 lg:p-10 bg-accent">
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8rem] font-display leading-[0.9] text-white mb-4">
              IMAFUT
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display text-white leading-tight">
              ACADEMIA DE FÚTBOL EN GUATEMALA
            </h2>
          </div>
          <p className="text-xl md:text-3xl lg:text-4xl font-display text-white mt-8 mb-8 animate-slide-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            ENTRENAMIENTO DE ÉLITE PARA TODAS LAS EDADES
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
