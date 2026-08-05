import React from 'react';
import { ArrowUpRight, ShieldCheck, Briefcase } from 'lucide-react';
import { siteContent, getCloudinarySrcSet, getCloudinaryUrl } from '../config/siteContent';

export const KarlaSernaProfile: React.FC = () => {
  const profilePhotoUrl = siteContent.images.profilePhoto.url;
  const profileSrcSet = getCloudinarySrcSet(profilePhotoUrl, [480, 768, 1200, 1600]);

  return (
    <section
      id="karla-serna"
      className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-[#014937]/10"
      aria-labelledby="karla-serna-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photograph */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative bg-[#F8FAF9] p-3 rounded-xl border border-[#014937]/15 shadow-lg">
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

          {/* Right Column: Bio & Institutional Role */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="space-y-3">
              <div className="document-stamp">
                <span>Fundadora & Gerencia General</span>
              </div>
              <h2
                id="karla-serna-heading"
                className="text-3xl sm:text-4xl font-heading font-bold text-[#014937]"
              >
                {siteContent.karlaProfile.name}
              </h2>
              <p className="font-heading font-semibold text-lg text-[#AE7E25]">
                {siteContent.karlaProfile.title} — {siteContent.karlaProfile.roles}
              </p>
            </div>

            {/* Official Bio Paragraph */}
            <div className="p-6 rounded-lg bg-[#F8FAF9] border-l-4 border-[#E0BB5D] border border-[#014937]/10 shadow-sm">
              <p className="font-body text-base sm:text-lg text-[#14201C] leading-relaxed">
                {siteContent.karlaProfile.bio}
              </p>
            </div>

            {/* Specialty Focus Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-md bg-white border border-[#014937]/15 flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-[#014937] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-semibold text-sm text-[#014937]">
                    Especialización Legal
                  </h3>
                  <p className="font-body text-xs text-[#14201C]/80 mt-0.5">
                    Derecho Inmobiliario, Derecho Civil y Derecho Procesal Civil.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-md bg-white border border-[#014937]/15 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#014937] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-semibold text-sm text-[#014937]">
                    Enfoque Patrimonial
                  </h3>
                  <p className="font-body text-xs text-[#14201C]/80 mt-0.5">
                    Acompañamiento en saneamiento, operaciones inmobiliarias y gestión preventiva.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA to Contact */}
            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-heading font-semibold text-white bg-[#014937] hover:bg-[#146A55] transition-colors rounded-md min-h-[44px]"
              >
                Solicitar orientación profesional con Karla Serna
                <ArrowUpRight className="w-4 h-4 text-[#E0BB5D]" aria-hidden="true" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
