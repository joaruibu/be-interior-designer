import React from "react";

const DescargaBloquesAutocadUltimoPasoSuscripcion = () => {
  return (
    <div className="w-full h-[90vh] grid place-content-center font-playfair">
      <div className="bg-stone-50 p-4  my-8  px-4 grid place-content-center leading-10">
        <h1 className="text-5xl font-bigilla">
          No tienes tus bloques, todavía{" "}
        </h1>
        <br></br>
        <p>Último paso.</p>
        <p>Ya no queda nada por terminar.</p>
        <p>
          Lo único que debes hacer es{" "}
          <b> clicar en el enlace del mail que te acabo de mandar </b>al correo
          que me has dejado.
        </p>
        <p>
          Puede que esté en spam, en ese caso añade la dirección
          info@beinteriordesginer.com a tus lista de contactos.
        </p>
        <br></br>
        <h2 className="underline text-bid-wine font-bold">MUY IMPORTANTE:</h2>
        <p>
          <b>
            Sólo después de confirmar te llegará automáticamente un email de
            bienvenida con tus bloques. Puede tardar hasta 10 minutos en llegar,
            pero llega.{" "}
          </b>{" "}
        </p>
        <br></br>
        <h2 className=" text-bid-wine font-bigilla font-bold">
          Be Interior Designer
        </h2>
      </div>
    </div>
  );
};

export default DescargaBloquesAutocadUltimoPasoSuscripcion;
