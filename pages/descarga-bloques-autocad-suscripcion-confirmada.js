import React from "react";

const DescargaBloquesAutocadSuscripcionConfirmada = () => {
  return (
    <div className="w-full h-[90vh] grid place-content-center font-playfair">
      <div className="  bg-stone-50 p-4  my-8  px-4 grid place-content-center leading-10">
        <h1 className="text-5xl font-bigilla">Bloques enviados </h1>
        <br></br>
        <p>
          <b>
            Comprueba tu bandeja de entrada para ver tu email con los bloques.{" "}
          </b>
        </p>
        <p>
          Puede puede tardar hasta 10 minutos en llegar o que esté en spam, en
          ese caso añade la dirección info@beinteriordesginer.com a tu lista de
          contactos.
        </p>
      </div>
    </div>
  );
};

export default DescargaBloquesAutocadSuscripcionConfirmada;
