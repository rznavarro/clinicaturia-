import React from 'react';
import { CalendarCheck, Phone, MessageCircle } from 'lucide-react';
import { SmileLine } from './SmileLine';
import { SafeImage } from './SafeImage';

const AGENDA_URL = 'https://ff.healthatom.io/4PdQIN';
const PHOTO_A_URL = 'https://clinicaturiaodontologia.cl/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-13-at-15.43.44.jpeg';
const URGENCIA_TEL = 'tel:+56957952385';
const URGENCIA_WA = 'https://wa.me/56957952385?text=Hola%20Cl%C3%ADnica%20Turia%2C%20tengo%20una%20urgencia%20dental%20y%20necesito%20atenci%C3%B3n.';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative bg-primary text-surface min-h-[calc(100svh-64px)] flex flex-col justify-center py-6 sm:py-10 md:py-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column (Mobile: Full screen flow, Desktop: 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Pre-title */}
            <p className="text-secondary text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">
              CLÍNICA DENTAL · LAS CONDES
            </p>

            {/* H1 Headline with word-by-word animation */}
            <h1 className="font-display font-bold text-[2.4rem] sm:text-5xl lg:text-[4.2rem] leading-[1.06] tracking-tight text-surface">
              <span className="hero-word" style={{ animationDelay: '0ms' }}>Tu</span>{' '}
              <span className="hero-word" style={{ animationDelay: '70ms' }}>dentista</span>{' '}
              <span className="hero-word" style={{ animationDelay: '140ms' }}>en</span>{' '}
              <span className="hero-word relative inline-block whitespace-nowrap" style={{ animationDelay: '210ms' }}>
                Las Condes
                <SmileLine variant="hero" />
              </span>
              <span className="hero-word" style={{ animationDelay: '280ms' }}>,</span>{' '}
              <span className="hero-word" style={{ animationDelay: '350ms' }}>también</span>{' '}
              <span className="hero-word" style={{ animationDelay: '420ms' }}>para</span>{' '}
              <span className="hero-word" style={{ animationDelay: '490ms' }}>urgencias</span>
            </h1>

            {/* Subtitle / Bajada */}
            <p className="text-surface/80 text-base sm:text-lg lg:text-xl leading-relaxed mt-3 sm:mt-5 max-w-xl hero-fade-element">
              Tratamientos para toda la familia, desde limpiezas hasta implantes y ortodoncia. A pasos del Metro Manquehue.
            </p>

            {/* Main CTA button */}
            <div className="mt-5 sm:mt-7 hero-fade-element">
              <a
                href={AGENDA_URL}
                target="_blank"
                rel="noopener"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-ink font-semibold text-base sm:text-lg px-8 py-4 min-h-[48px] shadow-sm hover:bg-secondary/90 hover:-translate-y-0.5 transition-all"
              >
                <CalendarCheck className="w-5 h-5" strokeWidth={2} />
                <span>Agendar hora</span>
              </a>
            </div>

            {/* Mobile Urgency Card (Shown right below CTA on mobile) */}
            <div className="mt-5 lg:hidden hero-fade-element">
              <div className="bg-surface text-ink rounded-3xl p-4 sm:p-5 shadow-lg border border-ink/10">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary text-ink px-3 py-1 text-xs font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary urgency-dot-pulse" />
                  <span>URGENCIAS 24/7</span>
                </div>
                <p className="text-xs sm:text-sm text-ink leading-snug">
                  ¿Te duele ahora? Te atendemos todos los días, a cualquier hora, en la Región Metropolitana.
                </p>
                <p className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight my-2">
                  +56 9 5795 2385
                </p>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <a
                    href={URGENCIA_TEL}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-surface font-semibold text-xs sm:text-sm py-3 px-2 min-h-[48px] hover:bg-primary/90 transition-all text-center"
                  >
                    <Phone className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    <span>Llamar ahora</span>
                  </a>
                  <a
                    href={URGENCIA_WA}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-primary text-primary font-semibold text-xs sm:text-sm py-3 px-2 min-h-[48px] hover:bg-soft transition-all text-center"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" strokeWidth={1.75} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Desktop only: 5 cols with Photo A + overlapping Urgency Card) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col relative hero-fade-element">
            {/* Photo A in rounded-3xl frame with aspect-[2/1] */}
            <div className="relative">
              <SafeImage
                src={PHOTO_A_URL}
                alt="Clínica Turia, clínica dental en Las Condes"
                width={1600}
                height={800}
                aspectRatioClass="aspect-[2/1]"
                bgClass="bg-surface/10"
                isPriority={true}
                className="border-surface/20"
              />

              {/* Urgency Card overlapping bottom corner of Photo A */}
              <div className="mt-4 bg-surface text-ink rounded-3xl p-6 shadow-xl border border-ink/10 relative -mt-10 mx-3 z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary text-ink px-3.5 py-1 text-xs font-bold mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary urgency-dot-pulse" />
                  <span>URGENCIAS 24/7</span>
                </div>
                <p className="text-sm text-ink leading-relaxed">
                  ¿Te duele ahora? Te atendemos todos los días, a cualquier hora, en la Región Metropolitana.
                </p>
                <p className="font-display font-bold text-3xl text-ink tracking-tight my-3">
                  +56 9 5795 2385
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <a
                    href={URGENCIA_TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-surface font-semibold text-sm py-3.5 px-4 min-h-[48px] hover:bg-primary/90 transition-all"
                  >
                    <Phone className="w-4 h-4" strokeWidth={1.75} />
                    <span>Llamar ahora</span>
                  </a>
                  <a
                    href={URGENCIA_WA}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary font-semibold text-sm py-3.5 px-4 min-h-[48px] hover:bg-soft transition-all"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
