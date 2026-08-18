import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Instagram, ShieldCheck, Globe, Clock, Scale } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { legalConfig, legalDocList } from '../config/legalConfig';
import { buildLegalUrl, navigateToLegal } from '../utils/legalNavigation';

export const Footer: React.FC = () => {
  const footerLogoUrl = "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1787064474/SernaEstate_LogoHorizontal_BkackBackGround_SernaEstateMonochromatyc_d1gu4k.png";
  const currentYear = new Date().getFullYear();

  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, docId: any) => {
    e.preventDefault();
    navigateToLegal(docId);
  };

  return (
    <footer className="bg-[#014937] text-white pt-16 sm:pt-20 pb-12 border-t-2 border-[#E0BB5D] relative overflow-hidden">
      {/* Subtle background glow & accents */}
      <div className="absolute inset-0 cadastral-grid-gold opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E0BB5D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Main 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/15">
          
          {/* Column 1: Brand Header with Horizontal Logo & Social Icons */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#inicio"
              className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] rounded-xl transition-all"
              aria-label="Serna Estate - Ir al inicio"
            >
              {/* Subtle transparent logo representation on dark green background */}
              <div className="py-1 inline-block">
                <img
                  src={footerLogoUrl}
                  alt={siteContent.images.logoMain?.alt || "Serna Estate"}
                  className="h-10 sm:h-12 w-auto object-contain opacity-95 hover:opacity-100 group-hover:scale-[1.02] transition-all"
                  loading="lazy"
                />
              </div>
            </a>

            <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
              {siteContent.footer.description}
            </p>

            {/* Social Media Row Icons */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-heading font-bold text-[#E0BB5D] uppercase tracking-wider block">
                Síguenos en Redes Sociales
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteContent.contact.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Karla Serna"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0077B5] text-white hover:text-white transition-all flex items-center justify-center shadow-xs border border-white/15"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>

                <a
                  href={siteContent.contact.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Karla Serna"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white transition-all flex items-center justify-center shadow-xs border border-white/15"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>

                <a
                  href={siteContent.contact.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok de Karla Serna"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-black text-white transition-all flex items-center justify-center shadow-xs border border-white/15"
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
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-[#25D366] hover:text-white transition-all flex items-center justify-center shadow-xs border border-white/15"
                >
                  <Phone className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Solutions / Servicios */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm sm:text-base text-[#E0BB5D] uppercase tracking-wider border-b border-white/15 pb-2">
              Áreas de Práctica
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-heading font-medium">
              <li>
                <a href="#servicios" className="text-white/80 hover:text-[#E0BB5D] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Litigios y Defensas Judiciales</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-[#E0BB5D] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Compraventa & Due Diligence</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-[#E0BB5D] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Saneamiento Físico-Legal & SUNARP</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-[#E0BB5D] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Propiedad Horizontal & Juntas</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-[#E0BB5D] transition-colors inline-flex items-center gap-1.5 group">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Asesoría a Desarrolladores & Fondos</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation / Recursos */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading font-bold text-sm sm:text-base text-[#E0BB5D] uppercase tracking-wider border-b border-white/15 pb-2">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-heading font-medium">
              {siteContent.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/80 hover:text-[#E0BB5D] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact / Atención Institucional */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading font-bold text-sm sm:text-base text-[#E0BB5D] uppercase tracking-wider border-b border-white/15 pb-2">
              Atención Institucional
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm font-body text-white/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E0BB5D] shrink-0 mt-0.5" />
                <span>Lima, Perú — Cobertura y representación a nivel nacional.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Hola Serna Estate, deseo realizar una consulta legal inmobiliaria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E0BB5D] font-heading font-semibold text-white transition-colors"
                >
                  {siteContent.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E0BB5D] shrink-0" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="hover:text-[#E0BB5D] font-heading font-semibold text-white transition-colors"
                >
                  {siteContent.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-white/70">
                <Clock className="w-4 h-4 text-[#E0BB5D] shrink-0 mt-0.5" />
                <span>Lunes a Viernes: 9:00 AM – 6:00 PM</span>
              </div>
            </div>

            {/* Shield Note */}
            <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 shadow-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#E0BB5D] uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E0BB5D]" />
                <span>Garantía de Confidencialidad</span>
              </div>
              <p className="text-[11px] font-body text-white/80 leading-tight">
                Toda consulta jurídica está resguardada por el secreto profesional del Abogado.
              </p>
            </div>
          </div>

        </div>

        {/* Legal Documents Links Bar */}
        <div className="pt-8 pb-6 border-t border-white/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#E0BB5D] uppercase tracking-wider">
              <Scale className="w-4 h-4 text-[#E0BB5D]" />
              <span>Marco Legal e Institucional:</span>
            </div>
            
            <nav aria-label="Enlaces legales y de privacidad" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-heading font-semibold text-white/90">
              {legalDocList.map((doc) => (
                <a
                  key={doc.id}
                  href={buildLegalUrl(doc.id)}
                  onClick={(e) => handleLegalClick(e, doc.id)}
                  className="hover:text-[#E0BB5D] hover:underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] rounded px-1 py-0.5"
                >
                  {doc.shortTitle}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Copyright & Corporate Details */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading text-white/70 text-center sm:text-left">
          <div>
            <p className="font-semibold text-white">
              © {currentYear} {legalConfig.legalName} • RUC {legalConfig.ruc}
            </p>
            <p className="text-[11px] text-white/60 font-body pt-0.5">
              Todos los derechos reservados. Asesoría y defensa jurídica patrimonial en el Perú.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-medium text-white/60">
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[#E0BB5D]" />
              Atención Presencial & Remota (Nacional)
            </span>
            <span>•</span>
            <span>Derecho Inmobiliario & Notarial</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
