import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document(props) {
	let pageProps = props.__NEXT_DATA__?.props?.pageProps

	return (
		<Html
			className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
			lang="fr"
		>
			<Head>
				<Script rel="preconnect" href="https://fonts.googleapis.com" />
				<Script
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<Script
					strategy={'afterInteractive'}
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
				/>
				<Script
					async
					src="https://umami.wadefade.fr/script.js"
					strategy={'afterInteractive'}
					data-website-id="911083ce-df29-4499-a611-e43c70defd8b"
				></Script>
			</Head>
			<body className="flex flex-col">
				<Main />
				<NextScript />
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBJGCRP" height="0" width="0" style="display: none; visibility: hidden;" />`,
					}}
				/>
			</body>
		</Html>
	)
}
