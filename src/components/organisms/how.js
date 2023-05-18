import React, { useEffect, useState } from 'react'
import { motion, useTransform, useSpring, useScroll, useMotionTemplate } from "framer-motion"
import {howItsDone} from "../../constants/index"
import { large, small } from '../../constants/deviceAnimation'

export default function How () {
    const { scrollYProgress } = useScroll();

//screen width 1440 and above -> false; below 1440 -> true
const [deviceAnimation,setDeviceAnimation] = useState((typeof window !== 'undefined') ? ((window.innerWidth >= 1440) ? large : small) : small);
const [translateState, setTranslateState] = useState();


useEffect(() => {
    window.addEventListener('resize', function() {
      if(window.innerWidth >= 1440){
        setDeviceAnimation(large)
        setTranslateState(true)
      }else{
        setDeviceAnimation(small)
        setTranslateState(false)
      };
    });
  },[deviceAnimation])



    const translate1 = useTransform(scrollYProgress, deviceAnimation.translate1[0], deviceAnimation.translate1[1])
    const translate2 = useTransform(scrollYProgress, deviceAnimation.translate2[0], deviceAnimation.translate2[1])
    const translate3 = useTransform(scrollYProgress, deviceAnimation.translate3[0], deviceAnimation.translate3[1])
    const translate4 = useTransform(scrollYProgress, deviceAnimation.translate4[0], deviceAnimation.translate4[1])
    const opacity1 = useTransform(scrollYProgress, deviceAnimation.opacity1[0], deviceAnimation.opacity1[1])
    const opacity2 = useTransform(scrollYProgress, deviceAnimation.opacity2[0], deviceAnimation.opacity2[1])
    const opacity3 = useTransform(scrollYProgress, deviceAnimation.opacity3[0], deviceAnimation.opacity3[1])
    const opacity4 = useTransform(scrollYProgress, deviceAnimation.opacity4[0], deviceAnimation.opacity4[1])
    const yRange = useTransform(scrollYProgress, deviceAnimation.yRange[0], deviceAnimation.yRange[1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  return (
    <section id="howItsDone" >
        <h2 className='text-white sm:text-[52px] text-[48px] font-semibold text-center mb-4 lg:mb-0'>Jak działamy?</h2>
        <motion.svg
        className={`absolute xl:right-[50%] lg:right-[81%] md:right-[80%] ss:right-[81%] right-[95%] xl:z-[1] z-[-1]`}
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
                     {/* conditional rendering white large or small */}
                    {translateState ? 
                    <motion.div
                        style={{
                            translateX: index === 0 ? translate1 : index === 1 ? translate2 : index === 2 ? translate3 : translate4,
                            opacity: index === 0 ? opacity1 : index === 1 ? opacity2 : index === 2 ? opacity3 : opacity4
                        }}
                        key={"howItsDone" + index}>
                        <div className='max-w-[510px]'>
                            <h4 className='text-[36px] font-bold'>{how.title}</h4>
                            <div className={`lg:w-[566px] mb-2 ${index % 2 ? "xl:ml-[-63px]" : "ml-0"} h-[5px] bg-[#00D8FF]`}/>
                            <p className='text-[18px] text-secondaryText'>{how.description}</p>
                        </div>
                    </motion.div> : 
                    <motion.div
                    style={{
                        translateY: index === 0 ? translate1 : index === 1 ? translate2 : index === 2 ? translate3 : translate4,
                        opacity: index === 0 ? opacity1 : index === 1 ? opacity2 : index === 2 ? opacity3 : opacity4
                    }}
                    key={"howItsDone" + index}>
                    <div className='max-w-[510px]'>
                        <h4 className='text-[36px] font-bold'>{how.title}</h4>
                        <div className={`lg:w-[566px] mb-2 ${index % 2 ? "xl:ml-[-63px]" : "ml-0"} h-[5px] bg-[#00D8FF]`}/>
                        <p className='text-[18px] text-secondaryText'>{how.description}</p>
                    </div>
                </motion.div>
                }
                    <motion.div 
                    style={{
                        translateX: index === 0 ? translate2 : index === 1 ? translate1 : index === 2 ? translate4 : translate3,
                        opacity: index === 0 ? opacity1 : index === 1 ? opacity2 : index === 2 ? opacity3 : opacity4
                    }}>
                        <img src={how.img} alt={how.title} className="lg:block hidden"/>
                    </motion.div>
                </div>
            ))}
        </div>
    </section>
  )
}