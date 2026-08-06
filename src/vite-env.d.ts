/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_W3FORMS_ACCESS_KEY?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
