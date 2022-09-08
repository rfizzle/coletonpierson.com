import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="mt-0 sm:mt-6">
        <Component {...pageProps} />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default MyApp
