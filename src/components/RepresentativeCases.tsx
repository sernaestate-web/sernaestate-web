import React from 'react';
import { Building2, Users2, Landmark, AlertCircle, CheckCircle, FileSpreadsheet, Trophy } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const RepresentativeCases: React.FC = () => {
  const caseIcons = [
    <Building2 key="1" className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
    <Users2 key="2" className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
    <Landmark key="3" className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
  ];

  return (
    <section
      id="casos"
      className="py-16 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="casos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standardized Section Header */}
        <div className="text-left space-y-3 mb-12 md:mb-16">
          <div className="document-stamp flex items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
            <span>Casos de Éxito & Resultados Reales</span>
          </div>
          <h2
            id="casos-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
          >
            Nuestros Casos de Éxito
          </h2>
          <p className="text-base sm:text-lg font-body text-[#14201C]/80 max-w-3xl">
            Soluciones jurídicas estratégicas y efectivas diseñadas por la firma para proteger el patrimonio, resolver controversias complejas y lograr inscripciones registrales satisfactorias.
          </p>
        </div>

        {/* 3 Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {siteContent.representativeCases.map((caseItem, idx) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-xl border border-[#014937]/15 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Case Tag & Title */}
                <div className="space-y-2 pb-4 border-b border-[#014937]/10">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xs uppercase px-2.5 py-1 rounded bg-[#014937] text-[#E0BB5D]">
                      {caseItem.tag}
                    </span>
                    <div className="p-1.5 rounded bg-[#F1F5F3] text-[#014937]">
                      {caseIcons[idx]}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#014937] pt-1 leading-snug">
                    {caseItem.title}
                  </h3>
                </div>

                {/* Situación */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
                    <span>Situación / Desafío</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#14201C]/85 leading-relaxed bg-[#F8FAF9] p-3 rounded border border-[#014937]/5">
                    {caseItem.situation}
                  </p>
                </div>

                {/* Intervención */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#014937] uppercase tracking-wider">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-[#014937]" aria-hidden="true" />
                    <span>Estrategia e Intervención Legal</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#14201C]/85 leading-relaxed bg-[#F8FAF9] p-3 rounded border border-[#014937]/5">
                    {caseItem.intervention}
                  </p>
                </div>

                {/* Resultado */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#146A55] uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5 text-[#146A55]" aria-hidden="true" />
                    <span>Resultado Éxito Alcanzado</span>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#014937] font-semibold leading-relaxed bg-[#F1F5F3] p-3.5 rounded border border-[#146A55]/20">
                    {caseItem.result}
                  </p>
                </div>

              </div>

              {/* Confidentiality Footer Badge */}
              <div className="mt-6 pt-3 border-t border-[#014937]/10 text-[11px] font-heading text-[#14201C]/60 italic">
                Resguardo estricto de confidencialidad de las partes.
              </div>
            </div>
          ))}
        </div>

        {/* Mandated Disclaimer */}
        <div className="p-4 sm:p-5 rounded-lg bg-white border border-[#E0BB5D]/50 shadow-sm text-xs sm:text-sm font-body text-[#14201C]/80 flex items-start gap-3">
          <span className="font-heading font-bold text-[#AE7E25] uppercase tracking-wider text-xs bg-[#E0BB5D]/20 px-2 py-1 rounded shrink-0">
            Aviso Legal
          </span>
          <p className="leading-relaxed">
            {siteContent.casesDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
