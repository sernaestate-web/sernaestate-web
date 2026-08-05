import React from 'react';
import { ArrowUpRight, ShieldCheck, Briefcase, Users, Scale, CheckCircle2 } from 'lucide-react';
import { siteContent, getCloudinarySrcSet, getCloudinaryUrl } from '../config/siteContent';

export const OurTeam: React.FC = () => {
  const profilePhotoUrl = siteContent.images.profilePhoto.url;
  const profileSrcSet = getCloudinarySrcSet(profilePhotoUrl, [480, 768, 1200, 1600]);

  return (
    <section
      id="nuestro-equipo"
      className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="nuestro-equipo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Standardized Section Header */}
        <div className="text-left space-y-3">
          <div className="document-stamp flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#AE7E25]" aria-hidden="true" />
            <span>Liderazgo & Equipo Legal</span>
          </div>
          <h2
            id="nuestro-equipo-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#014937]"
          >
            Nuestro Equipo
          </h2>
          <p className="text-base sm:text-lg font-body text-[#14201C]/80 max-w-3xl">
            Serna Estate reúne a profesionales con sólido rigor jurídico, especialización constante y el compromiso de brindar seguridad en cada decisión patrimonial.
          </p>
        </div>

        {/* Founder & Lead Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-[#F8FAF9] p-6 sm:p-10 rounded-2xl border border-[#014937]/15 shadow-sm">
          
          {/* Left Column: Photograph */}
          <div className="lg:col-span-5">
            <div className="relative bg-white p-3 rounded-xl border border-[#014937]/15 shadow-md">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-[#F1F5F3]">
                <img
                  src={getCloudinaryUrl(profilePhotoUrl, 1200)}
                  srcSet={profileSrcSet}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  alt={siteContent.images.profilePhoto.alt}
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-500 hover:scale-[1.01]"
                  loading="lazy"
                  width="1200"
                  height="1600"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#014937]/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Profile */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider bg-[#E0BB5D]/20 px-3 py-1 rounded inline-block">
                Fundadora & Gerente General
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#014937]">
                {siteContent.karlaProfile.name}
              </h3>
              <p className="font-heading font-semibold text-base sm:text-lg text-[#AE7E25]">
                {siteContent.karlaProfile.title} — {siteContent.karlaProfile.roles}
              </p>
            </div>

            {/* Official Bio Paragraph */}
            <div className="p-5 sm:p-6 rounded-lg bg-white border-l-4 border-[#E0BB5D] border border-[#014937]/10 shadow-xs">
              <p className="font-body text-sm sm:text-base text-[#14201C] leading-relaxed">
                {siteContent.karlaProfile.bio}
              </p>
            </div>

            {/* Specialty Focus Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-white border border-[#014937]/15 flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#014937] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#014937]">
                    Especialización Legal
                  </h4>
                  <p className="font-body text-xs text-[#14201C]/80 mt-0.5">
                    Derecho Inmobiliario, Derecho Civil y Derecho Procesal Civil.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-md bg-white border border-[#014937]/15 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#014937] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h4 className="font-heading font-semibold text-sm text-[#014937]">
                    Enfoque Patrimonial
                  </h4>
                  <p className="font-body text-xs text-[#14201C]/80 mt-0.5">
                    Acompañamiento en saneamiento, operaciones inmobiliarias y gestión preventiva.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Multidisciplinary Team Overview */}
        <div className="p-6 sm:p-8 bg-white rounded-xl border border-[#014937]/15 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#014937]/10 pb-4">
            <div>
              <h3 className="text-xl font-heading font-bold text-[#014937]">
                Respaldo Multidisciplinario e Integral
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#14201C]/75">
                Integración de conocimientos registrales, notariales, municipales y procesales para cada asunto.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-heading font-bold text-white bg-[#014937] hover:bg-[#146A55] rounded-md shadow transition-colors shrink-0"
            >
              Consultar con nuestro equipo
              <ArrowUpRight className="w-4 h-4 text-[#E0BB5D]" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-[#F8FAF9] rounded-lg border border-[#014937]/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#014937] font-heading font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#146A55]" />
                <span>Especialistas Registrales</span>
              </div>
              <p className="text-xs text-[#14201C]/80 font-body">
                Análisis minucioso de partidas, bloqueos, inscripciones y títulos archivados en SUNARP.
              </p>
            </div>

            <div className="p-4 bg-[#F8FAF9] rounded-lg border border-[#014937]/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#014937] font-heading font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#146A55]" />
                <span>Gestión Notarial</span>
              </div>
              <p className="text-xs text-[#14201C]/80 font-body">
                Coordinación directa de escrituras, minutas, poderes y validación biométrica de partes.
              </p>
            </div>

            <div className="p-4 bg-[#F8FAF9] rounded-lg border border-[#014937]/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#014937] font-heading font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#146A55]" />
                <span>Litigio & Procesal Civil</span>
              </div>
              <p className="text-xs text-[#14201C]/80 font-body">
                Defensa judicial de la propiedad, prescripciones, desalojos y controversias complejas.
              </p>
            </div>

            <div className="p-4 bg-[#F8FAF9] rounded-lg border border-[#014937]/10 space-y-1.5">
              <div className="flex items-center gap-2 text-[#014937] font-heading font-bold text-sm">
                <Scale className="w-4 h-4 text-[#146A55]" />
                <span>Saneamiento Técnico</span>
              </div>
              <p className="text-xs text-[#14201C]/80 font-body">
                Verificación de parámetros, independizaciones, rectificaciones de áreas y edificación.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
