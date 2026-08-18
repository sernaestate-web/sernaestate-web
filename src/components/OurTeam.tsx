import React from 'react';
import { ArrowUpRight, ShieldCheck, Briefcase, Users, Scale, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { siteContent, getCloudinarySrcSet, getCloudinaryUrl } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';
import { StaggeredCards } from './animations/StaggeredCards';

export const OurTeam: React.FC = () => {
  const profilePhotoUrl = siteContent.images.profilePhoto.url;
  const profileSrcSet = getCloudinarySrcSet(profilePhotoUrl, [480, 768, 1200, 1600]);

  return (
    <AnimatedSection
      id="nuestro-equipo"
      className="py-16 md:py-24 bg-[#014937] relative overflow-hidden border-b border-[#013527]"
    >
      {/* Decorative Gold & Cadastral Background Ambience */}
      <div className="absolute inset-0 cadastral-grid-gold opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E0BB5D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#146A55]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header with High Contrast */}
        <div className="text-left space-y-3">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E0BB5D]/50 bg-[#E0BB5D]/15 text-xs font-heading font-bold text-[#E0BB5D] uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#E0BB5D]" aria-hidden="true" />
              <span>Liderazgo & Equipo Legal</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              id="nuestro-equipo-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight"
            >
              Nuestro Equipo
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg font-body text-white/85 max-w-3xl leading-relaxed">
              Serna Estate reúne a profesionales con sólido rigor jurídico, especialización constante y el compromiso de brindar seguridad en cada decisión patrimonial.
            </p>
          </Reveal>
        </div>

        {/* Modern Executive Leadership Card */}
        <Reveal direction="up" delay={0.25}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#013527]/90 backdrop-blur-md p-6 sm:p-10 rounded-3xl border-2 border-[#E0BB5D]/40 shadow-2xl">
            
            {/* Left Column: Photograph with Modern Gold Accent Frame */}
            <div className="lg:col-span-5">
              <div className="relative p-2.5 rounded-2xl bg-gradient-to-b from-[#E0BB5D]/40 via-white/10 to-transparent border border-white/20 shadow-xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#014937]">
                  <img
                    src={getCloudinaryUrl(profilePhotoUrl, 1200)}
                    srcSet={profileSrcSet}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    alt={siteContent.images.profilePhoto.alt}
                    className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                    width="1200"
                    height="1600"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#013527] via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                  
                  {/* Modern Floating Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#014937]/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#E0BB5D]/40 text-center">
                    <span className="text-xs font-heading font-bold text-[#E0BB5D] uppercase tracking-wider block">
                      Abogada Especialista
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Leadership Profile */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0BB5D] text-[#013527] text-xs font-heading font-extrabold uppercase tracking-wider shadow-sm">
                  <Award className="w-3.5 h-3.5 text-[#013527]" />
                  <span>Fundadora & Gerente General</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
                  {siteContent.karlaProfile.name}
                </h3>
                
                <p className="font-heading font-bold text-base sm:text-lg text-[#E0BB5D]">
                  {siteContent.karlaProfile.title} — {siteContent.karlaProfile.roles}
                </p>
              </div>

              {/* Official Bio Paragraph */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border-l-4 border-[#E0BB5D] border-y border-r border-white/15 shadow-sm">
                <p className="font-body text-sm sm:text-base text-white/95 leading-relaxed">
                  {siteContent.karlaProfile.bio}
                </p>
              </div>

              {/* Specialty Focus Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-start gap-3 hover:bg-white/15 transition-colors">
                  <div className="p-2 rounded-lg bg-[#E0BB5D] text-[#013527] shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      Especialización Legal
                    </h4>
                    <p className="font-body text-xs text-white/80 mt-1 leading-relaxed">
                      Derecho Inmobiliario, Derecho Civil y Derecho Procesal Civil.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-start gap-3 hover:bg-white/15 transition-colors">
                  <div className="p-2 rounded-lg bg-[#E0BB5D] text-[#013527] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      Enfoque Patrimonial
                    </h4>
                    <p className="font-body text-xs text-white/80 mt-1 leading-relaxed">
                      Acompañamiento en saneamiento, operaciones inmobiliarias y gestión preventiva.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Reveal>

        {/* Multidisciplinary Team Overview - Modern Grid */}
        <div className="p-6 sm:p-8 bg-[#013527]/80 backdrop-blur-md rounded-3xl border border-white/15 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E0BB5D]" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Respaldo Multidisciplinario e Integral
                </h3>
              </div>
              <p className="font-body text-xs sm:text-sm text-white/80">
                Integración de conocimientos registrales, notariales, municipales y procesales para cada asunto.
              </p>
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#013527] bg-[#E0BB5D] hover:bg-[#ebd07d] rounded-xl shadow-md transition-all shrink-0 border border-[#cfa545] cursor-pointer"
            >
              <span>Consultar con el equipo</span>
              <ArrowUpRight className="w-4 h-4 text-[#013527]" />
            </a>
          </div>

          <StaggeredCards className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.08}>
            <div className="p-5 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl border border-white/15 hover:border-[#E0BB5D] transition-all space-y-2 group shadow-xs">
              <div className="flex items-center gap-2.5 text-[#E0BB5D] font-heading font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#E0BB5D]" />
                <span className="text-white group-hover:text-[#E0BB5D] transition-colors">Especialistas Registrales</span>
              </div>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                Análisis minucioso de partidas, bloqueos, inscripciones y títulos archivados en SUNARP.
              </p>
            </div>

            <div className="p-5 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl border border-white/15 hover:border-[#E0BB5D] transition-all space-y-2 group shadow-xs">
              <div className="flex items-center gap-2.5 text-[#E0BB5D] font-heading font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#E0BB5D]" />
                <span className="text-white group-hover:text-[#E0BB5D] transition-colors">Gestión Notarial</span>
              </div>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                Coordinación directa de escrituras, minutas, poderes y validación biométrica de partes.
              </p>
            </div>

            <div className="p-5 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl border border-white/15 hover:border-[#E0BB5D] transition-all space-y-2 group shadow-xs">
              <div className="flex items-center gap-2.5 text-[#E0BB5D] font-heading font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#E0BB5D]" />
                <span className="text-white group-hover:text-[#E0BB5D] transition-colors">Litigio & Procesal Civil</span>
              </div>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                Defensa judicial de la propiedad, prescripciones, desalojos y controversias complejas.
              </p>
            </div>

            <div className="p-5 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl border border-white/15 hover:border-[#E0BB5D] transition-all space-y-2 group shadow-xs">
              <div className="flex items-center gap-2.5 text-[#E0BB5D] font-heading font-bold text-sm">
                <Scale className="w-4 h-4 text-[#E0BB5D]" />
                <span className="text-white group-hover:text-[#E0BB5D] transition-colors">Saneamiento Técnico</span>
              </div>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                Verificación de parámetros, independizaciones, rectificaciones de áreas y edificación.
              </p>
            </div>
          </StaggeredCards>
        </div>

      </div>
    </AnimatedSection>
  );
};
