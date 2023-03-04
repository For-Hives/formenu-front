import 'focus-visible'
import '@/styles/tailwind.css'
import Script from "next/script";

export default function App({Component, pageProps}) {
    return (<>
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
        <Component {...pageProps} />
    </>);
}
