import Image from 'next/image'

import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import illustration from '@/images/Ilustration.png'

export function Hero() {
    return (
        <Container className="mx-auto max-w-7xl min-[1850px]:max-w-full px-6 py-8 flex-col xl:flex xl:items-center xl:flex-row xl:gap-x-10 xl:px-8 min-[1850px]:pl-64 min-[1850px]:pr-16 min-h-[calc((100vh-7.5rem))]">
            <div className="mx-auto max-w-2xl xl:mx-0 xl:flex-auto xl:gap-8">
                <div className={"w-full flex justify-center flex-col"}>
                    <h1 className="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-7xl relative text-center sm:text-left">
                        Un menu
                        {' '}

                        <span className="relative whitespace-nowrap text-formenu-indigo-600">
                                  <svg
                                      aria-hidden="true"
                                      viewBox="0 0 418 42"
                                      className="absolute top-2/3 left-0 h-[0.58em] w-full fill-formenu-indigo-300/70"
                                      preserveAspectRatio="none"
                                  >
                                    <path
                                        d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"/>
                                  </svg>
                                  <span className="relative">révolutionnaire</span>
                                </span>

                        {' '}

                        pour une toute nouvelle expérience&nbsp;!
                    </h1>
                    <div>
                        <p className="text-left mx-auto mt-6 max-w-2xl text-sm sm:text-md tracking-tight text-slate-700">
                            Vous voulez apporter quelque chose de nouveau à votre restaurant&nbsp;?
                            Vous voulez gagner du temps&nbsp;?

                        </p>
                        <p className="text-left mx-auto max-w-2xl text-sm sm:text-md tracking-tight text-slate-700">
                            Cette application est faite pour vous&nbsp;!
                            <br/>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            L'expérience utilisateur est au cœur de votre application&nbsp;!
                        </p>
                    </div>
                    <div className="mt-10 flex justify-start gap-x-6">
                        <Button href="mailto:contact@formenu.fr">Je veux une demo</Button>
                        <Button href="mailto:contact@formenu.fr" variant="outline">Comment ça fonctionne ?</Button>
                    </div>
                </div>
            </div>
            <div className="min-[1850px]:pl-32 mt-16 sm:mt-24 xl:mt-0">
                <Image src={illustration} alt={"Exemple application ForMenu carte de restaurant sur mesure"}></Image>
            </div>
        </Container>
    )
}
