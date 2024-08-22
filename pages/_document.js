import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html lang='es' className="bg-bid-light-skin">
            <Head>
                <meta name="description" content="Rersos para Interioristas, decoradores de Interiores y Arquitectos" />
                <meta httpEquiv="content-language" content="es"></meta>
                <meta name='robots' content='index, follow'></meta>
                <link rel="icon" href="/img/favicon.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />

            </Head>
            <body className=' text-stone-950 '>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}