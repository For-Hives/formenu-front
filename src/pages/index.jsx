import Head from 'next/head'
import Script from 'next/script'
import {CallToAction} from '@/components/CallToAction'
import {Faqs} from '@/components/Faqs'
import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'
import {Pricing} from '@/components/Pricing'
import {PrimaryFeatures} from '@/components/PrimaryFeatures'

export default function Home() {
    return (
        <>
            <Head>
                {/*Google tag (gtag.js)*/}
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-H4F4P89MJ8"/>
                <Script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', 'G-H4F4P89MJ8');
              `,
                    }}
                />


                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Le menu connecté et sur-mesure !</title>
                <meta
                    name="description"
                    content="ForMenu est l'application révolutionnaire pour votre carte de restaurant qui vous permet de créer une expérience unique pour vos clients."
                />
            </Head>
            <Header/>
            <main>
                <Hero/>
                <PrimaryFeatures/>
                <CallToAction/>
                <Pricing/>
                <Faqs/>
            </main>
            <Footer/>
        </>
    )
}
