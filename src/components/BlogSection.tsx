import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, Clock, ArrowRight, X, ShieldCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';
import { StaggeredCards } from './animations/StaggeredCards';

export const BlogSection: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles = siteContent.blog.articles;
  const selectedArticle = articles.find((a) => a.id === selectedArticleId);

  // Lock body scroll when modal is open & handle Escape key
  useEffect(() => {
    if (selectedArticleId) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedArticleId(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedArticleId]);

  return (
    <AnimatedSection
      id="blog"
      className="py-16 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-10 md:mb-12">
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
            <p className="text-sm sm:text-base font-body text-[#14201C]/80 max-w-3xl">
              {siteContent.blog.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Article Cards Grid */}
        <StaggeredCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-6 rounded-xl border border-[#014937]/15 hover:border-[#014937] hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-heading font-semibold text-[#AE7E25]">
                  <span className="bg-[#E0BB5D]/15 text-[#AE7E25] px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#14201C]/60 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#014937] group-hover:text-[#146A55] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#14201C]/80 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedArticleId(article.id)}
                className="pt-3 border-t border-[#014937]/10 w-full flex items-center justify-between text-xs font-heading font-bold text-[#014937] group-hover:text-[#AE7E25] transition-colors cursor-pointer"
              >
                <span>Leer artículo completo</span>
                <ArrowRight className="w-4 h-4 text-[#AE7E25] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </StaggeredCards>

        {/* Modal for Article Reading rendered into document.body */}
        {selectedArticle &&
          createPortal(
            <div
              className="fixed inset-0 z-[9999] bg-[#14201C]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 my-0 animate-in fade-in duration-200"
              role="dialog"
              aria-modal="true"
              aria-labelledby="article-modal-title"
              onClick={() => setSelectedArticleId(null)}
            >
              {/* Modal Box */}
              <div
                className="bg-white rounded-2xl max-w-3xl w-full max-h-[88vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-[#014937]/20 relative overflow-hidden animate-in zoom-in-95 duration-200 my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Header (Fixed at Top) */}
                <div className="p-5 sm:p-6 border-b border-[#014937]/15 bg-white shrink-0 relative pr-12 rounded-t-2xl space-y-2">
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedArticleId(null)}
                    className="absolute top-4 right-4 p-2 text-[#014937] hover:bg-[#F1F5F3] hover:text-red-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] cursor-pointer"
                    aria-label="Cerrar artículo"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="font-heading font-bold text-xs uppercase px-2.5 py-1 rounded bg-[#E0BB5D]/20 text-[#AE7E25]">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs font-body text-[#14201C]/60 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#AE7E25]" />
                      {selectedArticle.readTime}
                    </span>
                  </div>

                  <h2 id="article-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-[#014937] leading-tight">
                    {selectedArticle.title}
                  </h2>

                  <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#014937] pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#E0BB5D] shrink-0" />
                    <span className="truncate">Serna Estate Firma Legal Inmobiliaria S.A.C. — Análisis Jurídico</span>
                  </div>
                </div>

                {/* Modal Content (Scrollable Body) */}
                <div className="p-5 sm:p-8 overflow-y-auto flex-1 font-body text-sm sm:text-base text-[#14201C] space-y-4 leading-relaxed whitespace-pre-line bg-white">
                  {selectedArticle.content}
                </div>

                {/* Modal Footer CTA (Fixed at Bottom) */}
                <div className="p-5 sm:p-6 border-t border-[#014937]/15 bg-[#F8FAF9] shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-b-2xl">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#014937]">
                      ¿Tienes dudas sobre la situación de tu inmueble?
                    </h4>
                    <p className="font-body text-xs text-[#14201C]/80">
                      Solicita un diagnóstico preliminar con nuestros especialistas en Derecho Inmobiliario.
                    </p>
                  </div>

                  <a
                    href="#contacto"
                    onClick={() => setSelectedArticleId(null)}
                    className="px-5 py-3 text-xs sm:text-sm font-heading font-bold text-white bg-[#014937] hover:bg-[#146A55] rounded-md shadow transition-colors shrink-0 cursor-pointer"
                  >
                    Agendar Consulta
                  </a>
                </div>

              </div>
            </div>,
            document.body
          )}

      </div>
    </AnimatedSection>
  );
};
