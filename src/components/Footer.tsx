import React from 'react';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';

const PHONE_NUMBER = '+56 9 5795 2385';
const PHONE_TEL = 'tel:+56957952385';
const EMAIL_ADDRESS = 'clinicaturiaodontologia@gmail.com';
const EMAIL_MAILTO = 'mailto:clinicaturiaodontologia@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/clinicaturia.odontologia/';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-surface/80 py-12 px-4 sm:px-6 border-t border-ink/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-surface/10">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-display font-bold text-2xl text-surface tracking-tight">
              Clínica Turia
            </span>
            <p className="text-secondary text-xs font-semibold tracking-wider uppercase mt-1">
              Odontología · Las Condes
            </p>
            <p className="mt-3 text-surface/70 text-sm leading-relaxed max-w-sm">
              Atención dental para toda la familia con enfoque en la prevención y servicio de urgencias 24/7 en la Región Metropolitana.
            </p>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" strokeWidth={1.75} />
              <span>El Director #6.000, oficina 206, Las Condes, Santiago.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" strokeWidth={1.75} />
              <div className="text-xs sm:text-sm text-surface/80">
                <p>Lun–Vie: 9:00–13:00 / 14:00–19:00</p>
                <p>Sábado: 10:00–13:00</p>
                <p className="text-secondary font-semibold mt-0.5">Urgencias dentales: 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-3 space-y-2.5 text-sm">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2.5 hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 text-secondary shrink-0" strokeWidth={1.75} />
              <span>{PHONE_NUMBER}</span>
            </a>
            <a
              href={EMAIL_MAILTO}
              className="flex items-center gap-2.5 hover:text-secondary transition-colors truncate"
            >
              <Mail className="w-4 h-4 text-secondary shrink-0" strokeWidth={1.75} />
              <span className="truncate">{EMAIL_ADDRESS}</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2.5 hover:text-secondary transition-colors"
            >
              <Instagram className="w-4 h-4 text-secondary shrink-0" strokeWidth={1.75} />
              <span>@clinicaturia.odontologia</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-surface/60 gap-3">
          <p>© Clínica Turia · Las Condes, Santiago</p>
          <p className="text-surface/50">Tu dentista en Las Condes, también para urgencias</p>
        </div>
      </div>
    </footer>
  );
};
