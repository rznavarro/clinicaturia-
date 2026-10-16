import React, { useState } from 'react';
import { ArrowUpRight, CalendarCheck, MessageCircle } from 'lucide-react';
import { SmileLine } from './SmileLine';

const AGENDA_URL = 'https://ff.healthatom.io/4PdQIN';

interface TreatmentItem {
  id: string;
  num: string;
  name: string;
  desc: string;
  isUrgency?: boolean;
}

const TREATMENTS: TreatmentItem[] = [
  {
    id: 'urgencias',
    num: '01',
    name: 'Urgencias 24 hrs',
    desc: 'atención de urgencias dentales todos los días, a toda hora.',
    isUrgency: true,
  },
  {
    id: 'carillas',
    num: '02',
    name: 'Carillas',
    desc: 'carillas de porcelana para una sonrisa más pareja y natural (odontología estética).',
  },
  {
    id: 'ortodoncia',
    num: '03',
    name: 'Ortodoncia convencional e invisible',
    desc: 'brackets y alambres, o alineadores transparentes y removibles, para corregir la posición de los dientes.',
  },
  {
    id: 'endodoncia',
    num: '04',
    name: 'Endodoncia (tratamiento de conducto)',
    desc: 'trata problemas de la pulpa del diente, lesiones y secuelas de tratamientos de conducto anteriores.',
  },
  {
    id: 'limpiezas',
    num: '05',
    name: 'Limpiezas dentales y salud periodontal',
    desc: 'exámenes y limpiezas para mantener dientes y encías sanos.',
  },
  {
    id: 'periodoncia',
    num: '06',
    name: 'Periodoncia',
    desc: 'cuidado de las encías.',
  },
  {
    id: 'implantes',
    num: '07',
    name: 'Implantes dentales',
    desc: 'reemplazo de piezas perdidas.',
  },
  {
    id: 'estetica-facial',
    num: '08',
    name: 'Estética facial',
    desc: 'tratamientos de estética facial.',
  },
];

export const Treatments: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('urgencias');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tratamientos" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Sticky Title on Desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 text-left">
              <SmileLine variant="section" />
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-tight">
                ¿Qué necesitas resolver?
              </h2>
              <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed max-w-md">
                Atendemos a toda la familia con un enfoque en la prevención.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Accordion List */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-ink/10">
            {TREATMENTS.map((item) => {
              const isOpen = openId === item.id;
              const waUrl = `https://wa.me/56957952385?text=${encodeURIComponent(
                `Hola Clínica Turia, quiero consultar por ${item.name}.`
              )}`;

              return (
                <div
                  key={item.id}
                  className={`transition-colors duration-200 ${
                    item.isUrgency ? 'bg-soft rounded-2xl p-4 sm:p-5 my-2 border border-primary/10' : 'py-5 px-2'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start sm:items-center justify-between text-left gap-4 focus:outline-hidden group cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4 sm:gap-5 flex-1 min-w-0">
                      {/* Number badge */}
                      <span className="shrink-0 bg-primary text-secondary font-display font-bold text-base sm:text-lg px-2.5 py-1 rounded-xl tracking-tight shadow-2xs">
                        {item.num}
                      </span>

                      {/* Name & Short Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-ink tracking-tight group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-muted text-sm sm:text-base leading-snug mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="shrink-0 ml-2 mt-1 sm:mt-0">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full border border-ink/15 text-primary transition-transform duration-200 ${
                          isOpen ? 'rotate-90 bg-primary text-surface' : 'group-hover:border-primary group-hover:bg-soft'
                        }`}
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </div>
                  </button>

                  {/* Accordion Expanded Content */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-ink/10 flex flex-wrap items-center gap-3">
                      <a
                        href={AGENDA_URL}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-ink font-semibold text-sm px-5 py-2.5 min-h-[44px] hover:bg-secondary/90 transition-all shadow-2xs"
                      >
                        <CalendarCheck className="w-4 h-4" strokeWidth={2} />
                        <span>Agendar hora</span>
                      </a>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 text-primary font-semibold text-sm px-5 py-2.5 min-h-[44px] hover:bg-soft transition-all"
                      >
                        <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                        <span>Consultar por WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
