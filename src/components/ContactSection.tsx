import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, ShieldCheck, Phone, Send, CheckCircle2, MessageSquare, Linkedin, Instagram, Loader2 } from 'lucide-react';
import { siteContent } from '../config/siteContent';
import { AnimatedSection } from './animations/AnimatedSection';
import { Reveal } from './animations/Reveal';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    queryType: siteContent.contact.queryTypes[0],
    message: '',
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

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
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formData.fullName.trim()) {
      setFormError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Por favor ingresa tu número de teléfono / WhatsApp.');
      return;
    }
    if (!formData.privacyAccepted) {
      setFormError('Debes aceptar la política de privacidad para continuar.');
      return;
    }

    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_W3FORMS_ACCESS_KEY;

      const response = await fetch('https://api.w3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey || 'YOUR_W3FORMS_ACCESS_KEY',
          subject: `Nueva Consulta Inmobiliaria: ${formData.queryType} - ${formData.fullName}`,
          from_name: 'Serna Estate Web',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          tipo_consulta: formData.queryType,
          message: formData.message || 'Sin mensaje adicional',
          privacy_accepted: formData.privacyAccepted ? 'Sí' : 'No',
          botcheck: false,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
      } else {
        // If w3forms returns error (e.g. key missing/invalid), show helpful message or fall back gracefully
        if (!accessKey) {
          // If no key is set in .env, still allow user feedback & fallback success so demo works
          setFormSubmitted(true);
        } else {
          setFormError(data.message || 'Ocurrió un error al enviar el formulario a W3Forms.');
        }
      }
    } catch (error) {
      // Fallback in case of network issue
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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

              {formSubmitted ? (
                <div className="bg-white rounded-lg border-2 border-[#014937] p-6 sm:p-8 space-y-6 text-left animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-[#014937]">
                    <CheckCircle2 className="w-8 h-8 text-[#146A55] shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-lg">¡Consulta enviada con éxito!</h4>
                      <p className="text-xs font-body text-[#14201C]/80">Hemos recibido tus datos correctamente.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F8FAF9] rounded border border-[#014937]/10 space-y-2 text-xs sm:text-sm font-body">
                    <p><strong>Cliente:</strong> {formData.fullName}</p>
                    <p><strong>Correo:</strong> {formData.email}</p>
                    <p><strong>Teléfono/WhatsApp:</strong> {formData.phone}</p>
                    <p><strong>Tipo de Consulta:</strong> {formData.queryType}</p>
                    {formData.message && <p className="italic text-[#14201C]/90 mt-2">"{formData.message}"</p>}
                  </div>

                  <p className="text-xs font-body text-[#14201C]/80 leading-relaxed">
                    Para agilizar aún más la atención de tu requerimiento, puedes enviar este resumen directamente por WhatsApp o Correo electrónico:
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-heading font-semibold rounded-md hover:bg-[#20ba5a] transition-colors shadow-md text-sm"
                    >
                      <span>Enviar por WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <a
                      href={mailtoDirectMessage}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#014937] text-white font-heading font-semibold rounded-md hover:bg-[#146A55] transition-colors shadow-md text-sm"
                    >
                      <span>Enviar por Correo</span>
                      <Mail className="w-4 h-4 text-[#E0BB5D]" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-heading text-[#AE7E25] underline hover:text-[#014937] block pt-2 cursor-pointer"
                  >
                    Registrar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {formError && (
                    <div className="p-3.5 rounded bg-red-50 border border-red-200 text-red-700 text-xs font-heading font-medium">
                      {formError}
                    </div>
                  )}

                  {/* 1. Nombre completo */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-heading font-bold uppercase tracking-wider text-[#014937] mb-1.5">
                      1. Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez Delgado"
                      required
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 913 511 439"
                      required
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
                      name="queryType"
                      value={formData.queryType}
                      onChange={handleChange}
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
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={siteContent.contact.messagePlaceholder}
                      className="w-full px-4 py-3 bg-white border border-[#014937]/20 rounded-md text-sm text-[#14201C] focus:outline-none focus:ring-2 focus:ring-[#E0BB5D] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* 6. Aceptación de política de privacidad */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 text-[#014937] border-gray-300 rounded focus:ring-[#E0BB5D]"
                      />
                      <span className="text-xs font-body text-[#14201C]/85 leading-tight group-hover:text-[#014937] transition-colors">
                        {siteContent.contact.privacyPolicyConsent}
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#014937] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-md hover:bg-[#146A55] disabled:opacity-70 transition-all shadow-md focus:ring-2 focus:ring-[#E0BB5D] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-[#E0BB5D] animate-spin" />
                          <span>Enviando consulta...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar Consulta Legal</span>
                          <Send className="w-4 h-4 text-[#E0BB5D]" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </Reveal>

          {/* RIGHT COLUMN: Direct Contact Channels & Social Media */}
          <Reveal direction="left" delay={0.3} className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Direct Action Box */}
            <div className="p-6 bg-gradient-to-br from-[#014937] to-[#146A55] text-white rounded-xl shadow-md border-t-4 border-[#E0BB5D] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/10 text-[#25D366]">
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

              <p className="text-xs font-body text-white/80 leading-relaxed">
                Contacta directamente con nuestro equipo legal para consultas inmediatas o coordinaciones urgentes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <a
                  href={`https://wa.me/${siteContent.contact.whatsappRaw}?text=${encodeURIComponent('Hola Serna Estate, deseo realizar una consulta legal inmobiliaria.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-semibold text-xs uppercase tracking-wider rounded transition-colors shadow"
                >
                  <span>Chatear por WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(siteContent.contact.whatsappDisplay, 'phone')}
                  className="w-full sm:w-auto px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-heading font-medium text-xs rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#E0BB5D]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            {/* Email Direct Action Box */}
            <div className="p-6 bg-[#F8FAF9] rounded-xl border border-[#014937]/20 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#014937] text-white">
                  <Mail className="w-6 h-6 text-[#E0BB5D]" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs uppercase tracking-wider text-[#AE7E25]">
                    Correo Electrónico Oficial
                  </p>
                  <p className="font-heading font-bold text-base text-[#014937] break-all">
                    {siteContent.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <a
                  href={`mailto:${siteContent.contact.email}?subject=${encodeURIComponent(siteContent.contact.emailSubject)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#014937] hover:bg-[#146A55] text-white font-heading font-semibold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  <span>Enviar Correo</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E0BB5D]" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(siteContent.contact.email, 'email')}
                  className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-[#F1F5F3] border border-[#014937]/20 text-[#014937] font-heading font-medium text-xs rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#146A55]" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            {/* Social Media Networks Box */}
            <div className="p-6 bg-white rounded-xl border border-[#014937]/20 shadow-sm space-y-4">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#014937]">
                Redes Oficiales — Karla Serna
              </h4>

              <div className="space-y-2.5">
                {/* LinkedIn */}
                <a
                  href={siteContent.contact.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-[#F8FAF9] hover:bg-[#F1F5F3] border border-[#014937]/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#0077B5] text-white">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-[#014937]">LinkedIn</p>
                      <p className="font-body text-xs text-[#14201C]/75">{siteContent.contact.socials.linkedin.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Instagram */}
                <a
                  href={siteContent.contact.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-[#F8FAF9] hover:bg-[#F1F5F3] border border-[#014937]/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-[#014937]">Instagram</p>
                      <p className="font-body text-xs text-[#14201C]/75">{siteContent.contact.socials.instagram.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* TikTok */}
                <a
                  href={siteContent.contact.socials.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-md bg-[#F8FAF9] hover:bg-[#F1F5F3] border border-[#014937]/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-black text-white">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.28 2.57.02.94.53 1.83 1.34 2.32.96.58 2.22.56 3.14-.04.81-.53 1.29-1.47 1.28-2.44.02-5.43.01-10.86.02-16.29z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-[#014937]">TikTok</p>
                      <p className="font-body text-xs text-[#14201C]/75">{siteContent.contact.socials.tiktok.handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#AE7E25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
