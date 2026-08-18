/**
 * Centralized Content & Configuration for Serna Estate Firma Legal Inmobiliaria S.A.C.
 */

// Helper to format Cloudinary URLs with dynamic widths
export function getCloudinaryUrl(baseUrl: string, width?: number): string {
  if (!width) return baseUrl;
  // Insert w_xxx into Cloudinary transformation string
  return baseUrl.replace('/f_auto,q_auto/', `/f_auto,q_auto,w_${width}/`);
}

export function getCloudinarySrcSet(baseUrl: string, widths: number[] = [480, 768, 1200, 1600]): string {
  return widths.map(w => `${getCloudinaryUrl(baseUrl, w)} ${w}w`).join(', ');
}

export const siteContent = {
  brand: {
    name: "Serna Estate Firma Legal Inmobiliaria S.A.C.",
    shortName: "Serna Estate",
    tagline: "Firma legal especializada en Derecho Inmobiliario",
    founder: "Karla Serna",
    founderRole: "Abogada Inmobiliaria, Fundadora y Gerente General",
    promise: "Protegemos el patrimonio inmobiliario con estrategia y seguridad jurídica.",
    headline: "Protegemos el patrimonio inmobiliario con estrategia y seguridad jurídica.",
    supportText: "Asesoría especializada para personas, familias, juntas de propietarios, empresas, constructoras, desarrolladores e inversionistas en todo el Perú.",
  },

  images: {
    logoMain: {
      url: "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1787062347/SernaEstate_LogoHorizontal_bbidtv.png",
      alt: "Serna Estate Firma Legal Inmobiliaria S.A.C.",
    },
    logoSquare: {
      url: "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1785975788/TransparenteLogoSquare_ezfguz.png",
      alt: "Serna Estate Isotipo Inmobiliario",
    },
    logoAlt: {
      url: "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1785890051/SernaEstate_LogoPrincipal_BackgrountTransparente_p4jxym.png",
      alt: "Serna Estate Logo",
    },
    heroPhoto: {
      url: "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1785890052/Foto_Karla_3_msvvzj.png",
      alt: "Karla Serna, abogada inmobiliaria y fundadora de Serna Estate.",
    },
    heroBg: {
      url: "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1785978860/hf_20260806_010640_d5ff2b05-e66a-4748-ad27-6751aa41d23a_dhzowd.png",
      alt: "Serna Estate Fondo Institucional",
    },
    profilePhoto: {
      url: "https://res.cloudinary.com/rcjz4y4d/image/upload/f_auto,q_auto/v1785890065/Foto_Karla_4_vqnfho.png",
      alt: "Karla Serna, fundadora y gerente general de Serna Estate.",
    },
  },

  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Por Qué Elegirnos", href: "#por-que-elegirnos" },
    { label: "Quiénes Somos", href: "#la-firma" },
    { label: "Servicios", href: "#servicios" },
    { label: "Casos de Éxito", href: "#casos" },
    { label: "Blog", href: "#blog" },
    { label: "Nuestro Equipo", href: "#nuestro-equipo" },
    { label: "Preguntas", href: "#preguntas-frecuentes" },
  ],

  trustPillars: [
    {
      title: "Especialización Inmobiliaria",
      description: "Dominio exclusivo en Derecho Inmobiliario, registral y regulatorio peruano.",
      iconName: "ShieldCheck",
    },
    {
      title: "Estrategia Preventiva",
      description: "Identificación y mitigación proactiva de riesgos antes de ejecutar contratos.",
      iconName: "Compass",
    },
    {
      title: "Acompañamiento Personalizado",
      description: "Atención directa, transparente y cercana en cada etapa del procedimiento.",
      iconName: "UserCheck",
    },
    {
      title: "Atención a Nivel Nacional",
      description: "Servicio ágil y moderno adaptado a clientes e inversiones en todo el Perú.",
      iconName: "MapPin",
    },
  ],

  whyUs: {
    title: "¿Por qué elegir Serna Estate?",
    subtitle: "Tres pilares de seguridad y tranquilidad para tu inversión inmobiliaria",
    reasons: [
      {
        title: "Especialización exclusiva en Derecho Inmobiliario",
        description: "Dominio absoluto de la normativa registral, civil, notarial y urbanística peruana aplicada sin distracciones.",
      },
      {
        title: "Estrategias preventivas para reducir riesgos legales",
        description: "Identificación temprana de cargas, contingencias y vicios ocultos antes de comprometer tu capital.",
      },
      {
        title: "Atención personalizada y acompañamiento permanente",
        description: "Asesoría directa y cercana en cada fase del proceso, con comunicación transparente y compromiso total.",
      },
    ],
  },

  firm: {
    title: "Quiénes Somos",
    subtitle: "Serna Estate Firma Legal Inmobiliaria S.A.C.",
    intro: "En Serna Estate Firma Legal Inmobiliaria ejercemos el Derecho Inmobiliario con una visión estratégica, un sólido rigor jurídico y el compromiso de brindar soluciones que aporten valor a cada uno de nuestros clientes.",
    history: [
      "Serna Estate Firma Legal Inmobiliaria S.A.C. nace de una convicción: el patrimonio de una persona representa años de esfuerzo, sacrificio y sueños, por lo que merece ser protegido con excelencia jurídica y una visión estratégica. Pues cada inmueble representa mucho más que un bien material, representa patrimonio, seguridad, inversión, legado y el resultado del esfuerzo de toda una vida.",
      "Después de años de experiencia en Derecho Inmobiliario, Derecho Civil y Derecho Procesal Civil, su fundadora, Karla Serna, identificó que muchas personas, familias, empresas e inversionistas enfrentaban problemas legales que podían evitarse mediante una asesoría especializada, preventiva y orientada a soluciones.",
      "Con esa visión decidió crear Serna Estate Firma Legal Inmobiliaria S.A.C. con el propósito de brindar una asesoría jurídica altamente especializada en Derecho Inmobiliario, integrando conocimientos jurídicos, registrales, notariales y judiciales para brindar un servicio integral durante todo el ciclo de vida de un inmueble: desde su adquisición y saneamiento hasta la defensa judicial del derecho de propiedad ofreciendo soluciones estratégicas que protejan los intereses de nuestros clientes en cada etapa de sus proyectos inmobiliarios.",
      "Serna Estate nace con el propósito de convertirse en un aliado estratégico para quienes buscan proteger, invertir y desarrollar su patrimonio inmobiliario, ofreciendo un acompañamiento basado en la confianza, la transparencia, la excelencia profesional, la atención personalizada, el compromiso con cada cliente y una visión preventiva orientada a reducir riesgos y generar seguridad jurídica.",
      "Hoy, la firma proyecta una atención moderna, cercana y especializada, apoyándose en herramientas digitales para llegar a clientes de todo el Perú, manteniendo siempre el mismo estándar de calidad y dedicación que caracteriza cada uno de sus servicios.",
      "Más que resolver conflictos, buscamos construir relaciones de confianza duraderas, acompañando a personas, familias, empresas, constructoras, desarrolladores e inversionistas en las decisiones que impactan su patrimonio.",
      "Nuestra práctica profesional se fundamenta en el compromiso, la ética y la búsqueda permanente de soluciones eficientes, convirtiéndonos en un aliado estratégico para quienes desean invertir, proteger y desarrollar su patrimonio inmobiliario con seguridad y confianza."
    ],
    mission: "Brindar asesoría y representación legal especializada en Derecho Inmobiliario mediante soluciones estratégicas, preventivas y eficientes que protejan el patrimonio de nuestros clientes, generando seguridad jurídica y acompañándolos con un servicio basado en la excelencia, la ética y la confianza.",
    vision: "Consolidarnos como una de las firmas legales inmobiliarias de mayor prestigio en el Perú, reconocida por su especialización, excelencia profesional e innovación, siendo el aliado estratégico de personas, familias, empresas, constructoras, desarrolladores e inversionistas que buscan desarrollar y proteger su patrimonio con seguridad jurídica.",
    values: [
      {
        name: "Excelencia",
        description: "Trabajamos con los más altos estándares profesionales, cuidando cada detalle para ofrecer un servicio jurídico de calidad superior."
      },
      {
        name: "Integridad",
        description: "Actuamos con honestidad, transparencia y respeto por los principios éticos que rigen el ejercicio de la abogacía, priorizando siempre el interés legítimo de nuestros clientes."
      },
      {
        name: "Compromiso",
        description: "Asumimos cada asunto con responsabilidad y dedicación, ofreciendo un acompañamiento cercano durante todo el proceso."
      },
      {
        name: "Especialización",
        description: "Nuestra práctica se encuentra enfocada en el Derecho Inmobiliario, lo que nos permite brindar soluciones técnicas, estratégicas y actualizadas, manteniéndonos en constante actualización."
      },
      {
        name: "Confianza",
        description: "Construimos relaciones sólidas basadas en una comunicación clara, confidencial, de respeto y en cumplimiento de nuestros compromisos."
      },
      {
        name: "Innovación",
        description: "Incorporamos herramientas tecnológicas y procesos eficientes que optimizan la experiencia de nuestros clientes para brindar una experiencia jurídica ágil, cercana y fortalecer la prestación de nuestros servicios."
      },
      {
        name: "Orientación a soluciones",
        description: "Diseñamos estrategias legales en alcanzar soluciones efectivas, que protejan los intereses y objetivos de nuestros clientes."
      },
      {
        name: "Responsabilidad",
        description: "Somos conscientes de la importancia de las decisiones que afectan el patrimonio de nuestros clientes y actuamos con diligencia, profesionalismo y rigor jurídico."
      }
    ],
  },

  services: [
    {
      id: "litigios",
      title: "1. Litigios Inmobiliarios",
      summary: "Representamos y defendemos los intereses de nuestros clientes en procesos judiciales relacionados con bienes inmuebles, diseñando estrategias legales orientadas a la protección de sus derechos.",
      items: [
        "Prescripción adquisitiva de dominio.",
        "Reivindicación.",
        "Mejor derecho de propiedad.",
        "Desalojo.",
        "División y partición.",
        "Nulidad de acto jurídico.",
        "Otorgamiento de escritura pública.",
        "Ejecución de garantías hipotecarias.",
        "Interdictos.",
        "Otros procesos relacionados."
      ],
      badge: "Defensa Judicial",
    },
    {
      id: "compraventa",
      title: "2. Asesoría en Compraventa de Inmuebles",
      summary: "Brindamos asesoría integral durante todo el proceso de adquisición o transferencia de bienes inmuebles, verificando la seguridad jurídica de cada operación.",
      items: [
        "Terrenos.",
        "Lotes.",
        "Departamentos.",
        "Bienes futuros.",
        "Estacionamientos.",
        "Depósitos.",
        "Locales comerciales.",
        "Oficinas.",
        "Predios rurales y urbanos."
      ],
      badge: "Adquisiciones & Ventas",
    },
    {
      id: "saneamiento",
      title: "3. Saneamiento Físico-Legal y Gestión Registral",
      summary: "Realizamos procedimientos notariales y registrales orientados a regularizar, actualizar y proteger la situación jurídica de los inmuebles.",
      items: [
        "Independización.",
        "Acumulación.",
        "Subdivisión.",
        "Declaratoria de fábrica.",
        "Ampliación de fábrica.",
        "Regularización de edificaciones.",
        "Rectificación de áreas, linderos y medidas perimétricas.",
        "Levantamiento de hipotecas.",
        "Levantamiento de cargas y gravámenes.",
        "Prescripción adquisitiva notarial.",
        "División y partición.",
        "Inscripción de actos registrales."
      ],
      badge: "Saneamiento Registral",
    },
    {
      id: "propiedad-horizontal",
      title: "4. Propiedad Horizontal y Juntas de Propietarios",
      summary: "Asesoramos a edificios, condominios y juntas de propietarios en la gestión jurídica de la propiedad horizontal.",
      items: [
        "Constitución y organización de juntas de propietarios.",
        "Adecuación y modificación del reglamento interno.",
        "Desafectación de áreas comunes.",
        "Elección y renovación de juntas directivas.",
        "Elaboración de reglamentos y normas de convivencia.",
        "Asesoría en conflictos entre propietarios.",
        "Cumplimiento del régimen de propiedad exclusiva y propiedad común."
      ],
      badge: "Juntas & Condominios",
    },
    {
      id: "proyectos",
      title: "5. Proyectos Inmobiliarios",
      summary: "Acompañamos jurídicamente a inmobiliarias, constructoras y desarrolladores durante todas las etapas de sus proyectos.",
      items: [
        "Habilitaciones urbanas.",
        "Lotizaciones.",
        "Independizaciones masivas.",
        "Desarrollo de proyectos inmobiliarios.",
        "Posventa inmobiliaria.",
        "Due Diligence inmobiliario.",
        "Estructuración legal de proyectos.",
        "Asesoría para inversionistas.",
        "Flipping inmobiliario.",
        "Remates judiciales."
      ],
      badge: "Desarrollo Inmobiliario",
    },
    {
      id: "contratos",
      title: "6. Contratos Inmobiliarios",
      summary: "Elaboramos, revisamos y negociamos contratos que garanticen seguridad jurídica y reduzcan riesgos para las partes involucradas.",
      items: [
        "Compraventa de inmuebles.",
        "Compraventa de bien futuro.",
        "Promesa de compraventa.",
        "Donación.",
        "Permuta.",
        "Arrendamiento.",
        "Cesión de derechos.",
        "Mutuo con garantía hipotecaria.",
        "Constitución y levantamiento de hipotecas.",
        "Contratos de opción de compra.",
        "Otros contratos vinculados con bienes inmuebles."
      ],
      badge: "Estructuración Contractual",
    },
    {
      id: "due-diligence",
      title: "7. Due Diligence Inmobiliario",
      summary: "Realizamos un análisis jurídico integral de inmuebles y proyectos inmobiliarios para identificar riesgos, contingencias y oportunidades antes de una adquisición, inversión o financiamiento, brindando a nuestros clientes la información necesaria para tomar decisiones seguras.",
      items: [
        "Estudio de títulos y antecedentes registrales.",
        "Revisión de la situación legal del inmueble.",
        "Verificación de cargas, gravámenes y restricciones.",
        "Identificación de contingencias legales y registrales.",
        "Revisión de documentación municipal y administrativa.",
        "Elaboración de informes de riesgos legales.",
        "Acompañamiento en procesos de adquisición e inversión inmobiliaria."
      ],
      badge: "Auditoría de Riesgos",
    },
    {
      id: "inversionistas",
      title: "8. Asesoría a Inversionistas",
      summary: "Brindamos asesoría legal estratégica a inversionistas nacionales y extranjeros que buscan adquirir, desarrollar, administrar o rentabilizar bienes inmuebles, ofreciendo soluciones orientadas a minimizar riesgos y maximizar la seguridad jurídica de cada inversión.",
      items: [
        "Evaluación legal de oportunidades de inversión inmobiliaria.",
        "Estructuración jurídica de operaciones inmobiliarias.",
        "Asesoría en la adquisición de inmuebles para inversión.",
        "Acompañamiento en procesos de compraventa y negociación.",
        "Asesoría legal en remates judiciales.",
        "Asesoría legal en estrategias de flipping inmobiliario.",
        "Revisión legal de proyectos inmobiliarios.",
        "Due Diligence para inversionistas.",
        "Asesoría en la administración y protección del patrimonio inmobiliario."
      ],
      badge: "Capital & Patrimonio",
    },
  ],

  servicesNote: "El alcance y estrategia de cada servicio se ajusta minuciosamente tras la revisión directa de los hechos y la documentación de cada caso.",

  workProcess: {
    title: "Proceso de trabajo",
    subtitle: "Metodología clara y ordenada para encarar tu asunto inmobiliario",
    steps: [
      {
        step: "01",
        title: "Cuéntanos tu situación",
        description: "La persona comparte el contexto inicial, la consulta o el tipo de inmueble y trámite que requiere atención.",
      },
      {
        step: "02",
        title: "Revisamos el caso y la documentación",
        description: "La firma realiza un análisis inicial e identifica la documentación legal, registral o técnica indispensable.",
      },
      {
        step: "03",
        title: "Definimos la ruta legal",
        description: "Se explican con absoluta claridad el alcance, la estrategia sugerida, los pasos a seguir y las alternativas disponibles.",
      },
      {
        step: "04",
        title: "Acompañamos la ejecución",
        description: "La firma ejecuta las acciones acordadas, realiza seguimiento continuo y mantiene comunicación transparente.",
      },
    ],
    note: "Cada asunto legal requiere una evaluación individualizada. No ofrecemos plazos ni resultados universales, sino rigor técnico y estrategia profesional.",
  },

  representativeCases: [
    {
      id: "junta-edificio-30-pisos",
      tag: "Junta de propietarios",
      title: "Formalización e inscripción registral de Junta de Propietarios en torre residencial de alta densidad",
      situation: "Edificio de más de 30 pisos y más de 100 propietarios que necesitaba elegir e inscribir formalmente a su junta directiva ante la SUNARP.",
      intervention: "Asesoría clara sobre requisitos y beneficios de formalizar la directiva, conduciendo el proceso de convocatoria y votación considerando posiciones y pareceres distintos entre propietarios.",
      result: "Elección e inscripción satisfactoria en Registros Públicos. La formalización permitió gestionar legalmente el alquiler de espacios comunes, generando ingresos mensuales en beneficio de la comunidad.",
    },
    {
      id: "venta-copropiedad-familiar",
      tag: "Copropiedad y Negociación",
      title: "Estructuración de venta en copropiedad familiar con múltiples titulares",
      situation: "Más de 10 copropietarios de una propiedad familiar no lograban acordar el precio y las condiciones de transferencia, mientras la parte compradora perdía interés por la demora.",
      intervention: "Organización de cuatro reuniones de negociación, facilitación de acuerdos, explicación didáctica de términos y redacción de un contrato consensuado que atendía las preocupaciones patrimoniales de cada rama familiar.",
      result: "La venta se concluyó satisfactoriamente en menos de dos semanas, según la información proporcionada por la firma.",
    },
    {
      id: "acumulacion-independizacion-empresa",
      tag: "Saneamiento Empresarial",
      title: "Acumulación e independización técnica-legal para reorganización patrimonial de uso corporativo",
      situation: "Una pareja de empresarios necesitaba reorganizar legalmente dos inmuebles colindantes según su uso efectivo familiar y comercial.",
      intervention: "Revisión integral de títulos de propiedad, estructura física y expedientes técnicos; ejecución de la acumulación de predios y posterior independización del área administrativa.",
      result: "Transferencia limpia de la titularidad del área administrativa a favor de la empresa, cumpliendo con precisión el objetivo patrimonial planteado.",
    },
  ],

  casesDisclaimer: "Cada caso depende de sus hechos particulares, documentos y del marco jurídico aplicable. Los resultados de intervenciones anteriores no garantizan resultados futuros idénticos.",

  karlaProfile: {
    name: "Karla Serna",
    title: "Abogada Inmobiliaria",
    roles: "Fundadora y Gerente General de Serna Estate",
    bio: "Karla Serna es fundadora y gerente general de Serna Estate Firma Legal Inmobiliaria S.A.C., empresaria y abogada especializada en Derecho Inmobiliario, Derecho Civil y Derecho Procesal Civil. Asesora operaciones inmobiliarias y procesos de saneamiento de predios, acompañando a personas, familias, juntas de propietarios y empresas en la protección de su patrimonio.",
  },

  blog: {
    badge: "Blog & Criterios Legales",
    title: "Blog Jurídico Inmobiliario",
    subtitle: "Artículos especializados, guías preventivas y análisis normativo para proteger tu inversión y patrimonio en el Perú.",
    articles: [
      {
        id: "revisar-antes-comprar-terreno",
        title: "¿Qué revisar antes de comprar un terreno?",
        category: "Due Diligence & Terrenos",
        readTime: "5 min de lectura",
        summary: "Guía paso a paso sobre verificaciones registrales, zonificación, linderos y cargas tributarias para garantizar una compra segura.",
        content: `
1. Estudio de Títulos en la SUNARP (Copia Literal)
Antes de entregar cualquier monto de dinero o firmar una minuta, es indispensable solicitar una Copia Literal o Certificado de Litigio y Gravamen (CRI) actualizada de la partida registral del terreno. Debes verificar que quien vende figure como propietario único o que todos los copropietarios o cónyuges hayan firmado; comprobar la ausencia de hipotecas, embargos, anotaciones de demanda o usufructos vigentes; y verificar la continuidad de las transferencias anteriores.

2. Situación Físico-Real vs. Situación Registral
Existe una diferencia frecuente entre los documentos y el terreno en campo. Es crucial realizar un levantamiento topográfico o verificación técnica para comprobar que los metros cuadrados reales coincidan con la partida de Sunarp, además de hacer una inspección ocular presencial para descartar posesionarios clandestinos o conflictos de colindantes.

3. Certificado de Parámetros Urbanísticos y Zonificación
No todos los terrenos permiten construir cualquier tipo de edificación. Revisa en la municipalidad el uso de suelo permitido (residencial, comercial, industrial, agrícola) y verifica si el predio se encuentra en zona de riesgo no mitigable, franja marginal o área de reserva arqueológica.

4. Situación Tributaria Municipal (HR y PU)
Exige la Constancia de No Adeudo de Arbitrios e Impuesto Predial del ejercicio fiscal en curso, así como la Hoja de Resumen (HR) y Predio Urbano (PU) a nombre del vendedor antes de proceder a la firma notarial.
        `,
      },
      {
        id: "que-es-la-doble-venta",
        title: "¿Qué es la doble venta y cómo protegerse?",
        category: "Derecho Civil Inmobiliario",
        readTime: "6 min de lectura",
        summary: "Análisis del artículo 1135 del Código Civil peruano, la prioridad registral y los criterios jurisprudenciales sobre la buena fe.",
        content: `
El Fenómeno de la Doble Venta en el Perú
La doble venta o concurrencia de acreedores ocurre cuando un mismo propietario transfiere el mismo bien inmueble a dos o más compradores distintos mediante contratos separados.

¿Qué establece el Artículo 1135 del Código Civil?
Cuando varias personas reclaman la propiedad de un mismo inmueble transferido por el mismo vendedor, la ley establece un orden de prelación muy claro:

1. Inscripción Registral y Buena Fe: Prevalece el comprador que de buena fe inscribió primero su título en los Registros Públicos (SUNARP).
2. Documento de Fecha Cierta: Si ninguno inscribió, prevalece el comprador cuyo título conste en documento de fecha cierta más antiguo (por ejemplo, Minuta o Escritura Pública ante Notario).
3. Título más Antiguo: En su defecto, se prefiere al comprador cuyo título sea de fecha anterior.

El Requisito Indispensable: La Buena Fe Registral
La inscripción por sí sola no protege si el comprador tenía conocimiento de la venta anterior. Para acreditar la buena fe, el adquirente debe haber realizado una verificación previa integral con estudio de títulos, inspección del inmueble y constatación de la posesión real.
        `,
      },
      {
        id: "evitar-estafa-inmobiliaria",
        title: "¿Cómo evitar una estafa inmobiliaria?",
        category: "Prevención & Seguridad",
        readTime: "7 min de lectura",
        summary: "Alertas tempranas, suplantación de identidad, poderes falsos y protocolos notariales de validación.",
        content: `
Modalidades Más Frecuentes de Fraude Inmobiliario
Las estafas en el sector inmobiliario han evolucionado hacia esquemas altamente sofisticados. Las modalidades más comunes incluyen la suplantación de identidad con DNI falsificados, el uso de poderes falsificados otorgados en notarías distantes, y la venta de bienes futuros sin terreno propio ni habilitación urbana.

Protocolo de Seguridad en 5 Pasos
1. Verificación Biométrica y Notarial: Validar la identidad de los firmantes mediante lector biométrico conectado a RENIEC.
2. Verificación de Poderes en SUNARP: Confirmar la vigencia del poder y solicitar la comprobación directa en la notaría de origen donde se otorgó.
3. Bancarización Obligatoria: Realizar los pagos mediante Cheque de Gerencia o Transferencia Bancaria Directa a nombre del titular registral.
4. Inspección Física e Historial de Servicios: Constatar quién habita el inmueble y verificar recibos de luz y agua.
5. Asesoría de una Firma Especializada: Contar con un abogado inmobiliario independiente que no tenga vínculos con intermediarios.
        `,
      },
      {
        id: "errores-frecuentes-comprar-inmueble",
        title: "Errores frecuentes al comprar un inmueble",
        category: "Guía Práctica",
        readTime: "5 min de lectura",
        summary: "Las equivocaciones más costosas durante la separación, minuta, minuta de bien futuro y firmas de escritura.",
        content: `
1. Entregar arras o cuotas de separación sin Due Diligence previo
Muchas personas firman contratos de separación con penalidades severas sin haber analizado primero la partida registral ni el estado legal de la propiedad.

2. Confiar únicamente en la palabra de la inmobiliaria o corredor
Los corredores buscan cerrar la venta; su rol no es auditar legalmente el inmueble. La verificación de títulos debe ser realizada por un especialista independiente.

3. Ignorar el Reglamento Interno y la Junta de Propietarios
En departamentos o condominios, no revisar si el edificio tiene junta registrada o si existen deudas de mantenimiento del vendedor.

4. Modificar o edificar sin Declaratoria de Fábrica
Comprar casas o aires con pisos construidos sin licencia ni inscripción registral genera problemas de financiamiento bancario posterior.

5. No pactar cláusulas de resolución clara por falta de financiamiento
Si el crédito hipotecario es rechazado por el banco y el contrato de compraventa no contempla una cláusula de contingencia, podrías perder las arras entregadas.
        `,
      },
    ],
  },

  upcomingContent: {
    badge: "Blog & Criterios Legales",
    title: "Artículos y Guías Prácticas de Derecho Inmobiliario",
    subtitle: "Recursos informativos y criterios legales para la toma de decisiones informadas sobre patrimonio inmobiliario.",
    topics: [
      {
        title: "¿Qué revisar antes de comprar un terreno?",
        description: "Verificaciones esenciales en Sunarp, municipalidades y zonificación para evitar sorpresas.",
      },
      {
        title: "¿Qué es la doble venta de un inmueble?",
        description: "Análisis del artículo 1135 del Código Civil peruano y cómo proteger tu prioridad registral.",
      },
      {
        title: "¿Cómo evitar una estafa inmobiliaria?",
        description: "Alertas tempranas, suplantación de identidad y protocolos de validación en notarías.",
      },
      {
        title: "Errores frecuentes al comprar un inmueble",
        description: "Las equivocaciones más costosas durante la separación, minuta y firma de escritura pública.",
      },
    ],
  },

  contact: {
    title: "Contacta con nosotros",
    subtitle: "Cuéntanos brevemente tu necesidad legal. Nuestro equipo se pondrá en contacto contigo para orientarte sobre la mejor alternativa.",
    email: "sernaestate@gmail.com",
    whatsappDisplay: "+51 913 511 439",
    whatsappRaw: "51913511439",
    ctaEmailButton: "Escríbenos por correo",
    ctaWhatsappButton: "Escríbenos por WhatsApp",
    emailSubject: "Consulta Legal Inmobiliaria - Serna Estate",
    socials: {
      linkedin: { name: "LinkedIn", handle: "Karla Serna", url: "https://www.linkedin.com/in/karlasernaabogada/" },
      instagram: { name: "Instagram", handle: "@karlasernaabogada", url: "https://www.instagram.com/karlasernaabogada/" },
      tiktok: { name: "TikTok", handle: "@karlasernaabogada", url: "https://www.tiktok.com/@karlasernaabogada" },
    },
    queryTypes: [
      "Compraventa de inmueble.",
      "Saneamiento físico legal.",
      "Problemas de propiedad.",
      "Junta de propietarios.",
      "Proyecto inmobiliario.",
      "Contratos inmobiliarios.",
      "Inversión inmobiliaria.",
      "Proceso judicial.",
      "Otro.",
    ],
    messagePlaceholder: "Deseo comprar un terreno y necesito verificar si los documentos están correctos.",
    privacyPolicyConsent: "He leído y acepto la política de privacidad.",
    notes: [
      "La recepción de un correo o mensaje no constituye por sí misma una relación abogado-cliente ni la aceptación automática del patrocinio.",
      "Toda la información compartida es tratada con estricta confidencialidad profesional.",
    ],
    // Central expansion configuration for future integrations
    futureIntegrations: {
      whatsappNumber: "+51 913 511 439",
      phone: "+51 913 511 439",
      address: "Lima, Perú — Cobertura a Nivel Nacional",
      socialLinks: {
        linkedin: "Karla Serna",
        instagram: "Karla Serna",
        tiktok: "Karla Serna",
      },
      formProviderUrl: null,
    },
  },

  footer: {
    description: "Firma legal especializada en Derecho Inmobiliario. Asesoría estratégica para proteger, regularizar, adquirir y defender tu patrimonio en el Perú.",
    copyright: `© ${new Date().getFullYear()} Serna Estate. Todos los derechos reservados.`,
    legalPlaceholdersNote: "Información legal institucional. Los términos definitivos, política de privacidad y aviso legal se publicarán tras su validación oficial.",
  },
};
