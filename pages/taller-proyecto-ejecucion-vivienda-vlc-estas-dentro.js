import React, { useEffect, useState } from "react";
import FormAccesContent from "../components/FormAccesContent";

const TallerProyectoEjecucionViviendaValenciaDentro = () => {
  const [password, setPassword] = useState("");

  const PASWORDS = {
    PASWORD_1: "NoLaCaguesEnTuObra",
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
              Acceso al taller en directo: Proyecto de Ejecución de interiorismo
              vivienda Valencia
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
          <div className="p-4 sm:px-8 sm:pt-36">
            <h1 className="text-5xl font-playfair text-center pb-24">
              Taller en directo: Proyecto de Ejecución de interiorismo vivienda
              Valencia
            </h1>

            <br></br>
            <br></br>

            <p className="text-bid-terracotta">
              <i>
                En esta página damos muchos recursos, no solo el taller. Por
                favor,
                <b>
                  {" "}
                  lee hasta el final, hay información importante y no me
                  gustaría que te perdieras nada.
                </b>{" "}
              </i>
            </p>
            <br></br>
            <br></br>
            <br></br>
            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[52px]">
                - El Taller.
              </h2>
              <br></br>
              <iframe
                src="https://drive.google.com/file/d/114G2i-8AbuDklJy2OEn2sTARS9rDp-Eg/preview"
                width="100%"
                height="432px"
                allowFullScreen
              ></iframe>

              <a
                href={
                  "https://beinteriordesigner.notion.site/Gui-n-del-taller-e5f650dcc6d14ef5ae1c15cfc021b7f7?pvs=4"
                }
                target="_blank"
                className=" my-8 block text-bid-wine font-alternate text-xl font-bold "
              >
                {" "}
                Ver índice del taller
              </a>
            </div>

            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - Bonus - Audio Privado.
              </h2>
              <br></br>
              <p>
                Hemos decidido regalarte este audio de bienvenida, pero no
                queremos que pienses que tiene poco valor por el hecho de que
                sea un regalo.
              </p>
              <p>Es más, es seguro que lo pondremos a la venta más adelante.</p>
              <p>
                Si aplicas lo que te contamos en el audio (trabajes por cuenta
                ajena o por cuenta propia), amortizarás con creces el precio
                completo de este taller. <br></br> Escúchalo tantas veces como
                necesites.
              </p>
              <br></br>

              <div className="flex justify-center">
                <audio controls controlsList="nodownload">
                  <source
                    src="https://res.cloudinary.com/dh2hwwzpy/video/upload/v1725561561/Directo%20PE%20vivienda%20Valencia/ygurg0sxzqkhe69nbdiv.mp3"
                    type="audio/mp3"
                  ></source>
                </audio>
              </div>
            </div>

            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - PDF de Proyecto de ejecución de interiorismo Vivienda
                Valencia.
              </h2>
              <br></br>
              <a
                href={
                  "https://drive.google.com/uc?export=download&id=10puIjeFPq9m1TWIdU-3N9QjzJY9pGHZv"
                }
                className=""
              >
                <button
                  className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
                >
                  Descargar PDF proyecto
                </button>
              </a>
            </div>

            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - Recomendaciones para el directo.
              </h2>
              <br></br>
              <ol className="px-6">
                <li>
                  Recomendamos imprimir el pdf del Proyecto de Ejecución para
                  que puedas seguir mejor el directo y hacer anotaciones
                  directamente encima de él. Cuando esté disponible el pdf, te
                  avisamremos.
                </li>
                <li>
                  Si no lo imprimes porque eres como Laura que se organiza todo
                  en digital, ten en cuenta prepararte el pdf en tu tablet o
                  dispositivo donde puedas tomar notas en el documento.
                </li>
                <li>
                  Coge papel y boli, o tu app de notas, y si durante el taller
                  te entra una duda, apúntala. A todos nos ha pasado que nos
                  asalta una pregunta pero a la hora ya se ha olvidado. Tienes
                  la oportunidad de resolver tus dudas con nosotros, no la
                  desaproveches.
                </li>
              </ol>
            </div>

            <div className="">
              <h2 className="font-alternate text-3xl font-bold leading-[42px] pb-8">
                - Dudas del directo.
              </h2>

              <br></br>

              <a
                href={
                  "https://beinteriordesigner.notion.site/Resoluci-n-dudas-e85d282614be4044942800eed8a967d1?pvs=4"
                }
                className=""
                target="_blank"
              >
                <button
                  className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
                >
                  Ver dudas resueltas
                </button>
              </a>
            </div>
            <div className="pl-16">
              <p className="pt-24">Esperamos que lo aproveches mucho.</p>
              <p>Laura y Joaquín, de Be Interior Designer.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TallerProyectoEjecucionViviendaValenciaDentro;
