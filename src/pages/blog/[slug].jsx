import React from 'react'
import Head from 'next/head'

import { Container } from '@/components/Container'
import { InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'
import { Header } from '@/components/Header'
import Loader from '@/components/Loader'

import { useQuery } from '@tanstack/react-query'
import Photos from '@/components/blog/Photos'
import Resume from '@/components/blog/Resume'
import Newsletter from '@/components/blog/Newsletter'
import SocialLink from '@/components/blog/SocialLink'
import { convertToStringDate } from '@/utils/utils'
import Link from 'next/Link'
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
			</Head>
			<Header></Header>
			<Container className="mt-9">
				<div className="mx-auto max-w-2xl">
					<div className="text-sm text-zinc-500 dark:text-zinc-400">
						{convertToStringDate(articleData.date)}
					</div>
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
						{articleData.title}
					</h1>
					<div
						className=" mt-6 text-base text-zinc-600 dark:text-zinc-400"
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
	console.log(articleData)
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
	}
}

export default Slug
