import React from 'react';
import { MessageCircle } from 'lucide-react';

const WA_DIRECT_URL = 'https://wa.me/56957952385?text=Hola%20Cl%C3%ADnica%20Turia%2C%20quiero%20pedir%20informaci%C3%B3n.';

interface FloatingWhatsAppProps {
  hasBottomBar: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ hasBottomBar }) => {
  return (
    <a
      href={WA_DIRECT_URL}
      target="_blank"
      rel="noopener"
      aria-label="Escribir por WhatsApp a Clínica Turia"
      className={`fixed right-4 sm:right-6 z-40 w-14 h-14 rounded-full bg-primary text-secondary flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden ${
        hasBottomBar ? 'bottom-[74px] md:bottom-6' : 'bottom-5 sm:bottom-6'
      }`}
    >
      <MessageCircle className="w-7 h-7" strokeWidth={2} />
    </a>
  );
};
