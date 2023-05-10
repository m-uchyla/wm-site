import React, { useRef } from 'react'
import { motion, useTransform, useSpring, useScroll } from "framer-motion"
import {howItsDone} from "../../constants/index"
import Image from 'next/image'

export default function How () {
    const { scrollYProgress } = useScroll();

    const translateX = useTransform(scrollYProgress, [0, 0.35], [-120, 0])
    const translateY = useTransform(scrollYProgress, [0.26, 0.47], [120, 0])
    const yRange = useTransform(scrollYProgress, [0.26, 0.57], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  return (
    <section id="howItsDone" >
        <h2 className='text-white sm:text-[52px] text-[48px] font-semibold text-center'>Jak działamy?</h2>
        <motion.svg
        className={`absolute right-[50%]`}
        width="6" height="1356" viewBox="0 0 6 1356"
        xmlns="http://www.w3.org/2000/svg">
            <motion.path 
            strokeDasharray="0 1"
            fill="none"
            stroke="#00D8FF"
            stroke-width="5"
            d="M3 0V1356"
            style={{
                pathLength
            }}
            />
        </motion.svg>
        <div className='flex flex-col'>
            {howItsDone.map((how, index) => (
                <motion.div 
                    style= {{translateX}}
                    key={"howItsDone" + index}
                    className={`flex items-center justify-between ${index % 2 ? "flex-row-reverse" : "flex-row"} ${index === howItsDone.length - 1 ? "mb-0" : "mb-10"}`}
                >
                    <div className='max-w-[510px]'>
                        <h4 className='text-[36px] font-bold'>{how.title}</h4>
                        <div className={`w-[566px] ${index % 2 ? "ml-[-63px]" : "ml-0"} h-[5px] bg-[#00D8FF]`}/>
                        <p className='text-[18px] text-secondaryText'>{how.description}</p>
                    </div>
                    <Image src={how.img} alt={how.title}/>
                </motion.div>
            ))}
        </div>
    </section>
  )
}