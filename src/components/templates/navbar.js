import { navLinks } from "@/constants"

export default function Navbar() {
    return (
      <nav className="flex justify-between">
        <div>

        </div>
        <ul className="flex">
          {navLinks.map((link, index) => (
            <li className={`text-[10px] ${index === navLinks.length - 1 ? "mr-0" : "mr-2"}`}>{link.title}</li>
          ))}
        </ul>
      </nav>
    )
  }