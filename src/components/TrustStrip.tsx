import React from 'react';
import { ShieldCheck, Compass, UserCheck, MapPin } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const TrustStrip: React.FC = () => {
  const iconsMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#E0BB5D]" aria-hidden="true" />,
    Compass: <Compass className="w-6 h-6 text-[#E0BB5D]" aria-hidden="true" />,
    UserCheck: <UserCheck className="w-6 h-6 text-[#E0BB5D]" aria-hidden="true" />,
    MapPin: <MapPin className="w-6 h-6 text-[#E0BB5D]" aria-hidden="true" />,
  };

  return (
    <section
      className="bg-[#014937] text-white py-10 md:py-12 border-b border-[#E0BB5D]/20 relative overflow-hidden"
      aria-label="Pilares institucionales de confianza"
    >
      {/* Subtle Cadastral Grid overlay in gold */}
      <div className="absolute inset-0 cadastral-grid-gold opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {siteContent.trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-[#E0BB5D]/40 transition-colors"
            >
              <div className="p-2.5 rounded-md bg-[#146A55]/50 border border-[#E0BB5D]/30 shrink-0">
                {iconsMap[pillar.iconName]}
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-semibold text-sm sm:text-base text-[#E0BB5D]">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/85 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
