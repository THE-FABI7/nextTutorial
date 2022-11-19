import "../styles/globals.css";
import { Navigation } from "./components/Navigation.jsx";
import {font} from './font.js'


/**
 * Devuelve un elemento html con un elemento de cabeza, un elemento de título, un elemento de cuerpo,
 * un componente de navegación y el elemento secundario.
 * @returns Un componente React.
 */
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>FabiApp</title>
      </head>
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
