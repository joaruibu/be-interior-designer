import React, { useEffect, useState } from "react";
import FormAccesContent from "../components/FormAccesContent";

const MasterClass9ErroresMasFrecuentesEstasDentro = () => {
  const [password, setPassword] = useState("");

  const PASWORDS = {
    BONUS_1: "bonus 1",
    BONUS_2: "bonus 2",
    BONUS_3: "bonus 3",
  };

  return (
    <div className="w-full h-[90vh] grid place-content-center font-playfair">
      <div className="bg-stone-50 p-4  my-8  px-4 grid place-content-center leading-10">
        <h1 className="text-5xl font-playfair">
          Acceso Masterclass 9 Errores AutoCAD
        </h1>
        <br></br>

        <FormAccesContent
          correctPassword={PASWORDS}
          setPassword={setPassword}
          password={password}
        ></FormAccesContent>

        <h2 className="underline text-bid-terracotta font-bold">
          Be Interior Designer
        </h2>
        {password === PASWORDS.BONUS_1 && <p>Veo el Bonus 1</p>}
        {password === PASWORDS.BONUS_2 && <p>Veo el Bonus 2</p>}
        {password === PASWORDS.BONUS_3 && <p>Veo el Bonus 3</p>}
      </div>
    </div>
  );
};

export default MasterClass9ErroresMasFrecuentesEstasDentro;
