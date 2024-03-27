import React from "react";
import contacto from "../assets/conctacto.png";

const Contacto = () => {
  return (
    <main className="text-zinc-900 h-screen flex m-5">
      <article className="flex">
        <section className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2">
            <header className="prose lg:prose-xl mb-4 ">
              <h1 className="text-center">Contacto</h1>
            </header>
            <body className="prose lg:prose-lg">
              <p>
                ¡Estamos encantados de saber de ti! Si tienes alguna pregunta,
                comentario o simplemente quieres saber más sobre nuestros
                servicios, no dudes en ponerte en contacto con nosotros.
              </p>
              <p>
                Puedes encontrarnos en la siguiente dirección:
                <br />
                EnergyTrack, 123 Calle Principal, Ciudad Universitaria, País
              </p>
              <p>
                Para consultas generales, escríbenos a: info@energytrack.com
              </p>
              <p>
                Para asistencia técnica, contáctanos en: support@energytrack.com
              </p>
              <p>También puedes llamarnos al: +1-123-456-7890</p>
            </body>
          </div>
          <div className="md:w-1/2 ml-8">
            <picture>
              <img
                src={contacto}
                alt="imagen de contacto"
                className="w-[31.25rem] h-[28.125rem]  rounded-lg"
              />
            </picture>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Contacto;
