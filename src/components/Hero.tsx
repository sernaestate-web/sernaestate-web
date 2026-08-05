import React from 'react';
import { ArrowUpRight, ChevronRight, ShieldCheck } from 'lucide-react';
import { siteContent, getCloudinarySrcSet, getCloudinaryUrl } from '../config/siteContent';
import { CadastralLinderoSvg } from './CadastralLinderoSvg';

export const Hero: React.FC = () => {
  const heroPhotoUrl = siteContent.images.heroPhoto.url;
  const heroSrcSet = getCloudinarySrcSet(heroPhotoUrl, [480, 768, 1200, 1600]);

  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-[#F8FAF9] via-white to-[#F8FAF9] overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="hero-heading"
    >
      {/* Cadastral Grid Background Overlay */}
      <div className="absolute inset-0 cadastral-grid opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Document / Brand Label */}
            <div className="inline-flex items-center gap-2 document-stamp rounded-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
              <span>{siteContent.brand.tagline}</span>
            </div>

            {/* Main Title (H1) */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-heading font-bold text-[#014937] leading-[1.18] tracking-tight"
            >
              Protegemos tu patrimonio inmobiliario con <span className="relative inline-block text-[#014937] underline decoration-[#E0BB5D] decoration-2 underline-offset-8">estrategia</span> y seguridad jurídica.
            </h1>

            {/* Support Text */}
            <p className="text-base sm:text-lg text-[#14201C]/85 font-body leading-relaxed max-w-2xl">
              {siteContent.brand.supportText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-heading font-semibold text-white bg-[#014937] hover:bg-[#146A55] transition-all rounded-md shadow-md hover:shadow-lg border border-[#014937] focus:ring-2 focus:ring-[#E0BB5D] focus:ring-offset-2 min-h-[48px]"
              >
                Agenda una consulta
                <ArrowUpRight className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-heading font-medium text-[#014937] bg-white hover:bg-[#F1F5F3] border border-[#014937]/30 transition-colors rounded-md focus:ring-2 focus:ring-[#E0BB5D] min-h-[48px]"
              >
                Conoce nuestros servicios
                <ChevronRight className="w-4 h-4 text-[#AE7E25]" aria-hidden="true" />
              </a>
            </div>

            {/* Subtle Editorial Dossier Footer */}
            <div className="pt-4 border-t border-[#014937]/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-heading text-[#14201C]/70">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#146A55]" />
                Atención presencial y remota
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E0BB5D]" />
                Cobertura en todo el Perú
              </span>
            </div>

          </div>

          {/* Right Column: Photography of Karla Serna + Cadastral Signature SVG */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Background Decorative Frame Accent */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#014937]/10 via-[#E0BB5D]/20 to-transparent rounded-lg transform rotate-1 pointer-events-none" aria-hidden="true" />
            
            {/* Cadastral Lindero SVG Overlay */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-48 sm:w-64 h-auto z-20 pointer-events-none opacity-85">
              <CadastralLinderoSvg />
            </div>

            {/* Photo Card Container */}
            <div className="relative z-10 bg-white p-2.5 sm:p-3 rounded-lg shadow-xl border border-[#014937]/15">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-md bg-[#F1F5F3]">
                <img
                  src={getCloudinaryUrl(heroPhotoUrl, 1200)}
                  srcSet={heroSrcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  alt={siteContent.images.heroPhoto.alt}
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="eager"
                  width="1200"
                  height="1600"
                />
                
                {/* Subtle gradient vignette at bottom for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#014937]/80 via-[#014937]/30 to-transparent pointer-events-none" aria-hidden="true" />
                
                {/* Photo Name Label overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white p-3 rounded bg-[#014937]/90 backdrop-blur-sm border border-white/20">
                  <p className="font-heading font-semibold text-sm text-[#E0BB5D]">
                    {siteContent.brand.founder}
                  </p>
                  <p className="font-body text-xs text-white/90">
                    {siteContent.brand.founderRole}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
