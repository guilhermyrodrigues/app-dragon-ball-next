import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema principal
import 'primereact/resources/primereact.min.css';         // Estilos principais do PrimeReact
import 'primeicons/primeicons.css';                       // Ícones do PrimeReact
                       // ícones

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
