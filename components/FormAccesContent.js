import { useState } from "react";

const FormAccesContent = ({ correctPassword, setPassword }) => {
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const handleSumbit = (e) => {

    e.preventDefault();
    if (Object.values(correctPassword).includes(inputPassword.toLowerCase())) {

      setIsErrorPassword(false);
      setPassword(inputPassword.toLowerCase());
    } else {
      setIsErrorPassword(true);

      setTimeout(() => {
        setIsErrorPassword(false);
      }, 3000);
    }
  };

  return (
    <>
      <div>
        <div className="  bg-stone-50 py-4 rounded-xl  leading-10">
          <h1>Introduce contraseña</h1>

          <form className="flex space-x-2" onSubmit={(e) => handleSumbit(e)}>
            <input
              maxLength="40"
              placeholder="Introduce la contraseña"
              required
              name="password"
              className=" grow font-playfair outline-none border border-stone-950 min-w-0 w-full bg-stone-100   px-3.5 py-2 text-stone-950 tracking-widest text-xl text-center sm:leading-6 "
              onChange={(event) => setInputPassword(event.target.value)}
            ></input>
            <button
              className=" w-full font-playfair bg-bid-wine tracking-widest text-stone-50  py-3 text-xl  duration-150 hover:opacity-90 "
              type="submit"
            >
              Entrar
            </button>
          </form>

          <div
            className={` ${
              !isErrorPassword && "opacity-0"
            } mt-2 text-sm p-2 bg-red-300  text-red-900 rounded-lg px-4`}
          >
            Upsss, contraseña incorrecta.
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAccesContent;
