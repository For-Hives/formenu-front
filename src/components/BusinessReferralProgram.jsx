import {CheckIcon} from '@/components/CheckIcon'
import {DollarIcon} from '@/components/DollarIcon'
import {useState} from 'react'
import {ToggleButton} from '@/components/ToggleButton'
import clsx from 'clsx'
import Image from 'next/image'
import andypp from '@/images/ppAndy.jpg'
import {Button} from '@/components/Button'

export function BusinessReferralProgram() {
    const [enabled, setEnabled] = useState(true)

    const handleToggle = value => {
        setEnabled(value)
    }

    return (
        <section
            className="bg-gradient-to-b from-transparent to-slate-50 p-2 px-6 pt-8 sm:py-16 lg:px-8"
            aria-labelledby="referral-program-title"
        >
            <div className="mx-auto max-w-3xl text-base leading-7 text-slate-900">
                <p className="text-base font-semibold leading-7 text-formenu-indigo-600">
                    Programmes
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Notre programme d&apos;apport d&apos;affaires
                </h1>
                <p className="mt-6 text-xl leading-8">
                    Recevez facilement de l&apos;argent grâce au programme d&apos;apport
                    d&apos;affaires&nbsp;!
                    <br/>1 programme, des règles simples, des commissions élevées.
                    C&apos;est aussi simple que ça&nbsp;!
                </p>
                <div className="mt-10 max-w-2xl">
                    <p>
                        🎯 <b>Notre objectif</b> ?{' '}
                        <span className={'italic'}>
							Récompenser les personnes qui partagent, notre produit et qui nous
							aides à lancer cette merveilleuse aventure qu&apos;est
							ForMenu&nbsp;!
						</span>
                    </p>
                </div>
                <div className="mt-10 max-w-2xl">
                    <h2 className={'font-bold'}>Comment ça marche&nbsp;?</h2>
                    <ul role="list" className="mt-4 max-w-xl space-y-4 text-slate-800">
                        <li className="flex gap-x-3">
                            {/*<CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-formenu-indigo-600" aria-hidden="true"/>*/}
                            <CheckIcon className={'text-formenu-indigo-700'}/>
                            <div className={'flex flex-col'}>
								<span>
									1. Présentez-nous puis partagez nos contacts avec des
									restaurateurs, bars et brasseries qui pourraient être
									intéressés par notre produit.
								</span>
                                <span className={'text-sm text-slate-700'}>
									<i>
										Dites-leur de bien dire qu&apos;ils viennent de votre part !
									</i>
								</span>
                            </div>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckIcon className={'text-formenu-indigo-700'}/>
                            <span>
								2. Nous les contactons et nous leur proposons une démo gratuite
								de notre produit.
							</span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckIcon className={'text-formenu-indigo-700'}/>
                            <span>
								3. Si le restaurateur est intéressé, nous lui proposons un
								contrat.
							</span>
                        </li>
                        <li className="flex gap-x-3">
                            <DollarIcon className={'text-formenu-indigo-700'}/>
                            <div className={'flex flex-col'}>
                                <div>
                                    4. Si le restaurateur signe un contrat, vous recevez une
                                    commission équivalente à{' '}
                                    <b>100% du montant du premier mois d&apos;abonnement.</b>
                                </div>
                                <div className={'text-sm text-slate-700'}>
									<span className={'italic'}>
										Exemple&nbsp;: si le restaurateur signe un contrat de{' '}
                                        <b>100€</b> par mois, vous recevez <b>100€</b>.
									</span>
                                </div>
                                <div className={'text-sm text-slate-700'}>
									<span className={'italic'}>
										Ainsi, si vous ramenez <b>15 clients</b>, qu&apos;ils
										signent tous un contrat de 100€ par mois, nous vous donnons{' '}
                                        <b>1500€</b>
									</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900">
                        Par où commencer ?
                    </h2>
                    <p className="mt-6">
                        C&apos;est très simple, il vous suffit de lire la suite, de
                        récupérer les informations ci-dessous, de nous poser vos questions,{' '}
                        et de nous contacter pour passer un entretien, afin de vous
                        expliquer plus en détail notre programme d&apos;apport
                        d&apos;affaires.
                    </p>
                    <p className="mt-6">
                        Une fois les entretiens terminés, nous vous recontacterons pour vous
                        donner accès aux différentes ressources pour la gestion des apports
                        d&apos;affaires afin de suivre l&apos;avancement des différents
                        contacts effectués.
                    </p>
                    <figure className="relative mt-10 border-l border-formenu-indigo-600 pl-4 sm:pl-9">
                        <div className={'absolute right-0 top-0 flex w-full justify-end'}>
                            {/*  Toggle button  */}
                            <ToggleButton onToggle={handleToggle}/>
                        </div>
                        <blockquote
                            className={clsx(
                                'gap-4 text-sm font-semibold text-slate-700',
                                enabled ? 'flex flex-col' : 'hidden'
                            )}
                        >
                            <p>“Bonjour,</p>
                            <p>
                                Nous sommes ravis de vous présenter notre nouveau produit
                                innovant : ForMenu. ForMenu, c&apos;est quoi ? C&apos;est la
                                nouvelle façon de présenter votre menu de restaurant. C&apos;est
                                une application personnalisable selon vos besoins, votre charte
                                graphique et vos préférences, pour offrir une expérience
                                utilisateur intuitive et logique. ForMenu vient révolutionner la
                                façon de présenter les cartes de restaurant en proposant des
                                fonctionnalités innovantes et pratiques.
                            </p>
                            <p>
                                Notre constat est simple : le monde se digitalise, mais les
                                cartes de restaurants n&apos;ont pas encore évolué. Il
                                n&apos;existe aucune solution utilisable et personnalisable qui
                                prend en compte les besoins des clients et des restaurateurs.
                                C&apos;est pourquoi nous avons créé ForMenu, une application qui
                                permet aux clients de trouver facilement les plats qu&apos;ils
                                recherchent. De plus, elle permet aux restaurateurs de
                                personnaliser leur menu en temps réel, sans avoir besoin de
                                faire appel à un designer ou un imprimeur.
                            </p>
                            <p>
                                L&apos;application offre de nombreuses fonctionnalités pratiques
                                telles que le tri par allergènes, par régime alimentaire, la
                                recherche par prix, par goûts ou par mots-clés, ainsi que
                                l&apos;affichage d&apos;une description détaillée pour chaque
                                plat. ForMenu prend également en compte l&apos;obligation légale
                                d&apos;afficher les allergènes.
                            </p>
                            <p>
                                Mais ForMenu ne s&apos;arrête pas là ! Nous offrons également
                                des solutions à des problèmes bien visibles mais impossibles à
                                corriger sans notre produit. Par exemple, lorsqu&apos;un
                                ingrédient est en rupture de stock, il sera possible de
                                désactiver ce plat en temps réel pour éviter la frustration des
                                clients et des serveurs et améliorer l&apos;image du restaurant.
                                ForMenu permet également aux restaurateurs de faire des
                                changements à n&apos;importe quel moment, sans avoir à faire
                                appel à un designer ou un imprimeur. Cela vous permet
                                d&apos;économiser beaucoup de temps et d&apos;argent.
                                L&apos;application offre également la possibilité de créer des
                                cartes pour tous types d&apos;événements, ou bien même des
                                cartes journalières, hebdomadaires ou mensuelles.
                            </p>
                            <p>
                                En tant que restaurateur, vous avez l&apos;opportunité de faire
                                partie de notre aventure en devenant l&apos;un de nos
                                bêta-testeurs. Les premiers restaurants à s&apos;inscrire
                                pourront bénéficier d&apos;une offre préférentielle à vie en
                                échange de leurs avis constructifs et honnêtes.
                            </p>
                            <p>
                                Notre objectif est de lancer l&apos;application ForMenu dans un
                                avenir proche, mais avant cela, nous cherchons des partenaires
                                pour nous aider à tester notre produit avant son lancement
                                officiel. N&apos;hésitez pas à nous contacter pour en savoir
                                plus sur notre projet et pour devenir l&apos;un de nos
                                bêta-testeurs.
                            </p>
                            <p>Cordialement,</p>
                            <p>L&apos;équipe ForMenu”</p>
                        </blockquote>
                        <blockquote
                            className={clsx(
                                'gap-4 text-sm font-semibold text-slate-700',
                                !enabled ? 'flex flex-col' : 'hidden'
                            )}
                        >
                            <p>🌟 Bonjour cher restaurateur,</p>
                            <p>
                                ✨ Découvrez ForMenu, l&apos;application qui réinvente vos
                                cartes de restaurant pour une expérience unique et
                                personnalisée, adaptée à notre monde en pleine numérisation.
                            </p>
                            <p>🎨 ForMenu, c&apos;est :</p>
                            <ul className={'ml-8 list-inside list-disc'}>
                                <li>
                                    Un design sur mesure, à l&apos;image de votre établissement
                                </li>
                                <li>
                                    Des options de tri spécifique : allergènes, régimes, prix,
                                    goûts et mots-clés
                                </li>
                                <li>
                                    Une actualisation de votre carte en temps réel simple et
                                    rapide sans l&apos;aide d&apos;un designer ou imprimeur
                                </li>
                                <li>
                                    Des cartes adaptables pour les événements ou menus quotidiens,
                                    hebdomadaires et mensuels
                                </li>
                            </ul>
                            <p>
                                🚀 Pourquoi pas vous ? Rejoignez-nous et faites partie des
                                bêta-testeurs tout en profitant d&apos;une offre préférentielle
                                à VIE, en échange de vos retours constructifs !
                            </p>
                            <p>
                                👉 Contactez-nous pour rejoindre l&apos;aventure ForMenu.
                                Bénéficiez dès à présent d&apos;une carte à l&apos;image de
                                votre établissement !
                            </p>
                            <p>
                                🤝 Ensemble, façonnons l&apos;avenir des cartes de restaurant
                                avec ForMenu.
                            </p>
                            <p>À très vite,</p>
                            <p>L&apos;équipe ForMenu 🍴”</p>
                        </blockquote>
                        <figcaption className="mt-6 flex gap-x-4">
                            <Image
                                className="h-6 w-6 flex-none rounded-full bg-slate-50"
                                src={andypp}
                                width={24}
                                height={24}
                                alt="ForMenu Co-fondateur"
                            />
                            <div className="text-sm leading-6">
                                <strong className="font-semibold text-slate-900">
                                    Andy Cinquin
                                </strong>{' '}
                                – <span className="text-slate-500">Co-fondateur</span>
                            </div>
                        </figcaption>
                    </figure>
                    <p className="mt-10">
                        Avec ces deux messages, vous avez maintenant une idée de ce que vous
                        pouvez dire. Vous pouvez bien sûr les modifier à votre guise, mais
                        nous vous recommandons de garder le même ton et la même structure.
                    </p>
                </div>
                <figure className="mt-8">
                    <figcaption className="mt-4 flex flex-col gap-y-2 text-sm leading-6 text-slate-500">
                        <div>
                            Vous pouvez télécharger la plaquette de présentation de ForMenu -{' '}
                            <a
                                className={'font-semibold text-indigo-700 underline'}
                                target={'_blank'}
                                href={'/Plaquette présentation - Print.png'}
                                download
                            >
                                télécharger l&apos;image
                            </a>
                        </div>
                        <div>
                            Vous pouvez télécharger la maquette de ForMenu -{' '}
                            <a
                                className={'font-semibold text-indigo-700 underline'}
                                target={'_blank'}
                                href={'/ForMenu-Maquette.pdf'}
                                download
                            >
                                télécharger la maquette
                            </a>
                        </div>
                        <div className={'mt-8'}>
                            <Button href="mailto:contact@formenu.fr" color="blue">
                                Intéressés ? Des questions ? Contactez-nous !
                            </Button>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
