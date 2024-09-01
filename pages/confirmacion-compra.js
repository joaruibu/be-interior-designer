import React from "react";

const ConfirmacionCompra = () => {
  return (
    <div className="w-full h-[90vh] grid place-content-center font-playfair">
      <div className="bg-stone-50 p-4  my-8  px-4 grid place-content-center leading-10">
        <h1 className="text-5xl font-bigilla">Estás dentro. </h1>
        <br></br>
        <p>Todo ha salido bien.</p>
        <p>
          En breves recibiras un email con toda la información. Y desde ahora
          tienes nuestro email info@beinteriordesginer para preguntarnos las
          dudas que tengas sobre el taller
        </p>
        <p>¡Hasta pronto!.</p>

        <br></br>
        <h2 className="underline text-bid-terracotta font-bold">
          Be Interior Designer
        </h2>
      </div>
    </div>
  );
};

export default ConfirmacionCompra;
