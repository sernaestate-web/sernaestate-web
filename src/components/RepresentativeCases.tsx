import React from 'react';
import { Building2, Users2, Landmark, AlertCircle, CheckCircle, FileSpreadsheet, Trophy } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';
import { StaggeredCards } from './animations/StaggeredCards';

export const RepresentativeCases: React.FC = () => {
  const caseIcons = [
    <Building2 key="1" className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
    <Users2 key="2" className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
    <Landmark key="3" className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
  ];

  return (
    <AnimatedSection
      id="casos"
      className="py-16 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standardized Section Header */}
        <div className="text-left space-y-3 mb-12 md:mb-16">
          <Reveal direction="up" delay={0.1}>
            <div className="document-stamp flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
              <span>Casos de Éxito & Resultados Reales</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              id="casos-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
            >
              Nuestros Casos de Éxito
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg font-body text-[#14201C]/80 max-w-3xl">
              Soluciones jurídicas estratégicas y efectivas diseñadas por la firma para proteger el patrimonio, resolver controversias complejas y lograr inscripciones registrales satisfactorias.
            </p>
          </Reveal>
        </div>

        {/* 3 Cases Grid */}
        <StaggeredCards className="grid grid-cols-1 lg:grid-cols-3 gap-8" stagger={0.15}>
          {siteContent.representativeCases.map((caseItem, idx) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-2xl border-2 border-[#014937]/15 hover:border-[#014937] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* 1. ENCABEZADO DE COLOR VERDE */}
                <div className="bg-[#014937] text-white p-6 space-y-3 border-b-2 border-[#E0BB5D]">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xs uppercase px-3 py-1 rounded-md bg-[#E0BB5D] text-[#013527] shadow-xs">
                      {caseItem.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white/10 text-[#E0BB5D]">
                      {caseIcons[idx]}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white pt-1 leading-snug">
                    {caseItem.title}
                  </h3>
                </div>

                {/* Contenido del Caso */}
                <div className="p-6 space-y-5">
                  {/* Situación */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
                      <span>Situación / Desafío</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#14201C]/85 leading-relaxed bg-[#F8FAF9] p-3.5 rounded-xl border border-[#014937]/10">
                      {caseItem.situation}
                    </p>
                  </div>

                  {/* Intervención */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#014937] uppercase tracking-wider">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#014937]" aria-hidden="true" />
                      <span>Estrategia e Intervención Legal</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#14201C]/85 leading-relaxed bg-[#F8FAF9] p-3.5 rounded-xl border border-[#014937]/10">
                      {caseItem.intervention}
                    </p>
                  </div>

                  {/* 2. RESULTADO ÉXITO ALCANZADO: RECTÁNGULO EN DORADO BAJO */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-[#AE7E25]" aria-hidden="true" />
                      <span>Resultado Éxito Alcanzado</span>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FBF6E9] border-2 border-[#E0BB5D]/60 shadow-xs">
                      <p className="font-body text-xs sm:text-sm text-[#42310C] font-semibold leading-relaxed">
                        {caseItem.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confidentiality Footer Badge */}
              <div className="px-6 pb-6 pt-2 text-[11px] font-heading text-[#14201C]/60 italic border-t border-[#014937]/10 mx-6">
                Resguardo estricto de confidencialidad de las partes.
              </div>
            </div>
          ))}
        </StaggeredCards>

      </div>
    </AnimatedSection>
  );
};
