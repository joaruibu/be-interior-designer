import React, { useState } from "react";
import FormAccesContent from "../components/FormAccesContent";
import Dropdown from "../components/Dropdown";
const CursoProyectosEjecucionInteriorismoDentro = () => {
  const [password, setPassword] = useState("");

  const PASSWORDS = {
    PASSWORD_0: "33333",
    PASWORD_1: "NoLaPifiesEnTuObra",
  };

  const FECHA_DIRECTO = " 18 de julio a las 17:00 (Madrid)";

  const eventsRecords = [
    {
      title: "Grabación resolución dudas 15 abril",
      link: "https://drive.google.com/file/d/1WxrCF8ZiQytHfPpsl6WJLCl7LKMm5ipa/preview",
    },
  ];

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
            <h1 className="text-5xl font-playfair text-center">
              Acceso al curso: Proyecto de Ejecución de interiorismo vivienda
              real
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
          <div className="p-4 sm:px-8 sm:pt-36">
            <h1 className="text-5xl font-playfair text-center pb-24">
              Curso: Proyecto de Ejecución de interiorismo vivienda real
            </h1>

            <br></br>
            <br></br>

            <p className="text-bid-terracotta">
              <i>
                En esta página damos muchos recursos, no solo el curso. Por
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
                - El Curso.
              </h2>
              <br></br>
              <iframe
                src="https://drive.google.com/file/d/1-X02SVhP84S-1KNgTZB545wA428-lR_f/preview"
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
                Ver índice del curso
              </a>
            </div>

            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - PDF de Proyecto de ejecución de interiorismo Vivienda.
              </h2>
              <br></br>
              <a
                href={
                  "https://drive.google.com/uc?export=download&id=1bHs-Z7Ey6qMfUnXc3hLkJs4ovg79hPPO"
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
                - DWG de Proyecto de ejecución de interiorismo Vivienda.
              </h2>
              <br></br>
              <a
                href={
                  "https://drive.google.com/uc?export=download&id=1ZvEscGzjm5A_exJ9j3wBFCQ4U9Z6Kd6z"
                }
                className=""
              >
                <button
                  className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
                >
                  Descargar DWG proyecto
                </button>
              </a>
            </div>

            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - Recomendaciones para el CURSO.
              </h2>
              <br></br>
              <ol className="px-6">
                <li>
                  Recomendamos imprimir el pdf del Proyecto de Ejecución para
                  que puedas seguir mejor el curso y hacer anotaciones
                  directamente encima de él.
                </li>
                <li>
                  Si no lo imprimes porque eres como Laura que se organiza todo
                  en digital, prepararte el pdf en tu tablet o dispositivo donde
                  puedas tomar notas en el documento.
                </li>
                <li>
                  Coge papel y boli, o tu app de notas, y si durante el curso te
                  entra una duda, apúntala. A todos nos ha pasado que nos asalta
                  una pregunta pero a la hora ya se ha olvidado. Tienes la
                  oportunidad de resolver tus dudas con nosotros, no la
                  desaproveches.
                </li>
              </ol>
            </div>

            <div className="">
              <h2 className="font-alternate text-3xl font-bold leading-[42px] pb-8">
                - Directo + dudas del curso.
              </h2>
              <br></br>

              <p>
                Recuerda que tienes 30 días de soporte por email desde el
                momento de compra. Escríbenos a{" "}
                <a
                  className="text-bid-wine underline"
                  href="mailto:info@beinteriordesigner.com "
                >
                  info@beinteriordesigner.com
                </a>{" "}
                con el asunto: SOY UNA MANITAS. Así podremos filtrar el email y
                darte prioridad cuando nos escribas.
              </p>
              <p>
                Además, haremos el directo de resolución de dudas grupal el{" "}
                {FECHA_DIRECTO}.
              </p>
              <p>
                Cuando llegue la hora del directo, clica en el botón de abajo
                para acceder.{" "}
              </p>
              <p>
                <i className="text-xs">
                  * Una vez termine el directo, colgaremos aquí la grabación
                  para que puedas volver a verlo tantas veces como quieras.
                </i>
              </p>
              <br></br>

              <a href={""} className="">
                <button
                  disabled
                  className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150   opacity-20`}
                >
                  Acceder al directo de dudas
                </button>
              </a>

              <div className="pt-12">
                {eventsRecords.map((event) => {
                  return (
                    <div className="mt-12" key={event.title}>
                      <Dropdown title={event.title}>
                        <div className="relative w-full max-w-2xl mx-auto aspect-video">
                          <iframe
                            src={event.link}
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </Dropdown>
                    </div>
                  );
                })}
              </div>
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

export default CursoProyectosEjecucionInteriorismoDentro;
