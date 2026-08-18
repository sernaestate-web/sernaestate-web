import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll detection and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = siteContent.navigation.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  const handleNavLinkClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Top Subtle Delicate Accent Line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E0BB5D] to-transparent w-full opacity-80" />

      {/* Main Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(1,73,55,0.06)] border-b border-[#014937]/10 py-2 sm:py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#014937]/5 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            
            {/* Logo Principal */}
            <a
              href="#inicio"
              onClick={() => handleNavLinkClick('inicio')}
              className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] rounded-xl p-1 transition-all"
              aria-label="Serna Estate - Ir al inicio"
            >
              <img
                src={siteContent.images.logoMain.url}
                alt={siteContent.images.logoMain.alt}
                className={`w-auto object-contain transition-all duration-300 ${
                  isScrolled
                    ? 'h-11 sm:h-13 md:h-15'
                    : 'h-13 sm:h-16 md:h-18'
                } group-hover:scale-[1.01]`}
                loading="eager"
              />
            </a>

            {/* Desktop Capsule Pill Navigation (Inspirada en diseño sutil, delicado y moderno) */}
            <nav
              className="hidden lg:flex items-center justify-center flex-1 max-w-3xl"
              aria-label="Navegación principal"
            >
              <div className="relative inline-flex items-center bg-white/95 border border-[#014937]/12 rounded-full p-1.5 shadow-[0_2px_12px_rgba(1,73,55,0.05)] backdrop-blur-md">
                {siteContent.navigation.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavLinkClick(sectionId)}
                      className={`relative px-3.5 xl:px-4 py-1.5 rounded-full text-[13px] xl:text-[13.5px] font-heading transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0BB5D] ${
                        isActive
                          ? 'text-[#014937] font-bold bg-[#014937]/8 shadow-2xs'
                          : 'text-[#14201C]/75 hover:text-[#014937] hover:bg-[#014937]/4 font-medium'
                      }`}
                    >
                      {/* Active Indicator Pip (Top marker similar to reference) */}
                      {isActive && (
                        <span
                          className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-4 h-1 bg-[#014937] rounded-full shadow-[0_2px_6px_rgba(1,73,55,0.4)]"
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Desktop CTA Button - Delicado y Sofisticado */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs xl:text-[13px] font-heading font-semibold text-white bg-[#014937] hover:bg-[#146A55] active:bg-[#014937] transition-all duration-200 rounded-full shadow-[0_2px_10px_rgba(1,73,55,0.2)] hover:shadow-md border border-[#E0BB5D]/70 hover:border-[#E0BB5D] focus:ring-2 focus:ring-[#E0BB5D] focus:ring-offset-2 min-h-[38px] group cursor-pointer"
              >
                <span>Contáctanos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-heading font-semibold text-white bg-[#014937] rounded-full hover:bg-[#146A55] transition-colors shadow-xs border border-[#E0BB5D]/60"
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
                className="p-2 text-[#014937] hover:bg-[#F1F5F3] border border-[#014937]/15 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] min-h-[40px] min-w-[40px] flex items-center justify-center transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#014937]" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5 text-[#014937]" aria-hidden="true" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Backdrop Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-full bg-[#14201C]/50 backdrop-blur-xs z-40 transition-opacity duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-full left-0 right-0 w-full bg-white/98 backdrop-blur-md border-t border-b border-[#014937]/15 shadow-xl z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0 max-h-[85vh] overflow-y-auto p-5'
            : 'opacity-0 invisible -translate-y-2 max-h-0 overflow-hidden p-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú móvil"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#014937]/10">
            <div className="document-stamp">
              <span>Navegación Institucional</span>
            </div>
            <span className="text-[10px] font-heading font-semibold text-[#AE7E25] uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E0BB5D]" />
              Firma Legal
            </span>
          </div>

          <nav className="flex flex-col space-y-1.5">
            {siteContent.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavLinkClick(sectionId)}
                  className={`px-4 py-2.5 text-sm font-heading rounded-full transition-all border flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#014937]/10 text-[#014937] font-bold border-[#014937]/25 shadow-2xs'
                      : 'bg-white text-[#14201C]/80 hover:bg-[#014937]/5 hover:text-[#014937] font-medium border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#AE7E25] group-hover:text-[#014937] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#014937]/10 space-y-2">
            <a
              href="#contacto"
              onClick={() => handleNavLinkClick('contacto')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-heading font-semibold text-white bg-[#014937] hover:bg-[#146A55] rounded-full shadow-md border border-[#E0BB5D]"
            >
              <span>Contáctanos</span>
              <ArrowUpRight className="w-4 h-4 text-[#E0BB5D]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

