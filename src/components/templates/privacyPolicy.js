import { Card } from '../index'
import { privacyPolicyText } from '@/constants/privacyPolicyText'
import { useEffect, useState } from "react";
import Link from 'next/link'

export default function PrivacyPolicy() {
    
    const [navbar, setNavbar] = useState(false);


    const changeBackground = () => {
        if(window.scrollY >= 5) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }

      useEffect(() => {
        window.addEventListener('scroll', changeBackground);
      },[])


    return (
      <>
        <nav className={`flex justify-between py-5 ${navbar ? "navbar-down" : "navbar-up"}`}>
            <div className="flex-center">
              <a href='/'>
                <img 
                src={'/assets/logoImgs/WMlogo.webp'}
                alt="Web-Masters logo"
                className={'w-[50px]'}
                />
              </a>
            </div>
            <ul>
                <li className={`text-[18px] cursor-pointer hover:text-primary`}><Link href="/">Strona główna</Link></li>
            </ul>
        </nav>
        <section className='sm:pt-44 pt-20'>
            <h1 className="text-[38px] text-center sm:text-[55px] xl:text-[70px] font-bold leading-none">Polityka <span className="text-gradient">prywatności</span></h1>
        </section>
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
        <section>
            <Card className="sm:p-16 p-5">
                {privacyPolicyText.map((text, index) => (
                    <div key={"privacyPolicyText"+index}>
                        <h2 className='font-semibold text-[24px] mb-2'>{index+1}. {text.title}</h2>
                        <div className={`text-justify ${(index+1 === privacyPolicyText.length) ? "mb-0" : "mb-10"}`}>
                        {text.content.map((paragraph, index) => (
                            <div>
                                <p className={`text-secondaryText mb-4 `}>{paragraph}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </Card>
        </section>
        
      </>
    )
  }