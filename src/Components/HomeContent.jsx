import React from "react";
import Contacto from "./Contacto";
import Home from "./Home";
import Nosotros from "./Nosotros";

const HomeContent = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div>
        <Nosotros />
      </div>
      <div>
        <Contacto />
      </div>
    </>
  );
};

export default HomeContent;
