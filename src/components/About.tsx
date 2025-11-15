export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-7 bg-primary text-white p-8 md:p-12 brutalist-border border-foreground animate-slide-up">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display mb-6">
              SOBRE NOSOTROS
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              IMAFUT es más que una academia de fútbol. Somos un centro de excelencia donde jóvenes talentos transforman su pasión en habilidad profesional.
            </p>
          </div>
          
          <div className="md:col-span-5 bg-accent text-white p-8 md:p-12 brutalist-border border-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-6xl md:text-8xl font-display mb-4">500+</div>
            <p className="text-xl md:text-2xl font-display">JUGADORES</p>
          </div>
          
          <div className="md:col-span-4 bg-white text-primary p-8 md:p-10 brutalist-border border-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl md:text-7xl font-display mb-4">15</div>
            <p className="text-lg md:text-xl font-display">AÑOS DE EXPERIENCIA</p>
          </div>
          
          <div className="md:col-span-8 bg-foreground text-background p-8 md:p-12 brutalist-border border-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-3xl md:text-5xl font-display mb-6">NUESTRA MISIÓN</h3>
            <p className="text-base md:text-lg leading-relaxed">
              Formar jugadores integrales con excelencia técnica, táctica y valores deportivos. Nuestro enfoque combina metodología profesional con atención personalizada para cada jugador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
