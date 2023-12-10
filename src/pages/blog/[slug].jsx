import React from 'react'
import Head from 'next/head'

import {Container} from '@/components/Container'
import {Header} from '@/components/Header'
import {convertToStringDate, processMarkdown, updateNestedProperty} from '@/utils/utils'
import {Footer} from '@/components/Footer'
import {Layout} from "@/components/Layout";

function Slug({data}) {
    let articleData = data
    console.log(data)
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
                <link rel="canonical" href={`https://formenu.fr/blog/${articleData?.attributes.slug}`}/>
            </Head>
            <Header></Header>
            <Container className="mt-9">
                <div className="mx-auto max-w-2xl">
                    <div className="text-sm text-slate-500">
                        {convertToStringDate(articleData?.attributes.date)}
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
                        {articleData?.attributes.title}
                    </h1>
                    <div className={'flex flex-col'}>
                        <div className={'prose my-8 xl:prose-lg'}>
                            {/*{*/}
                            {/*    console.log(articleData?.attributes.content)*/}
                            {/*}*/}
                            <Layout value={articleData?.attributes.content.toString()}/>
                        </div>
                    </div>
                    {/*<div*/}
                    {/*    className=" mt-6 text-base text-slate-600"*/}
                    {/*    dangerouslySetInnerHTML={{__html: articleData?.attributes.content}}*/}
                    {/*></div>*/}
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
    const res = await fetch(`https://formenu.fr/api/api/landing-blog-articles?filters[slug][$eq]=${params.slug}`, {
        method: 'GET',
        headers: {
            // 	token
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    let data = await res.json()
    data = data?.data[0]

    const processedContent = await processMarkdown(
        data.attributes.content
    )

    data = updateNestedProperty(
        data,
        'data.attributes.content',
        processedContent
    )

    console.log(data)

    if (!data) {
        return {
            props: {hasError: true},
        }
    }
    return {
        props: {
            data,
        },
        revalidate: 10
    }
}

export default Slug
