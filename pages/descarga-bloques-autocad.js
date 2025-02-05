import SubscriptionForm from "../components/Form";

const DownloadAutocadBlockPage = () => {
  const FORM_DATA = {
    titleForm: "",
    textButton: "Suscribirme",
    label: "Bloques-Bienvenida ",
    id: "fieldtrdhily",
    name: "cm-f-trdhily",
  };

  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-20  my-12">
        <header>
          <h1 className="text-4xl sm:text-5xl  sm:leading-[60px] text-left  pb-16 font-bold">
            SUSCRÍBETE A LA NEWSLETTER Y RECIBE DE REGALO + 500 BLOQUES DE
            INTERIORISMO DE AUTOCAD
          </h1>

          <h2 className="text-2xl font-semibold text-left  pb-12">
            Los que nosotros usamos en nuestros proyectos profesionales de
            arquitectura e interiorismo y que, ahora, puedes usar tú también.{" "}
            <br></br> Al suscribirte en la caja de suscripción. <br></br> Es
            gratis.
          </h2>
        </header>

        <SubscriptionForm
          titleForm={FORM_DATA.titleForm}
          textButton={FORM_DATA.textButton}
          id={FORM_DATA.id}
          name={FORM_DATA.name}
        />
        <br></br>
        <br></br>

        <div className="flex justify-center">
          <img
            className="text-center"
            src={"/img/macBook-bloques-autocad.jpg"}
            alt="Imagen bloques autocad"
            width={400}
            height={200}
          />
        </div>

        <h2 className="text-2xl font-semibold text-left py-16">
          Qué NO vas a encontrar en este archivo de bloques:
        </h2>

        <ul>
          <li>
            Tus bloques no te aparecerán gigantes con respecto a tu dibujo ya
            que están todos dibujados en metros y así es como se van a insertar.
          </li>
          <li>
            No hay capas raras. O sea, son bloques que están en capa 0 y esto
            significa que no se importará ninguna capa rara en tu archivo de
            trabajo.
          </li>
          <li>
            Tus bloques no se van a imprimir creando un manchurrón negro en el
            folio: son bloques limpios y bien dibujados, sin líneas duplicadas
            ni cosas raras.
          </li>
          <li>Tampoco hay bloques anticuados. </li>
          <li>
            No vas a encontrar medidas o muebles irreales. Muchos de estos
            bloques los he dibujado yo misma para proyectos reales, esto
            significa que están{" "}
            <b>
              basados en mobiliario de marcas comerciales con medidas y diseños
              reales.
            </b>{" "}
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-left py-16">¿Hay truco?</h2>

        <p>Claro que sí.</p>
        <p>
          Para recibir el regalo de + 500 bloques profesionales de AutoCad,
          tendrás que suscribirte a nuestra newsletter.{" "}
        </p>
        <p>
          Si después de recibirlos no quieres recibir consejos profesinales de
          arquitectura, solo tendrás que darte de baja. Siempre será tu
          decisión. Y tan amigos.{" "}
        </p>
        <br></br>
        <br></br>

        <SubscriptionForm
          titleForm={FORM_DATA.titleForm}
          textButton={FORM_DATA.textButton}
          id={FORM_DATA.id}
          name={FORM_DATA.name}
        />
        <br></br>
        <br></br>

        <h2 className="text-2xl font-semibold text-left pb-16">
          Algunos comentarios no solicitados de la gente que al suscribirse ha
          recibido los bloques…
        </h2>

        <q className="px-6 mb-12 block">Me ha encantado.</q>
        <q className="px-6 mb-12 block">
          Muchas gracias lo he recibido, descargado y voy a utilizarlo. Que
          pasen un excelente día.
        </q>
        <q className="px-6 mb-12 block">
          Un millon de GRACIASSS!! ME ES SUPER UTIL!!! RECIEN ESTOY EMPEZANDO A
          TRABAJAR DISEÑANDO y me han bendecidooo
        </q>
        <q className="px-6 mb-12 block">
          recibido muchas gracias por su valiosa ayuda
        </q>
        <q className="px-6 mb-12 block">
          Señores LAURA y JOAQUIN. Muchas gracias por compartir sus bloques para
          mi tarea.
        </q>
        <q className="px-6 mb-12 block">
          Muchas gracias por los bloques se lo agradezco.
        </q>
        <q className="px-6 mb-12 block">Muy agradecido, impecable trabajo!</q>
        <q className="px-6 mb-12 block">
          Muy agradecido de su aporte y la felicito por sus buenas ideas (…). Le
          reitero mis gracias y el Señor la bendiga siempre
        </q>
        <q className="px-6 mb-12 block">
          Muchas gracias, agradezco que se tomen el tiempo para ayudar a otros,
          en mi caso que soy estudiante estoy más que agradecido, bonito día
        </q>
        <q className="px-6 mb-12 block">
          Estimados ! muchas gracias por los bloques ! estan excelentes Saludos
          !
        </q>
        <q className="px-6 mb-12 block">Muchísimas gracias saludos</q>
        <q className="px-6 mb-12 block">muchas gracias!!!!!!!!!!! </q>
        <q className="px-6 mb-12 block">Gracias! me servirá de mucho.</q>
        <q className="px-6 mb-12 block">Saludos y gracias desde Chile</q>
        <q className="px-6 mb-12 block">GRACIAS!</q>
        <q className="px-6 mb-12 block">MUCHAS GRACIAS.</q>
        <q className="px-6 mb-12 block">Un millón de gracias. Bendiciones  </q>
        <q className="px-6 mb-12 block">Muchas gracias es de gran ayuda</q>
        <q className="px-6 mb-12 block">Mil gracias !!</q>
        <q className="px-6 mb-12 block">
          muchas gracias!! <br></br> me han encantado, son muy lindos
        </q>
        <q className="px-6 mb-12 block">gracias :D </q>
        <q className="px-6 mb-12 block">Gracias</q>

        <br></br>
        <br></br>
        <br></br>
        <p>Hay muchos, muchos más. </p>
        <p>
          Si tú también quieres recibir tus +500 bloques de autocad de regalo,
          tendrás que suscribirte a nuestra newsletter. Puedes apuntarte aquí
          abajo:{" "}
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

export default DownloadAutocadBlockPage;
