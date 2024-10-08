import React from 'react'

const navigation = {
    main: [
        { name: 'legal', href: '/legal' },
        { name: 'privacidad', href: '/privacidad' },
    ],
}


const Footer = () => {
    return (
        <footer >
            <div className="mx-auto max-w-7xl overflow-hidden px-4  bottom-0">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer" >
                    {
                        navigation.main.map((item) => (
                            <div key={item.name}>
                                <a href={item.href} className="text-sm leading-6 font-light text-bid-light-sand hover:text-bid-wine duration-150">
                                    {item.name}
                                </a>
                            </div>
                        ))
                    }
                </nav>
                <p className="mt-8 text-center text-xs leading-5 font-light text-bid-light-sand "> &copy; {new Date().getFullYear()}  Be Interior Designer, Inc. All rights reserved.</p>
            </div>
        </footer >
    )
}

export default Footer
