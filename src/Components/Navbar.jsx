import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const Navbard = () => {

  //Navbar dinámica
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarClasses = `navbar bg-base-100 text-zinc-900 ${isScrolled
    ? "fixed top-0 inset-x-0 z-50 shadow bg-transparent backdrop-blur-xl"
    : "bg-transparent transition-colors duration-300 ease-in-out"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //navegación singlepage
  // function handleNavClick(event, targetId) {
  //   event.preventDefault();

  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     let yOffset = 0; // Desplazamiento predeterminado     
  //     if (targetId === "nosotros") {
  //       yOffset = -100 // Ajuste de desplazamiento para la sección "Nosotros"
  //     } if (targetId === "contacto") {
  //       yOffset = -200 // Ajuste de desplazamiento para la sección "Contacto"
  //     }
  //     console.log(yOffset)

  //     const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //     window.scrollTo({ top: y, behavior: "smooth" });
  //   }
  // }

  return (
    <div className={navbarClasses}>
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] text-base p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li id="home">
              <a href="#home">Home</a>
            </li>
            <li id="nosotros">
              <a href="#nosotros" >Nosotros</a>
            </li>
            <li id="contacto">
              <a href="#contacto" >Contáctanos</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost font-bold text-2xl">
          <img src={logo} alt="logo" />
          EnergyTrack
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base px-1">
          <li id="home">
            <a href="#home">Home</a>
          </li>
          <li id="nosotros">
            <a href="#nosotros">Nosotros</a>
          </li>
          <li id="contacto">
            <a href="#contacto">Contáctanos</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-neutral text-neutral-100 text-base w-36">
          Ingresar
        </a>
      </div>
    </div>
  );
};

export default Navbard;
