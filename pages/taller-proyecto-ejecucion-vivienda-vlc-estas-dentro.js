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
              <p>
                El directo es el día 5 de Octubre a las 18:00 (Madrid, España).
              </p>
              <p>
                Cuando llegue la hora del directo, clica en el botón de abajo
                para acceder.{" "}
              </p>
              <p>
                <i>
                  * Una vez termine el directo, colgaremos aquí la grabación
                  para que puedas volver a verlo tantas veces como quieras.
                </i>
              </p>
              <br></br>

              <a href={"https://meet.google.com/jwf-nvfe-qjd?authuser=2"}>
                <button
                  className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
                >
                  Acceder al directo
                </button>
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
                  directamente encima de él. Por eso lo enviaremos unos días
                  antes, para que tengas tiempo para imprimirlo.
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
                - Sesión de dudas post-directo.
              </h2>
              <h2 className="font-alternate text-2xl font-bold text-center">
                Cómo enviarnos tus dudas
              </h2>

              <br></br>

              <ol>
                <li>
                  <b>
                    Podrás enviarnos tus dudas por email hasta el día 19 de
                    octubre a las 23:59 (Madrid, España).
                  </b>{" "}
                  Pasado ese día, ya no responderemos dudas.{" "}
                </li>
                <li>
                  <b>
                    El email deberá tener el asunto: DUDAS PARA NO CAGARLA EN LA
                    OBRA.
                  </b>{" "}
                  Es decir, cuando nos pongamos a responder filtraremos los
                  emails con ese asunto, si no has puesto ese asunto, tu duda no
                  nos aparecerá y no la podremos responder.{" "}
                </li>
                <li>
                  Responderemos dudas que tengan que ver con el taller. Me
                  explico. Si nos preguntas cómo dibujar un salón para el
                  proyecto de tu tía-abuela… Pues no.
                </li>
                <li>
                  Una semana después, el día 26 de octubre 2024, publicaremos
                  las respuestas aquí. O sea, no solo contestaremos a tu duda,
                  si no que podrás ver las preguntas de otras personas y que
                  seguramente también te ayuden. Como siempre, te avisaremos por
                  email.{" "}
                </li>
              </ol>
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
