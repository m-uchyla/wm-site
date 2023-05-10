import Link from 'next/link'
import {FaCookie, FaCookieBite} from 'react-icons/fa'
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

export default function CookiesAlert() {

    const [isShown, setShown] = useState(true);
    const [cookieChange, setCookieChange] = useState(false);
    const [cookies, setCookies] = useState(new Cookies())

    useEffect(()=>{
        if(cookies.get('cookiesAccepted'))setShown(false);
    })

    function accept(){
        cookies.set('cookiesAccepted', 'true', { path: '/' });
        setShown(false);
    }
    setTimeout(() => {setCookieChange(true)}, 1500)
    

    return (
      <aside id="cookie" className={`bg-[rgb(20,20,31)] p-4 bottom-0 w-full shadow ${isShown ? "fixed" : "hidden"}`}>
        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-4 justify-evenly items-center">
            <div className='md:flex hidden items-center justify-between '>
                {cookieChange ? <FaCookieBite className="text-cyan-400 mr-[-50px] sm:text-[30px] text-[70px]"/> 
                : 
                <FaCookie className="text-cyan-400 sm:text-[30px] text-[70px]"/>
                }
            </div>
            <p className="text-[12px] text-secondaryText">
                Strona wykorzystuje pliki cookies w celu prawidłowego jej działania oraz korzystania z narzędzi analitycznych, reklamowych i społecznościowych. Szczegóły znajdują się w <Link href="/polityka-prywatnosci" className='text-secondary hover:text-primary'>Polityce prywatności</Link>. Możesz zarządzać ustawieniami plików cookies, klikając w przycisk "Ustawienia".
            </p>
            <p onClick={() => accept()} className=" hover:text-primary text-secondary cursor-pointer text-[20px] font-semibold">Akceptuje</p>
        </div>
      </aside>
    )
}