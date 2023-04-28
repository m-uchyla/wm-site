import { WMlogo } from "../../assets"
import { navLinks } from "@/constants"
import Image from "next/image"
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 5) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={`flex justify-between py-1 ${navbar ? "navbar-down" : "navbar-up"}`}>
      <div>
        <Image 
        src={WMlogo}
        width={30}
        />
      </div>
      <ul className="flex">
        {navLinks.map((link, index) => (
          <li className={`text-[10px] ${index === navLinks.length - 1 ? "mr-0" : "mr-2"} cursor-pointer`}>{link.title}</li>
        ))}
      </ul>
    </nav>
  )
  }