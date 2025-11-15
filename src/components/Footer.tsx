export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          <div className="md:col-span-6">
            <h3 className="text-5xl md:text-7xl font-display mb-4">IMAFUT</h3>
            <p className="text-lg mb-6">Academia de Fútbol de Élite</p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-2xl font-display mb-4">CONTACTO</h4>
            <p className="text-base mb-2">info@imafut.com</p>
            <p className="text-base mb-2">+34 123 456 789</p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-2xl font-display mb-4">UBICACIÓN</h4>
            <p className="text-base">
              Campo de Fútbol<br />
              Ciudad, País
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-sm">© 2024 IMAFUT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
