import React from "react";
import HomeContent from "../Components/HomeContent";
import Navbard from "../Components/Navbard";

const NavbarPage = () => {
  return (
    <>
      <header>
        <Navbard />
      </header>
      <section>
        <HomeContent />
      </section>
    </>
  );
};

export default NavbarPage;
