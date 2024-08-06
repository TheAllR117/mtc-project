// env.d.ts
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_URL: string
  readonly BASE_URL: string // Añade esta línea
  // Añade aquí otras variables de entorno según sea necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
