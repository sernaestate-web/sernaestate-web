import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Instagram, ShieldCheck, Globe, Clock } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const Footer: React.FC = () => {
  const horizontalLogoUrl = siteContent.images.logoMain?.url || "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1785975789/Transparente_LogoHorizontal_bnkqkl.png";

  return (
    <footer className="bg-[#F8FAF9] text-[#14201C] pt-16 sm:pt-20 pb-12 border-t border-[#014937]/15 relative overflow-hidden">
      {/* Subtle top ambient metallic gold bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#014937] via-[#E0BB5D] to-[#014937]" />

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Main 4-Column Grid Layout matching user reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#014937]/15">
          
          {/* Column 1: Brand Header with Horizontal Logo & Social Icons */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#inicio"
              className="inline-flex flex-col items-start gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] rounded-xl"
              aria-label="Serna Estate - Ir al inicio"
            >
              {/* Transparent Horizontal Logo without Green Background */}
              <div className="py-1 inline-block">
                <img
                  src={horizontalLogoUrl}
                  alt={siteContent.images.logoMain?.alt || "Serna Estate"}
                  className="h-12 sm:h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-xl sm:text-2xl font-heading font-black text-[#014937] tracking-tight block">
                  Serna Estate
                </span>
                <span className="text-xs sm:text-sm font-heading font-bold text-[#AE7E25] tracking-wider uppercase block">
                  Firma Legal Inmobiliaria
                </span>
              </div>
            </a>

            <p className="font-body text-xs sm:text-sm text-[#14201C]/80 leading-relaxed max-w-sm">
              {siteContent.footer.description}
            </p>

            {/* Social Media Row Icons */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-heading font-bold text-[#014937] uppercase tracking-wider block">
                Síguenos en Redes Sociales
              </span>
              <div className="flex items-center gap-3 text-sm text-[#014937]">
                <a
                  href={siteContent.contact.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Karla Serna"
                  className="w-10 h-10 rounded-xl bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white transition-all flex items-center justify-center shadow-xs border border-[#0077B5]/20"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>

                <a
                  href={siteContent.contact.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Karla Serna"
                  className="w-10 h-10 rounded-xl bg-[#E4405F]/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#E4405F] hover:text-white transition-all flex items-center justify-center shadow-xs border border-[#E4405F]/20"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>

                <a
                  href={siteContent.contact.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok de Karla Serna"
                  className="w-10 h-10 rounded-xl bg-black/10 hover:bg-black text-[#14201C] hover:text-white transition-all flex items-center justify-center shadow-xs border border-black/20"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.28 2.57.02.94.53 1.83 1.34 2.32.96.58 2.22.56 3.14-.04.81-.53 1.29-1.47 1.28-2.44.02-5.43.01-10.86.02-16.29z" />
                  </svg>
                </a>

                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Hola Serna Estate, deseo realizar una consulta legal inmobiliaria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escríbenos por WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] hover:text-white text-[#014937] transition-all flex items-center justify-center shadow-xs font-heading font-bold text-xs"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Solutions / Servicos */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm sm:text-base text-[#014937] uppercase tracking-wider border-b border-[#014937]/10 pb-2">
              Áreas de Práctica
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-heading font-medium">
              <li>
                <a href="#servicios" className="text-[#14201C]/80 hover:text-[#014937] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Litigios y Defensas Judiciales</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-[#14201C]/80 hover:text-[#014937] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Compraventa & Due Diligence</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-[#14201C]/80 hover:text-[#014937] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Saneamiento Físico-Legal & SUNARP</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-[#14201C]/80 hover:text-[#014937] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Propiedad Horizontal & Juntas</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-[#14201C]/80 hover:text-[#014937] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Asesoría a Desarrolladores & Fondos</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation / Recursos */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-sm sm:text-base text-[#014937] uppercase tracking-wider border-b border-[#014937]/10 pb-2">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-heading font-medium">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#14201C]/80 hover:text-[#014937] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact / Firma */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm sm:text-base text-[#014937] uppercase tracking-wider border-b border-[#014937]/10 pb-2">
              Atención Institucional
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm font-body text-[#14201C]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#014937] shrink-0 mt-0.5" />
                <span>Lima, Perú — Cobertura y representación a nivel nacional.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Hola Serna Estate, deseo realizar una consulta legal inmobiliaria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-heading font-semibold text-[#014937]"
                >
                  {siteContent.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#AE7E25] shrink-0" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="hover:underline font-heading font-semibold text-[#014937]"
                >
                  {siteContent.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-[#14201C]/70">
                <Clock className="w-4 h-4 text-[#014937] shrink-0 mt-0.5" />
                <span>Lunes a Viernes: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Shield Note */}
            <div className="p-3 rounded-xl bg-white border border-[#014937]/15 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#AE7E25] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#014937]" />
                <span>Garantía de Confidencialidad</span>
              </div>
              <p className="text-[11px] font-body text-[#14201C]/75 leading-tight">
                Toda consulta jurídica está resguardada por el secreto profesional del Abogado.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Notice Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading text-[#14201C]/70 text-center sm:text-left">
          <p>{siteContent.footer.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-[#14201C]/60">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#014937]" />
              Atención Presencial & Remota
            </span>
            <span>•</span>
            <span>Derecho Inmobiliario & Registral Perú</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
