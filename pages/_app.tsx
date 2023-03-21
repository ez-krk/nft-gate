import '@/styles/globals.css'
import { ContextProvider } from "../contexts/ContextProvider";
import type { AppProps } from 'next/app'


require("@solana/wallet-adapter-react-ui/styles.css");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
