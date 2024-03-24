import React from "react";
import "../Styles/Home.css";
import tablas from "../assets/tablas.png";

const Home = () => {
  return (
    <main className="flex m-6 text-neutral-500 font-light">
      <section className="flex flex-col flex-1 ">
        <article className="articulo prose lg:prose-xl ">
          <h1>
            <p>El sistema de monitoreo energético</p>
            <p className="relative">
              <span className="bg-gradient-custom text-transparent bg-clip-text">
                Más Popular
              </span>
              <span className="absolute inset-0 text-transparent text-shadow">
                Más Popular
              </span>
            </p>
            <p>a un solo click</p>
          </h1>
        </article>
        <article className="text-xl mt-5">
          <p>podras ver sus consumos diarios</p>
          <p> en tablas y graficas para mejor comprensión</p>
        </article>
      </section>
      <section className="flex flex-1  origin-center">
        <img className="flex shadow-md rotate-6" src={tablas} alt="tablas" />
      </section>
    </main>
  );
};

export default Home;
