import React from 'react'
import Head from 'next/head'

import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { convertToStringDate } from '@/utils/utils'
import { Footer } from '@/components/Footer'

function Slug({ articleData }) {
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
				<link rel="canonical" href={`https://formenu.fr/blog/${articleData.slug}`} />
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
						dangerouslySetInnerHTML={{ __html: articleData.content }}
					></div>
					<Footer alternativemode={true} />
				</div>
			</Container>
		</>
	)
}

export async function getStaticPaths() {
	const res = await fetch(
		'https://api.formenu.fr/api/collections/articles/records',
		{
			method: 'GET',
			headers: {
				// 	token
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
	).then(res => res.json())

	/**
	 * format the data for getStaticPaths
	 * @type {{params: {id: *}}[]}
	 */

	const paths = res?.items?.map(record => ({
		params: {
			slug: record.slug,
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	let articleData = await fetch(
		`https://api.formenu.fr/api/collections/articles/records?filter=(slug='${params.slug}')&expand=*`,

		{
			method: 'GET',
			headers: {
				// 	token
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
	).then(res => res.json())
	articleData = articleData?.items?.[0]

	if (!articleData) {
		return {
			props: { hasError: true },
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