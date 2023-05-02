

export default function Footer() {
    return (
      <footer className="text-secondaryText">
        <div className="bg-[rgba(255,255,255,0.15)] h-[1px] mb-6" />
        <div className="flex justify-between">
          <div>
            © {new Date().getFullYear()} Web-Masters.pl
          </div>
          <p>Web-Masters nowoczesne strony internetowe dla biznesu</p>
          <ul className="flex gap-7">
            <li>Cookies</li>
            <li>Polityka prywatności</li>
          </ul>
        </div>
      </footer>
    )
  }