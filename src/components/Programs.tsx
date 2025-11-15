export const Programs = () => {
  const programs = [
    {
      title: "INFANTIL",
      age: "6-10 AÑOS",
      description: "Desarrollo de habilidades básicas y amor por el juego",
      features: ["Técnica básica", "Coordinación", "Trabajo en equipo"]
    },
    {
      title: "JUVENIL",
      age: "11-15 AÑOS",
      description: "Perfeccionamiento técnico y táctico",
      features: ["Táctica avanzada", "Preparación física", "Mentalidad competitiva"]
    },
    {
      title: "PROFESIONAL",
      age: "16+ AÑOS",
      description: "Preparación para el fútbol de élite",
      features: ["Alto rendimiento", "Video análisis", "Nutrición deportiva"]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display mb-12 md:mb-16 animate-slide-up">
          PROGRAMAS
        </h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-5 bg-accent p-8 lg:p-12 brutalist-border border-white animate-slide-up">
            <div className="font-display text-4xl lg:text-5xl mb-4">{programs[0].title}</div>
            <div className="text-2xl lg:text-3xl font-display mb-6">{programs[0].age}</div>
            <p className="text-lg mb-6">{programs[0].description}</p>
            <ul className="space-y-2">
              {programs[0].features.map((feature, idx) => (
                <li key={idx} className="text-base">→ {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-7 bg-white text-primary p-8 lg:p-12 brutalist-border border-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="font-display text-4xl lg:text-5xl mb-4">{programs[1].title}</div>
            <div className="text-2xl lg:text-3xl font-display mb-6">{programs[1].age}</div>
            <p className="text-lg mb-6">{programs[1].description}</p>
            <ul className="space-y-2">
              {programs[1].features.map((feature, idx) => (
                <li key={idx} className="text-base">→ {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-12 bg-foreground text-background p-8 lg:p-12 brutalist-border border-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="font-display text-4xl lg:text-5xl mb-4">{programs[2].title}</div>
            <div className="text-2xl lg:text-3xl font-display mb-6">{programs[2].age}</div>
            <p className="text-lg mb-6">{programs[2].description}</p>
            <ul className="space-y-2">
              {programs[2].features.map((feature, idx) => (
                <li key={idx} className="text-base">→ {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="grid md:hidden grid-cols-1 gap-4">
          <div className="bg-accent p-6 brutalist-border border-white animate-slide-up">
            <div className="font-display text-3xl mb-3">{programs[0].title}</div>
            <div className="text-xl font-display mb-4">{programs[0].age}</div>
            <p className="text-base mb-4">{programs[0].description}</p>
            <ul className="space-y-2">
              {programs[0].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white text-primary p-6 brutalist-border border-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="font-display text-3xl mb-3">{programs[1].title}</div>
            <div className="text-xl font-display mb-4">{programs[1].age}</div>
            <p className="text-base mb-4">{programs[1].description}</p>
            <ul className="space-y-2">
              {programs[1].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-foreground text-background p-6 brutalist-border border-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="font-display text-3xl mb-3">{programs[2].title}</div>
            <div className="text-xl font-display mb-4">{programs[2].age}</div>
            <p className="text-base mb-4">{programs[2].description}</p>
            <ul className="space-y-2">
              {programs[2].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary font-display text-2xl md:text-3xl px-8 md:px-12 py-4 md:py-6 brutalist-border border-foreground hover-lift"
          >
            CONSULTA HORARIOS
          </a>
        </div>
      </div>
    </section>
  );
};
