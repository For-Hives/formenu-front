import React from 'react'
import Head from 'next/head'

import {Container} from '@/components/Container'
import {Header} from '@/components/Header'
import {convertToStringDate} from '@/utils/utils'
import {Footer} from '@/components/Footer'

function Slug({articleData}) {
    return (
        <>
            <Head>
                <title>
                    ForMenu le menu numérique qui va révolutionner votre restaurant
                </title>
                <meta
                    name="description"
                    content="ForMenu est l'application révolutionnaire pour votre carte de restaurant qui vous permet de créer une expérience unique pour vos clients."
                />
                {/*	seo tag canonical link */}
                <link rel="canonical" href={`https://formenu.fr/blog/${articleData.slug}`}/>
            </Head>
            <Header></Header>
            <Container className="mt-9">
                <div className="mx-auto max-w-2xl">
                    <div className="text-sm text-slate-500">
                        {convertToStringDate(articleData.date)}
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
                        {articleData.title}
                    </h1>
                    <div
                        className=" mt-6 text-base text-slate-600"
                        dangerouslySetInnerHTML={{__html: articleData.content}}
                    ></div>
                    <Footer alternativemode={true}/>
                </div>
            </Container>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`https://formenu.fr/api/api/landing-blog-articles`, {
        method: 'GET',
        headers: {
            // 	token
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    const data = await res.json()

    console.log(data)
    const paths = data.data?.map(record => ({
        params: {
            slug: record.attributes.slug,
        },
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    let articleData = await fetch(
        `https://formenu.fr/api/api/landing-blog-articles?filters[slug][$eq]='${params.slug}'`,

        {
            method: 'GET',
            headers: {
                // 	token
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    ).then(res => res.json())
    articleData = articleData?.data?.[0]

    if (!articleData) {
        return {
            props: {hasError: true},
        }
    }
    return {
        props: {
            articleData,
        },
        revalidate: 10
    }
}

export default Slug
