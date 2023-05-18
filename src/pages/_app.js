import '@/styles/globals.css'
import ReactGA from 'react-ga4';

export default function App({ Component, pageProps }) {
  ReactGA.initialize("G-0R0SY0R690");
  return <Component {...pageProps} />
}
