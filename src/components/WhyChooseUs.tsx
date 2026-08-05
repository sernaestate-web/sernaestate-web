import React from 'react';
import { ShieldCheck, Compass, UserCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="por-que-elegirnos"
      className="py-16 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="por-que-elegirnos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standardized Section Header */}
        <div className="text-left space-y-3 mb-12 md:mb-16">
          <div className="document-stamp">
            <span>Diferenciación Institucional</span>
          </div>
          <h2
            id="por-que-elegirnos-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
          >
            {siteContent.whyUs.title}
          </h2>
          <p className="text-base sm:text-lg font-body text-[#14201C]/80 max-w-3xl">
            {siteContent.whyUs.subtitle}
          </p>
        </div>

        {/* 3 Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.whyUs.reasons.map((reason, idx) => {
            const icons = [
              <ShieldCheck key="1" className="w-7 h-7 text-[#014937]" />,
              <Compass key="2" className="w-7 h-7 text-[#014937]" />,
              <UserCheck key="3" className="w-7 h-7 text-[#014937]" />,
            ];

            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl border-2 border-[#014937]/15 hover:border-[#014937] transition-all shadow-sm hover:shadow-md space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-[#014937]/10 flex items-center justify-center shrink-0 border border-[#014937]/20 group-hover:bg-[#014937] group-hover:text-white transition-colors">
                    {icons[idx]}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#014937] leading-snug">
                    {reason.title}
                  </h3>

                  <p className="font-body text-sm text-[#14201C]/85 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#014937]/10 flex items-center gap-2 text-xs font-heading font-bold text-[#AE7E25]">
                  <span className="w-2 h-2 rounded-full bg-[#E0BB5D]" />
                  <span>Serna Estate Compromiso Legal</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
