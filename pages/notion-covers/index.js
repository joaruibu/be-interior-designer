import React, { useEffect, useState } from 'react'
import TitlePage from '../../components/TitlePage'
import { DATA_TYPE } from '../../helpers/types'
import { getAllItems } from '../../helpers/index';

const Index = () => {
    const [domLoaded, setDomLoaded] = useState(false);



    useEffect(() => {
        setDomLoaded(true);
    }, []);


    const TITLE_INFO = {
        title: 'Covers de Notion',
        subtitle: 'Las mejores Covers de notion, copia y úslas en tus plantilas.'
    }

    return (
        <main>
            {
                domLoaded &&
                <>
                    <TitlePage subtitle={TITLE_INFO.subtitle}>{TITLE_INFO.title}</TitlePage>
                </>
            }

        </main>
    )
}

export default Index


export async function getStaticProps() {
    return {
        props: {
            covers: getAllItems(DATA_TYPE.covers)
        }
    }
}