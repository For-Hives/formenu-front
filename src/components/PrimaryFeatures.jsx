import {useEffect, useState} from 'react'
import Image from 'next/image'
import {Tab} from '@headlessui/react'
import clsx from 'clsx'

import {Container} from '@/components/Container'

import surmesure from '@/images/1 - ForMenu - Sur-Mesure.png'
import pratique from '@/images/1 - ForMenu - Pratique.png'
import facile from '@/images/1 - ForMenu - Facile.png'
import intelligent from '@/images/1 - ForMenu - Intelligent.png'
import malin from '@/images/1 - ForMenu - Malin.png'
import legal from '@/images/1 - ForMenu - Legal.png'
import Script from "next/script";

const features = [
    {
        title: 'Sur-mesure !',
        description:
            "Votre identité visuelle est unique, votre menu doit l'être aussi ! tout est prévu pour que vous puissiez créer un menu qui vous ressemble.",
        image: surmesure,
    },
    {
        title: 'Pratique !',
        description:
            "En cas de rupture de stock d'un aliment, plus besoin de prévenir chaque client, désactivez-le simplement dans votre menu ! Vos clients n'auront plus accès aux plats utilisant ce dernier.",
        image: pratique,
    },
    {
        title: 'Facile !',
        description:
            "Une prise en main rapide et intuitive, vous n'aurez pas besoin de formation pour utiliser ForMenu ! Tout a été pensé pour que vous puissiez vous concentrer sur votre activité.",
        image: facile,
    },
    {
        title: 'Intelligent !',
        description:
            'Des conseils personnalisés pour vous aider à améliorer votre menu, des statistiques pour vous aider à prendre les bonnes décisions. ',
        image: intelligent,
    },
    {
        title: 'Malin !',
        description: 'Faites des économies et gagnez du temps ! (et oui ! plus besoin d\'aller voir un imprimeur pour faire imprimer vos menus !)',
        image: malin,
    },
    {
        title: 'Légal !',
        description: 'Saviez vous que la loi vous oblige à afficher les allergènes sur vos menus ? ForMenu vous permet de le faire facilement !',
        image: legal,
    }
]

export function PrimaryFeatures() {
    let [tabOrientation, setTabOrientation] = useState('horizontal')

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({matches}) {
            setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
    }, [])

    return (
        <section
            id="features"
            aria-label="Tout ce dont vous avez besoin pour vous démarquer."
            className="relative overflow-hidden bg-formenu-indigo-600 pt-20 pb-28 sm:py-32"
        >
            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                        Tout ce dont vous avez besoin pour vous démarquer.
                    </h2>
                    <p className="mt-6 text-lg tracking-tight text-formenu-indigo-100">
                        Des fonctionnalités qui donneront un nouveau souffle à vos menus !
                    </p>
                </div>
                <Tab.Group
                    as="div"
                    className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                >
                    {({selectedIndex}) => (
                        <>
                            <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                <Tab.List id={"tablist"}
                                          className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                    {features.map((feature, featureIndex) => (
                                        <div
                                            key={feature.title}
                                            className={clsx(
                                                'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                                                selectedIndex === featureIndex
                                                    ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                                                    : 'hover:bg-white/10 lg:hover:bg-white/5'
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                                                        selectedIndex === featureIndex
                                                            ? 'text-formenu-indigo-600 lg:text-white'
                                                            : 'text-formenu-indigo-100 hover:text-white lg:text-white'
                                                    )}
                                                >
                                                    <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"/>
                                                    {feature.title}
                                                </Tab>
                                            </h3>
                                            <p
                                                className={clsx(
                                                    'mt-2 hidden text-sm lg:block',
                                                    selectedIndex === featureIndex
                                                        ? 'text-white'
                                                        : 'text-formenu-indigo-100 group-hover:text-white'
                                                )}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </Tab.List>
                            </div>
                            <Tab.Panels className="lg:col-span-7">
                                {features.map((feature) => (
                                    <Tab.Panel key={feature.title} unmount={false}>
                                        <div className="relative sm:px-6 lg:hidden">
                                            <div
                                                className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 "/>
                                            <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                                                {feature.description}
                                            </p>
                                        </div>
                                        <div
                                            className="mt-10 w-[45rem] overflow-hidden shadow-formenu-indigo-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                                            <Image
                                                className="w-full"
                                                src={feature.image}
                                                alt=""
                                                priority
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                            />
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </>
                    )}
                </Tab.Group>
            </Container>
            <Script id={"role"}
                    dangerouslySetInnerHTML={{
                        __html: `
                const tabElements = document.querySelectorAll("[role='tab'], [role='tablist']");

tabElements.forEach(element => {
  element.removeAttribute("role");
  element.removeAttribute("aria-selected");
    element.removeAttribute("aria-orientation");
    element.removeAttribute("aria-controls");
});
document.getElementById('tablist').removeAttribute('aria-orientation');
                `
                    }}/>
        </section>
    )
}
