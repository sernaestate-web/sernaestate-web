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
        {/* FILOSOFÍA INSTITUCIONAL - Bloque Separado e Independiente           */}
        {/* ==================================================================== */}
        <Reveal direction="up" delay={0.22}>
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#014937] text-white shadow-xl border-2 border-[#E0BB5D] relative overflow-hidden space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/20">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#E0BB5D] text-[#013527] font-heading font-extrabold text-xs uppercase tracking-wider shadow-sm">
                <BookOpenCheck className="w-4 h-4 text-[#013527]" />
                <span>Filosofía Institucional</span>
              </div>
              <span className="text-xs font-heading text-[#E0BB5D] font-bold tracking-wider">
                {siteContent.brand.shortName} • Firma Legal Inmobiliaria
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl font-heading font-medium leading-relaxed text-white drop-shadow-xs">
              "{siteContent.firm.intro}"
            </p>
          </div>
        </Reveal>

        {/* ==================================================================== */}
        {/* ORÍGENES & TRAYECTORIA: NUESTRA HISTORIA                            */}
        {/* ==================================================================== */}
        <Reveal direction="up" delay={0.25}>
          <div className="bg-[#F8FAF9] rounded-2xl border-2 border-[#014937]/20 shadow-md overflow-hidden p-6 sm:p-8 md:p-10 space-y-6">
            
            {/* Subtítulo Dorado: Nuestra Historia */}
            <div className="w-full bg-[#E0BB5D] text-[#013527] px-6 py-4 rounded-xl font-heading font-extrabold shadow-sm border border-[#cfa545] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#013527] text-[#E0BB5D]">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-bold text-[#013527]/85 uppercase tracking-widest block">
                    Orígenes & Trayectoria
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-[#013527]">
                    Nuestra Historia
                  </h3>
                </div>
              </div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#013527]/80 hidden sm:inline-block">
                Serna Estate
              </span>
            </div>

            <div className="space-y-4 text-[#14201C]/90 font-body text-sm sm:text-base leading-relaxed pt-2">
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
              {showFullHistory ? <ChevronUp className="w-4 h-4 text-[#AE7E25]" /> : <ChevronDown className="w-4 h-4 text-[#AE7E25]" />}
            </button>
          </div>
        </Reveal>

        {/* ==================================================================== */}
        {/* DIRECCIÓN ESTRATÉGICA: MISIÓN Y VISIÓN (2 Cards Grid)                */}
        {/* ==================================================================== */}
        <div className="space-y-8">
          <Reveal direction="up" delay={0.1}>
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E0BB5D]" />
              <span>Dirección Estratégica</span>
            </div>
          </Reveal>

          <StaggeredCards className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" stagger={0.15}>
            
            {/* Card 1: Misión */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#014937]/20 hover:border-[#014937] transition-all shadow-md space-y-6 flex flex-col justify-between group">
              <div className="space-y-5">
                {/* Subtítulo Dorado: Nuestra Misión */}
                <div className="w-full bg-[#E0BB5D] text-[#013527] px-5 py-3.5 rounded-xl font-heading font-extrabold shadow-sm border border-[#cfa545] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#013527] text-[#E0BB5D] rounded-lg">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold text-[#013527]/85 uppercase tracking-widest block">
                        Propósito Institucional
                      </span>
                      <h3 className="text-lg sm:text-xl font-heading font-black text-[#013527]">
                        Nuestra Misión
                      </h3>
                    </div>
                  </div>
                  <span className="text-xl font-heading font-black text-[#013527]/30">
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

            {/* Card 2: Visión */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border-2 border-[#014937]/20 hover:border-[#014937] transition-all shadow-md space-y-6 flex flex-col justify-between group">
              <div className="space-y-5">
                {/* Subtítulo Dorado: Nuestra Visión */}
                <div className="w-full bg-[#E0BB5D] text-[#013527] px-5 py-3.5 rounded-xl font-heading font-extrabold shadow-sm border border-[#cfa545] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#013527] text-[#E0BB5D] rounded-lg">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-heading font-bold text-[#013527]/85 uppercase tracking-widest block">
                        Horizonte Registral
                      </span>
                      <h3 className="text-lg sm:text-xl font-heading font-black text-[#013527]">
                        Nuestra Visión
                      </h3>
                    </div>
                  </div>
                  <span className="text-xl font-heading font-black text-[#013527]/30">
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
          {/* CULTURA & ÉTICA: NUESTROS VALORES (Card Ancha Completa)              */}
          {/* ==================================================================== */}
          <Reveal direction="up" delay={0.25}>
            <div className="p-6 sm:p-8 md:p-10 bg-white rounded-2xl border-2 border-[#014937]/20 hover:border-[#014937] transition-all shadow-md space-y-8 group">
              
              {/* Subtítulo Dorado: Nuestros Valores */}
              <div className="w-full bg-[#E0BB5D] text-[#013527] px-6 py-4 rounded-xl font-heading font-extrabold shadow-sm border border-[#cfa545] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#013527] text-[#E0BB5D] rounded-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-bold text-[#013527]/85 uppercase tracking-widest block">
                      Cultura & Ética Institucional
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-black text-[#013527]">
                      Nuestros Valores
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-heading text-[#013527] font-bold bg-[#013527]/10 px-3 py-1.5 rounded-lg">
                  <span>Principios Éticos Innegociables</span>
                  <HeartHandshake className="w-4 h-4 text-[#013527]" />
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
