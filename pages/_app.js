// Import
import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Export Root
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
