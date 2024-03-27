import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import logo from "../assets/react.svg";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isOpen, setisOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 30 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setisOpen(!isOpen);
  };

  const closeMenuAndNavigate = () => {
    setisOpen(false); 
    window.scrollTo({ top: 0, behavior: "smooth" });
   
  };

  return (
    <>
      <div className="">
        <div
          className={`flex justify-between  items-center px-6 py-4 fixed left-0 right-0 top-0 z-50 bg-cyan-950`}
        >
          <div className="flex flex-row gap-1">
            <Link to='/' className="flex flex-row">
            <img src={logo} alt="Background" width={20} />
            <p className="text-white ">E-Cart</p>
            </Link>
          </div>

          <div className="hidden md:block space-x-10 text-white tracking-widest mr-40">
            <Link
              onClick={scrollToTop}
              className="no-underline text-white hover:text-gray-400"
              to="/"
            >
              HOME
            </Link>
            <Link
              onClick={scrollToTop}
              className="no-underline text-white hover:text-gray-400"
              to="/section"
            >
              CATEGORY
            </Link>
            <Link
              onClick={scrollToTop}
              className="no-underline text-white hover:text-gray-400"
              to="/users"
            >
              USERS
            </Link>
          </div>

          <h1
            className="cursor-pointer text-white md:hidden"
            onClick={openMenu}
          >
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </h1>
        </div>

        {isOpen ? (
          <div
            exit="exit"
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-center tracking-widest h-screen gap-14 bg-black text-white  fixed left-0 right-0 top-0 z-40 md:hidden"
          >
            <Link
              onClick={closeMenuAndNavigate}
              className="no-underline text-white hover:text-gray-400"
              to="/"
            >
              HOME
            </Link>
            <Link
              onClick={closeMenuAndNavigate}
              className="no-underline text-white hover:text-gray-400"
              to="/section"
            >
              CATEGORY
            </Link>
            <Link
              onClick={closeMenuAndNavigate}
              className="no-underline text-white hover:text-gray-400"
              to="/users"
            >
              USERS
            </Link>
          </div>
        ) : null}
      </div>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Navbar;
