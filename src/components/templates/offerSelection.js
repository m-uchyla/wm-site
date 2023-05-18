import { useState, useEffect } from "react";
import Link from 'next/link'
import { Card, Form, Button } from '@/components'
import { GoCheck } from "react-icons/go";
import ReactCardFlip from 'react-card-flip';

export default function OfferSelection({plan}) {
    
  const [navbar, setNavbar] = useState(false);
  const [isSent, setSent] = useState(false);

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
              src={'/assets/logoImgs/WMlogo.png'}
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
          <h1 className="text-[38px] text-center sm:text-[55px] xl:text-[70px] font-bold leading-none">Wybór <span className="text-gradient">oferty</span></h1>
      </section>
      <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
      <section>
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <ReactCardFlip isFlipped={isSent} flipDirection="horizontal" containerClassName="flex-1">
            <Card className="flex-1 h-full">
              <Form plan={(plan) ? plan.title : "" } sentInfo={setSent}/>
            </Card>
            <Card className="flex-1 h-full flex-center flex-col text-center">
              <h4 className="sm:text-[40px] text-[30px] font-semibold text-gradient">Wiadomość wysłana!</h4>
              <p className="text-secondaryText sm:text-[16px] text-[12px]">Postaramy się skontatkować z Tobą <br /> tak szybko jak będzie to możliwe</p>
              <div className="sm:w-[50%] lg:w-[80%] xl:w-[50%] w-full mt-4">
                <Link href={"/"}>
                  <Button variation={1} text={"Strona główna"} />
                </Link>
              </div>
            </Card>
          </ReactCardFlip>
          <div className="flex-1 flex gap-5 flex-col">
          {plan ? 
          <Card className={"h-full flex flex-col gap-2"}>
            <h4 className="text-[24px] font-semibold xl:h-[40px] h-auto">{plan.title}</h4>
            <p className="text-secondaryText ">{plan.desc}</p>
            <div className="md:m-0 mt-4">
              {(plan.discount == 0) ? 
                <h5 className='xl:text-[30px] text-[25px] font-semibold'><span className="text-secondaryText font-normal xl:text-[20px] text-[16px]">od</span> {plan.price} zł <span className="text-secondaryText font-normal text-[20px]">netto</span></h5> 
                : 
                <h5 className='xl:text-[30px] text-[25px] font-semibold'><span className="text-secondaryText font-normal xl:text-[20px] text-[16px]">od</span> <span className='text-cyan-500 line-through '><span className='text-zinc-500'>{plan.price}</span></span> {Math.floor(plan.price * (1-(plan.discount/100)))} zł <span className="text-secondaryText font-normal text-[20px]">netto</span></h5>
              }
            </div>
            <div>
              <h6>Plan zawiera:</h6>
              <ul>
              {plan.features.map((feature,index) => (
                <li key={"feature"+index} className={`${"feature"+index} text-secondaryText flex cursor-default`}><GoCheck className="text-primary mr-2 mt-1"/>{feature.feature}</li>
              ))}
              </ul>
            </div>
          </Card>
          :
          ""
          }
          
            <Card className="">
              <p className="text-secondaryText text-[14px] text-justify">Wybranie oferty i uzupełnienie nniejszego formularza kontaktowego nie jest jednoznaczne z zawarciem umowy na wykonanie działania z naszej strony. Jest to potwierdzenie zainteresowania ze strony klienta i wyrażenie chęci na dalszy kontakt celem ustalenia szczegółów i przedstawienia oferty końcowej dostosowanej do Państwa potrzeb.</p>
            </Card>
          </div>
        </div>
          
      </section>
      
    </>
  )
}