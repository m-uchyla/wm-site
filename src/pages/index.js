import { Navbar, Main, Footer } from "@/components"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nowoczesne strony internetowe dla małych i średnich firm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Nowoczesne strony internetowe dla biznesu | Web-Masters.pl" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Najlepsza wizytówka Twojej firmy to nowoczesna, responsywna i zoptymalizowana strona internetowa. Nasz zespół zaprojektuje ją dla Ciebie!" />
        <meta property="og:url" content="https://web-masters.pl" />
        <meta property="og:image" content="https://web-masters.pl/cover.png" />

        <meta name="twitter:title" content="Nowoczesne strony internetowe dla małych i średnich firm" />
        <meta name="twitter:description" content="Najlepsza wizytówka Twojej firmy to nowoczesna, responsywna i zoptymalizowana strona internetowa. Nasz zespół zaprojektuje ją dla Ciebie!" />
        <meta name="twitter:image" content="https://web-masters.pl/cover.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://web-masters.pl" />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
