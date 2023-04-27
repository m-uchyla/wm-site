import { About, Contact, Hero, Pricing, Button } from '../index'

export default function Main() {
    return (
      <>
        <Hero />
        <div className='w-[200px] p-10'>
        <Button text={"Click"} variation={1} />
        </div>
        <div className='w-[200px] p-10'>
        <Button text={"Click"} variation={2} />
        </div>
        <About />
        <Pricing />
        <Contact />
      </>
    )
  }