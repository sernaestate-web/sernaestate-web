import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Scale,
  Home,
  Compass,
  Building2,
  Layers,
  FileSignature,
  SearchCheck,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
  ChevronRight,
  Sparkles,
  FileText
} from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';
import { StaggeredCards } from './animations/StaggeredCards';

// Service icon mapping
const serviceIcons: Record<string, React.ReactNode> = {
  litigios: <Scale className="w-6 h-6" />,
  compraventa: <Home className="w-6 h-6" />,
  saneamiento: <Compass className="w-6 h-6" />,
  'propiedad-horizontal': <Building2 className="w-6 h-6" />,
  proyectos: <Layers className="w-6 h-6" />,
  contratos: <FileSignature className="w-6 h-6" />,
  'due-diligence': <SearchCheck className="w-6 h-6" />,
  inversionistas: <TrendingUp className="w-6 h-6" />,
};

export const Services: React.FC = () => {
  // Active selected service card ID (default to first service: 'litigios')
  const [activeServiceId, setActiveServiceId] = useState<string>('litigios');
  
  // Modal state for showing full sub-items list
  const [detailModalService, setDetailModalService] = useState<typeof siteContent.services[0] | null>(null);

  const activeService = siteContent.services.find((s) => s.id === activeServiceId) || siteContent.services[0];

  // Lock body scroll when modal is open & handle Escape key
  useEffect(() => {
    if (detailModalService) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setDetailModalService(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [detailModalService]);

  return (
    <AnimatedSection
      id="servicios"
      className="py-16 sm:py-20 md:py-28 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Main Layout Grid: Left Sticky Column + Right Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Header, Value Proposition & CTA (Matches Reference Left Side) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            <Reveal direction="up" delay={0.1}>
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#014937]/20 bg-[#014937]/10 text-xs font-heading font-bold text-[#014937] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#AE7E25]" />
                <span>Áreas de Práctica</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              {/* Main Display Heading */}
              <h2
                id="servicios-heading"
                className="text-3xl sm:text-4xl xl:text-5xl font-heading font-extrabold text-[#014937] leading-[1.15] tracking-tight"
              >
                Explora nuestra oferta integral de servicios legales
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              {/* Subtitle / Value Proposition */}
              <p className="text-base sm:text-lg font-body text-[#14201C]/80 leading-relaxed">
                Enfocados en tus necesidades patrimoniales e inversión, nuestro equipo ofrece soluciones que combinan profundo rigor jurídico, estrategia registral y prevención de riesgos para garantizar seguridad a largo plazo.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              {/* CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-heading font-bold uppercase tracking-wider text-white bg-[#014937] hover:bg-[#146A55] active:bg-[#014937] transition-all duration-200 rounded-2xl shadow-lg hover:shadow-xl border-2 border-[#E0BB5D] group min-h-[52px]"
                >
                  <span>Contáctanos</span>
                  <ArrowRight className="w-5 h-5 text-[#E0BB5D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              {/* Trust Note Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#014937]/15 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#E0BB5D]" aria-hidden="true" />
                  <span>Asesoría Personalizada</span>
                </div>
                <p className="text-xs sm:text-sm font-body text-[#14201C]/75 leading-relaxed">
                  {siteContent.servicesNote}
                </p>
              </div>
            </Reveal>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Grid of Service Cards (Matches Reference Right 2x2 Grid)    */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            <StaggeredCards className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6" stagger={0.1}>
              {siteContent.services.map((service) => {
                const isActive = activeServiceId === service.id;
                const icon = serviceIcons[service.id] || <FileText className="w-6 h-6" />;

                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative ${
                      isActive
                        ? 'bg-[#014937] text-white shadow-2xl ring-2 ring-[#E0BB5D] scale-[1.02] z-10'
                        : 'bg-white text-[#14201C] border border-[#014937]/15 shadow-sm hover:shadow-xl hover:border-[#014937]/40 hover:-translate-y-1'
                    }`}
                  >
                    {/* Top Icon Badge & Badge Pill */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        {/* Circular Icon Container */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                            isActive
                              ? 'bg-white/15 text-[#E0BB5D]'
                              : 'bg-[#014937]/10 text-[#014937] group-hover:bg-[#014937] group-hover:text-[#E0BB5D]'
                          }`}
                        >
                          {icon}
                        </div>

                        {/* Tag Badge */}
                        <span
                          className={`text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            isActive
                              ? 'bg-[#E0BB5D] text-[#014937]'
                              : 'bg-[#014937]/5 text-[#014937] group-hover:bg-[#014937]/10'
                          }`}
                        >
                          {service.badge}
                        </span>
                      </div>

                      {/* Service Title */}
                      <h3
                        className={`text-lg sm:text-xl font-heading font-bold leading-snug ${
                          isActive ? 'text-white' : 'text-[#014937] group-hover:text-[#146A55]'
                        }`}
                      >
                        {service.title.replace(/^\d+\.\s*/, '')}
                      </h3>

                      {/* Summary */}
                      <p
                        className={`text-xs sm:text-sm font-body leading-relaxed line-clamp-3 ${
                          isActive ? 'text-white/85' : 'text-[#14201C]/80'
                        }`}
                      >
                        {service.summary}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-5 mt-4 border-t border-current/10 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDetailModalService(service);
                        }}
                        className={`inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider hover:underline focus:outline-none ${
                          isActive ? 'text-[#E0BB5D]' : 'text-[#014937]'
                        }`}
                      >
                        <span>Ver detalle</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <span
                        className={`text-xs font-heading font-bold ${
                          isActive ? 'text-white/60' : 'text-[#14201C]/40'
                        }`}
                      >
                        {service.items.length} servicios
                      </span>
                    </div>
                  </div>
                );
              })}
            </StaggeredCards>

            {/* Quick Preview Panel for the Currently Selected Active Service */}
            {activeService && (
              <Reveal direction="up" delay={0.25}>
                <div className="p-6 sm:p-8 bg-white rounded-3xl border-2 border-[#014937]/20 shadow-lg space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#014937]/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#014937] text-[#E0BB5D]">
                        {serviceIcons[activeService.id] || <FileText className="w-5 h-5" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-heading font-bold text-[#AE7E25] uppercase tracking-wider block">
                          Área Seleccionada
                        </span>
                        <h4 className="text-lg font-heading font-bold text-[#014937]">
                          {activeService.title}
                        </h4>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setDetailModalService(activeService)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#014937]/10 hover:bg-[#014937] text-[#014937] hover:text-white transition-colors text-xs font-heading font-bold uppercase tracking-wider shrink-0 cursor-pointer"
                    >
                      <span>Ver lista completa ({activeService.items.length})</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {activeService.items.slice(0, 6).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14201C]/85">
                        <span className="p-0.5 bg-[#014937]/10 text-[#014937] rounded-full shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {activeService.items.length > 6 && (
                    <p className="text-xs font-heading font-semibold text-[#AE7E25] pt-1">
                      + {activeService.items.length - 6} trámites adicionales incluidos en esta especialidad.
                    </p>
                  )}
                </div>
              </Reveal>
            )}

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* DETAIL MODAL / DRAWER FOR FULL SERVICE ITEMS LIST                         */}
      {/* ========================================================================= */}
      {detailModalService &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#14201C]/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setDetailModalService(null)}
          >
            <div
              className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border-2 border-[#014937]/20 p-6 sm:p-8 space-y-6 max-h-[88vh] sm:max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#014937]/15">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#014937] text-[#E0BB5D] rounded-2xl">
                    {serviceIcons[detailModalService.id] || <FileText className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider block">
                      {detailModalService.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937]">
                      {detailModalService.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setDetailModalService(null)}
                  className="p-2 rounded-full text-[#14201C]/60 hover:text-[#014937] hover:bg-[#F1F5F3] transition-colors focus:outline-none cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Summary */}
              <p className="text-sm sm:text-base font-body text-[#14201C]/85 leading-relaxed bg-[#F8FAF9] p-4 rounded-xl border border-[#014937]/10">
                {detailModalService.summary}
              </p>

              {/* Modal Items List */}
              <div className="space-y-3">
                <h4 className="text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#014937]" />
                  <span>Trámites y Actuaciones Incluidas ({detailModalService.items.length}):</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {detailModalService.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-[#014937]/10 flex items-start gap-3 shadow-xs"
                    >
                      <span className="p-1 rounded-md bg-[#014937] text-[#E0BB5D] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs sm:text-sm font-body text-[#14201C] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-[#014937]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-body text-[#14201C]/70">
                  ¿Necesitas asesoría en esta área?
                </p>
                <a
                  href="#contacto"
                  onClick={() => setDetailModalService(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#014937] hover:bg-[#146A55] text-white font-heading font-bold text-xs uppercase tracking-wider border border-[#E0BB5D] w-full sm:w-auto cursor-pointer"
                >
                  <span>Consultar por este servicio</span>
                  <ArrowRight className="w-4 h-4 text-[#E0BB5D]" />
                </a>
              </div>

            </div>
          </div>,
          document.body
        )}

    </AnimatedSection>
  );
};
