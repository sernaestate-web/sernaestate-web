import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, ShieldCheck, Share2 } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const BlogSection: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles = siteContent.blog.articles;
  const selectedArticle = articles.find((a) => a.id === selectedArticleId);

  return (
    <section
      id="blog"
      className="py-16 md:py-24 bg-[#F8FAF9] relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 document-stamp rounded-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
            <span>{siteContent.blog.badge}</span>
          </div>
          <h2
            id="blog-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
          >
            {siteContent.blog.title}
          </h2>
          <p className="text-sm sm:text-base font-body text-[#14201C]/80 max-w-3xl">
            {siteContent.blog.subtitle}
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>

        {/* Modal for Article Reading */}
        {selectedArticle && (
          <div
            className="fixed inset-0 z-50 bg-[#14201C]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
          >
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#014937]/20 shadow-2xl relative p-6 sm:p-8 space-y-6">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticleId(null)}
                className="absolute top-4 right-4 p-2 text-[#014937] hover:bg-[#F1F5F3] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#E0BB5D]"
                aria-label="Cerrar artículo"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Article Header */}
              <div className="space-y-3 pr-8">
                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-xs uppercase px-2.5 py-1 rounded bg-[#E0BB5D]/20 text-[#AE7E25]">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs font-body text-[#14201C]/60 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#AE7E25]" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#014937]">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-2 text-xs font-heading font-semibold text-[#014937] border-y border-[#014937]/10 py-2">
                  <ShieldCheck className="w-4 h-4 text-[#E0BB5D]" />
                  <span>Serna Estate Firma Legal Inmobiliaria S.A.C. — Análisis Jurídico Preventivo</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-emerald max-w-none font-body text-sm sm:text-base text-[#14201C] space-y-4 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-6 border-t border-[#014937]/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F8FAF9] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl">
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
                  className="px-5 py-3 text-xs sm:text-sm font-heading font-bold text-white bg-[#014937] hover:bg-[#146A55] rounded-md shadow transition-colors shrink-0"
                >
                  Agendar Consulta
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
