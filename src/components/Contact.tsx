import React, { useState } from 'react';
import { CalendarCheck, Phone, MessageCircle, Mail, Instagram, Send, AlertCircle } from 'lucide-react';
import { SmileLine } from './SmileLine';

const AGENDA_URL = 'https://ff.healthatom.io/4PdQIN';
const PHONE_NUMBER = '+56 9 5795 2385';
const PHONE_TEL = 'tel:+56957952385';
const EMAIL_ADDRESS = 'clinicaturiaodontologia@gmail.com';
const EMAIL_MAILTO = 'mailto:clinicaturiaodontologia@gmail.com';
const INSTAGRAM_URL = 'https://www.instagram.com/clinicaturia.odontologia/';
const WA_INFO_URL = 'https://wa.me/56957952385?text=Hola%20Cl%C3%ADnica%20Turia%2C%20quiero%20pedir%20informaci%C3%B3n.';

const TREATMENT_OPTIONS = [
  'Urgencias 24 hrs',
  'Carillas',
  'Ortodoncia convencional e invisible',
  'Endodoncia (tratamiento de conducto)',
  'Limpiezas dentales y salud periodontal',
  'Periodoncia',
  'Implantes dentales',
  'Estética facial',
  'Otro / no estoy seguro',
];

export const Contact: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [tratamiento, setTratamiento] = useState(TREATMENT_OPTIONS[0]);
  const [esUrgencia, setEsUrgencia] = useState<'Sí' | 'No'>('No');
  const [comuna, setComuna] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [nameError, setNameError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);

    // Build formatted message omitting empty optional lines
    const lines = [
      `Hola Clínica Turia, soy ${nombre.trim()}.`,
      `Me interesa: ${tratamiento}.`,
      `¿Urgencia?: ${esUrgencia}.`,
    ];

    if (comuna.trim()) {
      lines.push(`Comuna: ${comuna.trim()}.`);
    }

    if (mensaje.trim()) {
      lines.push(`Mensaje: ${mensaje.trim()}`);
    }

    const messageText = lines.join(' ');
    const whatsappUrl = `https://wa.me/56957952385?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-left mb-12 lg:mb-16">
          <SmileLine variant="section" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-tight">
            Agenda tu hora o escríbenos
          </h2>
          <p className="mt-3 text-muted text-base sm:text-lg">
            Estamos disponibles para responder tus dudas y coordinar tu próxima atención.
          </p>
        </div>

        {/* Mobile Agenda Button (First on mobile) */}
        <div className="block lg:hidden mb-8">
          <a
            href={AGENDA_URL}
            target="_blank"
            rel="noopener"
            className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-secondary text-ink font-bold text-base sm:text-lg px-8 py-4 min-h-[48px] shadow-sm hover:bg-secondary/90 transition-all text-center"
          >
            <CalendarCheck className="w-5 h-5" strokeWidth={2} />
            <span>Agendar hora en línea</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Desktop Left Column: CTA & Direct Contact Data */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Desktop Big Agenda Button */}
              <div className="hidden lg:block mb-8">
                <a
                  href={AGENDA_URL}
                  target="_blank"
                  rel="noopener"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-secondary text-ink font-bold text-lg px-8 py-4.5 min-h-[52px] shadow-sm hover:bg-secondary/90 hover:-translate-y-0.5 transition-all text-center"
                >
                  <CalendarCheck className="w-5 h-5" strokeWidth={2} />
                  <span>Agendar hora en línea</span>
                </a>
              </div>

              {/* Direct Contact Links */}
              <div className="bg-soft rounded-3xl p-6 sm:p-8 border border-ink/10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink mb-5">
                  Canales de contacto directo
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={PHONE_TEL}
                    className="flex items-center gap-3.5 text-ink hover:text-primary transition-colors p-2.5 -mx-2.5 rounded-xl hover:bg-surface/80"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="text-xs text-muted block font-medium">Llamadas y urgencias</span>
                      <span className="text-sm sm:text-base font-semibold">{PHONE_NUMBER}</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={WA_INFO_URL}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3.5 text-ink hover:text-primary transition-colors p-2.5 -mx-2.5 rounded-xl hover:bg-surface/80"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="text-xs text-muted block font-medium">WhatsApp directo</span>
                      <span className="text-sm sm:text-base font-semibold">{PHONE_NUMBER}</span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={EMAIL_MAILTO}
                    className="flex items-center gap-3.5 text-ink hover:text-primary transition-colors p-2.5 -mx-2.5 rounded-xl hover:bg-surface/80"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <span className="text-xs text-muted block font-medium">Correo electrónico</span>
                      <span className="text-sm sm:text-base font-semibold truncate block">
                        {EMAIL_ADDRESS}
                      </span>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3.5 text-ink hover:text-primary transition-colors p-2.5 -mx-2.5 rounded-xl hover:bg-surface/80"
                  >
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Instagram className="w-5 h-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span className="text-xs text-muted block font-medium">Instagram</span>
                      <span className="text-sm sm:text-base font-semibold">@clinicaturia.odontologia</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Mobile: 2nd, Desktop: 7 cols): WhatsApp Contact Form */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="bg-surface rounded-3xl border border-ink/10 p-6 sm:p-8 shadow-sm">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink tracking-tight mb-2">
                Envíanos tu consulta
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Completa tus datos y te responderemos por WhatsApp a la brevedad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                {/* Nombre */}
                <div>
                  <label htmlFor="contacto-nombre" className="block text-sm font-semibold text-ink mb-1.5">
                    Nombre completo <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contacto-nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      if (nameError && e.target.value.trim()) setNameError(false);
                    }}
                    placeholder="Ej. Francisca González"
                    className={`w-full rounded-2xl border px-4 py-3 text-ink text-sm sm:text-base placeholder:text-muted/60 focus:outline-hidden transition-colors ${
                      nameError ? 'border-primary ring-1 ring-primary' : 'border-ink/20 focus:border-primary'
                    }`}
                  />
                  {nameError && (
                    <p className="text-xs text-primary font-medium mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Por favor, ingresa tu nombre para continuar.
                    </p>
                  )}
                </div>

                {/* Tratamiento de interés */}
                <div>
                  <label htmlFor="contacto-tratamiento" className="block text-sm font-semibold text-ink mb-1.5">
                    Tratamiento de interés
                  </label>
                  <select
                    id="contacto-tratamiento"
                    value={tratamiento}
                    onChange={(e) => setTratamiento(e.target.value)}
                    className="w-full rounded-2xl border border-ink/20 px-4 py-3 text-ink text-sm sm:text-base bg-surface focus:outline-hidden focus:border-primary transition-colors cursor-pointer"
                  >
                    {TREATMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ¿Es una urgencia? */}
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    ¿Es una urgencia dental?
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setEsUrgencia('Sí')}
                      className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                        esUrgencia === 'Sí'
                          ? 'bg-primary text-surface shadow-xs'
                          : 'bg-soft text-ink border border-ink/10 hover:bg-surface'
                      }`}
                    >
                      Sí
                    </button>
                    <button
                      type="button"
                      onClick={() => setEsUrgencia('No')}
                      className={`flex-1 py-2.5 px-4 rounded-full font-semibold text-sm transition-all cursor-pointer ${
                        esUrgencia === 'No'
                          ? 'bg-primary text-surface shadow-xs'
                          : 'bg-soft text-ink border border-ink/10 hover:bg-surface'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Comuna (opcional) */}
                <div>
                  <label htmlFor="contacto-comuna" className="block text-sm font-semibold text-ink mb-1.5">
                    Comuna <span className="text-muted font-normal text-xs">(opcional)</span>
                  </label>
                  <input
                    id="contacto-comuna"
                    type="text"
                    value={comuna}
                    onChange={(e) => setComuna(e.target.value)}
                    placeholder="Ej. Las Condes, Vitacura, Providencia..."
                    className="w-full rounded-2xl border border-ink/20 px-4 py-3 text-ink text-sm sm:text-base placeholder:text-muted/60 focus:outline-hidden focus:border-primary transition-colors"
                  />
                </div>

                {/* Mensaje (opcional) */}
                <div>
                  <label htmlFor="contacto-mensaje" className="block text-sm font-semibold text-ink mb-1.5">
                    Mensaje o consulta <span className="text-muted font-normal text-xs">(opcional)</span>
                  </label>
                  <textarea
                    id="contacto-mensaje"
                    rows={3}
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Cuéntanos brevemente qué necesitas o tus horarios de preferencia..."
                    className="w-full rounded-2xl border border-ink/20 px-4 py-3 text-ink text-sm sm:text-base placeholder:text-muted/60 focus:outline-hidden focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary text-surface font-semibold py-4 px-6 text-base inline-flex items-center justify-center gap-2 min-h-[48px] hover:bg-primary/90 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4 text-secondary" strokeWidth={2} />
                  <span>Enviar por WhatsApp</span>
                </button>

                <p className="text-xs text-muted text-center pt-1">
                  Se abrirá WhatsApp con tu mensaje listo para enviar.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
