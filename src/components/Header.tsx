import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="min-w-full h-auto p-6 flex justify-between items-center">
        <div className="logo text-2xl text-primary">
          <Link to='/'>{"{FinCompany"}</Link>
        </div>
        <nav className="flex gap-10 justify-center items-center font-semibold">
          <Link to="/" className="text-primary">
            Home
          </Link>
          <Link to="/product" className="text-primary">
            Product
          </Link>
          <Link to="/pricing" className="text-primary">
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
            <div className="trial p-6 bg-primary rounded-xl w-36 h-14 flex items-center justify-center">
              <Link to="/contact" className="text-secondary">
                Free Trial
              </Link>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
