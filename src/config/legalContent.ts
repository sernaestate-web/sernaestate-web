import { legalConfig, LegalDocType } from './legalConfig';

export interface LegalSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    paragraphs: string[];
  }[];
}

export interface LegalDocumentData {
  id: LegalDocType;
  title: string;
  shortTitle: string;
  metaDescription: string;
  lastUpdated: string;
  version: string;
  intro: string;
  sections: LegalSection[];
}

export const legalDocuments: Record<LegalDocType, LegalDocumentData> = {
  privacidad: {
    id: 'privacidad',
    title: 'Política de Privacidad y Protección de Datos Personales',
    shortTitle: 'Política de Privacidad',
    metaDescription: 'Conoce los principios, finalidades y medidas con las que Serna Estate protege tus datos personales conforme a la Ley N.° 29733 y el D.S. N.° 016-2024-JUS.',
    lastUpdated: 'Agosto 2026 (Borrador de implementación)',
    version: '1.0',
    intro: `En SERNA ESTATE FIRMA LEGAL INMOBILIARIA S.A.C. (en adelante, "${legalConfig.commercialName}"), la privacidad, reserva y seguridad de la información de nuestros clientes y visitantes constituyen un pilar fundamental de nuestra práctica profesional. La presente Política de Privacidad describe el tratamiento de datos personales realizado a través de nuestro sitio web institucional, en estricto cumplimiento de la Ley N.° 29733 (Ley de Protección de Datos Personales del Perú), su Reglamento aprobado por Decreto Supremo N.° 016-2024-JUS y sus normas complementarias.`,
    sections: [
      {
        id: 'responsable',
        title: '1. Identificación del Responsable del Tratamiento',
        content: [
          `El titular y responsable del tratamiento de los datos personales recopilados a través de este portal web es:`,
          `• Razón Social: ${legalConfig.legalName}`,
          `• Nombre Comercial: ${legalConfig.commercialName}`,
          `• RUC: ${legalConfig.ruc}`,
          `• País: ${legalConfig.country}`,
          `• Canal oficial de atención y privacidad: ${legalConfig.privacyEmail}`,
          `• Dirección de contacto legal: Asunto pendiente de validación formal en la versión definitiva de este documento. Por razones de seguridad institucional, la firma no publica domicilios no corporativos en el sitio público.`,
        ],
      },
      {
        id: 'marco-legal-principios',
        title: '2. Marco Normativo y Principios Rectores',
        content: [
          `El tratamiento de datos personales realizado por ${legalConfig.commercialName} se rige por los principios de legalidad, consentimiento, finalidad, proporcionalidad, calidad, seguridad, disposición de recurso y nivel de protección adecuado previstos en la Ley N.° 29733 y el Decreto Supremo N.° 016-2024-JUS.`,
          `Garantizamos que los datos personales se obtienen de manera lícita, transparente y únicamente para las finalidades explícitas e informadas al titular de los datos.`,
        ],
      },
      {
        id: 'banco-datos',
        title: '3. Banco de Datos Personales',
        content: [
          `Los datos personales proporcionados a través del sitio web son administrados e incorporados bajo custodia directa de ${legalConfig.commercialName}.`,
          `Información sobre registro: Conforme a los requerimientos de la Autoridad Nacional de Protección de Datos Personales (ANPD), Serna Estate se encuentra en proceso de regularización e inscripción de su banco de datos personales. Una vez emitida la resolución correspondiente, se consignará la denominación y código oficial de registro en esta política.`,
        ],
      },
      {
        id: 'datos-recopilados',
        title: '4. Datos Personales Recopilados y Forma de Obtención',
        content: [
          `Recopilamos datos personales únicamente cuando el usuario decide libremente ingresarlos y enviarlos mediante nuestro formulario web de contacto o a través de nuestros canales directos de WhatsApp y correo electrónico:`,
          `• Datos de identificación: Nombres y apellidos completos.`,
          `• Datos de contacto: Dirección de correo electrónico y número de teléfono / WhatsApp.`,
          `• Datos de la consulta: Categoría o tipo de consulta legal inmobiliaria y descripción voluntaria del requerimiento.`,
          `• Datos de consentimiento: Registro del estado de aceptación de la Política de Privacidad y del consentimiento opcional para novedades informativas.`,
          `• Información técnica de seguridad: Metadatos técnicos mínimos transmitidos durante la interacción web indispensables para la prevención de envíos automatizados (spam) y seguridad de los servidores.`,
          `Nota de prudencia: Se solicita al usuario no enviar información altamente sensible, contraseñas, datos bancarios ni documentos originales a través del formulario inicial web.`,
        ],
      },
      {
        id: 'finalidades-tratamiento',
        title: '5. Finalidades del Tratamiento y Bases de Legitimación',
        content: [
          `Diferenciamos de manera expresa y transparente las finalidades necesarias de aquellas complementarias u opcionales:`,
        ],
        subsections: [
          {
            subtitle: '5.1 Finalidades Necesarias (Gestión de la Consulta)',
            paragraphs: [
              `Base legal: Consentimiento del titular y adopción de medidas previas a una eventual relación contractual o de asesoría profesional a solicitud del interesado.`,
              `• Recibir, registrar y evaluar preliminarmente la consulta legal planteada.`,
              `• Contactar al usuario por correo electrónico, teléfono o WhatsApp para brindarle respuesta o solicitar aclaraciones iniciales.`,
              `• Coordinar una eventual reunión, entrevista o cotización formal de servicios legales inmobiliarios.`,
              `• Prevenir el fraude, spam y uso indebido del formulario web.`,
              `• Cumplir con las obligaciones legales aplicables y requerimientos de autoridades competentes.`,
            ],
          },
          {
            subtitle: '5.2 Finalidades Opcionales (Comunicaciones y Novedades)',
            paragraphs: [
              `Base legal: Consentimiento previo, expreso, libre e inequívoco del titular mediante casilla independiente y voluntaria.`,
              `• Envío de boletines informativos, artículos jurídicos, novedades normativas del sector inmobiliario y difusión de actividades o servicios de ${legalConfig.commercialName}.`,
              `• El usuario puede rehusar este consentimiento sin que ello afecte de ninguna manera la atención ni la respuesta a su consulta legal.`,
            ],
          },
        ],
      },
      {
        id: 'ausencia-relacion',
        title: '6. Alcance de las Consultas Preliminares (Ausencia de Relación Abogado-Cliente Automática)',
        content: [
          `El envío de una consulta a través del formulario web, correo o WhatsApp no genera de manera automática una relación profesional abogado-cliente ni implica la aceptación irrevocable o patrocinio del caso por parte de Serna Estate ni de Karla Serna.`,
          `Toda relación profesional de asesoría jurídica o representación procesal requiere una evaluación previa de viabilidad, verificación de inexistencia de conflicto de intereses y la suscripción de una propuesta formal o contrato de servicios profesionales entre las partes.`,
        ],
      },
      {
        id: 'destinatarios-transferencias',
        title: '7. Destinatarios, Encargados del Tratamiento y Transferencias Internacionales',
        content: [
          `${legalConfig.commercialName} no vende, no arrienda ni comercializa bajo ninguna circunstancia los datos personales de sus usuarios con terceros para fines comerciales o de prospección económica.`,
          `Para la operatividad técnica del sitio web y la recepción segura de mensajes, se cuenta con la intervención de los siguientes encargados técnicos y proveedores de infraestructura:`,
          `• FormSubmit (envío y procesamiento técnico del formulario de contacto hacia la casilla institucional).`,
          `• Cloudinary Ltd. (alojamiento y optimización de entrega de imágenes institucionales).`,
          `• GitHub Inc. / GitHub Pages (alojamiento de los archivos estáticos del sitio web).`,
          `Transferencias transfronterizas: Dado que los servidores de estos proveedores de tecnología pueden ubicarse fuera del territorio peruano (como en los Estados Unidos de América o la Unión Europea), el uso del sitio y el envío del formulario implica un flujo internacional de datos con el único fin de permitir el almacenamiento técnico y la transmisión cifrada de la información. Dichos proveedores operan bajo estándares internacionales de seguridad informática.`,
        ],
      },
      {
        id: 'conservacion',
        title: '8. Plazo de Conservación de los Datos Personales',
        content: [
          `Los datos personales serán conservados durante el tiempo estrictamente necesario para cumplir con la atención de la consulta formulada y las finalidades para las que fueron recabados.`,
          `En caso de que la consulta derive en la contratación de servicios legales, los datos se incorporarán al expediente del cliente y se conservarán por el tiempo que subsista la relación profesional y los plazos de prescripción legal y tributaria establecidos por la legislación peruana.`,
          `Para los datos tratados con fines de comunicaciones opcionales, estos se conservarán hasta que el titular decida revocar su consentimiento.`,
          `Nota de auditoría: El plazo y criterio interno de retención formal se encuentra en proceso de revisión legal para su determinación cuantitativa definitiva en la versión final de esta política.`,
        ],
      },
      {
        id: 'seguridad',
        title: '9. Medidas de Seguridad de la Información',
        content: [
          `En cumplimiento del deber de seguridad previsto en el artículo 19 de la Ley N.° 29733 y el Decreto Supremo N.° 016-2024-JUS, ${legalConfig.commercialName} adopta medidas técnicas, legales y organizativas apropiadas para evitar la pérdida, mal uso, alteración, acceso no autorizado o sustracción de los datos personales suministrados.`,
          `La comunicación web se realiza a través de conexiones seguras mediante protocolo HTTPS con certificados TLS. Toda la información profesional remitida por los usuarios se encuentra resguardada bajo el deber de reserva y el secreto profesional del abogado contemplado en la legislación peruana.`,
        ],
      },
      {
        id: 'derechos-arco',
        title: '10. Ejercicio de Derechos ARCO y Revocación del Consentimiento',
        content: [
          `Conforme a la Ley N.° 29733, todo titular de datos personales tiene derecho a acceder a su información (Acceso), solicitar la corrección o actualización de datos inexactos (Rectificación), solicitar la supresión de sus datos cuando ya no sean necesarios (Cancelación), y oponerse al tratamiento para finalidades específicas (Oposición).`,
          `Procedimiento para ejercer sus derechos ARCO o revocar el consentimiento publicitario:`,
          `1. Remitir una comunicación dirigida a la Unidad de Privacidad al correo electrónico: ${legalConfig.privacyEmail}.`,
          `2. Asunto del mensaje: "Ejercicio de Derechos ARCO - [Nombre Completo del Solicitante]".`,
          `3. Contenido: Nombres y apellidos completos, copia simple de documento de identidad (DNI o Carné de Extranjería) para verificar titularidad, detalle concreto del derecho que solicita ejercer y documentación de sustento si corresponde.`,
          `4. Plazo de atención: Las solicitudes serán evaluadas y respondidas dentro de los plazos legales establecidos en la normativa peruana. El trámite es completamente gratuito.`,
        ],
      },
      {
        id: 'menores',
        title: '11. Tratamiento de Datos de Menores de Edad',
        content: [
          `Los servicios y contenidos ofrecidos a través de este portal web están dirigidos exclusivamente a personas mayores de edad con plena capacidad de ejercicio civil. Serna Estate no recopila conscientemente datos de menores de edad. Si se detectase el registro inadvertido de datos de un menor, estos serán cancelados a la brevedad.`,
        ],
      },
      {
        id: 'modificaciones',
        title: '12. Modificaciones a la Política de Privacidad',
        content: [
          `${legalConfig.commercialName} se reserva el derecho de modificar o actualizar la presente Política de Privacidad en cualquier momento para adaptarla a novedades legislativas, jurisprudenciales o prácticas institucionales.`,
          `Cualquier cambio sustancial será publicado oportunamente en esta misma sección, indicando la fecha de última actualización.`,
        ],
      },
    ],
  },

  cookies: {
    id: 'cookies',
    title: 'Política de Cookies y Tecnologías de Almacenamiento',
    shortTitle: 'Política de Cookies',
    metaDescription: 'Auditoría técnica sobre el uso de tecnologías en la web de Serna Estate: ausencia de cookies de rastreo y uso de servicios esenciales.',
    lastUpdated: 'Agosto 2026 (Borrador de implementación)',
    version: '1.0',
    intro: `En ${legalConfig.legalName} ("${legalConfig.commercialName}"), creemos en la transparencia absoluta respecto a la privacidad de nuestros usuarios. La presente Política de Cookies explica de manera técnica y honesta qué tecnologías interactúan en nuestro portal web institucional.`,
    sections: [
      {
        id: 'que-son-cookies',
        title: '1. ¿Qué son las Cookies y Tecnologías Similares?',
        content: [
          `Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del dispositivo del usuario (computadora, tableta o teléfono móvil) para registrar información sobre su navegación, recordar preferencias o habilitar ciertas funcionalidades técnicas.`,
          `Existen también tecnologías similares como el almacenamiento local (localStorage, sessionStorage), balizas web (web beacons) o identificadores de sesión.`,
        ],
      },
      {
        id: 'auditoria-tecnica',
        title: '2. Auditoría Técnica de Nuestro Sitio Web',
        content: [
          `De conformidad con la auditoría técnica realizada sobre el código fuente de este portal:`,
          `• No utilizamos cookies de rastreo publicitario, perfiles comerciales ni píxeles de seguimiento publicitario (como Meta Pixel, TikTok Pixel, LinkedIn Insight Tag o similares).`,
          `• No utilizamos plataformas de analítica conductual intrusiva (como Hotjar, Microsoft Clarity o grabaciones de sesión).`,
          `• No utilizamos cookies analíticas de terceros (como Google Analytics o Google Tag Manager) en la versión actual del sitio.`,
          `• No se almacenan datos personales del usuario en localStorage ni en sessionStorage.`,
        ],
      },
      {
        id: 'servicios-externos',
        title: '3. Proveedores Técnicos y Servicios Externos Presentes',
        content: [
          `Para garantizar una experiencia rápida, segura y accesible, el sitio web interactúa con los siguientes servicios de infraestructura:`,
          `• GitHub Pages: Servicio de alojamiento de archivos estáticos que opera bajo protocolos de seguridad web estándar.`,
          `• Cloudinary Ltd.: Red de distribución de contenidos (CDN) para la entrega optimizada y carga ultrarrápida de fotografías e isotipos institucionales.`,
          `• Google Fonts: Tipografías web institucionales cargadas directamente desde servidores de Google (Montserrat y Lato).`,
          `• FormSubmit: Servicio que procesa el formulario de consulta y aplica filtros de seguridad antispam (reCAPTCHA) únicamente al momento del envío voluntario.`,
          `• Enlaces salientes voluntarios: Botones que redirigen al usuario a WhatsApp, LinkedIn, Instagram y TikTok. Al hacer clic voluntariamente en dichos enlaces externos, el usuario pasa a regirse por las políticas de privacidad y cookies de cada plataforma respectiva.`,
        ],
      },
      {
        id: 'banner-consentimiento',
        title: '4. Justificación Técnica de la Ausencia de Banner de Cookies',
        content: [
          `Dado que nuestro sitio web no descarga en su navegador cookies no esenciales, cookies analíticas ni rastreadores publicitarios antes de su consentimiento, no resulta técnicamente aplicable ni necesario desplegar un banner intrusivo de consentimiento de cookies.`,
          `En caso de que en el futuro se implementen herramientas de analítica o tecnologías que requieran consentimiento previo, se incorporará el mecanismo correspondiente de autorización previa y panel de configuración de preferencias.`,
        ],
      },
      {
        id: 'como-gestionar-cookies',
        title: '5. Cómo Gestionar o Desactivar Cookies en tu Navegador',
        content: [
          `El usuario tiene la facultad de configurar su navegador en cualquier momento para bloquear o eliminar cualquier archivo de almacenamiento:`,
          `• Google Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios.`,
          `• Mozilla Firefox: Opciones > Privacidad y Seguridad > Cookies y datos del sitio.`,
          `• Apple Safari: Preferencias > Privacidad > Bloquear todas las cookies.`,
          `• Microsoft Edge: Configuración > Privacidad, búsqueda y servicios > Borrar datos de exploración.`,
        ],
      },
      {
        id: 'consultas-cookies',
        title: '6. Consultas sobre esta Política',
        content: [
          `Para cualquier consulta técnica o jurídica sobre el uso de tecnologías en nuestro portal, puede escribirnos a: ${legalConfig.privacyEmail}.`,
        ],
      },
    ],
  },

  'aviso-legal': {
    id: 'aviso-legal',
    title: 'Aviso Legal e Información Institucional',
    shortTitle: 'Aviso Legal',
    metaDescription: 'Aviso legal y condiciones de uso del portal web de Serna Estate Firma Legal Inmobiliaria S.A.C.',
    lastUpdated: 'Agosto 2026 (Borrador de implementación)',
    version: '1.0',
    intro: `El presente Aviso Legal regula el acceso, navegación y uso del sitio web de ${legalConfig.legalName} (en adelante, "${legalConfig.commercialName}"), con la finalidad de ofrecer información institucional y jurídica orientativa sobre nuestras áreas de práctica en Derecho Inmobiliario en el Perú.`,
    sections: [
      {
        id: 'titularidad',
        title: '1. Datos de Identificación de la Titular',
        content: [
          `En cumplimiento del principio de transparencia e información general:`,
          `• Denominación social: ${legalConfig.legalName}`,
          `• Nombre comercial: ${legalConfig.commercialName}`,
          `• RUC: ${legalConfig.ruc}`,
          `• País de constitución y domicilio: ${legalConfig.country}`,
          `• Correo electrónico de contacto institucional: ${legalConfig.contactEmail}`,
          `• Dirección formal de contacto legal: Pendiente de validación en la versión definitiva de este documento.`,
          `• Dirección General de la Firma: Karla Serna, Abogada colegiada especializada en Derecho Inmobiliario.`,
        ],
      },
      {
        id: 'objeto-sitio',
        title: '2. Objeto y Finalidad del Sitio Web',
        content: [
          `Este portal web tiene como objetivo primordial brindar información institucional, divulgar criterios jurídicos de interés inmobiliario y poner a disposición del público canales directos de contacto profesional con nuestro equipo legal.`,
          `El acceso y navegación por el sitio web es libre, gratuito y atribuye la condición de Usuario a quien lo utilice.`,
        ],
      },
      {
        id: 'caracter-informativo',
        title: '3. Naturaleza de la Información Jurídica y Ausencia de Asesoría Individualizada',
        content: [
          `Los contenidos, artículos, guías, publicaciones de blog y descripciones de servicios publicados en este portal tienen un carácter estrictamente informativo, divulgativo y orientativo general.`,
          `Bajo ninguna circunstancia estos contenidos constituyen ni deben interpretarse como asesoría jurídica particularizada, opinión legal vinculante, consultoría técnica ni dictamen profesional aplicable a una situación fáctica concreta.`,
          `Cada caso inmobiliario presenta complejidades fácticas, registrales, notariales y procesales únicas, por lo que el usuario no debe tomar decisiones sobre su patrimonio basándose exclusivamente en el contenido general de este portal sin contar con el análisis personalizado de un abogado calificado.`,
        ],
      },
      {
        id: 'ausencia-garantia-resultados',
        title: '4. Ausencia de Promesa o Garantía de Resultados',
        content: [
          `El ejercicio del Derecho Inmobiliario, saneamiento físico-legal y litigios ante el Poder Judicial, Tribunal Registral, Municipalidades u organismos administrativos depende de valoraciones probatorias, marcos normativos y resoluciones de autoridades públicas.`,
          `Por tanto, ${legalConfig.commercialName} no garantiza ni promete resultados específicos, plazos inalterables ni resoluciones predeterminadas en ningún procedimiento legal o administrativo. La práctica de la firma se sustenta en el deber de diligencia, fundamentación jurídica sólida y máxima dedicación profesional.`,
        ],
      },
      {
        id: 'propiedad-intelectual',
        title: '5. Propiedad Intelectual e Industrial',
        content: [
          `Todos los contenidos de este portal web, incluyendo de manera enunciativa pero no limitativa: marcas comerciales, logotipos, nombres comerciales, textos, diseños, gráficos, fotografías, material multimedia, código fuente y estructura de navegación, son de exclusiva titularidad de ${legalConfig.legalName} o han sido debidamente autorizados para su uso.`,
          `Queda expresamente prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o explotación de cualquiera de estos elementos sin la autorización previa, expresa y por escrito de ${legalConfig.commercialName}.`,
        ],
      },
      {
        id: 'responsabilidad-enlaces',
        title: '6. Responsabilidad y Enlaces a Terceros',
        content: [
          `${legalConfig.commercialName} procura que la información del portal sea exacta, actual y esté libre de errores; no obstante, no asume responsabilidad por eventuales interrupciones temporales del servicio, caídas de red ajenas a su control o retrasos en la actualización de contenidos.`,
          `El sitio web puede contener enlaces hacia sitios web de terceros (como SUNARP, Poder Judicial, redes sociales o plataformas de mensajería). Serna Estate no ejerce control sobre dichos sitios externos y declina cualquier responsabilidad respecto a sus contenidos, disponibilidad o políticas de privacidad.`,
        ],
      },
      {
        id: 'legislacion-jurisdiccion',
        title: '7. Legislación Aplicable y Fuero',
        content: [
          `El presente Aviso Legal y toda controversia derivada del uso de este sitio web se rigen e interpretan con arreglo a las leyes de la República del Perú.`,
          `Cualquier discrepancia se someterá a la jurisdicción y competencia de los jueces y tribunales correspondientes de la República del Perú.`,
        ],
      },
    ],
  },

  terminos: {
    id: 'terminos',
    title: 'Términos y Condiciones de Uso del Sitio Web',
    shortTitle: 'Términos y Condiciones',
    metaDescription: 'Reglas y condiciones aplicables a la navegación, uso de formularios y contenidos en la web de Serna Estate.',
    lastUpdated: 'Agosto 2026 (Borrador de implementación)',
    version: '1.0',
    intro: `Bienvenido al sitio web de ${legalConfig.legalName} ("${legalConfig.commercialName}"). El acceso y uso de este portal web implican la aceptación plena, voluntaria y sin reservas de los presentes Términos y Condiciones de Uso. Si el usuario no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de navegar o enviar información a través del sitio.`,
    sections: [
      {
        id: 'objeto-terminos',
        title: '1. Objeto y Ámbito de Aplicación',
        content: [
          `Los presentes Términos y Condiciones regulan la utilización del portal web institucional de ${legalConfig.commercialName}, su contenido, funcionalidades de contacto y la relación orientativa entre los usuarios y la firma.`,
          `Este sitio web tiene fines exclusivamente informativos e institucionales; no constituye una plataforma de comercio electrónico, contratación en línea automática ni pasarela de pagos.`,
        ],
      },
      {
        id: 'condiciones-acceso',
        title: '2. Condiciones de Acceso y Uso Correcto del Portal',
        content: [
          `El usuario se compromete a hacer un uso lícito, diligente y de buena fe de este portal web, respetando la legislación peruana vigente, la moral, el orden público y las buenas costumbres.`,
          `Queda terminantemente prohibido:`,
          `• Utilizar el portal o sus formularios con fines ilícitos, fraudulentos, engañosos o lesivos a derechos de terceros.`,
          `• Introducir o difundir virus informáticos, malware o cualquier código dañino destinado a alterar o interrumpir los sistemas informáticos.`,
          `• Realizar actividades de extracción automatizada no autorizada de datos (web scraping, spiders, bots) con fines comerciales o de copia indiscriminada de contenidos.`,
          `• Suplantar la identidad de terceros o ingresar información falsa o distorsionada en los formularios de contacto.`,
        ],
      },
      {
        id: 'veracidad-datos',
        title: '3. Veracidad de la Información Suministrada por el Usuario',
        content: [
          `El usuario declara y garantiza que todos los datos consignados en el formulario de contacto son veraces, exactos, vigentes y le pertenecen de manera legítima.`,
          `El usuario es el único responsable por la exactitud de sus datos de contacto y responderá ante cualquier perjuicio que la inexactitud de dicha información pudiera generar a ${legalConfig.commercialName} o a terceros.`,
        ],
      },
      {
        id: 'consultas-formulario',
        title: '4. Dinámica del Formulario y Consultas Preliminares',
        content: [
          `El formulario de contacto es una herramienta de vinculación preliminar para conocer la inquietud inmobiliaria del usuario.`,
          `• El envío de un mensaje no genera automáticamente la aceptación del caso ni compromete a la firma a asumir el patrocinio legal.`,
          `• ${legalConfig.commercialName} se reserva el derecho de responder o declinar una solicitud de servicio tras su evaluación técnica y deontológica inicial.`,
          `• La formalización de un encargo legal requiere la aceptación mutua, definición de alcances, suscripción de contrato de servicios y cotización de honorarios específicos.`,
        ],
      },
      {
        id: 'propiedad-derechos',
        title: '5. Derechos de Autor y Propiedad Intelectual',
        content: [
          `Todos los derechos sobre la marca "Serna Estate", isotipos, eslóganes, artículos, estructura visual y código del sitio pertenecen a ${legalConfig.legalName}.`,
          `Se autoriza únicamente la visualización y descarga para uso estrictamente personal y no comercial. Cualquier otro uso requiere autorización escrita previa.`,
        ],
      },
      {
        id: 'disponibilidad-sitio',
        title: '6. Disponibilidad del Servicio y Exclusión de Responsabilidad',
        content: [
          `${legalConfig.commercialName} realiza sus mejores esfuerzos técnicos para que el sitio web se encuentre operativo las 24 horas del día. Sin embargo, no se garantiza la disponibilidad continua ni la ausencia de interrupciones ocasionadas por mantenimiento, causas de fuerza mayor o fallas ajenas en redes de telecomunicaciones.`,
          `En la máxima medida permitida por la ley peruana, ${legalConfig.commercialName} declina toda responsabilidad por daños y perjuicios derivados del mal uso del sitio por parte del usuario o de eventuales fallas en los canales de terceros como WhatsApp o proveedores de correo electrónico.`,
        ],
      },
      {
        id: 'proteccion-datos-terminos',
        title: '7. Protección de Datos Personales',
        content: [
          `Todo tratamiento de datos personales realizado con ocasión del uso de este sitio web se rige por lo dispuesto en nuestra Política de Privacidad, la cual forma parte integrante de las condiciones aplicables al usuario.`,
        ],
      },
      {
        id: 'modificaciones-terminos',
        title: '8. Modificación de los Términos y Condiciones',
        content: [
          `${legalConfig.commercialName} se reserva la facultad de modificar, actualizar o reformular estos Términos y Condiciones en cualquier momento. Los términos vigentes serán aquellos publicados en el portal al momento del acceso del usuario.`,
        ],
      },
      {
        id: 'ley-contacto-terminos',
        title: '9. Legislación Aplicable y Canal de Contacto',
        content: [
          `Los presentes Términos y Condiciones se rigen por las leyes de la República del Perú. Para cualquier duda, sugerencia o comunicación institucional, puede comunicarse a través del correo oficial: ${legalConfig.contactEmail}.`,
        ],
      },
    ],
  },
};
