import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const { pathname } = useRouter();
    const pagesNoNavbar = {
        coversId: '/notion-covers/[id]',
        coversAccesId: '/notion-covers-acceso/[id]',
        coversDownloasId: '/notion-covers-descarga/[id]',
        templatesId: '/plantillas/[id]',
        confirmSuscription: '/suscripcion-confirmada',
        lastStepSuscription: '/ultimo-paso-suscripcion',
        lastStep: '/ultimo-paso'
    }

    const pagesNoFooter = {
        downloadAutocadBlock: '/descarga-bloques-autocad',
    }

    const showNavbarPage = (pathname) => {
        const hasPageNavbar = Object.values(pagesNoNavbar).includes(pathname)
        return false
    }

    const showFooterPage = (pathname) => {
        const hasPageFooter = Object.values(pagesNoFooter).includes(pathname)
        return !hasPageFooter
    }

    showNavbarPage(pathname)
    showFooterPage(pathname)

    return (

        <div className='bg-bid-light'>
            <div className=" max-w-4xl mx-auto px-4 min-h-screen relative " >
                {showNavbarPage(pathname) && <Navbar />}
                {children}
                {showFooterPage(pathname) && <Footer />}
            </div>
        </div >
    )
}

export default Layout