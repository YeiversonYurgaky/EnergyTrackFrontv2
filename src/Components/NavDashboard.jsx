import React, { useEffect, useState } from 'react';
import logo from "../assets/logo.svg";
const NavDashboard = () => {

  //Navbar dinámica
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarClasses = `navbar bg-base-100 shadow text-zinc-900 ${isScrolled
    ? "fixed top-0 inset-x-0 z-50 shadow bg-transparent backdrop-blur-lg"
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

  return (
    <div className={navbarClasses}>
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">
          <img src={logo} alt="logo" />
          EnergyTrack</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Foto Perfil" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Perfil
              </a>
            </li>
            <li><a>Opciones</a></li>
            <li><a>Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavDashboard