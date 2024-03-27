import React from "react";
import HomeContent from "../Components/HomeContent";
import Navbar from "../Components/Navbar";

const NavbarPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <HomeContent />
      </section>
    </>
  );
};

export default NavbarPage;
