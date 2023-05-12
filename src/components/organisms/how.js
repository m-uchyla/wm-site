import React, { useEffect, useState } from 'react'
import { motion, useTransform, useSpring, useScroll } from "framer-motion"
import {howItsDone} from "../../constants/index"
import Image from 'next/image'
import { largeDeviceAnimation } from '../../constants/largeDeviceAnimation'

export default function How () {
    const { scrollYProgress } = useScroll();

console.log(largeDeviceAnimation)
    const translate1 = useTransform(scrollYProgress, [0.30, 0.38], [120, 0])
    const translate2 = useTransform(scrollYProgress, [0.30, 0.38], [120, 0])
    const translate3 = useTransform(scrollYProgress, [0.32, 0.42], [-120, 0])
    const translate4 = useTransform(scrollYProgress, [0.37, 0.47], [120, 0])
    const opacity1 = useTransform(scrollYProgress, [0.28, 0.30], [0, 1])
    const opacity2 = useTransform(scrollYProgress, [0.35, 0.38], [0, 1])
    const opacity3 = useTransform(scrollYProgress, [0.40, 0.45], [0, 1])
    const opacity4 = useTransform(scrollYProgress, [0.43, 0.48], [0, 1])
    const yRange = useTransform(scrollYProgress, [0.26, 0.57], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

//screen width 1440 and above -> false; below 1440 -> true
const [small,setSmall] = useState((typeof window !== 'undefined') ? ((window.innerWidth >= 1440) ? false : true) : true);

useEffect(() => {
    //setSmall((window.innerWidth >= 1440) ? false : true);
    window.addEventListener('resize', function() {
      if(window.innerWidth >= 1440){
        setSmall(false)
      }else{
        setSmall(true)
      };
    });
  },[small])

  return (
    <section id="howItsDone" >
        <h2 className='text-white sm:text-[52px] text-[48px] font-semibold text-center'>Jak działamy?</h2>
        <motion.svg
        className={`absolute lg:right-[50%] md:right-[80%] ss:right-[70%] right-[95%] xl:z-[1] z-[-1]`}
        width="6" height="1356" viewBox="0 0 6 1356"
        xmlns="http://www.w3.org/2000/svg">
            <motion.path 
            strokeDasharray="0 1"
            fill="none"
            stroke="#00D8FF"
            strokeWidth="5"
            d="M3 0V1356"
            style={{
                pathLength
            }}
            />
        </motion.svg>
        <div className='flex flex-col'>
            {howItsDone.map((how, index) => (
                <div key={"howItsDone"+index} className={`flex items-center lg:justify-between justify-center ${index % 2 ? "flex-row-reverse" : "flex-row"} ${index === howItsDone.length - 1 ? "mb-0" : "mb-10"}`}>
                    <motion.div
                        style={{
                            translateY: index === 0 ? translate1 : index === 1 ? translate2 : index === 2 ? translate3 : translate4,
                            opacity: index === 0 ? opacity1 : index === 1 ? opacity2 : index === 2 ? opacity3 : opacity4
                        }}
                        key={"howItsDone" + index}
                    >
                        <div className='max-w-[510px]'>
                            <h4 className='text-[36px] font-bold'>{how.title}</h4>
                            <div className={`lg:w-[566px] mb-2 ${index % 2 ? "xl:ml-[-63px]" : "ml-0"} h-[5px] bg-[#00D8FF]`}/>
                            <p className='text-[18px] text-secondaryText'>{how.description}</p>
                        </div>
                    </motion.div>
                    <motion.div 
                    style={{
                        translateX: index === 0 ? translate2 : index === 1 ? translate1 : index === 2 ? translate4 : translate3,
                        opacity: index === 0 ? opacity1 : index === 1 ? opacity2 : index === 2 ? opacity3 : opacity4
                    }}>
                        <Image src={how.img} quality={100} alt={how.title} className="lg:block hidden"/>
                    </motion.div>
                </div>
            ))}
        </div>
    </section>
  )
}