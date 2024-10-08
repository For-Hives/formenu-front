import 'material-icons/iconfont/material-icons.css'
import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'
import Head from 'next/head'

export default function App({Component, pageProps}) {
    return (
        <>
            {/*Google tag Manager*/}
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MBJGCRP');
      `}
            </Script>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
