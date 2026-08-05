import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, CheckCircle2, FileText, Check } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const Services: React.FC = () => {
  // Store expanded state for each service item ID (first service open by default)
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    litigios: true,
  });

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="servicios"
      className="py-16 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="servicios-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-10 md:mb-12">
          <div className="document-stamp">
            <span>Áreas de Práctica Especializada</span>
          </div>
          <h2
            id="servicios-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
          >
            Nuestros Servicios Legales
          </h2>
          <p className="text-base sm:text-lg font-body text-[#14201C]/80 max-w-3xl">
            Asesoría integral, patrocinio y estructuración jurídica especializada para proteger tu patrimonio e inversión en cada etapa del ciclo inmobiliario en el Perú.
          </p>
        </div>

        {/* Services Accordion List */}
        <div className="space-y-4 mb-12">
          {siteContent.services.map((service) => {
            const isOpen = !!openItems[service.id];
            const buttonId = `accordion-button-${service.id}`;
            const panelId = `accordion-panel-${service.id}`;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-lg border transition-all duration-200 overflow-hidden shadow-sm ${
                  isOpen
                    ? 'border-[#014937] ring-1 ring-[#014937]/20 shadow-md'
                    : 'border-[#014937]/15 hover:border-[#146A55]/40'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] min-h-[56px] group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-2">
                    <span className="inline-block font-heading font-bold text-xs uppercase px-2.5 py-1 rounded bg-[#014937]/10 text-[#014937] border border-[#014937]/20 w-fit shrink-0">
                      {service.badge}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#014937] group-hover:text-[#146A55] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 pt-1 sm:pt-0">
                    <span className="hidden sm:inline-block text-xs font-heading text-[#AE7E25] font-medium">
                      {isOpen ? 'Ocultar servicios' : 'Ver servicios'}
                    </span>
                    <div
                      className={`p-1.5 rounded-full transition-transform duration-200 ${
                        isOpen
                          ? 'bg-[#014937] text-white rotate-180'
                          : 'bg-[#F1F5F3] text-[#014937] group-hover:bg-[#E0BB5D]/30'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                </button>

                {/* Accordion Content Panel */}
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-[#014937]/10 bg-[#F8FAF9]/50 animate-in fade-in duration-200"
                  >
                    <p className="font-body text-sm sm:text-base font-medium text-[#14201C] mb-4 leading-relaxed">
                      {service.summary}
                    </p>
                    
                    <div className="p-4 sm:p-5 rounded-md bg-white border border-[#014937]/10 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
                        <FileText className="w-4 h-4 text-[#AE7E25]" aria-hidden="true" />
                        <span>Servicios incluidos en esta área:</span>
                      </div>

                      {service.items && service.items.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                          {service.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#14201C]/85">
                              <span className="p-0.5 bg-[#014937]/10 text-[#014937] rounded shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs font-heading text-[#014937]">
                      <CheckCircle2 className="w-4 h-4 text-[#146A55]" aria-hidden="true" />
                      <span>Estrategia legal personalizada adaptada a tu caso específico.</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Scope Note & Action Banner */}
        <div className="p-6 sm:p-8 bg-white rounded-lg border border-[#014937]/20 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <p className="font-heading font-semibold text-sm text-[#AE7E25] uppercase tracking-wide">
              Evaluación Personalizada
            </p>
            <p className="font-body text-sm sm:text-base text-[#14201C]">
              {siteContent.servicesNote}
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-heading font-semibold text-white bg-[#014937] hover:bg-[#146A55] transition-all rounded-md shadow border border-[#014937] focus:ring-2 focus:ring-[#E0BB5D] shrink-0 w-full sm:w-auto min-h-[48px]"
          >
            Consulta con nuestro equipo legal
            <ArrowUpRight className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
};
