import { WMlogo } from "../../assets"
import { navLinks } from "@/constants"
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Navbar() {
  
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const [initNav, setInitNav] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [navActive, setNavActive] = useState(null);

  const [sections,setSections] = useState(null);
  const [navLi,setNavLi] = useState(null);

  const changeBackground = () => {
    if(window.scrollY >= 5) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    setSections(document.querySelectorAll("section"));
    setNavLi(document.querySelectorAll("[id='navLink']"));
    window.addEventListener('resize', function() {
      if(openCloseNav)setOpenCloseNav(false);
    });
  },[])

  useEffect(() => {
    window.onscroll = () => {
      var current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 250) {
          current = section.getAttribute("id"); 
        }
      });

      navLi.forEach((li,index) => {
        if (li.classList.contains(current)) {
          setNavActive(current);
        }
        if(current === "hero")setNavActive(null);
      });
    };

    if(openCloseNav){
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }else{
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  });

  function smoothScroll(id){
    const element = document.getElementById(id);
    if(element){
      const y = element.getBoundingClientRect().top + window.pageYOffset + (-50);
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  return (
    <nav className={`flex justify-between py-5 ${navbar ? "navbar-down" : "navbar-up"}`}>
      <div className="flex-center">
        <Image 
        src={WMlogo}
        alt="Web-Masters logo"
        width={50}
        />
      </div>
      <ul className="md:flex hidden">
        {navLinks.map((link, index) => (
          <div key={"link"+index}>
          <li onClick={() => {smoothScroll(link.id);}} id="navLink" className={`${link.id} text-[18px] ${index === navLinks.length - 1 ? "mr-0" : "mr-4"} cursor-pointer hover:text-primary`}>{link.title}</li>
          {(navActive == link.id) ? <div className={`bg-blue-gradient -mb-[2px] h-[2px] ${index === navLinks.length - 1 ? "mr-0" : "mr-4"}`} /> : ""}
          </div>
        ))}
      </ul>
      <div className={`md:hidden flex flex-1 justify-end items-center z-50`}>
        <div className={`${!openCloseNav ? 'menu_burger' : 'menu_burger open'}`}>
          <div className={` ${navbar ? "menu_burger-btn-fixed" : "menu_burger-btn"}  ${openCloseNav ? "fixed z-10" : "static z-10"}`} 
            onClick={() => {setOpenCloseNav((prev) => !prev);setInitNav(false)}} 
          />
        </div>
        <div className={`-left-[100px] w-[200%] h-[1000vh] absolute ${openCloseNav ? "bg-in" : "bg-out hidden"}`}></div>
          <div className={`p-10 bg-background fixed top-0 right-0 w-[70%] h-[100%] ${(initNav) ? "hidden" : "flex flex-col"} ${openCloseNav ? "sidebar" : "sidebar-out"}`}>   
            <ul className='list-none flex-col justify-end items-center flex-1 mt-10'>
              {navLinks.map((link, index)=>(
                <div key={link.id}>
                  <li key={link.id} className={`text-[20px] font-normal cursor-pointer py-8`} onClick={()=>{}}>
                    <div onClick={() => {smoothScroll(link.id);setOpenCloseNav(false)}} >{link.title}</div>
                  </li>
                  {((index+1) == navLinks.length) ? "" : <div className='w-full h-[1px] bg-blue-gradient'/>}
                </div>
              ))}
            </ul>
          </div>
        </div>
    </nav>
  )
  }