import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const UpcomingContent: React.FC = () => {
  return (
    <section
      className="py-14 md:py-20 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="proximos-contenidos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 document-stamp rounded-sm">
            <Clock className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
            <span>{siteContent.upcomingContent.badge}</span>
          </div>
          <h2
            id="proximos-contenidos-heading"
            className="text-2xl sm:text-3xl font-heading font-bold text-[#014937]"
          >
            {siteContent.upcomingContent.title}
          </h2>
          <p className="text-sm sm:text-base font-body text-[#14201C]/80 max-w-2xl">
            {siteContent.upcomingContent.subtitle}
          </p>
        </div>

        {/* 4 Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.upcomingContent.topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-lg border border-[#014937]/15 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-heading font-semibold text-[#AE7E25]">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    Guía Legal
                  </span>
                  <span className="bg-[#E0BB5D]/20 text-[#AE7E25] px-2 py-0.5 rounded text-[10px]">
                    Próximamente
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-[#014937]">
                  {topic.title}
                </h3>
                <p className="font-body text-xs text-[#14201C]/80 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#014937]/10 text-[11px] font-heading text-[#14201C]/60 flex items-center justify-between">
                <span>Publicación en preparación</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E0BB5D]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
