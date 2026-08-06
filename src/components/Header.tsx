import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll detection for subtle header elevation & compact mode
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press, outside click, and manage focus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Top Metallic Gold Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#014937] via-[#E0BB5D] to-[#014937] w-full" />

      {/* Main Bar */}
      <div
        className={`bg-white/98 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled
            ? 'border-[#014937]/20 shadow-md py-2.5 sm:py-3'
            : 'border-[#014937]/10 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            
            {/* Logo Principal con Máxima Autoridad Visibilidad */}
            <a
              href="#inicio"
              className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] rounded-lg p-1 transition-all"
              aria-label="Serna Estate - Ir al inicio"
            >
              <img
                src={siteContent.images.logoMain.url}
                alt={siteContent.images.logoMain.alt}
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled
                    ? 'h-10 sm:h-12 md:h-13'
                    : 'h-12 sm:h-14 md:h-16'
                } group-hover:scale-[1.01]`}
                loading="eager"
              />
            </a>

            {/* Desktop Navigation Links - Espaciado amplio y tipografía pulida */}
            <nav
              className="hidden lg:flex items-center justify-center gap-1 xl:gap-2.5 flex-1 max-w-4xl"
              aria-label="Navegación principal"
            >
              {siteContent.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-heading font-semibold text-[#14201C] hover:text-[#014937] transition-all rounded-lg relative group hover:bg-[#014937]/5 whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#E0BB5D] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button - Destacado y Espacioso */}
            <div className="hidden lg:flex items-center shrink-0 pl-2">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-5 xl:px-6 py-2.5 xl:py-3 text-xs xl:text-sm font-heading font-bold uppercase tracking-wider text-white bg-[#014937] hover:bg-[#146A55] active:bg-[#014937] transition-all duration-200 rounded-lg shadow-md hover:shadow-lg border-2 border-[#E0BB5D]/80 hover:border-[#E0BB5D] focus:ring-2 focus:ring-[#E0BB5D] focus:ring-offset-2 min-h-[46px] group cursor-pointer"
              >
                <span>Contáctanos</span>
                <ArrowUpRight className="w-4 h-4 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex lg:hidden items-center gap-2.5">
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-heading font-bold uppercase tracking-wider text-white bg-[#014937] rounded-md hover:bg-[#146A55] transition-colors shadow-xs border border-[#E0BB5D]/60"
              >
                <span>Contáctanos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D]" aria-hidden="true" />
              </a>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                className="p-2.5 text-[#014937] hover:bg-[#F1F5F3] border border-[#014937]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#014937]" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 text-[#014937]" aria-hidden="true" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Backdrop Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-full bg-[#14201C]/60 backdrop-blur-xs z-40 transition-opacity duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-full left-0 right-0 w-full bg-white border-t border-b border-[#014937]/20 shadow-2xl z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0 max-h-[85vh] overflow-y-auto p-6'
            : 'opacity-0 invisible -translate-y-2 max-h-0 overflow-hidden p-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú móvil"
      >
        <div className="space-y-5">
          <div className="flex items-center justify-between pb-2 border-b border-[#014937]/10">
            <div className="document-stamp">
              <span>Navegación Institucional</span>
            </div>
            <span className="text-[10px] font-heading font-bold text-[#AE7E25] uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E0BB5D]" />
              Firma Legal
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavLinkClick}
                className="px-4 py-3.5 text-base font-heading font-semibold text-[#14201C] hover:text-[#014937] hover:bg-[#F8FAF9] active:bg-[#F1F5F3] rounded-lg transition-colors border-b border-[#014937]/5 flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#014937]/15 space-y-3">
            <a
              href="#contacto"
              onClick={handleNavLinkClick}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-heading font-bold uppercase tracking-wider text-white bg-[#014937] hover:bg-[#146A55] rounded-xl shadow-lg border-2 border-[#E0BB5D] focus:ring-2 focus:ring-[#E0BB5D] min-h-[52px]"
            >
              <span>Contáctanos</span>
              <ArrowUpRight className="w-5 h-5 text-[#E0BB5D]" aria-hidden="true" />
            </a>
            <p className="text-center text-xs font-heading font-medium text-[#14201C]/70 pt-1">
              {siteContent.brand.name}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
