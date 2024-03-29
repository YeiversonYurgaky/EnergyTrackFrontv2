import React from "react";
import HomeContent from "../Components/HomeContent";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <HomeContent />
      </body>
    </>
  );
};

export default HomePage;
