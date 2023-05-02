import React from 'react'
import {howItsDone} from "../../constants/index"
import Image from 'next/image'

export default function How () {
  return (
    <section>
        <h2 className='text-white sm:text-[52px] text-[48px] font-semibold text-center'>Jak działamy?</h2>
        <div className='flex flex-col'>
            {howItsDone.map((how, index) => (
                <div className={`flex items-center justify-between ${index % 2 ? "flex-row-reverse" : "flex-row"} ${index === howItsDone.length - 1 ? "mb-0" : "mb-10"}`}>
                    <div className='max-w-[510px]'>
                        <h4 className='text-[36px] font-bold'>{how.title}</h4>
                        <p className='text-[18px] text-secondaryText'>{how.description}</p>
                    </div>
                    <Image src={how.img}/>
                </div>
            ))}
        </div>
    </section>
  )
}