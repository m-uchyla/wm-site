import { Navbar, Main, Footer } from "@/components"
import { useRouter } from "next/router"
import { OfferSelection } from "@/components"
import { useState, useEffect } from "react";
import { pricing } from "@/constants"

export default function Home() {

    const plan = pricing.find(obj => {
      return obj.id === useRouter().query.plan
    })
    

  return (
    <>
      <OfferSelection plan={plan}/>
      <Footer />
    </>
  )
}
