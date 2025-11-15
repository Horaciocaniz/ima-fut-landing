export const Programs = () => {
  const programs = [
    {
      title: "PRE-INFANTIL",
      age: "4-6 AÑOS",
      description: "Iniciación al fútbol con juegos y diversión",
      features: ["Motricidad básica", "Socialización", "Juego recreativo"]
    },
    {
      title: "INFANTIL",
      age: "7-9 AÑOS",
      description: "Desarrollo de habilidades básicas y amor por el juego",
      features: ["Técnica básica", "Coordinación", "Trabajo en equipo"]
    },
    {
      title: "PRE-JUVENIL",
      age: "10-12 AÑOS",
      description: "Transición hacia el fútbol competitivo",
      features: ["Fundamentos tácticos", "Disciplina deportiva", "Competencia formativa"]
    },
    {
      title: "JUVENIL",
      age: "13-15 AÑOS",
      description: "Perfeccionamiento técnico y táctico",
      features: ["Táctica avanzada", "Preparación física", "Mentalidad competitiva"]
    },
    {
      title: "SUB-17",
      age: "16-17 AÑOS",
      description: "Preparación pre-profesional intensiva",
      features: ["Entrenamiento intensivo", "Análisis táctico", "Preparación mental"]
    },
    {
      title: "PROFESIONAL",
      age: "18+ AÑOS",
      description: "Preparación para el fútbol de élite",
      features: ["Alto rendimiento", "Video análisis", "Nutrición deportiva"]
    }
  ];

  return (
    <section id="programs" className="py-20 md:py-32 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display mb-12 md:mb-16 animate-slide-up">
          PROGRAMAS
        </h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-4 bg-accent p-6 lg:p-8 brutalist-border border-white animate-slide-up">
            <div className="font-display text-3xl lg:text-4xl mb-3">{programs[0].title}</div>
            <div className="text-xl lg:text-2xl font-display mb-4">{programs[0].age}</div>
            <p className="text-base mb-4">{programs[0].description}</p>
            <ul className="space-y-1">
              {programs[0].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-8 bg-white text-primary p-6 lg:p-8 brutalist-border border-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="font-display text-3xl lg:text-4xl mb-3">{programs[1].title}</div>
            <div className="text-xl lg:text-2xl font-display mb-4">{programs[1].age}</div>
            <p className="text-base mb-4">{programs[1].description}</p>
            <ul className="space-y-1">
              {programs[1].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-7 bg-foreground text-background p-6 lg:p-8 brutalist-border border-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="font-display text-3xl lg:text-4xl mb-3">{programs[2].title}</div>
            <div className="text-xl lg:text-2xl font-display mb-4">{programs[2].age}</div>
            <p className="text-base mb-4">{programs[2].description}</p>
            <ul className="space-y-1">
              {programs[2].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-5 bg-accent p-6 lg:p-8 brutalist-border border-white animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="font-display text-3xl lg:text-4xl mb-3">{programs[3].title}</div>
            <div className="text-xl lg:text-2xl font-display mb-4">{programs[3].age}</div>
            <p className="text-base mb-4">{programs[3].description}</p>
            <ul className="space-y-1">
              {programs[3].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-5 bg-white text-primary p-6 lg:p-8 brutalist-border border-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="font-display text-3xl lg:text-4xl mb-3">{programs[4].title}</div>
            <div className="text-xl lg:text-2xl font-display mb-4">{programs[4].age}</div>
            <p className="text-base mb-4">{programs[4].description}</p>
            <ul className="space-y-1">
              {programs[4].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-7 bg-foreground text-background p-6 lg:p-8 brutalist-border border-white animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="font-display text-3xl lg:text-4xl mb-3">{programs[5].title}</div>
            <div className="text-xl lg:text-2xl font-display mb-4">{programs[5].age}</div>
            <p className="text-base mb-4">{programs[5].description}</p>
            <ul className="space-y-1">
              {programs[5].features.map((feature, idx) => (
                <li key={idx} className="text-sm">→ {feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          {programs.map((program, idx) => (
            <div 
              key={program.title}
              className={`p-5 brutalist-border animate-slide-up ${
                idx % 3 === 0 ? 'bg-accent border-white text-white' :
                idx % 3 === 1 ? 'bg-white border-foreground text-primary' :
                'bg-foreground border-white text-background'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="font-display text-2xl mb-2">{program.title}</div>
              <div className="text-lg font-display mb-3">{program.age}</div>
              <p className="text-xs mb-3">{program.description}</p>
              <ul className="space-y-1">
                {program.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="text-xs">→ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
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
