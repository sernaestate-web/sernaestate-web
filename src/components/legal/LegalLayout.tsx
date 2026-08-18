import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Shield, FileText, Lock, Scale, AlertTriangle, ExternalLink, Mail, Phone } from 'lucide-react';
import { LegalDocType, legalDocList, legalConfig } from '../../config/legalConfig';
import { legalDocuments } from '../../config/legalContent';
import { navigateToHome, navigateToLegal, buildLegalUrl } from '../../utils/legalNavigation';
import { siteContent } from '../../config/siteContent';

interface LegalLayoutProps {
  currentDocId: LegalDocType;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ currentDocId }) => {
  const doc = legalDocuments[currentDocId];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isDevMode = typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production';

  // Update document title and meta description dynamically
  useEffect(() => {
    document.title = `${doc.shortTitle} | Serna Estate Firma Legal Inmobiliaria`;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', doc.metaDescription);
    }

    // Scroll to top and set focus on H1 for accessibility
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    headingRef.current?.focus();
  }, [doc]);

  const getDocIcon = (id: LegalDocType) => {
    switch (id) {
      case 'privacidad':
        return <Lock className="w-4 h-4" />;
      case 'cookies':
        return <Shield className="w-4 h-4" />;
      case 'aviso-legal':
        return <Scale className="w-4 h-4" />;
      case 'terminos':
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#14201C] flex flex-col font-body antialiased selection:bg-[#E0BB5D]/30 selection:text-[#014937]">
      {/* Skip link */}
      <a
        href="#legal-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#014937] focus:text-white focus:ring-2 focus:ring-[#E0BB5D] rounded-md font-heading font-medium text-sm"
      >
        Saltar al contenido del documento
      </a>

      {/* Simplified Dedicated Header for Legal Pages */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#014937]/15 shadow-xs">
        {/* Top Gold Accent Line */}
        <div className="h-1 bg-gradient-to-r from-[#014937] via-[#E0BB5D] to-[#014937] w-full" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigateToHome()}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-heading font-semibold text-[#014937] bg-[#014937]/5 hover:bg-[#014937]/10 active:bg-[#014937]/20 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] cursor-pointer"
              aria-label="Volver al portal principal de Serna Estate"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </button>
            <div className="h-5 w-px bg-[#014937]/20 hidden sm:block" />
            <span className="text-xs font-heading font-bold text-[#AE7E25] uppercase tracking-wider hidden sm:inline-block">
              Información Legal Institucional
            </span>
          </div>

          <a
            href={buildLegalUrl('privacidad')}
            onClick={(e) => {
              e.preventDefault();
              navigateToHome();
            }}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] rounded-lg p-1"
            aria-label="Serna Estate - Ir al inicio"
          >
            <img
              src={siteContent.images.logoMain.url}
              alt={siteContent.images.logoMain.alt}
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="legal-content" className="flex-grow py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Document Switcher Tabs */}
          <nav
            aria-label="Documentos legales disponibles"
            className="mb-8 p-1.5 bg-[#F1F5F3] border border-[#014937]/15 rounded-xl grid grid-cols-2 md:grid-cols-4 gap-1.5"
          >
            {legalDocList.map((item) => {
              const isActive = item.id === currentDocId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToLegal(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer text-center ${
                    isActive
                      ? 'bg-[#014937] text-white shadow-xs'
                      : 'text-[#14201C]/80 hover:text-[#014937] hover:bg-white/80'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D]`}
                >
                  <span className={isActive ? 'text-[#E0BB5D]' : 'text-[#AE7E25]'}>
                    {getDocIcon(item.id)}
                  </span>
                  <span className="truncate">{item.shortTitle}</span>
                </button>
              );
            })}
          </nav>

          {/* Development / Review Pending Warning Box */}
          <aside
            aria-label="Nota informativa para revisión legal"
            className="mb-8 p-4 sm:p-5 rounded-xl bg-[#FFFBEB] border border-[#F59E0B]/40 text-[#92400E] shadow-2xs space-y-2"
          >
            <div className="flex items-center gap-2 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0" />
              <span>Borrador de Implementación — Sujeto a Validación Legal Humana</span>
            </div>
            <p className="text-xs font-body text-[#92400E]/90 leading-relaxed">
              El presente texto ha sido redactado con estricto apego a los principios de la <strong>Ley N.° 29733</strong> y el <strong>Decreto Supremo N.° 016-2024-JUS</strong>. Se deja constancia de que los siguientes puntos formales se encuentran en proceso de validación previa a su versión definitiva:
            </p>
            <ul className="text-xs font-body list-disc pl-5 space-y-1 text-[#92400E]/85">
              <li>Definición formal de la dirección física o postal de contacto legal (no se publica domicilio privado por seguridad).</li>
              <li>Finalización del trámite de inscripción del Banco de Datos Personales ante la ANPD (código oficial por incorporar).</li>
              <li>Fijación del plazo o política interna específica de conservación documental.</li>
            </ul>
          </aside>

          {/* Layout with TOC Sidebar & Reading Document */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Table of Contents (Sticky on Desktop) */}
            <aside className="lg:col-span-4 order-2 lg:order-1 sticky top-24 space-y-4">
              <div className="bg-[#F8FAF9] p-5 sm:p-6 rounded-2xl border border-[#014937]/15 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#014937]/10">
                  <h2 className="text-xs font-heading font-bold text-[#014937] uppercase tracking-wider">
                    Índice de Secciones
                  </h2>
                  <span className="text-[10px] font-heading font-bold text-[#AE7E25] bg-[#E0BB5D]/20 px-2 py-0.5 rounded-md">
                    v{doc.version}
                  </span>
                </div>

                <nav aria-label="Secciones del documento">
                  <ul className="space-y-1.5 text-xs font-heading">
                    {doc.sections.map((sec) => (
                      <li key={sec.id}>
                        <a
                          href={`#${sec.id}`}
                          className="block py-1.5 px-2.5 rounded-md text-[#14201C]/80 hover:text-[#014937] hover:bg-white transition-colors border-l-2 border-transparent hover:border-[#E0BB5D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D]"
                        >
                          {sec.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="pt-3 border-t border-[#014937]/10 space-y-2 text-xs font-body text-[#14201C]/75">
                  <p><strong>Razón Social:</strong> {legalConfig.legalName}</p>
                  <p><strong>RUC:</strong> {legalConfig.ruc}</p>
                  <p><strong>Canal de Privacidad:</strong> <a href={`mailto:${legalConfig.privacyEmail}`} className="text-[#014937] font-semibold underline">{legalConfig.privacyEmail}</a></p>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-[#014937] text-white p-5 rounded-2xl border border-[#E0BB5D]/40 space-y-3">
                <span className="text-xs font-heading font-bold text-[#E0BB5D] uppercase tracking-wider block">
                  ¿Deseas realizar una consulta?
                </span>
                <p className="text-xs font-body text-white/90 leading-relaxed">
                  Contáctanos directamente para coordinar la evaluación de tu caso inmobiliario en el Perú.
                </p>
                <div className="pt-1 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => navigateToHome('#contacto')}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#E0BB5D] hover:bg-[#cfa545] text-[#014937] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Ir al Formulario</span>
                  </button>
                  <a
                    href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Hola Serna Estate, deseo consultar sobre un tema legal inmobiliario.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-xs rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp Institucional</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Article Body */}
            <article className="lg:col-span-8 order-1 lg:order-2 bg-white p-6 sm:p-10 lg:p-12 rounded-2xl border border-[#014937]/15 shadow-xs space-y-8">
              
              {/* Header Details */}
              <header className="space-y-4 pb-6 border-b border-[#014937]/15">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#014937]/5 text-[#014937] rounded-full text-xs font-heading font-bold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-[#AE7E25]" />
                  <span>Serna Estate • Marco de Protección Legal</span>
                </div>

                <h1
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#014937] tracking-tight outline-none"
                >
                  {doc.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs font-heading text-[#14201C]/70">
                  <span><strong>Versión:</strong> {doc.version}</span>
                  <span>•</span>
                  <span><strong>Estado:</strong> {doc.lastUpdated}</span>
                  <span>•</span>
                  <span><strong>País:</strong> {legalConfig.country}</span>
                </div>

                <p className="text-sm sm:text-base font-body text-[#14201C]/85 leading-relaxed pt-2 bg-[#F8FAF9] p-4 rounded-xl border border-[#014937]/10">
                  {doc.intro}
                </p>
              </header>

              {/* Sections List */}
              <div className="space-y-8 text-sm sm:text-base font-body text-[#14201C]/90 leading-relaxed">
                {doc.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="space-y-3 pt-2 scroll-mt-24"
                  >
                    <h2 className="text-lg sm:text-xl font-heading font-bold text-[#014937] border-b border-[#014937]/10 pb-2">
                      {section.title}
                    </h2>
                    
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}

                    {/* Subsections if any */}
                    {section.subsections && (
                      <div className="space-y-4 pl-3 sm:pl-4 border-l-2 border-[#E0BB5D]/60 mt-4">
                        {section.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-2">
                            <h3 className="text-base font-heading font-bold text-[#AE7E25]">
                              {sub.subtitle}
                            </h3>
                            {sub.paragraphs.map((subP, spIdx) => (
                              <p key={spIdx} className="text-sm sm:text-base text-[#14201C]/85 leading-relaxed">
                                {subP}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Footer Note in Document */}
              <footer className="pt-8 border-t border-[#014937]/15 space-y-4">
                <div className="p-4 rounded-xl bg-[#F8FAF9] border border-[#014937]/15 space-y-2 text-xs font-body text-[#14201C]/80">
                  <p className="font-heading font-bold text-[#014937]">
                    Canal Oficial de Solicitudes y Derechos ARCO
                  </p>
                  <p>
                    Para ejercer sus derechos de acceso, rectificación, cancelación u oposición, o revocar su consentimiento publicitario, puede remitir su solicitud a <strong>{legalConfig.privacyEmail}</strong> acompañada de su documento de identidad oficial.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => navigateToHome()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-heading font-bold text-[#014937] bg-[#014937]/10 hover:bg-[#014937]/20 rounded-lg transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Volver a la portada principal</span>
                  </button>

                  <p className="text-xs font-heading text-[#14201C]/60">
                    © {new Date().getFullYear()} {legalConfig.legalName}
                  </p>
                </div>
              </footer>

            </article>

          </div>

        </div>
      </main>

      {/* Simplified Dedicated Footer for Legal Pages */}
      <footer className="bg-[#F8FAF9] border-t border-[#014937]/15 py-8 text-center text-xs font-heading text-[#14201C]/70">
        <div className="max-w-[1200px] mx-auto px-4 space-y-3">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-[#014937]">
            {legalDocList.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => navigateToLegal(l.id)}
                className={`hover:underline cursor-pointer ${l.id === currentDocId ? 'text-[#AE7E25] font-bold' : ''}`}
              >
                {l.shortTitle}
              </button>
            ))}
          </div>
          <p>© {new Date().getFullYear()} {legalConfig.legalName} • RUC {legalConfig.ruc} • {legalConfig.country}</p>
        </div>
      </footer>
    </div>
  );
};
