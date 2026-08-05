import React from 'react';
import { MessageSquareText, Search, Map, ShieldCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const WorkProcess: React.FC = () => {
  const stepIcons = [
    <MessageSquareText className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
    <Search className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
    <Map className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
    <ShieldCheck className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />,
  ];

  return (
    <section
      id="proceso"
      className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="proceso-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12 md:mb-16">
          <div className="document-stamp">
            <span>Metodología Institucional</span>
          </div>
          <h2
            id="proceso-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
          >
            {siteContent.workProcess.title}
          </h2>
          <p className="text-base sm:text-lg font-body text-[#14201C]/80 max-w-2xl">
            {siteContent.workProcess.subtitle}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteContent.workProcess.steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-[#F8FAF9] border border-[#014937]/15 hover:border-[#E0BB5D] transition-colors shadow-sm flex flex-col justify-between group"
            >
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#014937]/10">
                <span className="font-heading font-extrabold text-xl text-[#014937] group-hover:text-[#146A55] transition-colors">
                  Paso {step.step}
                </span>
                <div className="p-2 rounded-md bg-[#014937] text-white">
                  {stepIcons[index]}
                </div>
              </div>

              {/* Step Title & Description */}
              <div className="space-y-2 mb-4">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#014937]">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#14201C]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step Indicator footer */}
              <div className="pt-3 border-t border-[#014937]/10 text-xs font-heading text-[#AE7E25] font-semibold flex items-center justify-between">
                <span>Atención Transparente</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0BB5D]" />
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Disclaimer Footer */}
        <div className="mt-10 p-4 rounded-md bg-[#F1F5F3] border border-[#014937]/15 text-xs sm:text-sm font-body text-[#14201C]/80 flex items-start gap-3">
          <span className="font-heading font-bold text-[#014937] shrink-0 uppercase tracking-wider text-xs bg-[#014937]/10 px-2 py-0.5 rounded border border-[#014937]/20">
            Nota
          </span>
          <p className="leading-relaxed">
            {siteContent.workProcess.note}
          </p>
        </div>

      </div>
    </section>
  );
};
