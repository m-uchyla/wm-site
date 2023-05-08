import { useState, useEffect } from "react";
import { WMlogo } from "@/assets";
import Link from 'next/link'
import {Card} from '@/components'
import Image from 'next/image'
import { pricing } from "@/constants"
import { GoCheck } from "react-icons/go";

export default function OfferSelection({plan}) {
    
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
      if(window.scrollY >= 5) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    useEffect(() => {
      console.log(plan);
      console.log(plan);
      window.addEventListener('scroll', changeBackground);
    },[])

  return (
    <>
      <nav className={`flex justify-between py-5 ${navbar ? "navbar-down" : "navbar-up"}`}>
          <div className="flex-center">
              <Image 
              src={WMlogo}
              alt="Web-Masters logo"
              width={50}
              />
          </div>
          <ul className="md:flex hidden">
              <li className={`text-[18px] cursor-pointer hover:text-primary`}><Link href="/">Strona główna</Link></li>
          </ul>
      </nav>
      <section className='sm:pt-44 pt-20'>
          <h1 className="text-[38px] text-center sm:text-[55px] xl:text-[70px] font-bold leading-none">Wybór <span className="text-gradient">oferty</span></h1>
      </section>
      <div className="bg-[rgba(255,255,255,0.15)] h-[1px] sm:mx-[20%] mx-6" />
      <section>
        <div className="flex gap-5">
          <Card className=" flex-1">

          </Card>
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

export async function getStaticProps({selectedPlan}) {
  console.log("1")
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts');
  // const posts = await res.json();
  console.log(selectedPlan)
  // // By returning { props: { posts } }, the Blog component
  // // will receive `posts` as a prop at build time
  // return {
  //   props: {
  //     posts,
  //   },
  // };
}

export async function getServerSideProps({selectedPlan}) {
  console.log("2")
  console.log(selectedPlan)
  // // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();
 
  // // Pass data to the page via props
  // return { props: { data } };
}