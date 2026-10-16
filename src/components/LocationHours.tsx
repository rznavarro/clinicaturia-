import React from 'react';
import { MapPin, Clock, Navigation, Car, AlertCircle } from 'lucide-react';
import { SmileLine } from './SmileLine';

const METRO_ROUTE_URL =
  'https://www.google.com/maps/dir/Metro+Manquehue+-+Avenida+Manquehue+Norte,+Vitacura/El+Director+6000,+7580645+Las+Condes,+Regi%C3%B3n+Metropolitana/@-33.4108325,-70.5687994,17.5z/data=!4m14!4m13!1m5!1m1!1s0x9662ced5a03725ef:0xb3cb2c1535cbd98a!2m2!1d-70.5673317!2d-33.4086432!1m5!1m1!1s0x9662cee715900c23:0xa0eae20fbdb6ba7d!2m2!1d-70.5666177!2d-33.4122719!3e2?entry=ttu';

const PARKING_MAP_URL = 'https://maps.app.goo.gl/AoTQJseioCryi1HaA';

export const LocationHours: React.FC = () => {
  return (
    <section id="ubicacion" className="bg-primary text-surface py-20 lg:py-28 relative">
      {/* Large subtle smile line as top separator */}
      <SmileLine variant="separator" className="mb-8" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-12 lg:mb-16">
          <SmileLine variant="section" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-surface">
            Cómo llegar y cuándo atendemos
          </h2>
          <p className="mt-3 text-surface/80 text-base sm:text-lg">
            Estamos ubicados en el corazón de Las Condes, con fácil acceso y estacionamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Block 1: Dirección y accesos */}
          <div className="bg-surface/10 border border-surface/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-secondary mb-4">
                <MapPin className="w-6 h-6 shrink-0" strokeWidth={1.75} />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-surface">
                  Dirección
                </h3>
              </div>

              <p className="font-display font-semibold text-lg sm:text-xl text-surface">
                El Director #6.000, oficina 206
              </p>
              <p className="text-surface/80 text-sm sm:text-base mt-1">
                Las Condes, Región Metropolitana
              </p>

              {/* Metro & Parking details */}
              <div className="mt-6 space-y-4 pt-6 border-t border-surface/15">
                <div>
                  <p className="text-surface text-sm sm:text-base font-medium">
                    A pasos del Metro Manquehue (Línea 1)
                  </p>
                  <a
                    href={METRO_ROUTE_URL}
                    target="_blank"
                    rel="noopener"
                    className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-surface/40 bg-surface/10 hover:bg-surface/20 text-surface text-xs sm:text-sm font-semibold px-4 py-2.5 min-h-[44px] transition-all"
                  >
                    <Navigation className="w-4 h-4 text-secondary" strokeWidth={1.75} />
                    <span>Ver ruta desde el Metro</span>
                  </a>
                </div>

                <div className="pt-2">
                  <p className="text-surface text-sm sm:text-base font-medium">
                    Estacionamiento para pacientes en Av. Manquehue #655
                  </p>
                  <a
                    href={PARKING_MAP_URL}
                    target="_blank"
                    rel="noopener"
                    className="mt-2.5 inline-flex items-center gap-2 rounded-full border border-surface/40 bg-surface/10 hover:bg-surface/20 text-surface text-xs sm:text-sm font-semibold px-4 py-2.5 min-h-[44px] transition-all"
                  >
                    <Car className="w-4 h-4 text-secondary" strokeWidth={1.75} />
                    <span>Ver estacionamiento</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Horarios */}
          <div className="bg-surface/10 border border-surface/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-secondary mb-4">
                <Clock className="w-6 h-6 shrink-0" strokeWidth={1.75} />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-surface">
                  Horarios de atención
                </h3>
              </div>

              <div className="divide-y divide-surface/15">
                <div className="py-3.5 flex justify-between items-center text-sm sm:text-base">
                  <span className="text-surface/80">Lunes a viernes</span>
                  <span className="font-semibold text-surface">9:00–13:00 y 14:00–19:00</span>
                </div>

                <div className="py-3.5 flex justify-between items-center text-sm sm:text-base">
                  <span className="text-surface/80">Sábado</span>
                  <span className="font-semibold text-surface">10:00–13:00</span>
                </div>

                {/* Urgencias destacadas */}
                <div className="pt-4 pb-2">
                  <div className="bg-surface/10 rounded-2xl p-4 border border-secondary/30 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <div className="text-secondary font-display font-bold text-base sm:text-lg">
                        Urgencias dentales: 24/7
                      </div>
                      <p className="text-surface/90 text-xs sm:text-sm mt-0.5">
                        Atención continua en la Región Metropolitana al{' '}
                        <a href="tel:+56957952385" className="underline font-semibold text-secondary">
                          +56 9 5795 2385
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
