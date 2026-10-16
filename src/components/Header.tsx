import React, { useState } from 'react';

const LOGO_URL = 'https://clinicaturiaodontologia.cl/wp-content/uploads/2023/09/Isologo@4x.png';
const AGENDA_URL = 'https://ff.healthatom.io/4PdQIN';

export const Header: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 bg-surface border-b border-ink/10 transition-shadow duration-200">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#inicio" className="flex items-center gap-2" aria-label="Ir al inicio de Clínica Turia">
          {logoError ? (
            <span className="font-display font-bold text-xl sm:text-2xl text-primary tracking-tight">
              Clínica Turia
            </span>
          ) : (
            <img
              src={LOGO_URL}
              alt="Logo de Clínica Turia"
              width={176}
              height={44}
              loading="eager"
              decoding="async"
              onError={() => setLogoError(true)}
              className="h-[36px] md:h-[44px] w-auto object-contain block"
            />
          )}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
          <a
            href="#tratamientos"
            className="text-ink font-medium text-sm hover:text-primary transition-colors duration-150"
          >
            Tratamientos
          </a>
          <a
            href="#clinica"
            className="text-ink font-medium text-sm hover:text-primary transition-colors duration-150"
          >
            La clínica
          </a>
          <a
            href="#ubicacion"
            className="text-ink font-medium text-sm hover:text-primary transition-colors duration-150"
          >
            Cómo llegar
          </a>
          <a
            href="#contacto"
            className="text-ink font-medium text-sm hover:text-primary transition-colors duration-150"
          >
            Contacto
          </a>

          <a
            href={AGENDA_URL}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-secondary text-ink font-semibold px-5 py-2.5 text-sm hover:bg-secondary/90 hover:-translate-y-0.5 transition-all shadow-xs"
          >
            Agendar hora
          </a>
        </nav>

        {/* Mobile View: Only small button "Agendar", no hamburger menu */}
        <div className="flex items-center md:hidden">
          <a
            href={AGENDA_URL}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-secondary text-ink font-semibold px-4 py-2 text-xs hover:bg-secondary/90 transition-all shadow-xs"
          >
            Agendar
          </a>
        </div>
      </div>
    </header>
  );
};
