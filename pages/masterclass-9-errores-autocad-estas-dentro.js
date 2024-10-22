import React, { useEffect, useState } from "react";
import FormAccesContent from "../components/FormAccesContent";

const MasterClass9ErroresMasFrecuentesEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASSWORDS = {
    PASSWORD_1: "AutocadEsTuAmigo",
    PASSWORD_2: "DibujaConCabeza",
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
            <h1 className="text-5xl font-playfair text-center">
              Acceso Masterclass 9 Errores AutoCAD
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
          <div className="p-4 sm:p-36">
            <h1 className="text-5xl font-playfair text-center pb-24">
              Masterclass Los 9 Problemas más Frecuentes en AutoCad.
            </h1>

            <br></br>
            <br></br>

            <p className="text-bid-terracotta">
              <i>
                En esta página damos muchos recursos, no solo la masterclass.
                Por favor,
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
                - La Masterclass.
              </h2>
              <br></br>
              <p>
                <i>
                  Nota importante: esta masterclass contiene mucha información,
                  muchos detalles. Puedes volver a verla tantas veces como
                  quieras, te recomendamos que lo hagas.
                </i>
              </p>
              <br></br>

              <iframe
                src="https://drive.google.com/file/d/1O7yy0XXGoqNcedAvUPuT-K_499hP-lE5/preview"
                width="768px"
                height="432px"
                allowFullScreen
              ></iframe>
            </div>

            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - Bonus - Plantilla de Comandos de AutoCad (para que diseñes
                como un pro).
              </h2>
              <br></br>
              <p>
                Hemos decidido regalarte este bonus de bienvenida, pero no
                queremos que pienses que tiene poco valor por el hecho de que
                sea un regalo. Es más, es seguro que lo pondremos a la venta más
                adelante.
              </p>
              <p>
                En el minuto 08:05 de la Masterclass te explico cómo usarlo y
                todo lo que necesitas saber sobre este bonus.{" "}
              </p>
              <br></br>

              <a
                href={
                  "https://www.notion.so/beinteriordesigner/a36d525517794b1d8717d8bb53452388?v=a163840bbbe34642b25cda190023cb5b"
                }
                target="_blank"
              >
                <button
                  className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
                >
                  Bonus - Plantilla comandos AutoCad
                </button>
              </a>
            </div>

            {password === PASSWORDS.PASSWORD_1 && (
              <div className=" mb-36">
                <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                  - Bonus I.
                </h2>
                <br></br>
                <iframe
                  src="https://drive.google.com/file/d/1wb_98rt1F6ImnBVHyBbGVol7oby3ie2k/preview"
                  width="768px"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <br></br>
              </div>
            )}

            {(password === PASSWORDS.PASSWORD_1 ||
              password === PASSWORDS.PASSWORD_2) && (
              <div className=" mb-36">
                <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                  - Bonus II.
                </h2>
                <br></br>
                <iframe
                  src="https://drive.google.com/file/d/1pQ9vvXynMQbb-lXbxzwG6NhPXF_uq7Zq/preview"
                  width="768px"
                  height="432px"
                  allowFullScreen
                ></iframe>
                <br></br>
                <a
                  href={
                    "https://drive.google.com/uc?export=download&id=1FhLYA0gRVfFSIKhX3iddCEiDQ9AEbTvf"
                  }
                  target="_blank"
                >
                  <button
                    className={`w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
                  >
                    Bonus - Bloque dínamico autocad
                  </button>
                </a>
              </div>
            )}

            <div className=" mb-36">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - Recomendaciones para ver la Masterclass.
              </h2>
              <br></br>
              <ol className="px-6">
                <li>
                  Recomendamos ver la masterclass por orden. La masterclass es
                  muy progresiva, es decir, si ves el Problema 9 sin ver antes
                  el Problema 3, no lo entenderás bien y no podrás solucionarlo.
                  No seas ansias y ve paso a paso.
                </li>
                <li>
                  Recomendamos ver los 9 problemas del tirón. Luego te
                  recomendamos que lo vuelvas a ver con tu autocad abierto, y te
                  vayas parando en todos los errores relevantes que tú cometas
                  para poner en práctica sus soluciones. Son 59 minutos de
                  masterclass de alto nivel sobre dibujo en el sector de la
                  construcción y te vas a encontrar con bastantes detalles
                  interesantes. Así que para el vídeo, ponlo en práctica y
                  sigues. Hay mucha información.
                </li>
              </ol>
            </div>

            <div className="">
              <h2 className="font-alternate text-3xl font-bold leading-[42px]">
                - Índice de la Masterclass.
              </h2>
              <br></br>
              <p>
                Como te decía antes, recomendamos ver la masterclass por orden.
                Pero si luego quieres recordar alguna cosa, te vendrá bien tener
                un índice del contenido:{" "}
              </p>
              <p>
                Problema 1: No saber escalar ni redibujar bien un pdf | 02:15
              </p>
              <p>
                Problema 2: La verdadera razón de que no dibujes rápido en
                AutoCad | 08:05
              </p>
              <p>Problema 3: En qué unidades trabajas. | 13:20</p>
              <p>Problema 4: No seas hortera. | 20:36</p>
              <p>
                Problema 5: En qué escala vas a representar tus planos. | 27:20
              </p>
              <p>
                Problema 6: La marranada de los textos en los planos. | 34:11
              </p>
              <p>Problema 7: Por qué mis cotas se leen mal. | 40:17</p>
              <p>Problema 8: Por favor, usa bien tus capas. | 47:48</p>
              <p>Problema 9: Imprime como un pro. | 53:51</p>
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

export default MasterClass9ErroresMasFrecuentesEstasDentro;
