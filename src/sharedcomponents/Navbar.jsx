/* eslint-disable no-undef */
import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const Navbar = () => {
  const { user, SignOut } = UseAuth();

  const handelLogout = () => {
    SignOut().then().catch();
  };
  return (
    <>
      <div className="navbar bg-base-200 px-8">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <h3 className=" text-xl">Gadget Shoop</h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us </NavLink>
            </li>
          </ul>
        </div>
        {/* user profile sction */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={`${user?.photoURL ? photoURL : "../../public/user.png"}`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Deshboard</a>
              </li>
              <div className="">
                {user ? (
                  <>
                    <button
                      className="font-bold  px-3 mt-2 py-1 border-2 "
                      onClick={handelLogout}
                    >
                      Logouts
                    </button>
                  </>
                ) : (
                  <Link to={"/login"}>
                    <button className="font-bold  px-3 mt-2 py-1 border-2 w-full mx-auto text-blue-500  ">
                      LogIn
                    </button>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
