import { Button } from "../index"
import { HeroImg } from "../../assets/index"
import Image from "next/image"

export default function Hero() {
    return (
      <section id="hero">
        <div className="flex justify-between items-center gap-10 pt-20">
          <div className="flex-1">
            <h1 className="text-[70px] font-bold leading-none">Pomożemy Ci być <span className="text-gradient">widocznym</span> w internecie</h1>
            <h2 className="text-secondaryText text-[20px] my-5">Web-Masters zapewni twojej firmie profesjonalną stronę internetową wykonaną z użyciem najnowszych technologii.</h2>
            <div className="flex gap-4">
              <div className="w-[230px]">
                <Button text={"Darmowa wycena"} variation={1} />
              </div>
              <div className="w-[230px]">
                <Button text={"Więcej informacji"} variation={2} />
              </div>
            </div>
          </div>
          <div className="flex-1">
          <Image 
            className="float-right"
            src={HeroImg}
            alt="Komputer"
            quality={100}
            width={600}
          />
          </div>
        </div>
      </section>
    )
  }