import React from 'react';
import { Users, ShieldCheck, Stethoscope } from 'lucide-react';
import { SmileLine } from './SmileLine';
import { SafeImage } from './SafeImage';

const PHOTO_A = 'https://clinicaturiaodontologia.cl/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-13-at-15.43.44.jpeg';
const PHOTO_B = 'https://clinicaturiaodontologia.cl/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-13-at-15.52.23.jpeg';
const PHOTO_C = 'https://clinicaturiaodontologia.cl/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-13-at-18.35.10.jpeg';
const IMAGE_D = 'https://clinicaturiaodontologia.cl/wp-content/uploads/2023/11/turia_home.png';

export const Clinic: React.FC = () => {
  return (
    <section id="clinica" className="py-20 lg:py-28 bg-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Content & 3 Key Points) */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <SmileLine variant="section" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-tight">
              Una clínica de barrio en Las Condes
            </h2>

            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed">
              Somos un equipo de dentistas y auxiliares con experiencia. Te atendemos de forma personalizada y con foco en prevenir, para que tengas una sonrisa sana toda la vida. Trabajamos con equipos actuales para que cada tratamiento sea seguro y eficaz.
            </p>

            {/* Three bullet points in a vertical list (not cards) */}
            <div className="mt-8 space-y-5 border-t border-ink/10 pt-6">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                  <Users className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                    Toda la familia
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mt-0.5">
                    Atención dedicada para pacientes de todas las edades.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                  <ShieldCheck className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                    Prevención primero
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mt-0.5">
                    Enfoque preventivo para cuidar tu salud bucal a largo plazo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                  <Stethoscope className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                    Equipos actuales
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mt-0.5">
                    Tecnología e instrumental moderno para tratamientos seguros y eficaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Image D: Desktop only side frame */}
            <div className="hidden lg:block mt-8">
              <SafeImage
                src={IMAGE_D}
                alt="Instalaciones de Clínica Dental Turia"
                width={800}
                height={800}
                aspectRatioClass="aspect-square"
                bgClass="bg-surface"
                className="max-w-xs shadow-sm"
              />
            </div>
          </div>

          {/* Right Column: Real Photos Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Foto A (aspect-[2/1] across top) */}
            <SafeImage
              src={PHOTO_A}
              alt="Instalaciones de Clínica Turia en Las Condes"
              width={1600}
              height={800}
              aspectRatioClass="aspect-[2/1]"
              bgClass="bg-surface"
              className="shadow-sm"
            />

            {/* Foto B and Foto C side by side (aspect-square) */}
            <div className="grid grid-cols-2 gap-4">
              <SafeImage
                src={PHOTO_B}
                alt="Box dental en Clínica Turia"
                width={800}
                height={800}
                aspectRatioClass="aspect-square"
                bgClass="bg-surface"
                className="shadow-sm"
              />
              <SafeImage
                src={PHOTO_C}
                alt="Atención dental en Clínica Turia"
                width={800}
                height={800}
                aspectRatioClass="aspect-square"
                bgClass="bg-surface"
                className="shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
