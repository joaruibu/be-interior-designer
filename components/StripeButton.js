import Image from "next/image";
import React from "react";

const StripeButton = ({ urlStripe, children, title, price }) => {
  return (
    <div className="py-12">
      <span className="block italic">*Pago seguro con tarjeta de crédito</span>
      <span className="block text-center text-4xl py-8">
        {title} <span className="text-bid-aqua">{price} </span>
      </span>
      <span className="block text-center underline pb-12">
        {" "}
        Impuestos incluidos
      </span>
      <a href={urlStripe} target="_self">
        <button
          className={`w-full font-playfair bg-bid-terracotta tracking-widest text-stone-50  py-3 text-2xl  duration-150 hover:opacity-90 `}
        >
          {children}
        </button>
      </a>
      <div className="flex mt-3 justify-center">
        <Image
          className="text-center"
          src={"/img/cards-methods.png"}
          alt="stripe"
          width={300}
          height={100}
        />
      </div>
    </div>
  );
};

export default StripeButton;
