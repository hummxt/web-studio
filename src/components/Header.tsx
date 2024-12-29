function Header() {
  return (
    <>
      <header className="min-w-full h-auto p-6 flex justify-between items-center">
        <div className="logo text-2xl text-primary">
          <h2>{"{FinCompany"}</h2>
        </div>
        <nav className="flex gap-10 justify-center items-center font-semibold">
            <h5 className="text-primary">Home</h5>
            <h5 className="text-primary">Product</h5>
            <h5 className="text-primary">Pricing</h5>
            <h5 className="text-primary">About us</h5>
            <h5 className="text-primary">Blog</h5>
            <h5 className="text-primary">Contact</h5>
            <div className="trial p-6 bg-primary rounded-xl w-36 h-14 flex items-center justify-center">
            <a href="#" className="text-secondary">Free Trial</a>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
