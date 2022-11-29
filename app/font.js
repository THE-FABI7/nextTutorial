import { Space_Grotesk as SpaceGrotesk} from "@next/font/google";
/* Importar la fuente de la API de fuentes de Google y configurar el peso y el subconjunto de la
fuente. */
 export const font = SpaceGrotesk({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-grotesk'
  });