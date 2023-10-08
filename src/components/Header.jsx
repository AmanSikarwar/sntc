import { NavLink } from "react-router-dom";
import Logo from "./logo";

function Header() {
  return (
    <header>
      <nav className="flex justify-center my-0">
        <div className="container flex items-center justify-around sm:px-2 lg:mx-64">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `$duration-200 border-b-2 border-blue-500 hover:text-blue-700 hover:border-blue-700 sm:mx-2 lg:mx-4 ${
                isActive ? "text-blue-500" : "text-gray-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="services"
            className={({ isActive }) =>
              `$duration-200 border-b-2 border-blue-500 hover:text-blue-700 hover:border-blue-700 sm:mx-2 lg:mx-4 ${
                isActive ? "text-blue-500" : "text-gray-400"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <NavLink
            to="interIIT"
            className={({ isActive }) =>
              `$duration-200 border-b-2 border-blue-500 hover:text-blue-700 hover:border-blue-700 sm:mx-2 lg:mx-4 ${
                isActive ? "text-blue-500" : "text-gray-400"
              }`
            }
          >
            Inter IIT
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `$duration-200 border-b-2 border-blue-500 hover:text-blue-700 hover:border-blue-700 sm:mx-2 lg:mx-4 ${
                isActive ? "text-blue-500" : "text-gray-400"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <div className="text-center text-gray-300 text-xl">
        Science and Technology Council - IIT Mandi
      </div>
    </header>
  );
}

export default Header;