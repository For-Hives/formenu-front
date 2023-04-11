import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { BusinessReferralProgram } from '@/components/BusinessReferralProgram'

export default function ProgrammeDapportDaffaires() {
	return (
		<>
			<Head>
				<title>
					Recevez de l&apos;argent simplement grâce au programme d&apos;apport
					d&apos;affaire !
				</title>
				<meta
					name="description"
					content="Un programme simple et efficace pour vous permettre de gagner de l'argent en faisant découvrir ForMenu"
				/>
			</Head>
			<Header />
			<main>
				<BusinessReferralProgram />
			</main>
			<Footer />
		</>
	)
}
