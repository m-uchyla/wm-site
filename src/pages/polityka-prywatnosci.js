import { Navbar, PrivacyPolicy, Footer } from "@/components"
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Polityka prywatności | Web-Masters.pl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="nofollow" />
      </Head>
      <PrivacyPolicy />
      <Footer />
    </>
  )
}