import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="mx-auto bg-white">
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-navlink" : "inactive-navlink"
            }
          >
            Movies
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              isActive ? "active-navlink" : "inactive-navlink"
            }
          >
            Customers
          </NavLink>
          <NavLink
            to="/rentals"
            className={({ isActive }) =>
              isActive ? "active-navlink" : "inactive-navlink"
            }
          >
            Rentals
          </NavLink>
        </nav>
        {/* SEARCH BAR */}
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
