import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';

export const BlogSection: React.FC = () => {
  return (
    <AnimatedSection
      id="blog"
      className="py-16 md:py-20 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 document-stamp rounded-sm">
              <BookOpen className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
              <span>{siteContent.blog.badge}</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              id="blog-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
            >
              {siteContent.blog.title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-sm sm:text-base font-body text-[#14201C]/80 leading-relaxed">
              {siteContent.blog.subtitle}
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.25}>
            <div className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white border border-[#E0BB5D]/70 text-xs sm:text-sm font-heading font-semibold text-[#014937] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#AE7E25] shrink-0" aria-hidden="true" />
              <span>Próximamente publicaremos artículos, guías preventivas y criterios normativos actualizados.</span>
            </div>
          </Reveal>
        </div>

      </div>
    </AnimatedSection>
  );
};
