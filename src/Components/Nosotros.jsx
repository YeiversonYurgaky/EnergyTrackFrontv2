import React from "react";
import nosotros from "../assets/nosotros.png";

const Nosotros = () => {
  return (
    <main className="text-zinc-900 h-screen m-5 flex ">
      <article className="flex">
        <section className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <header className="prose mb-4 lg:prose-xl">
              <h1>Acerca de Nosotros</h1>
            </header>
            <body className="prose md:prose-md">
              <h3>
                <span className="text-blue-600">Nuestro objetivo es promover prácticas sostenibles y eficientes
                para un futuro energético más verde.</span>
              </h3>
              <p>
                ¡Únete a nosotros en esta misión de hacer del mundo un lugar más
                ecológico y eficiente energéticamente!
              </p>
            </body>
          </div>
          <div className="ml-10 md:w-1/2">
            <picture className="flex justify-center">
              <img
                src={nosotros}
                alt="about us"
                className="w-[31.25rem] rounded-lg h-[28.125rem]"
              />
            </picture>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Nosotros;
