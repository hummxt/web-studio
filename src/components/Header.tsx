
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="min-w-full h-auto p-6 bg-white relative z-10">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="logo text-3xl text-primary">
          <Link to="/">{"{FinCompany}"}</Link>
        </div>
        <nav className="hidden md:flex gap-6 lg:gap-10 justify-center items-center font-semibold">
          <Link to="/" className="text-primary text-lg transition-transform transform hover:scale-105">
            Home
          </Link>
          <Link to="/product" className="text-primary text-lg transition-transform transform hover:scale-105">
            Product
          </Link>
          <Link to="/pricing" className="text-primary text-lg transition-transform transform hover:scale-105">
            Pricing
          </Link>
          <Link to="/about" className="text-primary text-lg transition-transform transform hover:scale-105">
            About us
          </Link>
          <Link to="/blog" className="text-primary text-lg transition-transform transform hover:scale-105">
            Blog
          </Link>
          <Link to="/contact" className="text-primary text-lg transition-transform transform hover:scale-105">
            Contact
          </Link>
          <div className="trial p-3 bg-primary rounded-xl flex items-center justify-center before:ease relative h-12 overflow-hidden border border-green-500 bg-green-500 text-white shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:shadow-lg hover:before:-translate-x-40">
            <Link to="/" className="text-secondary relative z-10 px-4">
              Free Trial
            </Link>
          </div>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary text-4xl">
            {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col items-center justify-center gap-4 font-semibold">
        <Link to="/" className="w-full text-primary hover:border-2 hover:border-primary rounded-lg hover:bg-third text-lg p-2 shadow-lg text-center" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/product" className="w-full text-primary hover:border-2 hover:border-primary rounded-lg hover:bg-third transition-colors p-2 shadow-lg text-lg text-center" onClick={toggleMenu}>
          Product
        </Link>
        <Link to="/pricing" className="w-full text-primary hover:border-2 hover:border-primary rounded-lg hover:bg-third transition-colors p-2 shadow-lg text-lg text-center" onClick={toggleMenu}>
          Pricing
        </Link>
        <Link to="/about" className="w-full text-primary hover:border-2 hover:border-primary rounded-lg hover:bg-third p-2 shadow-lg text-lg text-center" onClick={toggleMenu}>
          About us
        </Link>
        <Link to="/blog" className="w-full text-primary hover:border-2 hover:border-primary rounded-lg hover:bg-third p-2 shadow-lg text-lg text-center" onClick={toggleMenu}>
          Blog
        </Link>
        <Link to="/contact" className="w-full text-primary hover:border-2 hover:border-primary rounded-lg hover:bg-third p-2 shadow-lg text-lg text-center" onClick={toggleMenu}>
          Contact
        </Link>
        <div className="trial w-full p-2 bg-primary rounded-xl flex items-center justify-center text-lg before:ease relative h-10 overflow-hidden border border-green-500 bg-green-500 text-white shadow-md transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:shadow-lg hover:before:-translate-x-40">
          <Link to="/" className="text-secondary relative z-10 px-4" onClick={toggleMenu}>
            Free Trial
          </Link>
        </div>  
      </nav>
      )}
    </header>
  )
}

export default Header

