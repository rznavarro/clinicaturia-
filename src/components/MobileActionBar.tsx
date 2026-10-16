import React from 'react';
import { CalendarCheck, Phone } from 'lucide-react';

const AGENDA_URL = 'https://ff.healthatom.io/4PdQIN';
const URGENCIA_TEL = 'tel:+56957952385';

interface MobileActionBarProps {
  isVisible: boolean;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <aside
      aria-label="Acciones rápidas"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-ink/10 px-3 py-2.5 shadow-lg transition-transform duration-300 transform translate-y-0"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={AGENDA_URL}
          target="_blank"
          rel="noopener"
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary text-ink font-semibold text-xs py-3 px-3 min-h-[44px] shadow-xs text-center"
        >
          <CalendarCheck className="w-4 h-4 shrink-0" strokeWidth={2} />
          <span>Agendar hora</span>
        </a>

        <a
          href={URGENCIA_TEL}
          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-surface font-semibold text-xs py-3 px-3 min-h-[44px] shadow-xs text-center"
        >
          <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} />
          <span>Urgencia 24/7</span>
        </a>
      </div>
    </aside>
  );
};
