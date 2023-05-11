import { Footer } from "@/components"
import { useRouter } from "next/router"
import { OfferSelection } from "@/components"
import { pricing } from "@/constants"
import Head from 'next/head'

export default function Home() {

    const plan = pricing.find(obj => {
      return obj.id === useRouter().query.plan
    })
    

  return (
    <>
      <Head>
        <title>Wybór oferty | Web-Masters.pl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="nofollow" />
      </Head>
      <OfferSelection plan={plan}/>
      <Footer />
    </>
  )
}
