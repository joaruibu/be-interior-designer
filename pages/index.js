import SubscriptionForm from "../components/Form";

const Home = () => {
  const FORM_DATA = {
    titleForm: "",
    textButton: "Suscribirme",
    label: "subs-home",
    id: "fieldjkthny",
    name: "cm-f-jkthny",
  };
  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-24  my-12">
        <header>
          <h1 className="text-4xl sm:text-5xl  sm:leading-[60px] text-left  pb-24  font-bold">
            Esto estresa a mucha gente.
          </h1>
        </header>
        <h2 className="text-2xl font-semibold text-left  pb-16">
          Igual a ti no.
          <br></br>
          <br></br>
          Puede ser.
        </h2>

        <p> También puede ser que esto te interese:</p>
        <br></br>
        <p>Hablamos de arquitectura.</p>
        <p>
          Te podría decir que hablamos de Arquitectura con A mayúscula, pero en
          realidad es que hablamos de la arquitectura real, no de la idealizada.{" "}
        </p>

        <p>
          Porque cuando hablamos de arquitectura hablamos de meteduras de pata
          tremendas en obra, como que se inunde una cocina, que todos al empezar
          cometemos.
        </p>
        <p>
          Y también de cómo hacer bien las cosas para evitar este tipo de
          errores desde el principio.{" "}
        </p>
        <p>
          {" "}
          También hablamos de cómo crear casas donde la gente quiera follar. Sí,
          de follar también hablamos.{" "}
          <b>
            {" "}
            Porque la gente en su casa no caga flores. Sino que caga y folla
            como cualquier otro ser humano. Y eso, cagar y follar, es algo que
            quieren hacer muy muy a gusto en su casa.
          </b>{" "}
        </p>

        <p>
          {" "}
          Por eso, hablar de arquitectura es también hablar de amar. Porque un
          buen interiorismo genera también momentos de encuentro y amor.{" "}
        </p>

        <p>
          También de cómo saber presentar tus presupuestos sin parecer un
          novato.
        </p>

        <p>
          Y también hablamos de cómo hacer tus proyectos para que los entienda
          el electricista, el fontanero, el constructor, y su puta madre, para
          que tu obra vaya bien y no discutas ni con la constructora ni con el
          cliente, al menos no más de lo necesario.{" "}
        </p>

        <br></br>
        <br></br>
        <p>
          Pero sobre todo, hablamos de cómo no depender de terceros para que te
          vaya bien en la vida como arquitecto, interiorista, arquitecto de
          interiores, delineante o lo que sea relacionado con el sector que
          hagas.
        </p>

        <p className="pl-6">
          No depender de ser funcionario (si vives en España sabes a qué me
          refiero).{" "}
        </p>
        <p className="pl-6">
          No depender de clientes casposos, si no que tú escojas quién sea tu
          cliente.{" "}
        </p>

        <p className="pl-6">
          No depender de que tu padre o tu madre tengan dinero para montarte un
          estudio y traerte clientes, (o heredar el de papa o mama).
        </p>

        <p className="pl-6">
          Ni tampoco de conseguir trabajo con un portfolio que… bueno, que por
          muy pro que seas, todo el mundo hace lo mismo.
        </p>

        <br></br>
        <br></br>

        <p>Y todo esto es algo que estresa mucho a mucha gente.</p>
        <br></br>
        <br></br>

        <p>A nosotros también nos estresó. </p>
        <p>
          Nos estresó porque no hubo nadie que nos dijera las cosas claras que
          te vamos a contar en esta newsletter y en nuestros productos.{" "}
        </p>
        <p>
          {" "}
          <b>
            Sospechamos que nadie te las ha dicho, igual que nadie nos las dijo
            a nosotros.{" "}
          </b>
        </p>

        <br></br>
        <br></br>
        <p>Bien.</p>
        <p>
          Si has leído esta parrafada pese a no entender la relación entre
          follar y el diseño, o al leer esto te asaltan un montón de dudas, o te
          parezco poco profesional, o soberbia, o vendehumos, o todas esas cosas
          juntas…. El problema no lo tengo yo, que no me conoces de nada. Si
          este es el caso, no tiene ningún sentido que te apuntes.
        </p>

        <p>Aclarado eso…</p>
        <br></br>
        <br></br>
        <p>Cada día escribimos un email con un consejo. </p>
        <br></br>
        <p>Día que estás fuera, consejo que te pierdes.</p>
        <br></br>
        <p>
          Si quieres unirte a las miles de personas que los reciben, te apuntas
          aquí abajo.
        </p>

        <SubscriptionForm
          titleForm={FORM_DATA.titleForm}
          textButton={FORM_DATA.textButton}
          id={FORM_DATA.id}
          name={FORM_DATA.name}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p className="font-bold  text-3xl">Soy más maja que las pesetas </p>
        <br></br>
        <br></br>

        <p>
          En España tenemos este dicho cuando alguien es muy muy simpático “
          <i>es más majo que las pesetas”.</i>{" "}
        </p>

        <p>
          Bueno, pues si pensabas que era soberbia con el texto anterior, vamos
          bien.
        </p>
        <p>
          Te digo que soy más maja que las pesetas porque al suscribirte
          recibirás de regalo un archivo con más de 500 bloques de interiorismo
          profesional.{" "}
        </p>
        <p>
          Si eres un Arquitecto con A mayúscula, me dirás que no son bloques de
          interiorismo sino de Arquitectura con A mayúscula. Bueno, yo tus
          problemas personales no puedo solucionarlos, el motivo para el que
          estoy aquí ya te lo he dicho arriba.{" "}
        </p>

        <p>
          Pero igualmente si quieres recibir estos bloques de regalo, es aquí:
        </p>

        <SubscriptionForm
          titleForm={FORM_DATA.titleForm}
          textButton={FORM_DATA.textButton}
          id={FORM_DATA.id}
          name={FORM_DATA.name}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <p className="font-bold  text-3xl">
          Algunos comentarios no solicitados:
        </p>

        <br></br>
        <br></br>
        <q className="px-6 mb-12 block">
          Por favor no enviar correos de ninguna índole a este correo, si este
          correo se encuentra suscrito a su página web por favor retirarla, ya
          que no encontramos suscripción vigente en su página web ni cómo
          retirar la suscripción, si ustedes no pueden retirar la afiliación de
          este correo les solicito instrucciones claras con links para poder
          retirar la suscripción para no recibir correos de ninguna índole,
          agradezco su comprensión y espero su respuesta.
        </q>

        <p>
          Sí, recibimos respuestas por email, algunas de gente no tan majas como
          yo, como la de arriba.
          <br></br>
          <br></br>
          Pero también hay otras como las de abajo que hacen que todo el
          esfuerzo merezca la pena:{" "}
        </p>
        <br></br>
        <q className="px-6 mb-12 block">
          Muchas gracias Laura, que dios bendiga su trabajo. Muchos exitos.
        </q>

        <br></br>

        <q className="px-6 mb-12 block">
          Buenos días, estoy más que encantado de recibir un mail tan bien
          redactado y persuasivo. (…) sigan así
        </q>

        <q className="px-6 mb-12 block">
          Muchas gracias Laura y Joaquin por este aporte, estoy seguro que al
          igual que a mi habemos muchos que nos serán de mucha ayuda.
        </q>

        <q className="px-6 mb-12 block">
          Mucha gracias por el contenido estoy seguro sacarle provecho
          bendiciones
        </q>

        <q className="px-6 mb-12 block">
          Muy agradecido por su valiosa información.
          <br></br>
          Saludos cordiales
        </q>

        <q className="px-6 mb-12 block">Muchísimas gracias saludos</q>
        <q className="px-6 mb-12 block">muchas gracias!!!!!!!!!!!</q>
        <q className="px-6 mb-12 block">Gracias</q>

        <br></br>
        <br></br>

        <p>
          Hay muchos, muchos más. Pero si te gusto con la faceta de soberbia,
          igual piensas que estas respuestas que nos llegan por email me los he
          inventado…
        </p>
        <br></br>

        <q className="px-6 mb-12 block">
          Un millon de GRACIASSS!! ME ES SUPER UTIL!!! RECIEN ESTOY EMPEZANDO A
          TRABAJAR DISEÑANDO y me han bendecidooo
        </q>

        <q className="px-6 mb-12 block">
          muchas gracias por su aporte sos muy amable
        </q>

        <q className="px-6 mb-12 block">Saludos y gracias desde Chile</q>
        <q className="px-6 mb-12 block">
          Señores LAURA y JOAQUIN. Muchas gracias por compartir sus bloques para
          mi tarea.
        </q>
        <q className="px-6 mb-12 block">
          Muchas gracias por los bloques se lo agradezco.
        </q>
        <q className="px-6 mb-12 block">Muy agradecido, impecable trabajo!</q>
        <br></br>
        <p>
          En cualquier caso, si tú también quieres recibir nuestro aporte con un
          consejo diario de arquitectura, y probar los bloques de los que hablan
          los que ya están dentro… para apuntarte es abajo:{" "}
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

export default Home;
