// TODO: REFACTOR

import { NavLink } from "react-router-dom";
// assets
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="mx-auto bg-white">
      {/* FIRST ROW */}
      <div className="border-b border-gray-300">
        <div className="px-5 mx-auto max-w-7xl flex items-center justify-between py-2">
          <img src={Logo} alt="m-table" />
          <div className="flex items-center justify-center">
            <span className="btn-login mr-5">Login</span>
            <span className="btn-register">Register</span>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="border-b border-gray-300">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-5 ">
          {/* NAVIGATION */}
          <nav className="flex space-x-5">
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
          <div className="relative">
            <input
              type="text"
              placeholder="Find a movie..."
              className="border rounded-lg py-2 pl-10 pr-3 text-sm text-gray-900 font-light bg-slate-100"
            />
            <svg
              width="20"
              height="20"
              fill="none"
              className="stroke-current text-gray-400 absolute top-[47%] -translate-y-1/2 left-2 h-[1.25rem] w-[1.25rem]"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
