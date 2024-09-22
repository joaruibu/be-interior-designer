import React from "react";
import StripeButton from "../components/StripeButton";

const TallerProyectoEjecucionVivienda = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: " Taller proyecto ejecución de vivienda",
    buttonText: "Comprar taller",
    price: "140€",
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/link/be514d758b9331452e555b573a614f755abd99e5",
  };
  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-24  my-12">
        <header>
          <h1 className="text-4xl sm:text-5xl  sm:leading-[60px] text-left  pb-24 sm:pb-32 font-bold">
            Todos los arquitectos de interiores, decoradores, interioristas...
            quieren hacer proyectos de ejecución de interiorismo de forma
            profesional, pero casi todo el mundo hace lo mismo que los demás,
            mal.
            <br></br>
            Es raro.{" "}
          </h1>
        </header>
        <h2 className="text-2xl font-semibold text-left  pb-16">
          Si quieres saber porqué algunos proyectos de ejecución de reforma,
          decoración, interiorismo son profesionales, claros, los entiende sin
          ninguna duda el fontanero, electricista, el instlador del aire
          acondicionado y transmiten autoridad, en esta carta te voy a mostrar
          cómo.
        </h2>
        <h2 className="text-2xl font-semibold text-left pb-16">
          Pero antes de nada, ¿sabías que puedes perder mucho dinero con un mal
          proyectos de ejecución de reforma, decoración, interiorismo?
        </h2>
        <h2 className="text-2xl font-semibold text-lef  pb-16">
          Sí, perder, y mucho.
        </h2>
        <h2 className="text-2xl font-semibold text-left  pb-16">
          Deja que te cuente la cagada que cometí en una reforma en Valencia
          hace unos años…
        </h2>
        <p>
          {" "}
          Hace unos años andaba buscando una constructora para hacer una reforma
          en Valencia.{" "}
        </p>
        <br></br>
        <p>
          Resulta que esa noche me habían invitado a una cena con antiguos
          amigos de la carrera (de esos con los que has compartido noches largas
          dibujando proyectos pero que hace ya años que no ves).
        </p>
        <p>
          Y una de estas amigas me dijo que trabajaba como jefa de obra desde
          hace dos meses en una empresa de reformas y que quería cerrar ya
          alguna obra para quedar bien ante el jefe.{" "}
        </p>
        <br></br>
        <p>Yo buscaba empresa de reformas.</p>
        <p> Mi amiga en una empresa de reformas buscaba cliente. </p>
        <p> Más match que tinder.</p>
        <br></br>
        <p>
          {" "}
          Así que le pasé el proyecto de ejecución y ella vino a ver el piso
          antes de hacer el presupuesto.{" "}
        </p>
        <p className="font-bold">Detalle importante:</p>
        <br></br>
        <p className="font-bold pl-12 text-2xl">
          El presupuesto era el más barato que me habían enviado hasta el
          momento.{" "}
        </p>
        <br></br>
        <br></br>
        <p>Yo lo achaqué a que éramos conocidos...</p>
        <br></br>
        <p>Mis cojones.</p>
        <p>Error garrafal. </p>
        <br></br>
        <br></br>
        <br></br>
        <p className="font-bold text-2xl">
          Aquí va la primera de muchas lecciones que te contaremos en el
          directo….{" "}
        </p>
        <p>
          <span className="text-bid-terracotta font-bold">
            Nunca contrates al más barato.
          </span>
        </p>
        <p>¿Y la segunda lección?</p>
        <br></br>
        <p>En nuestra profesión los planos son como un contrato. </p>
        <p className="font-bold">
          Si algo está dibujado tienes las de ganar, si no, el que va a perder
          dinero eres tú.
        </p>
        <br></br>
        <p className="font-bold pl-12 text-2xl">
          Deja que te ponga un ejemplo…
        </p>
        <br></br>
        <br></br>
        <p>
          {" "}
          Poco antes de terminar la obra me pasaron el catálogo de pinturas de
          una marca que nos gustaba mucho.{" "}
        </p>
        <p>
          Escogimos un blanco con un ral específico y listo (sabrás que el
          blanco nunca es blanco, si no tranquilo qeu también te lo contaremos
          en el taller).
        </p>
        <br></br>
        <p>
          La cuestión es que llegó el pintor y ni el blanco ni la marca eran los
          escogidos.
        </p>
        <p>¿Por qué?</p>
        <p>
          Pues porque yo no lo había especificado en el proyecto de ejecución, o
          más bien, <b> lo había especificado pero de la forma incorrecta</b>{" "}
          (también te contarémos cuál es la forma correcta de especificar
          acabados dentro del taller).
        </p>
        <br></br>
        <br></br>
        <p>
          <span className="text-bid-terracotta font-bold">
            Igual después de leer esta historia no quieres comprar el curso o,
            más probablemente, te interese más comprarlo porque...
          </span>
        </p>
        <br></br>
        <br></br>
        <p>En este caso era pintura, aunque cara, no era el fin del mundo.</p>
        <p className="font-bold">
          Pero ¿y si en un proyecto de reforma de cocina no has marcado
          exactamente qué modelo de puerta y tirador quieres?{" "}
        </p>
        <p>¿Y la grifería? ¿Y los enchufes?</p>
        <p>Ya te lo digo yo: la constructora te pondrá su marca blanca.</p>
        <p>La de menor precio y menor calidad.</p>
        <p className="font-bold">
          Aunque el cliente te haya pagado un dineral por el proyecto, lo que
          recibirá serán calidades de mierda.{" "}
        </p>
        <p>
          Y tú lo que recibirás será malos modos, tener que pagar para enmendar
          el error, puede que entrar en pleitos por no cumplir contrato, y lo
          peor en nuestra opinión, una bajada enorme de tu credibilidad
          profesional. De tu estatus.{" "}
        </p>
        <br></br>
        <br></br>
        <div className="flex justify-center">
          <img
            className="text-center"
            src={"/img/meme-ventilador.jpg"}
            alt="Imagen meme ventilador"
            width={400}
            height={200}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <p className="font-bold">
          Si crees que eso son casos aislados es que no tienes ni puta idea de
          cómo funciona el sector de la construcción.
        </p>
        <p>Te lo decimos con mucho cariño, pero ni puta idea.</p>
        <p>
          ¿Cuántos casos conoces de gente que no acabe con una úlcera por
          reformar su casa (y que no sea familiar o amiguito de la
          constructora)?{" "}
        </p>
        <p>Pues eso.</p>
        <h2 className="text-2xl font-semibold text-left  pb-16">
          Puedes aprender estos errores con años de experiencia, cometiéndolos
          tú mismo, o… Comprar este taller y aprenderlo en una tarde.
        </h2>
        <StripeButton
          urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
          price={STRIPE_BUTTON_CONFIG.price}
          title={STRIPE_BUTTON_CONFIG.title}
        >
          {STRIPE_BUTTON_CONFIG.buttonText}
        </StripeButton>
        <br></br>
        <br></br>
        <h3 className="font-bold text-3xl pb-4 pt-8">
          {" "}
          A continuación, algunas de las lecciones que nosotros hemos aprendido
          a la fuerza y que a ti te vamos a enseñar en el taller, ahorrándote
          años de cagadas y dinero:{" "}
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <ul>
          <li>
            <b>
              Todos los planos que debe tener tu proyecto de ejecución de
              reformas / decoracion / interiorismo y que debes incluir en ellos,{" "}
            </b>{" "}
            si haces esto trasnmitirás una sensación de profesionalidad aunque
            no hayas trabajado nunca en ningún estudio o no hayas tenido ningún
            cliente.
          </li>

          <li>
            <b>
              El error que casi todos los interioristas cometen en un plano de
              electricidad, y la única pregunta que debes hacerte para
              solucionarlo. Solo una, pero que si no la respondes el plano no
              sirve para nada.{" "}
            </b>
          </li>
          <li>
            <b>
              La manera mas sencilla y rápida de hacer un plano de demoliciones{" "}
            </b>{" "}
            y quedarte tranquilo porque no se te ha olvidado nada.
          </li>

          <li>
            Un detalle que siempre hacemos en un plano de instalaciones (y que
            muy pocos saben), y que me hacen parecer un profesional de la
            hostia. Es un detalle que no requiere ni tiempo, ni inteligencia, ni
            demasiado esfuerzo.
          </li>

          <li>
            <b>
              Lo primero que debemos evitar a la hora de hacer un proyecto de
              ejecución de interiorismo o reforma{" "}
            </b>{" "}
            si no quieres parecer que no tienes nada importante que decir con
            tus planos. Y mucha gente lo hace.
          </li>

          <li>
            El motivo por el que los Arquitectos (los que presumen de sacarse la
            carrera en 9 años) te llaman “vende muebles” o “ coloca papel
            pintado”, y el sutil cambio que hará que te respeten, incluso que te
            envidien.
          </li>

          <li>
            La forma más sencilla de hacer un proyecto de ejecución de
            interiorismo o reforma y ganarte la confianza de tu cliente, la
            constructora o el instalador,{" "}
            <b>incluso aunque sea de tus primeros clientes.</b>
          </li>
        </ul>
        <br></br>
        <br></br>

        <h3 className="font-bold text-2xl pb-4  ">
          {" "}
          Por cierto, te contaremos también algo que aprendí trabajando haciendo
          casas de lujo en Mallorca… Si aplicas esto en tus proyectos de
          ejecución, tu cliente no te olvidará (y te querrá más).{" "}
        </h3>

        <p>
          Es algo para estar en la mente de tu cliente (y no es poner tu nombre
          bien grande).
        </p>
        <br></br>

        <br></br>
        <p>Más cosas que veremos en el taller…</p>
        <ul>
          <li>
            <b>
              Las 3 cosas que toda persona que empieza en el sector de la
              decoración, interiorimas o arquitectura de interiores, hace mal{" "}
            </b>{" "}
            y que solo el paso del tiempo y la pérdida de dinero, harán que lo
            descubra. Si lo hace.
          </li>

          <li>
            La forma en la que debes dibujar tus planos de instalaciones para
            que tu cliente, la empresa constructura o quien vea ese plano, te
            vea como un profesional que sabe lo que está haciendo. Haz esto y
            verás los resultados.
          </li>
          <li>
            <b>
              La pregunta que debes hacerte siempre que hagas unos planos de
              cotas y que si no te la haces, quedas como un profesional del
              montón.
            </b>
          </li>

          <li>
            El detalle más importante que aprendimos tanto después de trabajar
            en un estudio en Varsovia como participando en proyecto de un centro
            cultural en Francia, y que te permitirá trabajar para cualquier
            cliente o estudio del mundo.
          </li>

          <li>
            Mi padre siempre decía que la práctica hace al maestro. Nosotros
            años de experiencia tenemos unos cuantos y hemos creado este taller
            contando todo lo que hemos aprendido en todos estos años.
            <b>
              {" "}
              Puedes aprenderlo en una tarde (luego lo tendrás que poner tú en
              práctica) o en varios años trabajando en varios estudios (y en
              algunos estudios igual no aprendes nada, suele pasar).{" "}
            </b>{" "}
          </li>

          <li>
            <b>
              Por qué no saber la diferencia entre un plano de fontanería y
              saneamiento, te hará parecer un inútil delante del fontanero.
            </b>{" "}
            Lo entenderás en un minuto y lo recordarás para siempre.
          </li>

          <li>
            <b>
              Un fallo de concepto muy común entre los interioristas que les
              hace parecer unos “coloca muebles” frente a los industriales de
              obra,
            </b>{" "}
            solo este detalle hará que te vean como un profesional que sabe lo
            que hace.
          </li>
          <li>
            <b>
              Es normal que te sientas perdido al hacer unos planos de
              instalaciones,
            </b>{" "}
            bueno, normal si no sabes lo que explicamos en la segunda parte del
            taller, si sabes esto nunca mas te sentirás perdido.
          </li>
          <li>
            Una manera sutil de no parecer un becario…{" "}
            <b>
              aunque no tengas ni un solo cliente todavía o no hayas trabajado
              nunca en ningún estudio.
            </b>
          </li>
          <li>
            <b>
              El plano que siempre incluimos en nuestros proyectos de ejecución
              de interiorismo / decoración / reforma y que nos ha ahorrado miles
              de euros, y muchas discusiones, muchas.
            </b>
          </li>
        </ul>
        <StripeButton
          urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
          price={STRIPE_BUTTON_CONFIG.price}
          title={STRIPE_BUTTON_CONFIG.title}
        >
          {STRIPE_BUTTON_CONFIG.buttonText}
        </StripeButton>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="font-bold text-3xl pb-4 pt-8"> Preguntas frecuentes</h3>
        <br></br>
        <br></br>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            {" "}
            No entiendo de qué va el taller. ¿Qué me vas a explicar?
          </h4>
          <br></br>
          <p>
            Te vamos a contar un proyecto de ejecución de una reforma de
            vivienda al completo En concreto, el que realizamos para la reforma
            en Valencia que te hemos contado arriba.
          </p>
          <p>Lo destriparemos entero:</p>
          <ul>
            <li className="pb-2">Los planos que contiene. </li>
            <li className="pb-2">Qué deben contener esos planos. </li>
            <li className="pb-2">Las cagadas que hicimos. </li>
            <li className="pb-2">Las soluciones a las cagadas.</li>
            <li className="pb-2">Cómo fue la obra. </li>
            <li className="pb-2">El antes y el después. </li>
            <li className="pb-2">
              Las cagadas que surgieron meses después de finalizar la obra.
            </li>
            <li className="pb-2">Las soluciones a esas otras cagadas. </li>
            <li className="pb-2">Todo.</li>
          </ul>
          <p>
            No te vamos a enseñar ahora la vivienda porque no nos da la gana
            hacer spoiler. Pero para que decidas si te interesa o no, es una
            vivienda estándar de 70m2 aprox, en el centro de Valencia, séptima
            planta. Es decir, si haces o quieres hacer reformas de vivienda, los
            problemas que contamos son a los que tú también te enfrentarás.{" "}
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            {" "}
            ¿Cómo es el taller? ¿Cómo funciona?
          </h4>
          <br></br>
          <p>
            El taller consiste en un directo el día 5 de OCTUBRE a las 18:00
            hora España (Madrid).
          </p>

          <p>
            El día anterior recibirás por email el pdf del proyecto de
            ejecución.
          </p>
          <p>
            Nuestro consejo es que lo imprimas (si eres de escribir a mano),
            para que puedas tomar notas en el mismo pdf mientras hacemos el
            taller. Si eres digital, te recomendamos tener el proyecto abierto
            para poder hacer anotaciones encima.
          </p>

          <p>Vamos a dar mucho contenido, lo agradecerás. </p>
          <p>
            Además, nada más hacer la compra recibirás un email con las
            instruccioens de cómo acceder al taller y algo más… Pero esto solo
            lo descubrirá la gente que acceda al curso.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl "> ¿Cuanto dura el taller?</h4>
          <br></br>
          <p>
            No sabemos cuánto durará, estaremos el tiempo que haga falta, ni nos
            enrollaremos con paja ni cortaremos a una hora.
          </p>
          <p>
            Si te tienes que ir antes, no pasa nada. Se quedará grabado y podrás
            verlo cuando quieras y las veces que quieras.
          </p>
          <p>
            En cuanto la compres recibiras un mensaje de correo eléctrónico de
            cómo acceder.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Se va a grabar el taller? ¿Durante cuánto tiempo tendré acceso al
            taller?
          </h4>
          <br></br>
          <p>
            Sí. Todo se quedará grabado, podrás acceder a él cuando quieras, las
            veces que quieras durante un año como mínimo.{" "}
          </p>

          <p>
            ¿Solo un año? Probablemente esté mucho más tiempo porque en
            principio no tenemos pensado retirarlo, pero el compromiso es de un
            año como mínimo.
          </p>
          <p>
            Esto es así porque alojarlo cuesta dinero, nos podemos morir y mil
            otras cosas.{" "}
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Tiene soporte? ¿Y si tengo dudas?
          </h4>
          <br></br>
          <p>Resolveremos dudas. </p>
          <p>
            Cuando finalice el taller en directo, nos podrás enviar tus dudas
            durante dos semanas. Nos parece tiempo más que de sobra para que si
            no has podido acudir al directo, puedas verlo. Pasado ese tiempo
            revisaremos todas las dudas, las agruparemos y te compartiremos las
            respuestas. O sea, no solo contestaremos a tu duda, si no que podrás
            ver las preguntas de otras personas y que seguramente también te
            ayuden.{" "}
          </p>
          <p>
            Responderemos dudas que tengan que ver con el taller. Me explico. Si
            me preguntas cómo dibujar un salón para el proyecto de tu
            tía-abuela… Pues no.{" "}
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Cuál es su precio? ¿Bajará alguna vez?
          </h4>
          <br></br>
          <p>
            El precio de este taller es de {STRIPE_BUTTON_CONFIG.price} y nunca
            bajará.
          </p>
          <p>
            Nunca hacemos ofertas, ni black fridays, ni rebajas, ni nada. Es
            más, si de algo puedes estar seguro es que con el paso del tiempo el
            precio subirá.
          </p>
          <p>Este es el mejor precio al que va a estar este taller.</p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            Me parece caro para lo que das.
          </h4>
          <br></br>
          <p>Entonces no lo compres.</p>
          <p>
            Te lo digo completamente en serio. No es una técnica de venta, si
            piensas así, no lo compres, porque si valoras la formación por su
            duración o cantidad de pdfs que te mando, no tienes la mentalidad
            adecuada para sacarle provecho.
          </p>
          <p>Valoramos nuestro tiempo, y tú deberías valorar el tuyo.</p>
        </div>

        <div className="pb-8">
          <h4 className="font-bold text-3xl ">¿Vale para X?</h4>
          <br></br>
          <p>
            Sustituye X por lo que quieras. Decorador, interiorista, arquitecto,
            delineante…
          </p>
          <p>
            El curso vale incluso para zurdos pelirrojos que se dediquen al
            sector de la construcción.
          </p>
          <p>
            Pero ojo. Existen motivos por los que este curso puede no ser para
            ti, no explicamos nada de estructuras, cimentación, parámetros
            urbanísticos, patologías constructivas…{" "}
          </p>
          <p>
            Parece evidente que un<i> proyecto de ejecución de interiorismo</i>{" "}
            de una reforma normal no tiene un plano de forjados y armadura, pero
            por si acaso te lo decimos.
          </p>
          <p>
            Tampoco lo compres si piensas que tu caso, tu negocio, tu cliente o
            tu talla de ropa interior es muy específico/particular/diferente al
            del resto de la humanidad y tienes tanta experiencia haciendo
            proyectos de ejecución que los tuyos no se parecen a nada a los que
            se hacen en el resto del mundo. En ese caso no compres este curso, y
            en general con nos escribas porque con la gestión de ego no podemos
            ayudar.{" "}
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Sirve si uso Autocad, Revit, Sketchup…?
          </h4>
          <br></br>
          <p>
            Sí. Te vamos a enseñar algo mucho más importante que manejar un
            programa.
          </p>
          <p>Da igual el programa que uses.</p>
          <p>De hecho como si haces tus proyectos a mano.</p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            {" "}
            ¿Existe algún tipo de garantía de devolución?
          </h4>
          <br></br>
          <p>No.</p>
          <p>
            Como te decía, se trata de un producto serio y de alta calidad, y
            espero el mismo compromiso por tu parte. Si te da miedo comprarlo,
            no lo hagas.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">¿Se puede pagar a plazos?</h4>
          <br></br>
          <p>No, y esa nunca será una opción.</p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Por qué debería pensar que con vosotros aprenderemos cómo hacer
            proyectos de ejecución de interiorismo, reformas?
          </h4>
          <br></br>
          <p>
            Deber, no deberías. Quiero decir, puedes hacer lo que te dé la gana.
          </p>
          <p>
            Lo único que creemos que debes saber es que somos algo obsesivos,
            Laura con del diseño y el desarrollo de las planimetrías y yo con
            hacer buena construcción y acabados de obra. Y llevamos años
            enseñando y aplicando esto.{" "}
          </p>
          <p>
            Lo que te vamos a enseñar lo hemos ido perfeccionando después de
            trabajar tanto en empresas por cuenta ajena como haciendo nuestros
            proyectos durante años.
          </p>
          <p>Dicho esto, la decisión por supuesto, es tuya. </p>
        </div>
        <StripeButton
          urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
          price={STRIPE_BUTTON_CONFIG.price}
          title={STRIPE_BUTTON_CONFIG.title}
        >
          {STRIPE_BUTTON_CONFIG.buttonText}
        </StripeButton>
      </div>
    </div>
  );
};

export default TallerProyectoEjecucionVivienda;
