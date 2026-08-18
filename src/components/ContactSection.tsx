import React, { useState, useEffect, useRef } from 'react';
import { Mail, Copy, Check, ArrowUpRight, ShieldCheck, Phone, Send, CheckCircle2, MessageSquare, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { legalConfig } from '../config/legalConfig';
import { buildLegalUrl } from '../utils/legalNavigation';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const fullNameRef = useRef<HTMLInputElement>(null);

  // Form State with Separated Dual Consents
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    queryType: siteContent.contact.queryTypes[0],
    message: '',
    necessaryConsent: false,
    marketingConsent: false,
  });

  const [isSubmittedFromUrl, setIsSubmittedFromUrl] = useState(false);
  const [submissionTimestamp, setSubmissionTimestamp] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('consulta') === 'enviada') {
      setIsSubmittedFromUrl(true);
    }
    setSubmissionTimestamp(new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }));
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, type } = e.target;
    const key = id as keyof typeof formData;
    if (!key) return;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [key]: checked }));
    } else {
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleResetForm = () => {
    setIsSubmittedFromUrl(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('consulta');
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      queryType: siteContent.contact.queryTypes[0],
      message: '',
      necessaryConsent: false,
      marketingConsent: false,
    });
    setTimeout(() => {
      fullNameRef.current?.focus();
    }, 100);
  };

  const privacyUrl = buildLegalUrl('privacidad');

  const whatsappDirectMessage = `*Nueva Consulta Inmobiliaria - Serna Estate*%0A%0A*Nombre:* ${encodeURIComponent(formData.fullName)}%0A*Correo:* ${encodeURIComponent(formData.email)}%0A*Teléfono/WhatsApp:* ${encodeURIComponent(formData.phone)}%0A*Tipo de Consulta:* ${encodeURIComponent(formData.queryType)}%0A*Mensaje:* ${encodeURIComponent(formData.message || 'Sin mensaje adicional')}`;

  const mailtoDirectMessage = `mailto:${siteContent.contact.email}?subject=${encodeURIComponent(
    `Consulta Legal: ${formData.queryType} - ${formData.fullName}`
  )}&body=${encodeURIComponent(
    `Nombre: ${formData.fullName}\nCorreo: ${formData.email}\nTeléfono/WhatsApp: ${formData.phone}\nTipo de consulta: ${formData.queryType}\n\nMensaje:\n${formData.message}`
  )}`;

  const whatsappUrl = `https://wa.me/${siteContent.contact.whatsappRaw}?text=${whatsappDirectMessage}`;

  return (
    <AnimatedSection
      id="contacto"
      className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-[#014937]/10"
    >
      {/* Background Cadastral Grid */}
      <div className="absolute inset-0 cadastral-grid opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12 max-w-3xl">
          <Reveal direction="up" delay={0.1}>
            <div className="document-stamp">
              <span>Contacto Institucional</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <h2
              id="contacto-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#014937]"
            >
              {siteContent.contact.title}
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg font-body text-[#14201C]/85 leading-relaxed">
              {siteContent.contact.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Form */}
          <Reveal direction="right" delay={0.25} className="lg:col-span-7">
            <div className="bg-[#F8FAF9] rounded-xl border border-[#014937]/20 p-6 sm:p-8 md:p-10 shadow-lg relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E0BB5D]/10 rounded-bl-full pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#014937] mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-[#AE7E25]" aria-hidden="true" />
                <span>Formulario de Consulta Legal</span>
              </h3>

              {isSubmittedFromUrl ? (
                <div className="bg-white rounded-lg border-2 border-[#014937] p-6 sm:p-8 space-y-6 text-left animate-in fade-in duration-300">
                  <div className="flex items-start gap-3 text-[#014937]">
                    <CheckCircle2 className="w-8 h-8 text-[#146A55] shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h4 className="font-heading font-bold text-xl text-[#014937]">¡Consulta recibida correctamente!</h4>
                      <p className="text-sm font-body text-[#14201C]/85 leading-relaxed">
                        También enviamos una confirmación al correo que registraste. Si no la encuentras, revisa tu carpeta de spam o correo no deseado.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#014937]/15 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#014937] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#146A55] transition-all shadow-md cursor-pointer"
                    >
                      Registrar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  action="https://formsubmit.co/sernaestate@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  {/* FormSubmit Configuration Fields */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nueva consulta legal desde la web de Serna Estate"
                  />
                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://sernaestate-web.github.io/sernaestate-web/?consulta=enviada#contacto"
                  />
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Hola. Hemos recibido correctamente tu consulta legal inmobiliaria. El equipo de Serna Estate revisará la información proporcionada y se comunicará contigo por los datos registrados. El envío de este formulario no constituye por sí mismo una relación abogado-cliente ni implica la aceptación automática del caso. Gracias por contactar con Serna Estate Firma Legal Inmobiliaria."
                  />
                  {/* Additional Legal Metadata */}
                  <input
                    type="hidden"
                    name="Versión de Política de Privacidad"
                    value={legalConfig.privacyPolicyVersion}
                  />
                  <input
                    type="hidden"
                    name="Fecha y hora de envío"
                    value={submissionTimestamp}
                  />

                  {/* 1. Nombre completo */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#014937] mb-1.5">
                      1. Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={fullNameRef}
                      type="text"
                      id="fullName"
                      name="Nombre completo"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez Delgado"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-white border border-[#014937]/20 rounded-md text-sm text-[#14201C] focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* 2. Correo electrónico */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#014937] mb-1.5">
                      2. Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ejemplo@correo.com"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-white border border-[#014937]/20 rounded-md text-sm text-[#14201C] focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* 3. Número de teléfono / WhatsApp */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#014937] mb-1.5">
                      3. Número de teléfono / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="Teléfono o WhatsApp"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 913 511 439"
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-3 bg-white border border-[#014937]/20 rounded-md text-sm text-[#14201C] focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* 4. Tipo de consulta */}
                  <div>
                    <label htmlFor="queryType" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#014937] mb-1.5">
                      4. Tipo de consulta <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="queryType"
                      name="Tipo de consulta"
                      value={formData.queryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#014937]/20 rounded-md text-sm text-[#14201C] focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] focus:border-transparent transition-all cursor-pointer"
                    >
                      {siteContent.contact.queryTypes.map((q, idx) => (
                        <option key={idx} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 5. Mensaje o descripción breve */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#014937] mb-1.5">
                      5. Mensaje o descripción breve de la consulta
                    </label>
                    <textarea
                      id="message"
                      name="Mensaje"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={siteContent.contact.messagePlaceholder}
                      className="w-full px-4 py-3 bg-white border border-[#014937]/20 rounded-md text-sm text-[#14201C] focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Legal Notice Box */}
                  <div className="p-3.5 bg-white rounded-lg border border-[#014937]/15 text-[11px] sm:text-xs text-[#14201C]/80 leading-relaxed space-y-1">
                    <p>
                      <strong>{legalConfig.legalName}</strong>, identificada con RUC {legalConfig.ruc}, utilizará tus datos para recibir, evaluar y responder tu consulta. Conoce cómo tratamos tus datos y cómo ejercer tus derechos en nuestra{' '}
                      <a
                        href={privacyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#014937] font-semibold underline hover:text-[#AE7E25] inline-flex items-center gap-0.5"
                        aria-label="Conoce nuestra Política de Privacidad (se abre en una nueva pestaña)"
                      >
                        <span>Política de Privacidad</span>
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>.
                    </p>
                  </div>

                  {/* Consent A: Necessary Treatment for Managing Inquiry (Obligatorio) */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        id="necessaryConsent"
                        name="Tratamiento necesario (gestión de consulta)"
                        value="Autorizado"
                        checked={formData.necessaryConsent}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 text-[#014937] border-gray-300 rounded focus:ring-[#E0BB5D] shrink-0 cursor-pointer"
                      />
                      <span className="text-xs font-body text-[#14201C]/90 leading-tight group-hover:text-[#014937] transition-colors">
                        He leído la{' '}
                        <a
                          href={privacyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-semibold text-[#014937] hover:text-[#AE7E25] inline-flex items-center gap-0.5"
                          aria-label="Abrir Política de Privacidad en una nueva pestaña"
                        >
                          <span>Política de Privacidad</span>
                          <ExternalLink className="w-2.5 h-2.5 inline" />
                        </a>{' '}
                        y autorizo el tratamiento de mis datos para gestionar y responder esta consulta. <span className="text-red-500 font-bold">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Consent B: Optional Marketing & News (Opcional) */}
                  <div className="pt-0.5">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        id="marketingConsent"
                        name="Consentimiento publicitario (opcional)"
                        value="Autorizado para novedades y campañas"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-[#014937] border-gray-300 rounded focus:ring-[#E0BB5D] shrink-0 cursor-pointer"
                      />
                      <span className="text-xs font-body text-[#14201C]/80 leading-tight group-hover:text-[#014937] transition-colors">
                        Quiero recibir novedades, contenido informativo y comunicaciones sobre los servicios y campañas de Serna Estate. <span className="text-xs text-[#14201C]/60 italic">(Opcional)</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#014937] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:bg-[#146A55] transition-all shadow-md focus:ring-2 focus:ring-[#E0BB5D] cursor-pointer"
                    >
                      <span>Enviar Consulta Legal</span>
                      <Send className="w-4 h-4 text-[#E0BB5D]" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </Reveal>

          {/* RIGHT COLUMN: Direct Contact Channels & Social Media */}
          <Reveal direction="left" delay={0.3} className="lg:col-span-5 space-y-6">
            
            {/* Card 1: WhatsApp Direct Action Box */}
            <div className="p-6 sm:p-7 bg-gradient-to-br from-[#014937] to-[#146A55] text-white rounded-2xl shadow-lg border-t-4 border-[#E0BB5D] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/10 text-[#25D366]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#E0BB5D]">
                    Atención Directa vía WhatsApp
                  </p>
                  <p className="font-heading font-bold text-xl text-white">
                    {siteContent.contact.whatsappDisplay}
                  </p>
                </div>
              </div>

              <p className="text-xs font-body text-white/90 leading-relaxed">
                Contacta directamente con nuestro equipo legal para consultas inmediatas o coordinaciones urgentes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Hola Serna Estate, deseo realizar una consulta legal inmobiliaria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <span>Chatear por WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(siteContent.contact.whatsappDisplay, 'phone')}
                  className="w-full sm:w-auto px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-white/15"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#E0BB5D]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            {/* Card 2: Email Direct Action Box */}
            <div className="p-6 sm:p-7 bg-gradient-to-br from-[#014937] to-[#146A55] text-white rounded-2xl shadow-lg border-t-4 border-[#E0BB5D] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/10 text-[#E0BB5D]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#E0BB5D]">
                    Correo Electrónico Oficial
                  </p>
                  <p className="font-heading font-bold text-base sm:text-lg text-white break-all">
                    {siteContent.contact.email}
                  </p>
                </div>
              </div>

              <p className="text-xs font-body text-white/90 leading-relaxed">
                Canal formal para el envío de minutas, documentación registral y solicitudes corporativas.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <a
                  href={`mailto:${siteContent.contact.email}?subject=${encodeURIComponent(siteContent.contact.emailSubject)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#E0BB5D] hover:bg-[#ebd07d] text-[#013527] font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer border border-[#cfa545]"
                >
                  <span>Enviar Correo</span>
                  <ArrowUpRight className="w-4 h-4 text-[#013527]" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(siteContent.contact.email, 'email')}
                  className="w-full sm:w-auto px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-white/15"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#E0BB5D]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            {/* Card 3: Social Media Networks Box */}
            <div className="p-6 sm:p-7 bg-gradient-to-br from-[#014937] to-[#146A55] text-white rounded-2xl shadow-lg border-t-4 border-[#E0BB5D] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/10 text-[#E0BB5D]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#E0BB5D]">
                    Presencia Digital
                  </p>
                  <p className="font-heading font-bold text-base sm:text-lg text-white">
                    Redes Oficiales — Karla Serna
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-1">
                {/* LinkedIn */}
                <a
                  href={siteContent.contact.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0077B5] text-white shadow-xs">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-white">LinkedIn</p>
                      <p className="font-body text-xs text-white/80">{siteContent.contact.socials.linkedin.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Instagram */}
                <a
                  href={siteContent.contact.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-xs">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-white">Instagram</p>
                      <p className="font-body text-xs text-white/80">{siteContent.contact.socials.instagram.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* TikTok */}
                <a
                  href={siteContent.contact.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black text-white shadow-xs">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.28 2.57.02.94.53 1.83 1.34 2.32.96.58 2.22.56 3.14-.04.81-.53 1.29-1.47 1.28-2.44.02-5.43.01-10.86.02-16.29z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-white">TikTok</p>
                      <p className="font-body text-xs text-white/80">{siteContent.contact.socials.tiktok.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#E0BB5D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Legal Confidentiality Note */}
            <div className="pt-2 space-y-2 text-xs font-body text-[#14201C]/75">
              {siteContent.contact.notes.map((note, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#AE7E25] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{note}</span>
                </p>
              ))}
            </div>

          </Reveal>

        </div>

      </div>
    </AnimatedSection>
  );
};
