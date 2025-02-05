import { useState } from "react";
import FormAccesContent from "../components/FormAccesContent";

const AudioPrivadoProyectoEjecucionEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASSWORDS = {
    PASSWORD_1: "DejaDeSerUnBecario",
  };

  const isCorrectPassword = (password) => {
    return !Object.values(PASSWORDS).includes(password);
  };

  return (
    <div
      className={`w-full ${
        isCorrectPassword(password) ? "h-[90vh]" : ""
      } max-w-4xl place-content-center font-playfair`}
    >
      <div className="bg-stone-50 p-4 w-full my-8 px-4 grid place-content-center leading-10">
        {isCorrectPassword(password) ? (
          <>
            <h1 className="text-2xl sm:text-5xl sm:leading-[60px] font-bold font-playfair text-center">
              Acceso Audio privado
            </h1>
            <br />
            <FormAccesContent
              correctPassword={PASSWORDS}
              setPassword={setPassword}
              password={password}
            />
            <h2 className="underline text-bid-terracotta font-bold">
              Be Interior Designer
            </h2>
          </>
        ) : (
          <div className="w-full font-playfair">
            <div className="bg-stone-50 p-4 sm:p-20 my-12">
              <header>
                <h1 className="text-2xl sm:text-5xl sm:leading-[60px] text-center  pb-16 font-bold">
                  Aquí tienes tu audio
                </h1>
              </header>

              <div className="flex justify-center">
                <audio controls controlsList="nodownload">
                  <source
                    src="https://res.cloudinary.com/dh2hwwzpy/video/upload/v1737056712/BID-audio_bienvenida-PE_l7pbgh.mp4"
                    type="audio/mp4"
                  />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPrivadoProyectoEjecucionEstasDentro;
