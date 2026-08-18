import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronRight, ShieldCheck, Scale, FileCheck, Award, CheckCircle2, MapPin } from 'lucide-react';
import { siteContent, getCloudinarySrcSet, getCloudinaryUrl } from '../config/siteContent';
import { CadastralLinderoSvg } from './CadastralLinderoSvg';
import { gsap, isReducedMotion, isMobileScreen } from '../lib/gsap';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const heroPhotoUrl = siteContent.images.heroPhoto.url;
  const heroSrcSet = getCloudinarySrcSet(heroPhotoUrl, [480, 768, 1200, 1600]);
  
  const heroBgUrl = siteContent.images.heroBg?.url || "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1785978860/hf_20260806_010640_d5ff2b05-e66a-4748-ad27-6751aa41d23a_dhzowd.png";

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    if (isReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Parallax sutil para el fondo
      if (bgRef.current && !isMobileScreen()) {
        gsap.to(bgRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroEl,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 2. Animación de entrada inicial suave para la columna izquierda
      if (leftColRef.current) {
        const children = leftColRef.current.children;
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: isMobileScreen() ? 20 : 35,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            delay: 0.1,
          }
        );
      }

      // 3. Animación de entrada para la tarjeta flotante de la derecha
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          {
            opacity: 0,
            y: isMobileScreen() ? 25 : 45,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.35,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-88px)] flex flex-col justify-center pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#012d21] border-b-2 border-[#014937] text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Dark High-Ticket Luxury Overlay & Parallax Ref */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="w-full h-full will-change-transform">
          <img
            src={heroBgUrl}
            alt={siteContent.images.heroBg?.alt || "Fondo Serna Estate"}
            className="w-full h-[120%] -mt-[10%] object-cover object-center scale-105 filter brightness-95 contrast-105"
            loading="eager"
          />
        </div>
        {/* Multi-layered Deep Emerald & Midnight Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#01241a]/98 via-[#013527]/90 to-[#014937]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011d15] via-transparent to-[#01241a]/85" />
      </div>

      {/* Cadastral Grid SVG Background Pattern */}
      <div className="absolute inset-0 cadastral-grid opacity-25 pointer-events-none z-1" aria-hidden="true" />

      {/* Expanded Container Width for High-Ticket Executive Feel */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Headlines, High-Ticket Value Proposition & Authority Credentials */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-7 sm:space-y-9 text-left">
            
            {/* High-Authority Document Tag Stamp */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-[#E0BB5D]/70 text-xs sm:text-sm font-heading font-bold text-[#E0BB5D] uppercase tracking-widest shadow-2xl">
              <ShieldCheck className="w-4 h-4 text-[#E0BB5D] shrink-0" aria-hidden="true" />
              <span>{siteContent.brand.name} • FIRMA LEGAL INMOBILIARIA & REGISTRAL</span>
            </div>

            {/* Main Title (H1) with Exact Requested Phrasing */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-heading font-black text-white leading-[1.14] tracking-tight"
            >
              Protegemos el patrimonio inmobiliario con{' '}
              <span className="relative inline-block text-[#E0BB5D]">
                estrategia y seguridad jurídica.
                <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-[#E0BB5D]/80 rounded-full" />
              </span>
            </h1>

            {/* Support Text */}
            <p className="text-base sm:text-lg md:text-xl text-white/95 font-body leading-relaxed max-w-3xl drop-shadow-xs font-normal">
              {siteContent.brand.supportText}
            </p>

            {/* Action Buttons - Prominent & Premium */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4.5 pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 text-sm sm:text-base font-heading font-bold uppercase tracking-wider text-[#013527] bg-[#E0BB5D] hover:bg-[#ebd07d] active:bg-[#E0BB5D] transition-all duration-200 rounded-xl shadow-2xl hover:shadow-gold border-2 border-white/30 focus:ring-2 focus:ring-[#E0BB5D] focus:ring-offset-2 min-h-[56px] group cursor-pointer"
              >
                <span>Contáctanos</span>
                <ArrowUpRight className="w-5 h-5 text-[#013527] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:py-4.5 text-sm sm:text-base font-heading font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all rounded-xl focus:ring-2 focus:ring-[#E0BB5D] min-h-[56px] cursor-pointer"
              >
                <span>Conoce nuestros servicios</span>
                <ChevronRight className="w-4 h-4 text-[#E0BB5D]" aria-hidden="true" />
              </a>
            </div>

            {/* Authority Features Cards Integrated Directly in Hero - Textos más grandes y legibles */}
            <div className="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-[#E0BB5D]/40 space-y-2 hover:border-[#E0BB5D] transition-all shadow-lg">
                <div className="flex items-center gap-2.5 text-sm sm:text-base md:text-[17px] font-heading font-extrabold text-[#E0BB5D]">
                  <FileCheck className="w-5 h-5 text-[#E0BB5D] shrink-0" />
                  <span>Saneamiento SUNARP</span>
                </div>
                <p className="text-xs sm:text-sm md:text-[14px] font-body text-white/95 leading-relaxed">
                  Titulación, inmatriculación y saneamiento físico-legal registral integral.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-[#E0BB5D]/40 space-y-2 hover:border-[#E0BB5D] transition-all shadow-lg">
                <div className="flex items-center gap-2.5 text-sm sm:text-base md:text-[17px] font-heading font-extrabold text-[#E0BB5D]">
                  <Scale className="w-5 h-5 text-[#E0BB5D] shrink-0" />
                  <span>Defensa Judicial</span>
                </div>
                <p className="text-xs sm:text-sm md:text-[14px] font-body text-white/95 leading-relaxed">
                  Estrategia contenciosa en litigios inmobiliarios y protección patrimonial.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-[#E0BB5D]/40 space-y-2 hover:border-[#E0BB5D] transition-all shadow-lg">
                <div className="flex items-center gap-2.5 text-sm sm:text-base md:text-[17px] font-heading font-extrabold text-[#E0BB5D]">
                  <MapPin className="w-5 h-5 text-[#25D366] shrink-0" />
                  <span>Atención Nacional</span>
                </div>
                <p className="text-xs sm:text-sm md:text-[14px] font-body text-white/95 leading-relaxed">
                  Cobertura presencial y remota para clientes e inmuebles en todo el Perú.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: High-Ticket Photo Card of Karla Serna */}
          <div ref={rightColRef} className="lg:col-span-5 relative mt-8 lg:mt-0">
            
            {/* Background Gold Ambient Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#E0BB5D]/40 via-[#014937]/50 to-transparent rounded-3xl blur-2xl pointer-events-none" aria-hidden="true" />
            
            {/* Cadastral Lindero SVG Overlay */}
            <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-52 sm:w-72 h-auto z-20 pointer-events-none opacity-95 drop-shadow-xl">
              <CadastralLinderoSvg />
            </div>

            {/* Photo Card Container with Metallic Gold Border Frame */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-3.5 sm:p-4 rounded-3xl shadow-2xl border-2 border-[#E0BB5D]/60 hover:border-[#E0BB5D] transition-all">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#013527]">
                <img
                  src={getCloudinaryUrl(heroPhotoUrl, 1200)}
                  srcSet={heroSrcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  alt={siteContent.images.heroPhoto.alt}
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="eager"
                  width="1200"
                  height="1600"
                />
                
                {/* Gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#01241a] via-[#01241a]/70 to-transparent pointer-events-none" aria-hidden="true" />
                
                {/* Founder Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-[#011d15]/95 backdrop-blur-md border border-[#E0BB5D]/60 shadow-2xl">
                  <p className="font-heading font-bold text-base sm:text-lg text-[#E0BB5D] flex items-center justify-between">
                    <span>{siteContent.brand.founder}</span>
                    <Award className="w-5 h-5 text-[#E0BB5D]" />
                  </p>
                  <p className="font-body text-xs sm:text-sm text-white/90 pt-0.5 font-medium">
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
