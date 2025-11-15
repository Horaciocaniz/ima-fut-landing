import proximaSedeImage from "@/assets/proxima-sede.jpg";

export const ProximaSede = () => {
  return (
    <section id="proxima-sede" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground mb-12 md:mb-16 animate-slide-up">
          PRÓXIMA SEDE
        </h2>

        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          {/* Image */}
          <div className="md:col-span-7 animate-slide-up">
            <div 
              className="h-[300px] md:h-[500px] lg:h-[600px] brutalist-border border-foreground"
              style={{
                backgroundImage: `url(${proximaSedeImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>

          {/* Content */}
          <div className="md:col-span-5 bg-accent text-white p-8 md:p-10 lg:p-12 brutalist-border border-foreground flex flex-col justify-between animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
                ZONA 10
              </h3>
              <p className="text-lg md:text-xl mb-6 leading-relaxed">
                Nuestra nueva sede estará ubicada en el corazón de la Zona 10, con instalaciones de última generación y canchas profesionales.
              </p>
              
              <div className="mb-8">
                <h4 className="font-display text-2xl md:text-3xl mb-4">CATEGORÍAS DISPONIBLES</h4>
                <ul className="space-y-2 text-base md:text-lg">
                  <li>→ Pre-Infantil (4-6 años)</li>
                  <li>→ Infantil (7-9 años)</li>
                  <li>→ Pre-Juvenil (10-12 años)</li>
                  <li>→ Juvenil (13-15 años)</li>
                </ul>
              </div>

              <p className="text-lg md:text-xl font-display mb-6">
                ¡Cupos limitados! Apertura: Enero 2025
              </p>
            </div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground text-background font-display text-2xl md:text-3xl px-8 py-5 brutalist-border border-white hover-lift text-center"
            >
              RESERVA TU CUPO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
