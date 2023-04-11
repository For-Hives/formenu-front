import Head from 'next/head'
import Script from 'next/script'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
	return (
		<>
			<Head>
				<title>Le menu connecté et sur-mesure !</title>
				<meta
					name="description"
					content="ForMenu est l'application révolutionnaire pour votre carte de restaurant qui vous permet de créer une expérience unique pour vos clients."
				/>
			</Head>
			<Header />
			<main>
				<Hero />
				<PrimaryFeatures />
				<CallToAction />
				<Pricing />
				<Faqs />
			</main>
			<Footer />
		</>
	)
}
