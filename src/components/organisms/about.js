import { about } from "@/constants";
import { motion, useScroll } from "framer-motion"

export default function About() {
  
    return (
      <section>
        <h2 className='text-primaryText md:text-[48px] text-[54px] font-semibold mb-3 text-center'>
          Ty prowadź swój biznes, <br className='sm:block hidden'/> {" "}
          My zajmiemy się stroną.
        </h2>
        <div className="grid grid-cols-3 gap-16 pt-16">
        {about.map((elem, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0, }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index === 0 ? 0.3 : index === 1 ? 0.5 : 0.7, duration: 1 }}
          >
            <div className="bg-blue-gradient w-[60px] h-[60px] opacity-75 rounded-full flex justify-center items-center">
              <elem.img size={40} className="text-background"/>
            </div>
            <h2 className="text-[24px] font-bold">{elem.title}</h2>
            <p className="text-[16px] text-secondaryText text-center">{elem.description}</p>
          </motion.div>
        ))}
        </div>
      </section>
    )
  }