import Link from 'next/link'

export default function Footer() {
    return (
      <footer className="text-secondaryText">
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] mb-6" />
        <div className="flex md:justify-between flex-col text-center flex-center md:flex-row gap-4">
          <div>
            © {new Date().getFullYear()} Web-Masters.pl
          </div>
          <p className="md:text-[16px] text-[20px]">Web-Masters nowoczesne strony internetowe dla biznesu</p>
          <ul className="flex gap-7">
            <li className='hover:text-primaryText'><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
          </ul>
        </div>
      </footer>
    )
  }