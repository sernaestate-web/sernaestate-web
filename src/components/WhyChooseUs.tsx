import React from 'react';
import { ShieldCheck, Compass, UserCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';
import { StaggeredCards } from './animations/StaggeredCards';

export const WhyChooseUs: React.FC = () => {
  return (
    <AnimatedSection
      id="por-que-elegirnos"
      className="py-16 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Standardized Section Header */}
        <div className="text-left space-y-3 mb-12 md:mb-16">
          <Reveal direction="up" delay={0.1}>
            <div className="document-stamp">
              <span>Diferenciación Institucional</span>
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.15}>
            <h2
              id="por-que-elegirnos-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
            >
              {siteContent.whyUs.title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg font-body text-[#14201C]/80 max-w-3xl">
              {siteContent.whyUs.subtitle}
            </p>
          </Reveal>
        </div>

        {/* 3 Main Reasons Grid with Staggered Entrance and Distinctive Colors */}
        <StaggeredCards className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.15}>
          {siteContent.whyUs.reasons.map((reason, idx) => {
            const icons = [
              <ShieldCheck key="1" className="w-7 h-7 text-[#013527]" />,
              <Compass key="2" className="w-7 h-7 text-[#013527]" />,
              <UserCheck key="3" className="w-7 h-7 text-[#013527]" />,
            ];

            return (
              <div
                key={idx}
                className="bg-[#014937] text-white p-8 rounded-2xl border-2 border-[#E0BB5D]/70 hover:border-[#E0BB5D] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 space-y-6 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle decorative background gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0BB5D]/10 rounded-bl-full pointer-events-none" />

                <div className="space-y-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#E0BB5D] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    {icons[idx]}
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white leading-snug">
                    {reason.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-white/90 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 flex items-center gap-2 text-xs font-heading font-bold text-[#E0BB5D] relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E0BB5D] shadow-xs" />
                  <span>Serna Estate • Garantía Institucional</span>
                </div>
              </div>
            );
          })}
        </StaggeredCards>

      </div>
    </AnimatedSection>
  );
};
