import React, { useEffect, useState } from "react";
import FormAccesContent from "../components/FormAccesContent";

const MasterClass9ErroresMasFrecuentesEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASWORDS = {
    PASWORD_1: "AutocadEsTuAmigo",
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
            <h1 className="text-5xl font-playfair">
              Acceso Masterclass 9 Errores AutoCAD
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
            <div className="w-full flex justify-center flex-col space-y-24">
              <iframe
                src="https://drive.google.com/file/d/1O7yy0XXGoqNcedAvUPuT-K_499hP-lE5/preview"
                width="768px"
                height="432px"
                allowFullScreen
              ></iframe>

              <a
                href={
                  "https://www.notion.so/beinteriordesigner/a36d525517794b1d8717d8bb53452388?v=a163840bbbe34642b25cda190023cb5b"
                }
                target="_blank"
              >
                <button
                  className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
                >
                  Bonus - Los comandos más usados en Autocad
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterClass9ErroresMasFrecuentesEstasDentro;
