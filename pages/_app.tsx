// app.tsx

import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import Navbar from '@/components/Nav';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
