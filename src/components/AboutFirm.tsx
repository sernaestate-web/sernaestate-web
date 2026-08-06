import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Compass, Users, Sparkles, Lightbulb, Scale, ChevronDown, ChevronUp, History, BookOpenCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';
import { StaggeredCards } from './animations/StaggeredCards';

export const AboutFirm: React.FC = () => {
  const [showFullHistory, setShowFullHistory] = useState(false);

  const valueIcons: Record<string, React.ReactNode> = {
    "Excelencia": <Award className="w-5 h-5 text-[#E0BB5D]" />,
    "Integridad": <ShieldCheck className="w-5 h-5 text-[#E0BB5D]" />,
    "Compromiso": <HeartHandshake className="w-5 h-5 text-[#E0BB5D]" />,
    "Especialización": <Compass className="w-5 h-5 text-[#E0BB5D]" />,
    "Confianza": <Users className="w-5 h-5 text-[#E0BB5D]" />,
    "Innovación": <Sparkles className="w-5 h-5 text-[#E0BB5D]" />,
    "Orientación a soluciones": <Lightbulb className="w-5 h-5 text-[#E0BB5D]" />,
    "Responsabilidad": <Scale className="w-5 h-5 text-[#E0BB5D]" />,
  };

  return (
    <AnimatedSection
      id="la-firma"
      className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-[#014937]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header de Sección */}
        <div className="text-left space-y-3">
          <Reveal direction="up" delay={0.1}>
            <div className="document-stamp">
              <span>Quiénes Somos</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              id="la-firma-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
            >
              {siteContent.firm.title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg font-heading text-[#AE7E25] font-semibold">
              {siteContent.firm.subtitle}
            </p>
          </Reveal>
        </div>

        {/* ==================================================================== */}
        {/* NIVEL 1: CARTA PRINCIPAL - Identidad Institucional y Historia       */}
        {/* ==================================================================== */}
        <Reveal direction="up" delay={0.25}>
          <div className="bg-[#F8FAF9] rounded-2xl border-2 border-[#014937]/20 shadow-md overflow-hidden">
            
            {/* Banner de Introducción Institucional */}
            <div className="p-6 sm:p-8 bg-[#014937] text-white space-y-3 border-l-8 border-[#E0BB5D]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#E0BB5D] flex items-center gap-2">
                  <BookOpenCheck className="w-4 h-4 text-[#E0BB5D]" />
                  Filosofía Institucional
                </span>
                <span className="text-xs font-heading text-white/70 font-semibold bg-white/10 px-2.5 py-0.5 rounded">
                  Serna Estate S.A.C.
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl font-heading font-medium leading-relaxed">
                "{siteContent.firm.intro}"
              </p>
            </div>

            {/* Cuerpo de Historia */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex items-center justify-between border-b border-[#014937]/15 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#014937]/10 text-[#014937]">
                    <History className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider block">
                      Nivel 1 • Orígenes & Trayectoria
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937]">
                      Nuestra Historia
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-[#14201C]/90 font-body text-sm sm:text-base leading-relaxed">
                {siteContent.firm.history.slice(0, showFullHistory ? siteContent.firm.history.length : 3).map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <button
                onClick={() => setShowFullHistory(!showFullHistory)}
                className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#014937] hover:text-[#146A55] transition-colors focus:outline-none pt-2 cursor-pointer"
              >
                <span>{showFullHistory ? "Mostrar menos historia" : "Leer historia completa de Serna Estate"}</span>
                {showFullHistory ? <ChevronUp className="w-4 h-4 text-[#E0BB5D]" /> : <ChevronDown className="w-4 h-4 text-[#E0BB5D]" />}
              </button>
            </div>

          </div>
        </Reveal>

        {/* ==================================================================== */}
        {/* NIVEL 2: ARRIBA - MISIÓM Y VISIÓN (2 Cards Grid)                   */}
        {/* ==================================================================== */}
        <div className="space-y-8">
          <Reveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#E0BB5D]" />
              <span>Nivel 2 • Dirección Estratégica</span>
            </div>
          </Reveal>

          <StaggeredCards className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" stagger={0.15}>
            
            {/* Card 1: Misión (Arriba Izquierda) */}
            <div className="p-8 bg-white rounded-2xl border-2 border-[#014937]/20 hover:border-[#014937] transition-all shadow-md space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#014937]/15">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#014937] text-white rounded-xl shadow-xs group-hover:bg-[#146A55] transition-colors">
                      <Target className="w-6 h-6 text-[#E0BB5D]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold text-[#AE7E25] uppercase tracking-widest block">
                        Propósito Actual
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937]">
                        Nuestra Misión
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-heading font-black text-[#014937]/20 group-hover:text-[#014937]/40 transition-colors">
                    01
                  </span>
                </div>

                <p className="font-body text-sm sm:text-base text-[#14201C]/85 leading-relaxed">
                  {siteContent.firm.mission}
                </p>
              </div>

              <div className="pt-4 border-t border-[#014937]/10 text-xs font-heading text-[#AE7E25] font-bold flex items-center justify-between">
                <span>Garantía de Seguridad Patrimonial</span>
                <ShieldCheck className="w-4 h-4 text-[#014937]" />
              </div>
            </div>

            {/* Card 2: Visión (Arriba Derecha) */}
            <div className="p-8 bg-white rounded-2xl border-2 border-[#014937]/20 hover:border-[#014937] transition-all shadow-md space-y-6 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#014937]/15">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#014937] text-white rounded-xl shadow-xs group-hover:bg-[#146A55] transition-colors">
                      <Eye className="w-6 h-6 text-[#E0BB5D]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold text-[#AE7E25] uppercase tracking-widest block">
                        Horizonte Institucional
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937]">
                        Nuestra Visión
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-heading font-black text-[#014937]/20 group-hover:text-[#014937]/40 transition-colors">
                    02
                  </span>
                </div>

                <p className="font-body text-sm sm:text-base text-[#14201C]/85 leading-relaxed">
                  {siteContent.firm.vision}
                </p>
              </div>

              <div className="pt-4 border-t border-[#014937]/10 text-xs font-heading text-[#AE7E25] font-bold flex items-center justify-between">
                <span>Liderazgo & Excelencia Registral</span>
                <Award className="w-4 h-4 text-[#014937]" />
              </div>
            </div>

          </StaggeredCards>

          {/* ==================================================================== */}
          {/* NIVEL 2: ABAJO - NUESTROS VALORES (Card Ancha Completa)              */}
          {/* ==================================================================== */}
          <Reveal direction="up" delay={0.25}>
            <div className="p-8 sm:p-10 bg-white rounded-2xl border-2 border-[#014937]/20 hover:border-[#014937] transition-all shadow-md space-y-8 group">
              
              {/* Header de Valores */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#014937]/15 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#014937] text-white rounded-xl shadow-xs group-hover:bg-[#146A55] transition-colors">
                    <Sparkles className="w-6 h-6 text-[#E0BB5D]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-bold text-[#AE7E25] uppercase tracking-widest block">
                      Cultura & Ética Institucional
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937]">
                      Nuestros Valores
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-heading text-[#AE7E25] font-bold">
                  <span>Principios Éticos Innegociables</span>
                  <HeartHandshake className="w-4 h-4 text-[#014937]" />
                </div>
              </div>

              {/* Grid de 8 Valores (4 Columnas en Desktop) */}
              <StaggeredCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
                {siteContent.firm.values.map((value, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F8FAF9] rounded-xl border border-[#014937]/15 hover:border-[#E0BB5D] hover:bg-white transition-all shadow-2xs space-y-2 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-[#014937] text-white shrink-0">
                          {valueIcons[value.name] || <Award className="w-4 h-4 text-[#E0BB5D]" />}
                        </div>
                        <h4 className="font-heading font-bold text-sm text-[#014937]">
                          {value.name}
                        </h4>
                      </div>
                      <p className="font-body text-xs text-[#14201C]/80 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </StaggeredCards>

            </div>
          </Reveal>

        </div>

      </div>
    </AnimatedSection>
  );
};
