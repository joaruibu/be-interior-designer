import React from "react";

const ErrorCompra = () => {
  return (
    <div className="w-full h-[90vh] grid place-content-center font-playfair">
      <div className="bg-stone-50 p-4  my-8  px-4 grid place-content-center leading-10">
        <h1 className="text-5xl font-bigilla">Compra NO confirmada. </h1>
        <br></br>
        <p>Ha ocurrido un error en el proceso.</p>
        <p>
          No se te ha realizado ningun cargo, por favor vuelve a realizar el
          proceso de compra, y en el caso de que el problema persista, puedes
          escribirnos a info@beinteriordesigner.com.
        </p>

        <br></br>
        <h2 className=" text-bid-wine font-bigilla font-bold">
          Be Interior Designer
        </h2>
      </div>
    </div>
  );
};

export default ErrorCompra;
