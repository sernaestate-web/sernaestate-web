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
  // Modal state for showing full sub-items list
  const [detailModalService, setDetailModalService] = useState<typeof siteContent.services[0] | null>(null);

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
      className="py-16 sm:py-20 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* TOP SECTION: Título y Presentación General (Arriba)                      */}
        {/* ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#014937]/20 bg-[#014937]/10 text-xs font-heading font-bold text-[#014937] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#AE7E25]" />
              <span>Áreas de Práctica</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              id="servicios-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#014937] leading-[1.18] tracking-tight"
            >
              Explora nuestra oferta de servicios legales
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg font-body text-[#14201C]/80 leading-relaxed max-w-3xl mx-auto">
              Enfocados en tus necesidades patrimoniales e inversión, nuestro equipo ofrece soluciones que combinan profundo rigor jurídico, estrategia registral y prevención de riesgos para garantizar seguridad a largo plazo.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 text-sm font-heading font-bold uppercase tracking-wider text-white bg-[#014937] hover:bg-[#146A55] active:bg-[#014937] transition-all duration-200 rounded-xl shadow-md hover:shadow-lg border-2 border-[#E0BB5D] group min-h-[48px]"
              >
                <span>Solicitar Asesoría</span>
                <ArrowRight className="w-4 h-4 text-[#E0BB5D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#014937]/15 text-xs font-heading font-bold text-[#AE7E25] shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-[#E0BB5D]" aria-hidden="true" />
                <span>Atención Personalizada en todo el Perú</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SECTION: Grid de 8 Servicios Legales (Abajo en 4 Columnas)         */}
        {/* ========================================================================= */}
        <StaggeredCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          {siteContent.services.map((service) => {
            const icon = serviceIcons[service.id] || <FileText className="w-6 h-6" />;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border-2 border-[#014937]/15 hover:border-[#014937] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group"
              >
                {/* Cuerpo de la tarjeta con contenido */}
                <div className="p-6 space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    {/* Icono Esmeralda con Dorado */}
                    <div className="w-12 h-12 rounded-xl bg-[#014937] text-[#E0BB5D] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      {icon}
                    </div>

                    {/* Badge de Categoría */}
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#014937]/10 text-[#014937] border border-[#014937]/15">
                      {service.badge}
                    </span>
                  </div>

                  {/* Título del Servicio */}
                  <h3 className="text-lg font-heading font-bold text-[#014937] group-hover:text-[#146A55] transition-colors leading-snug">
                    {service.title.replace(/^\d+\.\s*/, '')}
                  </h3>

                  {/* Resumen */}
                  <p className="text-xs sm:text-sm font-body text-[#14201C]/80 leading-relaxed line-clamp-3">
                    {service.summary}
                  </p>
                </div>

                {/* Franja Inferior "Ver Detalle" en Color Dorado */}
                <button
                  type="button"
                  onClick={() => setDetailModalService(service)}
                  className="w-full bg-[#E0BB5D] hover:bg-[#ebd07d] text-[#013527] px-4 py-3 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer border-t border-[#cfa545] shadow-xs"
                >
                  <span className="font-extrabold">Ver detalle</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-medium opacity-90">({service.items.length})</span>
                    <ChevronRight className="w-4 h-4 text-[#013527] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            );
          })}
        </StaggeredCards>

      </div>

      {/* ========================================================================= */}
      {/* DETAIL MODAL FOR FULL SERVICE ITEMS LIST                                  */}
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
                  ¿Necesitas asesoría en esta especialidad?
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
