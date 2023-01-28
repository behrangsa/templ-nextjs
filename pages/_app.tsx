import "../styles/globals.css";
import "prism-themes/themes/prism-ghcolors.min.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
