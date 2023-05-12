import { About, Contact, Hero, Pricing, How, Portfolio, Testimonials, CookiesAlert, BgLight } from '../index'

export default function Main() {
    return (
      <>
        <Hero />
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <About />
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <How />
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <Pricing />
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <Portfolio />
        {/* <Testimonials /> */}
        <Contact />
        
        <BgLight top={"top-[-1rem]"} left={"left-[1rem]"}/>
        <BgLight top={"top-[calc(120%-30rem)] opacity-60"} left={"left-[calc(20%+36rem)]"}/>
        {/* <BgLight top={"top-[5rem]"}/> */}
        <CookiesAlert/>
      </>
    )
  }