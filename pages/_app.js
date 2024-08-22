import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) => {


    return (
        <>
            <Head>
                <title>Be Interior Designer</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp