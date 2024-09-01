import React, { useEffect, useState } from "react";
import FormAccesContent from "../components/FormAccesContent";

const MasterClass9ErroresMasFrecuentesEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASWORDS = {
    PASWORD_1: "no la cagues en tu obra",
  };

  return (
    <div
      className={`w-full ${
        password !== PASWORDS.PASWORD_1 ? "h-[90vh]" : ""
      } max-w-4xl place-content-center font-playfair`}
    >
      <div className="bg-stone-50 p-4 w-full my-8 px-4 grid place-content-center leading-10">
        {password !== PASWORDS.PASWORD_1 ? (
          <>
            <h1 className="text-5xl font-playfair text-center">
              Acceso Taller Proyecto de ejecución vivienda Valencia
            </h1>
            <br />
            <FormAccesContent
              correctPassword={PASWORDS}
              setPassword={setPassword}
              password={password}
            />
            <h2 className="underline text-bid-terracotta font-bold">
              Be Interior Designer
            </h2>
          </>
        ) : (
          <div className="p-4 sm:p-24">
            <h1 className="text-5xl font-playfair text-center pb-24">
              Masterclass 9 Errores más frecuentes en AutoCAD
            </h1>

            <p className="pb-2">
              El directo esl el día 5 de Octubre a las 18:00 hora peninsular
              española.
              <br />
              Clicka en el botón para acceder al directo.
            </p>
            <p className="italic text-xs pb-12">
              *Una vez termine el directo podrás acceder aquí a la grabación
            </p>

            <a href={"https://www.youtube.es"} target="_blank">
              <button
                className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
              >
                Acceder al directo
              </button>
            </a>

            <div className="w-full flex justify-center ">
              <p>Bonus - Audio privado</p>{" "}
              {/* <audio src="https://drive.google.com/file/d/1Ayn-Jc3Y5wldI26vbaGnzIlW0eDvs2py/view?usp=share_link"></audio> */}
              <audio controls="controls">
                <source
                  src="https://docs.google.com/uc?export=download&id=1Ayn-Jc3Y5wldI26vbaGnzIlW0eDvs2py"
                  type="audio/mp3"
                ></source>
              </audio>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterClass9ErroresMasFrecuentesEstasDentro;
