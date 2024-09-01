import SubscriptionForm from "../components/Form";

const DownloadAutocadBlockPage = () => {
  const FORM_DATA = {
    titleForm: "",
    textButton: "Suscribirme",
    label: "subs-home",
    id: "fieldjkthny",
    name: "cm-f-jkthny",
  };

  return (
    <>
      <div className="w-full h-[100vh] flex items-center ">
        <div className=" w-full  bg-stone-50  flex ">
          <div
            style={{
              backgroundImage: `url("/img/macBook-bloques-autocad.jpg")`,
            }}
            className=" hidden sm:block basis-1/3 bg-cover border-r-2 border-bid-wine"
          ></div>

          <div className=" sm:basis-3/4 basis-full">
            <div className=" text-5xl pt-6 pl-12 pb-6 text-bid-wine font-bigilla border-b-2 border-bid-wine  w-full">
              Be <br></br> Interior <br></br>Designer
            </div>
            <h1 className="font-playfair  text-2xl font-bold px-12 pt-6">
              Recibe gratis 500 bloques de interiorismo profesional de AutCad
            </h1>

            <p className="px-12 pt-6  font-playfair">
              Suscríbete y consigue más de 500 bloques de Interiorismo, los que
              nosotros usamos en nuestros proyectos profesionales y que, ahora,
              puedes usar tú también.
            </p>
            <div className="px-12">
              <SubscriptionForm
                titleForm={FORM_DATA.titleForm}
                textButton={FORM_DATA.textButton}
                id={FORM_DATA.id}
                name={FORM_DATA.name}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadAutocadBlockPage;
