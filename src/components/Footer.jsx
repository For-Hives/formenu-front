import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer(props) {
	const alternativemode = props.alternativemode

	return (
		<footer className={alternativemode ? 'bg-transparent' : 'bg-slate-50'}>
			<Container>
				<div className="py-16">
					<Logo className="mx-auto h-10 w-auto" />
					<nav className="mt-10 text-sm" aria-label="quick links">
						<div className="-my-1 flex flex-wrap justify-center gap-x-6">
							<NavLink href="#features">Fonctionnalité</NavLink>
							<NavLink href="#pricing">Prix</NavLink>
							<NavLink href="/blog">Blog</NavLink>
							<NavLink href="mailto:contact@formenu.fr">Contact</NavLink>
							<NavLink href={'/programme-dapport-daffaires'}>
								<i>Programme d&apos;apport d&apos;affaires</i>
							</NavLink>
						</div>
					</nav>
				</div>
				<div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
					<p className="mt-6 text-sm text-slate-500 sm:mt-0">
						Copyright &copy; {new Date().getFullYear()} ForMenu. All rights
						reserved.
					</p>
				</div>
			</Container>
		</footer>
	)
}
