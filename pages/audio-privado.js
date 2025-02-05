import SubscriptionForm from "../components/Form";

const AudioPrivadoProyectoEjecucion = () => {
  const FORM_DATA = {
    titleForm: "",
    textButton: "Suscribirme y recibir audio",
    label: "Audio-bienvenida",
    id: "fieldtridtuj",
    name: "cm-f-tridtuj",
  };

  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-20 my-12">
        <header>
          <h1 className="text-2xl sm:text-5xl  sm:leading-[60px] text-left  pb-16 font-bold">
            La frase que debes poner en un email para una oferta de trabajo de
            Interiorismo (y nadie hace). Y dos cosas más...
          </h1>
        </header>

        <h2 className="text-2xl font-semibold text-left py-12">
          Descárgate gratis un audio privado de 13 minutos y 05 segundos donde
          contamos dos cosas:
        </h2>

        <ul>
          <li>
            La forma en la que Laura consiguió un puesto 100% de teletrabajo en
            el equipo de Interiorismo de una de las cadenas de restauración más
            instagrameables de España, con horario flexible (y habiendo
            rechazado otras dos ofertas antes). Es un detalle sutil, algo que
            cualquier persona puede hacer, pero que casi nadie hace.
          </li>
          <li>
            Un detalle que aplicábamos en mi antiguo estudio cuando estábamos
            delante de un potencial cliente para mostrar autoridad, y con el que
            conseguimos cerrar multitud de ventas (hablo de viviendas
            millonarias).
          </li>
        </ul>

        <p>
          Para recibir el audio privado, tendrás que suscribirte a nuestra
          newsletter. Si luego no quieres recibir consejos profesionales de
          arquitectura, recuerda que suscribirte es gratis, darte de baja,
          también.
        </p>

        <SubscriptionForm
          titleForm={FORM_DATA.titleForm}
          textButton={FORM_DATA.textButton}
          id={FORM_DATA.id}
          name={FORM_DATA.name}
        />

        <h2 className="text-2xl font-semibold text-left py-12">
          Algunos comentarios no solicitados de la gente que al suscribirse ha
          recibido el audio privado…
        </h2>

        <q className="px-6 mb-12 block">
          El audio privado, es un puntazo!! Estoy creándolo con la casa en donde
          vivo
        </q>
        <q className="px-6 mb-12 block">Me ha encantado.</q>
        <q className="px-6 mb-12 block">
          Muchas gracias lo he recibido (…) y voy a utilizarlo. Que pasen un
          excelente día.
        </q>
        <q className="px-6 mb-12 block">
          Un millon de GRACIASSS!! ME ES SUPER UTIL!!! RECIEN ESTOY EMPEZANDO A
          TRABAJAR DISEÑANDO y me han bendecidooo
        </q>
        <q className="px-6 mb-12 block">
          Muy agradecido de su aporte y la felicito por sus buenas ideas (…). Le
          reitero mis gracias y el Señor la bendiga siempre
        </q>
        <q className="px-6 mb-12 block">
          Muchas gracias, agradezco que se tomen el tiempo para ayudar a otros,
          en mi caso que soy estudiante estoy más que agradecido, bonito día
        </q>
        <q className="px-6 mb-12 block">Muchísimas gracias saludos</q>
        <q className="px-6 mb-12 block">muchas gracias!!!!!!!!!!! </q>
        <q className="px-6 mb-12 block">Gracias! me servirá de mucho.</q>
        <q className="px-6 mb-12 block">Saludos y gracias desde Chile</q>
        <q className="px-6 mb-12 block">GRACIAS!</q>
        <q className="px-6 mb-12 block">MUCHAS GRACIAS.</q>
        <q className="px-6 mb-12 block">MUCHAS GRACIAS</q>
        <q className="px-6 mb-12 block">Un millón de gracias. Bendiciones </q>
        <q className="px-6 mb-12 block">Muchas gracias es de gran ayuda</q>
        <q className="px-6 mb-12 block">Mil gracias !!</q>
        <q className="px-6 mb-12 block">gracias :D</q>
        <q className="px-6 mb-12 block">Gracias</q>

        <br></br>
        <br></br>
        <br></br>
        <p>Hay muchos, muchos más. </p>
        <p>
          Si tú también quieres recibir el audio privado con el error que casi
          todo el mundo comete al entrevistarte con un potencial cliente o con
          tu futuro jefe, tendrás que suscribirte a nuestra newsletter. Puedes
          apuntarte aquí abajo:{" "}
        </p>
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
