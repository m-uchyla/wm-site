import { About, Contact, Hero, Pricing, How, Portfolio, Testimonials, Popup } from '../index'

export default function Main() {
    return (
      <>
        <Hero />
        {/* <Popup /> */}
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <About />
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <How />
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <Pricing />
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <Portfolio />
        <Testimonials />
        <Contact />
      </>
    )
  }