import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/forRead">Page to Read</NavLink>
      </li>
      <li>
        <NavLink to="/topBooks">Top Book</NavLink>
      </li>
      <li>
        <NavLink to="/writers">Famous Writer</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md mb-5" id="sidebar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="md:btn md:btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-bold rounded-box w-52"
            >
              {links}
              <button
                type="button"
                className="px-2 py-1 md:px-5 md:py-2 my-2 text-sm md:text-lg font-semibold rounded bg-[#23BE0A] text-white"
              >
                Sign In
              </button>
              <button
                type="button"
                className="px-2 py-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded bg-[#59C6D2] text-white"
              >
                Sign Up
              </button>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-3xl font-bold">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
        </div>
        <div className="navbar-end space-x-3 hidden md:block">
          <button
            type="button"
            className="px-2 py-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded bg-[#23BE0A] text-white"
          >
            Sign In
          </button>
          <button
            type="button"
            className="px-2 py-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded bg-[#59C6D2] text-white"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
