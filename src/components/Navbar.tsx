import Logo from "../assets/logo.svg";


const Navbar = () => {
  return (
    <header className="mx-auto">
      {/* first row */}
      <div className="flex items-center justify-between py-2 border-b border-gray-300">
        <img src={Logo} alt="m-table" />
        <div className="flex items-center justify-center">
          <span className="btn-login mr-5">Login</span>
          <span className="btn-register">Register</span>
        </div>
      </div>

      {/* second row */}
      <nav className="border-b-[0.2px] border-gray-300 flex space-x-5">
        <span className="navlink border-b-2 border-blue-500">Movies</span>
        <span className="navlink">Customers</span>
        <span className="navlink">Rentals</span>
      </nav>
    </header>
  );
};

export default Navbar;
