import { Button } from "../index"
import { HeroImg } from "../../assets/index"

export default function Hero() {

  function scrollToAbout(){
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact(){
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
  
    return (
      <section id="hero">
        <div className="flex md:justify-between md:text-left text-center flex-col md:flex-row flex-wrap content-center items-center gap-10 md:pt-20 pt-16">
          <div className="flex-1">
            <h1 className="text-[38px] sm:text-[55px] xl:text-[70px] font-bold leading-none">Pomożemy Ci być <span className="text-gradient">widocznym</span> w internecie</h1>
            <h2 className="text-secondaryText text-[15px] sm:text-[20px] my-5">Web-Masters zapewni twojej firmie profesjonalną stronę internetową wykonaną z użyciem najnowszych technologii.</h2>
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-baseline">
              <div onClick={()=> scrollToContact()} className="md:w-[230px] w-[250px]">
                <Button text={"Darmowa wycena"} variation={1} />
              </div>
              <div  onClick={()=> scrollToAbout()} className="md:w-[230px] w-[250px]">
                <Button text={"Więcej informacji"} variation={2} />
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-[60vw] sm:max-w-[40vw] md:max-w-[50vw] block sm:hidden lg:block">
          <img 
            className="float-right w-[600px]"
            src={'/assets/hero.webp'}
            alt="Komputer"
          />
          </div>
        </div>
      </section>
    )
  }