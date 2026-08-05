import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Award, HeartHandshake, Compass, Users, Sparkles, Lightbulb, Scale, ChevronDown, ChevronUp } from 'lucide-react';
import { siteContent } from '../config/siteContent';

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
    <section
      id="la-firma"
      className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="la-firma-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Standardized Section Header */}
        <div className="text-left space-y-3">
          <div className="document-stamp">
            <span>Quiénes Somos</span>
          </div>
          <h2
            id="la-firma-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
          >
            {siteContent.firm.title}
          </h2>
          <p className="text-base sm:text-lg font-heading text-[#AE7E25] font-semibold">
            {siteContent.firm.subtitle}
          </p>
        </div>

        {/* Introducción Box */}
        <div className="p-6 sm:p-8 bg-[#014937] text-white rounded-xl shadow-md space-y-3 relative overflow-hidden border-l-8 border-[#E0BB5D]">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#E0BB5D] block">
            Introducción Institucional
          </span>
          <p className="text-base sm:text-lg md:text-xl font-heading font-medium leading-relaxed">
            "{siteContent.firm.intro}"
          </p>
        </div>

        {/* Nuestra Historia */}
        <div className="bg-[#F8FAF9] p-6 sm:p-10 rounded-xl border border-[#014937]/15 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-[#014937]/15 pb-4">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937] flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E0BB5D]" />
              Nuestra Historia
            </h3>
            <span className="text-xs font-heading text-[#AE7E25] font-semibold bg-[#E0BB5D]/15 px-3 py-1 rounded">
              Serna Estate S.A.C.
            </span>
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
            <span>{showFullHistory ? "Mostrar menos" : "Leer historia completa de Serna Estate"}</span>
            {showFullHistory ? <ChevronUp className="w-4 h-4 text-[#E0BB5D]" /> : <ChevronDown className="w-4 h-4 text-[#E0BB5D]" />}
          </button>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Misión */}
          <div className="p-8 bg-white rounded-xl border-2 border-[#014937]/15 hover:border-[#014937] transition-all shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#014937] text-white rounded-lg">
                  <Target className="w-6 h-6 text-[#E0BB5D]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#014937]">
                  Nuestra Misión
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base text-[#14201C]/85 leading-relaxed pt-2">
                {siteContent.firm.mission}
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="p-8 bg-white rounded-xl border-2 border-[#014937]/15 hover:border-[#014937] transition-all shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#014937] text-white rounded-lg">
                  <Eye className="w-6 h-6 text-[#E0BB5D]" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#014937]">
                  Nuestra Visión
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base text-[#14201C]/85 leading-relaxed pt-2">
                {siteContent.firm.vision}
              </p>
            </div>
          </div>

        </div>

        {/* Nuestros Valores */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-[#014937]/15 pb-3">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937]">
              Nuestros Valores Institucionales
            </h3>
            <p className="text-sm font-body text-[#14201C]/75 mt-1">
              Principios fundamentales que rigen cada actuación y asesoría jurídica en Serna Estate
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteContent.firm.values.map((value, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#F8FAF9] rounded-lg border border-[#014937]/10 hover:border-[#E0BB5D] transition-colors shadow-xs space-y-2 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded bg-[#014937] text-white shrink-0">
                    {valueIcons[value.name] || <Award className="w-4 h-4 text-[#E0BB5D]" />}
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#014937] group-hover:text-[#146A55] transition-colors">
                    {value.name}
                  </h4>
                </div>
                <p className="font-body text-xs text-[#14201C]/80 leading-relaxed pt-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
