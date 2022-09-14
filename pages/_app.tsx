import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/Navigation";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <header className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Navigation />
        </header>
        <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-0 sm:mt-6">
          <Component {...pageProps} />
        </main>
        <footer>

        </footer>
    </>
  )
}

export default MyApp
