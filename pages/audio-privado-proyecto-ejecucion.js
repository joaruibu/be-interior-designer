import SubscriptionForm from "../components/Form";

const AudioPrivadoProyectoEjecucion = () => {
  const FORM_DATA = {
    titleForm: "",
    textButton: "Suscribirme y recibir audio",
    label: "subs-home",
    id: "fieldtridtuj",
    name: "cm-triktii-triktii",
  };

  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-20  my-12">
        <header>
          <h1 className="text-2xl sm:text-5xl  sm:leading-[60px] text-left  pb-16 font-bold">
            La frase que debes poner en un email para una oferta de trabajo de
            Interiorismo y nadie escribe. <br></br> Y dos cosas mas...
          </h1>
        </header>

        <h2 className="text-2xl font-semibold text-left py-12">
          Descárgate gratis un audio de 13 minutos y 12 segundos donde te
          contamos dos cosas:
        </h2>

        <ul>
          <li>
            La forma en la que Laura consiguió un puesto en el equipo de
            Interiorismo en una de las cadenas de restauración mas
            instagrameables de España, puesto 100% de teletrabajo y horario
            flexible sin tener apenas experiencia como Interiorista.
          </li>
          <li>
            El detalle que hacía mi jefe cuando estaba delante de un posible
            cliente para mostrar autoridad y con el que consiguió cerrar
            multitud de ventas (hablo de viviendas millonarias).
          </li>
        </ul>

        <SubscriptionForm
          titleForm={FORM_DATA.titleForm}
          textButton={FORM_DATA.textButton}
          id={FORM_DATA.id}
          name={FORM_DATA.name}
        />
      </div>
    </div>
  );
};

export default AudioPrivadoProyectoEjecucion;
