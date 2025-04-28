import React, { useEffect, useState } from "react";

const SubscriptionForm = ({ titleForm, textButton, label, id, name }) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://js.createsend1.com/javascript/copypastesubscribeformlogic.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <div className="py-6  rounded-md items-center">
            <div className=" mb-4 sm:mb-2 font-bold font-montserrat lg:col-span-7">
              <h6 dangerouslySetInnerHTML={{ __html: titleForm }}></h6>
            </div>

            <form
              className="js-cm-form"
              id="subForm"
              action="https://www.createsend.com/t/subscribeerror?description="
              method="post"
              data-id="191722FC90141D02184CB1B62AB3DC26865DFA49DECBA93A82438BBBC706524CCAC9BE76E98EAFEB7FCDB2F973051BC8951F4666812000B07AF28DED6B012C3A"
            >
              <div className="flex flex-col space-y-2 mb-2">
                <input
                  autoComplete="Email"
                  aria-label="Dirección de email"
                  id="fieldEmail"
                  maxLength="200"
                  name="cm-triktii-triktii"
                  placeholder="Tu email"
                  required="required"
                  type="email"
                  className="grow font-playfair outline-none border border-stone-950 min-w-0  w-full bg-stone-100   px-3.5 py-2 text-stone-950 tracking-widest text-xl text-center sm:leading-6 js-cm-email-input qa-input-email"
                ></input>
                <input
                  id="cm-privacy-consent-hidden"
                  name="cm-privacy-consent-hidden"
                  type="hidden"
                  value="true"
                ></input>
                <div>
                  <input
                    type="hidden"
                    value="1"
                    aria-label={label}
                    id={id}
                    maxLength="200"
                    name={name}
                  ></input>
                  {/* Este input mete por defecto el label para la automatización de venta del curso PE, si queremos que al suscribirse no entren en esta automatización por defecto, habrá que editarlo */}
                  <input
                    type="hidden"
                    value="1"
                    aria-label="trigger-venta-curso-PE"
                    id="fieldtytrod"
                    maxLength="200"
                    name="cm-f-tytrod"
                  ></input>
                </div>

                <button
                  className="w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-xl duration-150 hover:opacity-90 "
                  type="submit"
                >
                  {textButton}
                </button>
              </div>

              <div className="flex items-center mb-2">
                <input
                  aria-required=""
                  className="mr-2"
                  id="cm-privacy-consent"
                  name="cm-privacy-consent"
                  required
                  type="checkbox"
                ></input>
                <label
                  className="text-xs sm:text-sm font-light"
                  htmlFor="cm-privacy-consent"
                >
                  Acepto la{" "}
                  <a
                    className="underline text-gray-900"
                    href="https://beinteriordesigner.com/privacidad"
                    target="_blank"
                  >
                    política de privacidad
                  </a>{" "}
                  y suscribirme.
                </label>
              </div>

              <p className=" text-[9px] leading-3 pb-0 text-gray-700">
                {" "}
                Para cumplir con el RGPD (Reglamento General de Protección de
                Datos) y entender que tus datos están seguros, debes leer y
                aceptar{" "}
                <a
                  className="underline text-gray-900"
                  href="https://beinteriordesigner.com/privacidad"
                  target="_blank"
                >
                  la política de privacidad.
                </a>{" "}
                Tus datos serán guardados en Campaing Monitor proveedor de email
                marketing. Campaing Monitor también cumple con el RGPD, así que
                todo está bien protegido y amparado por la ley. Recuerda que
                puedes darte de baja cuando quieras.
              </p>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default SubscriptionForm;
