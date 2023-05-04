import { about } from "@/constants";
import { SectionHeader, Card } from "@/components"
import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import { aboutImg } from "@/assets"

export default function About() {
  
    return (
      <section id="about">
        <SectionHeader header={"Parę słów o nas"} subheader={"Zobacz co nas wyróżnia"} />
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="flex-1 md:block hidden mx-auto">
            <Image 
              src={aboutImg}
              alt="Edytor kodu"
              quality={100}
              width={600}
            />
          </div>
          <div className="flex-1 flex-center sm:mt-8">
            {/* <div className="grid grid-cols-2 grid-rows-2 gap-5 items-stretch"> */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-stretch">
              {about.map((elem, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -150 }}
                  whileInView={{ opacity: 1, x: 0, }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index === 0 ? 0.3 : index === 1 ? 0.5 : 0.7, duration: 1 }}
                >
                  <Card className={"flex flex-col items-center md:h-[290px]"}>
                  <div className="bg-blue-gradient w-[60px] h-[60px] rounded-full flex justify-center items-center">
                    <elem.img size={40} className="text-background "/>
                  </div>
                  <h2 className="text-[24px] h-[40px] my-2 font-bold">{elem.title}</h2>
                  <p className="text-[16px] text-secondaryText text-center">{elem.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </section>
    )
  }