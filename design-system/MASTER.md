# Design System: Serna Estate Firma Legal Inmobiliaria S.A.C.

## 1. Concepto Visual
**Expediente Patrimonial Contemporáneo**: Una estética sobria, refinada e institucional inspirada en la precisión de los linderos registrales y planos catastrales. Diseñada para transmitir la máxima seguridad jurídica, estrategia, sobriedad y cercanía humana.

## 2. Paleta de Color
- **Verde Esmeralda Oscuro (`#014937`)**: Color de marca principal para estructuras profundas, fondos institucionales y textos principales.
- **Verde Esmeralda (`#146A55`)**: Color secundario para botones de acento, estados hover y divisores estructurales.
- **Dorado Brilante (`#E0BB5D`)**: Trazos finos, detalles decorativos, líneas de lindero en SVG e iconos destacados.
- **Dorado Profundo (`#AE7E25`)**: Etiquetas documentales, subtítulos pequeños y textos de énfasis secundario.
- **Blanco Puro (`#FFFFFF`)**: Superficie principal y tarjetas sobre fondo neutro.
- **Gris Mantenido / Off-white (`#F8FAF9`)**: Superficie de secciones alternas para generar ritmo de lectura.
- **Texto Oscuro / Antracita (`#14201C`)**: Color de cuerpo de texto con contraste optimizado (cumple WCAG 2.2 AA superior a 7:1).

## 3. Tipografía
- **Titulares & Navegación**: `Montserrat` (Pesos: 400, 500, 600, 700). Transmite solidez institucional y claridad sintáctica.
- **Párrafos & Cuerpo**: `Lato` (Pesos: 300, 400, 700). Diseñada para máxima legibilidad en párrafos explicativos y textos legales.

## 4. Fotografía e Imágenes
- **Fotografía Principal (Hero)**: `Foto_Karla_3_msvvzj.png` - Fotografía vertical de alta resolución. `object-position: top center` o `center` según viewport para mantener siempre el rostro visible.
- **Fotografía Perfil (Karla Serna)**: `Foto_Karla_4_vqnfho.png` - Fotografía en la sección institucional de Karla Serna.
- **Optimizaciones Cloudinary**: Carga adaptativa mediante variantes responsive (`f_auto,q_auto,w_480`, `w_768`, `w_1200`, `w_1600`).
- **Lazy Loading**: `loading="eager"` exclusivamente para la foto Hero; `loading="lazy"` para el resto.

## 5. Elemento Firma Decorativo
- Lineas de Lindero / Plano Registral en SVG con trazos finos dorados (`#E0BB5D`).
- Totalmente accesibles (`aria-hidden="true"`) y compatibles con `prefers-reduced-motion`.

## 6. Breakpoints Responsive
- `sm` (640px): Ajuste de tipografía móvil, apilado de CTAs.
- `md` (768px): Reorganización de grillas a 2 columnas.
- `lg` (1024px): Menú horizontal completo, composiciones de 2 columnas (Hero y Karla).
- `xl` (1280px): Contenedor máximo `max-w-7xl` centrado con padding respirable.

## 7. Accesibilidad & Performance
- Cumplimiento WCAG 2.2 AA.
- Altura táctil de botones e interactivos ≥ 44x44px.
- Indicador de foco visible (`outline: 2px solid #E0BB5D`).
- Anclaje accesible con compensación para header pegajoso (`scroll-margin-top: 5rem`).
- Menú móvil con trampas de foco, cierre mediante la tecla `Escape` y atributo `aria-expanded`.
