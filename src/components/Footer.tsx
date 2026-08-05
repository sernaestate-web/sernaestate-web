import React from 'react';
import { Mail, ArrowUpRight, Shield, Phone, Linkedin, Instagram } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#014937] text-white pt-16 pb-12 relative overflow-hidden border-t-2 border-[#E0BB5D]">
      {/* Background Cadastral Grid */}
      <div className="absolute inset-0 cadastral-grid-gold opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-6 lg:col-span-5 space-y-5">
            <a
              href="#inicio"
              className="inline-block p-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0BB5D]"
              aria-label="Serna Estate - Volver al inicio"
            >
              <img
                src={siteContent.images.logoMain.url}
                alt={siteContent.images.logoMain.alt}
                className="h-10 sm:h-12 w-auto object-contain"
                loading="lazy"
              />
            </a>

            <p className="font-heading font-semibold text-sm text-[#E0BB5D]">
              {siteContent.brand.tagline}
            </p>

            <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
              {siteContent.footer.description}
            </p>

            <div className="pt-2 space-y-2">
              <div>
                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Hola Serna Estate, deseo realizar una consulta legal inmobiliaria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-white hover:text-[#25D366] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                  <span>WhatsApp: {siteContent.contact.whatsappDisplay}</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-medium text-white hover:text-[#E0BB5D] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E0BB5D]" aria-hidden="true" />
                  <span>{siteContent.contact.email}</span>
                </a>
              </div>
              <div className="pt-2 flex items-center gap-3 text-xs text-white/80 font-heading">
                <span className="text-[#E0BB5D]">Redes:</span>
                <a
                  href={siteContent.contact.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E0BB5D] transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#E0BB5D]" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href={siteContent.contact.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E0BB5D] transition-colors flex items-center gap-1"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E0BB5D]" />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a
                  href={siteContent.contact.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E0BB5D] transition-colors"
                >
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Internal Anchor Navigation */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm text-[#E0BB5D] uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-heading">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/85 hover:text-[#E0BB5D] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D]/70" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Institutional Notice & Prepared Structure */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h3 className="font-heading font-bold text-sm text-[#E0BB5D] uppercase tracking-wider">
              Resguardo Institucional
            </h3>
            
            <div className="p-4 rounded bg-white/5 border border-white/10 space-y-2 text-xs font-body text-white/80">
              <div className="flex items-center gap-2 font-heading font-semibold text-[#E0BB5D]">
                <Shield className="w-4 h-4 text-[#E0BB5D]" aria-hidden="true" />
                <span>Confidencialidad Profesional</span>
              </div>
              <p className="leading-relaxed">
                Toda la orientación jurídica brindada se adecúa a los principios de lealtad, secreto profesional y rigor técnico del Colegio de Abogados del Perú.
              </p>
            </div>

            <p className="text-[11px] font-body text-white/60 leading-normal">
              {siteContent.footer.legalPlaceholdersNote}
            </p>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading text-white/70 text-center sm:text-left">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex items-center gap-4 text-[11px] text-white/50">
            <span>Perú — Cobertura Nacional</span>
            <span>•</span>
            <span>Derecho Inmobiliario</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
