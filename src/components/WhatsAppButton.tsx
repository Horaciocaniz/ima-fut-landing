import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-white p-4 md:p-5 rounded-full brutalist-border border-foreground hover-lift shadow-2xl group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-4 py-2 font-display text-sm md:text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        CONTÁCTANOS
      </span>
    </a>
  );
};
