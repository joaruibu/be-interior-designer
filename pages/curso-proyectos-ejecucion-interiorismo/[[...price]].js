import React from "react";
import StripeButton from "../../components/StripeButton";
import { useRouter } from "next/router";

const CursoProyectosEjecucionInteriorismo = () => {
  const STRIPE_BUTTON_CONFIG = {
    title: " Curso proyecto ejecución de vivienda real",
    buttonText: "Comprar curso",
    price: "190€",
    isDisabled: false,
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/session/d9d92fc9fb9db35c730b93b5d219236b9bc151fd/init",
  };

  const FECHA_DIRECTO = "martes 15 de abril a las 17:00 (Madrid)";

  const router = useRouter();
  const price = Array.isArray(router.query.price)
    ? router.query.price[0]
    : router.query.price;

  const generateStripeConfig = (price) => {
    if (price === "bid-54") {
      return {
        price: "190€",
        urlStripe:
          "https://lauradearquer.quadernoapp.com/checkout/link/8b72e1e49782affe919cb2cf07835af3eb5be17d",
      };
    }

    if (price === "bid-57") {
      return {
        price: "220€",
        urlStripe:
          "https://lauradearquer.quadernoapp.com/checkout/link/8806052aac71553d904d1cba513d2f0e38605768",
      };
    }

    return {
      // bid-51
      price: "210€",
      urlStripe:
        "https://lauradearquer.quadernoapp.com/checkout/link/d9d92fc9fb9db35c730b93b5d219236b9bc151fd",
    };
  };

  const config = {
    ...STRIPE_BUTTON_CONFIG,
    ...generateStripeConfig(price),
  };

  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-24  my-12">
        <header>
          <h1 className="text-4xl sm:text-5xl  sm:leading-[60px] text-left  pb-24 sm:pb-32 font-bold">
            Todos los arquitectos de interiores, decoradores, interioristas...
            quieren hacer proyectos de ejecución de interiorismo de forma
            profesional, pero casi todo el mundo hace lo mismo que los demás.
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
        <p> Mi amiga (en una empresa de reformas) buscaba cliente. </p>
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
          Aquí va la primera lección de muchas que te contamos en el curso.{" "}
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
          dentro del curso).
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
          acabados dentro del curso).
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
          Y tú lo que recibirás será malos modos, o tener que pagar para
          enmendar el error, o entrar en pleitos por no cumplir contrato, o
          puede que tu jefe te despida (si tus cagadas son recurrentes).
        </p>
        <p>
          O lo peor en nuestra opinión, una bajada enorme de tu credibilidad
          profesional. De tu estatus.
        </p>
        <br></br>
        <br></br>
        <div className="flex justify-center">
          <img
            className="text-center"
            src={"/img/meme-escaleras.jpg"}
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
          tú mismo, o… Comprar este curso y aprenderlo en una tarde.
        </h2>
        <StripeButton
          urlStripe={config.urlStripe}
          price={config.price}
          title={config.title}
          isDisabled={config.isDisabled}
        >
          {config.buttonText}
        </StripeButton>
        <br></br>
        <br></br>
        <h3 className="font-bold text-3xl pb-4 pt-8">
          {" "}
          A continuación, algunas de las lecciones que nosotros hemos aprendido
          a la fuerza y que a ti te vamos a enseñar en el curso, ahorrándote
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
             si haces esto transmitirás sensación de profesionalidad aunque no
            hayas trabajado nunca en ningún estudio o no hayas tenido ningún
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
              La manera más sencilla y rápida de hacer un plano de demoliciones{" "}
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
            carrera en 9 años) llaman “vende muebles” o “ coloca papel pintado”
            a los interioristas, y el sutil cambio que hará que te respeten,
            incluso que te envidien.
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
        <p>Más cosas que veremos en el curso…</p>
        <ul>
          <li>
            <b>
              Las 3 cosas que toda persona que empieza en el sector de la
              decoración, interiorismo o arquitectura de interiores, hace mal{" "}
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
            años de experiencia tenemos unos cuantos y hemos creado este curso
            contando todo lo que hemos aprendido en todos estos años.
            <b>
              {" "}
              Puedes aprenderlo en una tarde (luego lo tendrás que poner tú en
              práctica) o en varios años trabajando en varios estudios (y en
              algunos estudios igual no aprendes nada, y te pagan menos, suele
              pasar).{" "}
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
            bueno, normal si no sabes lo que explicamos en el curso, si sabes
            esto nunca mas te sentirás perdido.
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
          urlStripe={config.urlStripe}
          price={config.price}
          title={config.title}
          isDisabled={config.isDisabled}
        >
          {config.buttonText}
        </StripeButton>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="font-bold text-4xl pb-4 pt-8">
          Algunas personas le van a sacar mucho valor a este curso, otras,
          muchísimo.
        </h3>
        <br></br>
        <br></br>
        <p>
          Todas la personas que compran reciben un email exclusivo con una
          dirección web y una contraseña privada.
        </p>
        <p>En esa web privada pueden ver el curso de 2 horas y 22 minutos.</p>

        <p>
          En esa web también se puede descargar el pdf del proyecto, y ver las
          dudas resueltas que ya han tenido otras personas que han comprado.
        </p>
        <p>
          Sólo el pdf, o sea, sólo por tener una referencia real de todo lo que
          se debe poner en un proyecto de interiorismo de reforma… Ya vale el
          precio del curso entero.{" "}
          <b>
            {" "}
            Creo que no hace falta que te expliquemos el porqué y todo el tiempo
            y dinero que puedes ahorrar gracias a disponer de esta referencia.
          </b>
        </p>
        <br></br>
        <p>Pero aún hay otra cosa a la que puedes sacarle más partido…</p>

        <p>
          Y es que podrás <b> descargar el archivo .dgw del proyecto.</b>
        </p>
        <p>
          Con sus capas profesionales, sus bloques dinámicos, las páginas con
          las capas ya configuradas en cada viewport según el plano, la
          configuración de impresión en A3, con sus cotas anotativas, su texto
          anotativo, todo configurado en metros, leyendas de instalaciones
          listas…
        </p>
        <p>
          Algunas personas usarán este archivo para crearse su propia plantilla
          profesional donde realizar sus proyectos. Reutilizarán los bloques.
          Aprovecharán la configuración del archivo.
        </p>
        <p>
          <b>
            Algunas personas, crearán una plantilla que les puede ahorrar mucho
            tiempo, y dinero.
          </b>
        </p>
        <p>
          {" "}
          <b>Otros no lo harán.</b>
        </p>
        <p>
          Por si tenías dudas, solo ese archivo ya vale el precio entero del
          curso. Si no, te invitamos a mirar cuánto cuesta una plantilla de
          autocad profesional para arquitectos o interioristas.
        </p>

        <StripeButton
          urlStripe={config.urlStripe}
          price={config.price}
          title={config.title}
          isDisabled={config.isDisabled}
        >
          {config.buttonText}
        </StripeButton>
        <br></br>
        <br></br>
        <h3 className="font-bold text-4xl pb-4 pt-8"> Preguntas frecuentes</h3>
        <br></br>
        <br></br>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            {" "}
            No entiendo de qué va el curso. ¿Qué me vas a explicar?
          </h4>
          <br></br>
          <p>
            Te vamos a explicar un proyecto de ejecución de una reforma de
            vivienda al completo. En concreto, el que realizamos para la reforma
            en Valencia que te hemos contado arriba.
          </p>
          <p>Lo destriparemos entero:</p>
          <ul className="mb-2">
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
            Es una vivienda estándar de 70m2 aprox, en el centro de Valencia,
            séptima planta. Es decir, si haces o quieres hacer reformas de
            vivienda, los problemas que contamos son a los que tú también te
            enfrentarás.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            {" "}
            ¿Qué contiene realmente el curso? ¿Cómo funciona?
          </h4>
          <br></br>
          <p>
            En cuanto compras recibes un email exclusivo con una dirección web y
            una contraseña privada. En esa web privada encontrarás todo el
            contenido:{" "}
          </p>

          <ul className="mb-2">
            <li className="pb-2">
              {" "}
              El pdf del proyecto de ejecución completo para descargar.
            </li>
            <li className="pb-2">
              La grabación del curso: un vídeo de 2 horas y 22 minutos. Nuestro
              consejo es que imprimas el pdf (si eres de escribir a mano), para
              que puedas tomar notas en el mismo pdf mientras ves el curso. Si
              eres digital, te recomendamos tener el pdf abierto para poder
              hacer anotaciones encima. Damos mucho contenido, lo agradecerás.
            </li>
            <li className="pb-2">El .dwg del proyecto para descargar</li>
            <li className="pb-2">Soporte durante 30 días. </li>
            <li className="pb-2">
              Además de todo esto, haremos un directo el {FECHA_DIRECTO}, donde
              podrás preguntarnos directamente dudas que tengas, y
              solucionaremos tanto las tuyas como las que nos hayan enviado
              otros clientes. Si no puedes estar, te enviaremos la grabación.{" "}
            </li>
          </ul>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl "> ¿Cuanto dura el curso?</h4>
          <br></br>
          <p>
            El curso es una grabación que dura 2 horas y 22 minutos. No lo
            hicimos queriendo, fue el tiempo que necesitamos. Seguramente tú
            necesites más tiempo para tomar notas o volver a ver partes. Repito.
            Damos mucho valor, agradecerás que esté grabado.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Durante cuánto tiempo tendré acceso al curso?
          </h4>
          <br></br>
          <p>
            Mínimo dos años, probablemente esté mucho más tiempo porque en
            principio no tenemos pensado retirarlo, pero el compromiso es de dos
            años como mínimo. Esto es así porque alojarlo cuesta dinero, nos
            podemos morir y mil otras cosas.
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
          <p>
            <b>Tienes 30 días de soporte desde que realizas la compra. </b>
          </p>
          <p>
            Nos parece tiempo más que de sobra para que puedas ver el curso,
            ponerlo en práctica, y escribirnos todas las dudas que tengas por
            email.
          </p>
          <p>
            Además del soporte de 30 días por email, haremos un directo el {""}
            {FECHA_DIRECTO}, donde podrás preguntarnos directamente dudas que te
            surjan. No solo solucionaremos las tuyas, también podrás ver las
            dudas de otros clientes. Si no puedes estar no te preocupes, te
            enviaremos la grabación.
          </p>
          <p>
            Esto es así porque en otros cursos ya hemos comprobado que la
            resolución de dudas grupal aporta muchísimo... Puede que tú no
            tengas más dudas (ahora), pero quizá en el proyecto que hagas el mes
            siguiente te sirva lo que ha preguntado otro cliente.{" "}
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Cuál es su precio? ¿Bajará alguna vez?
          </h4>
          <br></br>
          <p>El precio de este curso es de {config.price} y nunca bajará.</p>
          <p>
            Nunca hacemos ofertas, ni black fridays, ni rebajas, ni nada. Es
            más, si de algo puedes estar seguro es que con el paso del tiempo el
            precio subirá.
          </p>
          <p>Este es el mejor precio al que va a estar este curso.</p>
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
            urbanísticos, presupuestos y mediciones, patologías constructivas…{" "}
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
            Compartimos el .dgw del proyecto (que es el formato de autocad).
            Pero esto es solo “un además” en todo lo que el curso aporta. Ten en
            cuenta que debes tener conocimientos de autocad (por ejemplo saber
            trabajar con ventanas gráficas y cotas y texto anotativo) para
            sacarle partido a este archivo. Pero si tú no gastas autocad o no
            tienes el nivel no pasa nada,{" "}
            <b>
              {" "}
              el valor del curso lo recibes igual y es aplicable a cualquier
              otro programa que uses.
            </b>
          </p>
          <p>Repito, aplicable a cualquier-otro-programa-que-uses.</p>
          <p>
            Te vamos a enseñar algo mucho más importante que manejar un
            programa.{" "}
          </p>
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
          urlStripe={config.urlStripe}
          price={config.price}
          title={config.title}
          isDisabled={config.isDisabled}
        >
          {config.buttonText}
        </StripeButton>
        <br></br>
        <br></br>
        <p>Opinión no solicitada del curso:</p>
        <q className="px-6 mb-12 block">
          Buenas Laura y Joaquín, El curso es de 100!! Os explicáis de forma
          clara y sobre el PDF no tengo palabras :) Espero el siguiente curso
          con ganas (...).
        </q>
      </div>
    </div>
  );
};

export default CursoProyectosEjecucionInteriorismo;
