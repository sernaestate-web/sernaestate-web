import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight, Scale, ShieldCheck } from 'lucide-react';
import { Reveal } from './animations/Reveal';

interface FaqItem {
  id: string;
  question: string;
  shortAnswer: string;
  context: string;
  actionText?: string;
  actionHref?: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'que-es-serna-estate',
    question: '¿Qué es Serna Estate y cuál es su especialidad?',
    shortAnswer: 'Serna Estate Firma Legal Inmobiliaria S.A.C. es una firma jurídica peruana especializada exclusivamente en Derecho Inmobiliario, saneamiento físico-legal, litigios patrimoniales y estructuración de operaciones sobre bienes inmuebles.',
    context: 'Liderada por la abogada Karla Serna, la firma integra conocimientos jurídicos, notariales, registrales y judiciales para brindar acompañamiento preventivo y contencioso en todo el ciclo de vida de un inmueble en el Perú.',
    actionText: 'Conoce más sobre la firma',
    actionHref: '#la-firma',
  },
  {
    id: 'que-hace-firma-legal-inmobiliaria',
    question: '¿Qué servicios atiende una firma legal inmobiliaria?',
    shortAnswer: 'Brinda asesoría y defensa técnica en la adquisición, saneamiento, regularización y protección de inmuebles. Comprende el estudio de títulos (Due Diligence), redacción de contratos, independizaciones, declaratorias de fábrica y defensas judiciales.',
    context: 'A diferencia de una agencia comercial o de corretaje, una firma legal audita la validez de los títulos, identifica contingencias ocultas en SUNARP o municipios y diseña estrategias que evitan fraudes o nulidades.',
    actionText: 'Ver catálogo de servicios',
    actionHref: '#servicios',
  },
  {
    id: 'a-quien-asesora',
    question: '¿A quiénes asesora Serna Estate?',
    shortAnswer: 'Asesoramos a personas naturales, familias, copropietarios, juntas de propietarios de edificios y condominios, empresas, constructoras, desarrolladores inmobiliarios e inversionistas patrimoniales en todo el territorio del Perú.',
    context: 'La atención se brinda tanto de forma presencial en Lima como a través de canales digitales para clientes con operaciones e inmuebles en diversas regiones del país.',
  },
  {
    id: 'problemas-atendidos',
    question: '¿Qué problemas o controversias inmobiliarias atiende la firma?',
    shortAnswer: 'Atendemos procesos de prescripción adquisitiva de dominio, desalojo, reivindicación, mejor derecho de propiedad, nulidad de acto jurídico, rectificación de áreas y linderos, levantamiento de hipotecas, acumulación e independización de predios.',
    context: 'También estructuramos reglamentos internos y formalización de juntas directivas para edificios residenciales o complejos comerciales que requieren orden legal y convivencia regulada.',
    actionText: 'Revisar casos representativos',
    actionHref: '#casos',
  },
  {
    id: 'como-solicitar-consulta',
    question: '¿Cómo solicitar una consulta o evaluación preliminar?',
    shortAnswer: 'Puedes comunicarte a través del formulario de contacto en esta web, por correo electrónico a sernaestate@gmail.com o vía WhatsApp al +51 913 511 439 detallando brevemente tu situación y el tipo de inmueble involucrado.',
    context: 'Un miembro del equipo revisará la información inicial para coordinar una primera sesión de evaluación y orientar sobre la viabilidad y los pasos legales correspondientes.',
    actionText: 'Ir al formulario de contacto',
    actionHref: '#contacto',
  },
  {
    id: 'relacion-abogado-cliente',
    question: '¿Enviar una consulta genera automáticamente una relación abogado-cliente?',
    shortAnswer: 'No. El envío de una consulta a través del formulario web o WhatsApp constituye una solicitud de orientación preliminar y no establece por sí misma una relación profesional formal ni la aceptación automática del patrocinio legal.',
    context: 'La representación jurídica formal se establece únicamente tras la revisión de documentos, la emisión de una propuesta de servicios aceptada expresamente y la suscripción del respectivo acuerdo de honorarios.',
  },
  {
    id: 'documentos-preparar',
    question: '¿Qué información conviene preparar antes de una consulta inmobiliaria?',
    shortAnswer: 'Es recomendable contar con la Copia Literal o CRI (Certificado Registral Inmobiliario) emitida por la SUNARP, copia simple de contratos o minutas previas, hojas de autovalúo municipal (HR y PU) y un resumen cronológico de los hechos.',
    context: 'Contar con estos antecedentes permite a nuestros abogados evaluar con precisión la situación registral, detectar riesgos reales y proponer una ruta legal técnica y viable desde el primer contacto.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('que-es-serna-estate');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="py-20 sm:py-28 bg-[#F8FAF9] text-[#14201C] border-t border-[#014937]/10 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background Cadastral Texture */}
      <div className="absolute inset-0 cadastral-grid opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="down">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#014937]/10 border border-[#014937]/20 text-[#014937] text-xs font-heading font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
              <span>Preguntas Frecuentes & Criterios Legales</span>
            </div>
            
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#014937] tracking-tight"
            >
              Orientación y Respuestas Claras sobre Derecho Inmobiliario
            </h2>

            <p className="font-body text-sm sm:text-base text-[#14201C]/80 leading-relaxed max-w-2xl mx-auto">
              Información jurídica clara sobre cómo opera nuestra firma, qué servicios atendemos y qué precauciones considerar antes de tomar decisiones sobre tu patrimonio.
            </p>
          </div>
        </Reveal>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            const headingId = `faq-title-${item.id}`;
            const contentId = `faq-content-${item.id}`;

            return (
              <Reveal key={item.id} delay={index * 0.05} direction="up">
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#014937]/30 shadow-md ring-1 ring-[#014937]/10'
                      : 'bg-white/80 hover:bg-white border-[#014937]/15 shadow-2xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    id={headingId}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#014937] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 rounded-lg bg-[#014937]/10 text-[#014937] text-xs font-heading font-bold">
                        {index + 1}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-[#014937] leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                        isOpen ? 'bg-[#014937] text-[#E0BB5D] rotate-180' : 'bg-[#014937]/10 text-[#014937]'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={headingId}
                      className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#014937]/10 space-y-3 bg-[#FCFDFD]"
                    >
                      {/* Direct Answer (Answer-First Format) */}
                      <p className="font-body text-sm sm:text-base text-[#14201C] font-semibold leading-relaxed">
                        {item.shortAnswer}
                      </p>

                      {/* Extended Context */}
                      <p className="font-body text-xs sm:text-sm text-[#14201C]/80 leading-relaxed">
                        {item.context}
                      </p>

                      {/* Optional Inner Action Link */}
                      {item.actionHref && item.actionText && (
                        <div className="pt-2">
                          <a
                            href={item.actionHref}
                            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#014937] hover:text-[#AE7E25] transition-colors group underline underline-offset-4"
                          >
                            <span>{item.actionText}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Disclaimer Notice */}
        <Reveal direction="up" delay={0.3}>
          <div className="max-w-4xl mx-auto mt-10 p-4 rounded-xl bg-[#014937]/5 border border-[#014937]/15 flex items-start gap-3 text-xs font-body text-[#14201C]/80">
            <ShieldCheck className="w-4 h-4 text-[#014937] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Aviso informativo:</strong> Las respuestas expuestas tienen carácter general y pedagógico. Cada operación o conflicto patrimonial depende de sus títulos específicos y antecedentes registrales, por lo que no sustituyen una revisión documental individualizada.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
