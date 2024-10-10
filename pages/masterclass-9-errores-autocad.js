import React, { useState } from "react";
import StripeButton from "../components/StripeButton";

import CountdownTimer from "../components/CountDown";

const MasterClass9ErroresAutocad = () => {
  const [isTimOver, setIsTimeOver] = useState(false);

  const STRIPE_BUTTON_CONFIG = {
    title: " MasterClass 9 errores AutoCad.",
    buttonText: "Comprar MasterClass",
    price: "31€",
    urlStripe:
      "https://lauradearquer.quadernoapp.com/checkout/link/03ffb95521f6e4a0db15a99e2d7d6b09d8dea705",
  };
  return (
    <div className="w-full font-playfair">
      <div className="bg-stone-50 p-4 sm:p-24  my-12">
        <header>
          <h1 className="text-4xl sm:text-5xl  sm:leading-[60px] text-left  pb-24 sm:pb-32 font-bold">
            Cuando cometes estos 9 errores de dibujo en tus planos,<br></br> no
            es que no parezcas profesional, <br></br> es que realmente parece
            que no tienes ni idea.{" "}
          </h1>
        </header>
        <h2 className="text-2xl font-semibold text-left">
          Sinceramente, no me creía nada de eso.
          <br></br>
          <br></br>
          Cómo puede ser que una estudiante de arquitetura de la mejor
          Universidad de España, un promotor americano, un estudiante de
          Interiorismo de la revista más famosa del mundo y un constructor de
          chimeneas artesanales,{" "}
          <span className="text-bid-terracotta">
            {" "}
            tuvieran todos los mismos errores de dibujo en Autocad.
          </span>
          <br></br>
          <br></br>
          <br></br>
          Te contaré una breve historia para que me entiendas...
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Hace unos años di formaciones privadas a profesionales de la
          construcción.
        </p>
        <p> A muchos profesionales.</p>
        <p> Pero muchos.</p>
        <br></br>
        <p> ¿Y esto por qué te puede importar?</p>
        <p> Ahora te cuento.</p>
        <br></br>
        <p>
          {" "}
          La cosa es que{" "}
          <b>
            la mayoría de estos profesionales habían estudiado en centros
            bastante reconocidos
          </b>{" "}
          como la ESMADECO (Escuela Madrileña de Decoración), Barreira, o en la
          prestigiosa marca Elle.
        </p>
        <p>También había universitarios, aunque no eran la mayoría.</p>
        <p>
          Por supuesto había interioristas profesionales autodidactas,
          carpinteros, un tío de Miami que promovía parcelas unifamiliares, e
          incluso un hombre especializado en técnicas tradicionales de
          construcción de chimeneas del País Vasco.
        </p>
        <p> Como te decía, quizás hacer chimeneas te importa poco.</p>
        <p> Muy poco.</p>
        <p>Nada.</p>
        <br></br>
        <p className="pl-12 text-2xl">
          Pero lo que sí que te puede importar es que{" "}
          <b> todos ellos, todos sin excepción, tenían algo en común...</b>
        </p>
        <br></br>
        <p>
          {" "}
          Y no solo es que todos necesitasen AutoCad para su vida profesional…
          Que también.
        </p>
        <p>
          Venían de centros de formación diferentes, incluso de profesiones
          diferentes, con clientes diferentes.
        </p>
        <p>Y lo que tenían en común... </p>

        <p>
          Era que,{" "}
          <span className="text-bid-terracotta font-bold">
            los mayores errores que les impedían utilizar AutoCad como
            verdaderos profesionales,{" "}
          </span>{" "}
          eran los mismos.
        </p>

        <p>
          Bueno, y que me contrataron a mí, pero eso te da igual porque ya no me
          puedes contratar.
        </p>
        <br></br>
        <p className="font-bold">
          Años después, hemos decido agrupar todos esos errores y resolverlos en
          una sola masterclass.
        </p>
        <br></br>
        <h3 className="font-bold text-3xl pb-4 pt-8">
          ¿De qué van estos 9 errores? ¿Qué aprenderé de ellos?
        </h3>
        <br></br>
        <p> Los 9 errores son los siguientes:</p>
        <br></br>
        <ol>
          <li>
            <b>
              Los 3 errores que hacen que las medidas que dibujes no se parezcan
              en nada a la realidad (y que parezcas un principiante que no tiene
              ni idea)
            </b>{" "}
            cuando importas un pdf / jpg en Autocad, y una forma muy sencilla de
            evitarlo. A partir del minuto 02:30.
          </li>
          <li>
            <b>
              Lo primero que debes hacer cuando empiezas a dibujar tu proyecto
              en cad,
            </b>{" "}
            pero que no todo el mundo hace (y que muchos profesionales o incluso
            profesores, enseñan mal). Es raro. En el minuto 14:50.
          </li>
          <li>
            A partir del el minuto 20:59, los cuatro errores al sombrear un
            plano (muy comunes) que hacen que un plano estupendo se vuelva
            ilegible y poco profesional.
          </li>
          <li>
            <b>
              Las 4 condiciones que deben cumplir las cotas de cualquier plano,
              cualquiera, a cualquier escala, y que si conoces mejorará tus
              planos para siempre.
            </b>{" "}
            En el minuto 41:07 te cuento cómo aplicarlo en AutoCad (sin volverte
            loco con tamaños de cota gigantes que no sabes por qué te salen y
            que pierdes horas modificando).
          </li>
          <li>
            <b>La razón de que dibujes mucho más lento en AutoCad</b> que otros
            profesionales, y que no tiene nada que ver con los años que lleves
            usando cad. En el minuto 10:57.
          </li>
          <li>
            <b>
              Por qué poner textos con diferentes tamaños en tus planos es una
              marranada que te hace parecer un novato
            </b>{" "}
            y cómo solucionarlo, en cualquier plano de autocad, en 2 pasos. A
            partir del minuto 36:24.
          </li>
          <li>
            {" "}
            A partir del minuto 31:15 te cuento la forma sencilla, muy sencilla,
            de poner un <b> plano a escala para que se imprima a esa escala.</b>
          </li>
          <li>
            Por qué nadie utiliza las capas de autocad como corresponde y eso
            hace <b>que el resultado al impimir sea poco profesional. </b>
            En el minuto 50:40.
          </li>
          <li>
            <b>
              Es la fecha de entrega, tienes el dibujo listo, pero cuando toca
              imprimir te sale un pdf terrible que no refleja tu trabajo con
              líneas que parecen más{" "}
              <span className="text-bid-terracotta">manchurrones</span> que
              líneas y no se entienden.
            </b>{" "}
            ¿Te suena? Te enseñaré los 3 pasos fáciles fáciles fáciles que hay
            que dar para imprimir un plano en pdf bien. Sin las complicaciones
            que a mis alumnos les enseñaban en sus escuelas. 3 pasos. Te los
            cuento en el minuto 54:20.
          </li>
        </ol>

        {!isTimOver ? (
          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
        ) : (
          <div className="w-full my-36 font-playfair text-center bg-bid-terracotta tracking-widest text-stone-50  py-3 text-2xl ">
            Ya no puedes comprar este curso.
          </div>
        )}

        <h3 className="font-bold text-3xl pb-4 pt-8"> Hay más…</h3>
        <br></br>
        <ul>
          <li>
            <b>
              La pregunta que se hacen todos los profesionales antes de dibujar
              un plano,
            </b>{" "}
            y que si no sabes responder hará que sigas grafiando mal tus planos
            para siempre. Te la cuenta en el minuto 30:14.
          </li>

          <li>
            Lo primero que debemos evitar a la hora de imprimir un plano. En el
            minuto 55:28.{" "}
          </li>
          <li>
            A todo el mundo le da miedo y{" "}
            <b>
              pereza hacer el planos de cotas de su proyecto, y eso es porque no
              saben la solución que te cuento paso a paso en el minuto 41:31.
            </b>
          </li>
          <li>
            <b> El comando más feo que existe en AutoCad, </b>y que muchos
            profesores ni entienden, ni saben explicar, pero que es necesario
            para que nuestra impresión no nos dé problemas. Te lo cuento paso a
            paso en el minuto 16:30.
          </li>
          <li>
            <b>
              {" "}
              Un fallo que cometemos todos, todos, todos, incluido nosotros
              cuando empezamos,
            </b>{" "}
            y que conocer hará mejor tus proyectos. En el minuto 34:10.
          </li>
        </ul>
        <br></br>
        <h4 className="font-bold text-2xl pb-4 text-center">
          {" "}
          Por cierto, en el minuto 22:36, también te cuento la manera en la que
          debes dibujar y usar los sombreados para potenciar y enriquecer tu
          proyecto, en lugar de que quede{" "}
          <span className="text-bid-terracotta">hortera</span> y de mal gusto.
        </h4>
        <br></br>
        <br></br>
        <p>
          {" "}
          <b>Solo por esto, vale la pena la masterclas.</b>
        </p>
        <br></br>
        <div className="flex justify-center">
          <img
            className="text-center"
            src={"/img/meme-inodoro.jpeg"}
            alt="stripe"
            width={400}
            height={200}
          />
        </div>
        <p>
          {" "}
          <b>Sigo.</b>
        </p>
        <br></br>
        <ul>
          <li>
            El error, sencillo de solucionar,{" "}
            <b>
              {" "}
              que no te han explicado en tu máster de interiorismo y que hace
              que tus secciones no tengan ningún sentido constructivo.{" "}
            </b>{" "}
            En el minuto 20:59.
          </li>

          <li>
            <b>
              Te enseño nuestra técnica de gestión de capas para proyectos de
              interiorismo profesional,
            </b>{" "}
            y el detalle que todo el mudo hace mal, porque se lo han explicado
            mal y que hace que tu impresión sea mucho más difícil. La verás,
            paso a paso, y{" "}
            <b> la podrás adaptar a tus proyectos de manera sencilla.</b>
          </li>
          <li>
            Dos <b>errores infantiles que destrozan casi todo tu trabajo, y</b>{" "}
            que cometes a la hora de imprimir tu proyecto o importar un bloque
            de Autocad. A partir del minuto 47:56.
          </li>

          <li>
            Está muy bien que tu profesor te dijera a qué escala tienes que
            imprimir tus planos… Pero{" "}
            <b>
              {" "}
              en el mundo real, tienes que decidir tú la mejor opción y saber
              por qué lo haces.
            </b>{" "}
            En el minuto 27:26 te lo cuento.
          </li>

          <li>
            Imprimir en AutoCad puede ser la cosa más difícil.{" "}
            <b> Tambien puede ser la más fácil </b> si sabes los pasos que te
            cuento en el minuto 54:49
          </li>
          {/* <li>
            La forma efectiva, aunque desconocida, de poner tu AutoCad en
            metros. En el minuto XX:XX.
          </li> */}
          {/* <li>
            En el minuto XX:XX{' '}
            <b>
              los 2 sencillos trucos que te permitirán dibujar escaleras de
              forma profesional, aunque no hayas hecho un proyecto profesional
              en tu vida,
            </b>{' '}
            y que evitarán que tu profesor/cliente/constructor/lo que sea sepa
            que efectivamente no tienes ni puta idea.
          </li> */}
        </ul>

        {!isTimOver ? (
          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
        ) : (
          <div className="w-full my-36 font-playfair text-center bg-bid-terracotta tracking-widest text-stone-50  py-3 text-2xl ">
            Ya no puedes comprar este curso.
          </div>
        )}
        <h3 className="font-bold text-3xl pb-4 pt-8"> Preguntas frecuentes</h3>
        <br></br>
        <br></br>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            {" "}
            ¿Qué recibiré? ¿Cómo funciona?
          </h4>
          <br></br>
          <p>
            {" "}
            La <i>masterclass</i> consiste en un vídeo de 59 minutos.
          </p>
          <p>
            {" "}
            En cuanto la compres recibirás un mensaje de correo electrónico que
            te explicará cómo acceder a una plataforma online donde podrás verla
            tantas veces como quieras.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            {" "}
            ¿Durante cuánto tiempo tendré acceso a la <i>masterclass</i> ?
          </h4>
          <br></br>
          <p>
            {" "}
            Un año está garantizado desde la fecha de compra. Probablemente esté
            mucho más tiempo porque en principio no tengo pensado retirarlo,
            pero el compromiso es de un año como mínimo.
          </p>

          <p>
            {" "}
            Esto es así porque alojarlo cuesta dinero, me puedo morir y mil
            otras cosas. Al ser un curso online hay varios servicios de pago que
            tienen que estar en funcionamiento para poder ofrecerlo.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl "> ¿Incluyes PDF o plantillas?</h4>
          <br></br>
          <p>
            {" "}
            Solo el vídeo de la{" "}
            <b>
              <i> masterclass</i>
            </b>
            . Esto no es un curso ni te convertirás en un interiorista snob ni
            nada por el estilo (aunque desde luego sí serás mejor profesional).
            Si buscas eso no deberías comprar este vídeo.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl "> ¿Hay soporte?</h4>
          <br></br>
          <p>
            Amiga, si con este precio crees que el curso puede tener soporte,
            creo que tienes un problema más grande que estos 9 errores.
          </p>
          <br></br>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            Me parece caro para la duración que tiene.
          </h4>
          <br></br>
          <p> Si te parece caro, entonces no lo compres.</p>

          <p>
            {" "}
            Te lo digo completamente en serio. No es una técnica de psicología
            inversa ni nada parecido. Si piensas así, no lo compres, porque si
            valoras una formación por su duración o cantidad de contenido no
            tienes la mentalidad adecuada para sacarle provecho.
          </p>

          <p>
            {" "}
            Considero que el valor de este curso es cientos de veces superior a
            su precio. Por eso, si comprar algo de este precio te provoca dudas,
            lo mejor es que no lo compres.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Será complicado de entender si yo casi no tengo idea de AutoCad?
          </h4>
          <br></br>
          <p>
            En esta <i>masterclass</i> soluciono 9 grandes errores que todos,
            todos sin excepción, hemos cometido al usar AutoCad.
          </p>
          <p>
            {" "}
            Así que da igual si tu nivel es básico básico que casi que solo
            sabes abrir la aplicación, como si ya llevas meses usando AutoCad.
          </p>
          <p>
            {" "}
            Si estás empezando, aún mejor, porque conocer estos errores te
            ayudarán a no cometerlos en el futuro.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Da igual si tengo AutoCad para mac que para Windows? ¿Y en español
            o en inglés?
          </h4>
          <br></br>
          <p>
            Da igual. Todo queda explicado tanto para mac como para windows como
            para autocad en inglés o como para español. Entenderás perfectamente
            qué tienes que clicar o escribir en cada caso.
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">¿Vale para X?</h4>
          <br></br>
          <p>
            Sustituye X por lo que quieras. Interioristas, arquitectos,
            decoradores de interiores, reformista, instaladores… da igual.
          </p>
          <p>El curso vale incluso para zurdos pelirrojos que usen AutoCad.</p>
          <br></br>
          <ul>
            <li>
              Si trabajas en un estudio y tienes miedo de no hacer las cosas
              bien o cometer errores de principiante, te sirve.{" "}
            </li>
            <li>
              Si estas haciendo los planos un proyecto para enseñarle a tu
              cliente, también te vale.
            </li>
            <li>
              Si estas estudiando y tienes una entrega o corrección de
              proyectos, no te sirve, lo necesitas.
            </li>
          </ul>

          <br></br>

          <p>
            Pero ojo. Existen motivos por los que este curso puede no resultarte
            rentable, si llevas usando Autocad de forma profesional durante
            muchos años, y ya has presentado varios proyectos y tus planos no
            solo los entiendes tú, sino tambien cualquier persona que los vea.
          </p>
          <p>Enhorabuena, no compres.</p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            No lo entiendo ¿Entonces es un curso de grafismo o de Autocad?
          </h4>
          <br></br>
          <p>
            Las dos cosas, no lo llamamos curso de grafismo porque enseñamos
            mucho más que eso. Enseñamos errores de grafismo y cómo
            solucionarlos usando Autocad
          </p>
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-3xl ">
            ¿Cómo le puedo sacar todo el partido?
          </h4>
          <br></br>
          <p>
            Viendo el vídeo del tirón. Luego te recomiendo que lo vuelvas a ver
            con tu autocad abierto, y te vayas parando en todos los errores
            relevantes que tú cometas para poner en práctica sus soluciones. Son
            59 minutos de masterclass de alto nivel sobre dibujo en el sector de
            la construcción y te vas a encontrar con bastantes detalles
            interesantes. Así que para el vídeo, ponlo en práctica y sigues.
            Esta es mi recomendación.
          </p>
        </div>

        <div className="pb-8">
          <h4 className="font-bold text-3xl ">¿Es una buena inversión?</h4>
          <br></br>
          <p>
            Sí, lo es. Con implementar algún error ya amortizas los{" "}
            {STRIPE_BUTTON_CONFIG.price} sobradamente por todo el tiempo y
            cagadas que te vas a ahorrar.
          </p>
        </div>

        {!isTimOver ? (
          <StripeButton
            urlStripe={STRIPE_BUTTON_CONFIG.urlStripe}
            price={STRIPE_BUTTON_CONFIG.price}
            title={STRIPE_BUTTON_CONFIG.title}
          >
            {STRIPE_BUTTON_CONFIG.buttonText}
          </StripeButton>
        ) : (
          <div className="w-full my-36 font-playfair text-center bg-bid-terracotta tracking-widest text-stone-50  py-3 text-2xl ">
            Ya no puedes comprar este curso.
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterClass9ErroresAutocad;
