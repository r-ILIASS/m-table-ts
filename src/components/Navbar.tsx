import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="mx-auto">
      {/* first row */}
      <div className="border-b border-gray-300">
        <div className="px-5 mx-auto max-w-7xl flex items-center justify-between py-2">
          <img src={Logo} alt="m-table" />
          <div className="flex items-center justify-center">
            <span className="btn-login mr-5">Login</span>
            <span className="btn-register">Register</span>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="border-b border-gray-300">
        <nav className="px-5 flex space-x-5 mx-auto max-w-7xl">
          <span className="navlink border-b-2 border-blue-500">Movies</span>
          <span className="navlink">Customers</span>
          <span className="navlink">Rentals</span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
