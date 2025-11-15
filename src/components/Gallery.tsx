import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display mb-12 md:mb-16 text-primary animate-slide-up">
          GALERÍA
        </h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-5 row-span-2 animate-slide-up">
            <img 
              src={gallery1} 
              alt="Entrenamiento IMAFUT" 
              className="w-full h-full object-cover brutalist-border border-foreground hover-lift"
            />
          </div>
          <div className="col-span-7 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <img 
              src={gallery3} 
              alt="Portero IMAFUT" 
              className="w-full h-full object-cover brutalist-border border-foreground hover-lift"
            />
          </div>
          <div className="col-span-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src={gallery2} 
              alt="Equipamiento" 
              className="w-full h-full object-cover brutalist-border border-foreground hover-lift"
            />
          </div>
          <div className="col-span-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img 
              src={gallery5} 
              alt="Entrenador" 
              className="w-full h-full object-cover brutalist-border border-foreground hover-lift"
            />
          </div>
          <div className="col-span-7 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src={gallery6} 
              alt="Material de entrenamiento" 
              className="w-full h-full object-cover brutalist-border border-foreground hover-lift"
            />
          </div>
          <div className="col-span-5 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <img 
              src={gallery4} 
              alt="Celebración equipo" 
              className="w-full h-full object-cover brutalist-border border-foreground hover-lift"
            />
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="grid md:hidden grid-cols-2 gap-4">
          <div className="col-span-2 animate-slide-up">
            <img 
              src={gallery1} 
              alt="Entrenamiento IMAFUT" 
              className="w-full h-64 object-cover brutalist-border border-foreground"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <img 
              src={gallery2} 
              alt="Equipamiento" 
              className="w-full h-48 object-cover brutalist-border border-foreground"
            />
          </div>
          <div className="row-span-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src={gallery5} 
              alt="Entrenador" 
              className="w-full h-full object-cover brutalist-border border-foreground"
            />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <img 
              src={gallery4} 
              alt="Celebración equipo" 
              className="w-full h-48 object-cover brutalist-border border-foreground"
            />
          </div>
          <div className="col-span-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src={gallery3} 
              alt="Portero IMAFUT" 
              className="w-full h-56 object-cover brutalist-border border-foreground"
            />
          </div>
          <div className="col-span-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <img 
              src={gallery6} 
              alt="Material de entrenamiento" 
              className="w-full h-48 object-cover brutalist-border border-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
