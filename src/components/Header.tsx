import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="min-w-full h-auto p-6 flex justify-between items-center">
        <div className="logo text-2xl text-primary">
          <Link to="/">{"{FinCompany"}</Link>
        </div>
        <nav className="flex gap-10 justify-center items-center font-semibold">
          <Link
            to="/"
            className="text-primary"
          >
            Home
          </Link>
          <Link to="/product" className="text-primary flex space-x-4">
            Product
          </Link>
          <Link to="/pricing" className="text-primary flex space-x-4">
            Pricing
          </Link>
          <Link to="/about" className="text-primary">
            About us
          </Link>
          <Link to="/blog" className="text-primary">
            Blog
          </Link>
          <Link to="/contact" className="text-primary">
            Contact
          </Link>
          <div className="trial p-6 bg-primary rounded-xl flex items-center justify-center before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-secondary before:opacity-10 before:duration-700 hover:decoration-border hover:before:-translate-x-40 drop-shadow-xl">
            <Link to="/" className="text-secondary relative z-10">
              Free Trial
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
