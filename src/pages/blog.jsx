import Head from 'next/head'
import React from 'react'
import { Container } from '@/components/Container'
import { InstagramIcon, LinkedInIcon } from '@/components/SocialIcons'
import { Header } from '@/components/Header'
import Loader from '@/components/Loader'
import { initPocketBase } from '../../lib/pocketbase'
import { useQuery } from '@tanstack/react-query'
import Photos from '@/components/blog/Photos'
import Resume from '@/components/blog/Resume'
import Newsletter from '@/components/blog/Newsletter'
import SocialLink from '@/components/blog/SocialLink'
import { convertToStringDate } from '@/utils/utils'
import Link from 'next/Link'
import { Footer } from '@/components/Footer'

/**
 * Blog page
 */
export default function Blog() {
	const pb = initPocketBase()

	/**
	 * Get articles, sort by created date, and limit to 3, then set to state
	 * use pocketbase & react-query to fetch data
	 * react-query will cache data
	 */
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['articles'],
		queryFn: async () => {
			return pb.collection('articles').getFullList({
				sort: '-created',
			})
		},
	})

	if (isLoading) return <Loader />

	if (error) return 'An error has occurred: ' + error.message

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
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
						ForMenu le menu numérique qui va révolutionner votre restaurant
					</h1>
					<p className="mt-6 text-base text-slate-600">
						Nous sommes l’équipe de ForMenu, une équipe de jeune entrepreneur
						passionnés, basés à Nantes, dans ce blog nous vous donnerons des
						conseils et nous parlerons de nos dernières actualités, ainsi que de
						nos derniers changelogs et notre Roadmap générale !
					</p>
					<div className="mt-6 flex gap-6">
						<SocialLink
							href="https://instagram.com"
							aria-label="Follow on Instagram"
							icon={InstagramIcon}
						/>

						<SocialLink
							href="https://linkedin.com"
							aria-label="Follow on LinkedIn"
							icon={LinkedInIcon}
						/>
					</div>
				</div>
			</Container>
			<Photos />
			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
					<div className="flex flex-col gap-16">
						{
							/**
							 * map sur les articles
							 */
							data.map(article => (
								// fragment : permet de ne pas avoir de div en plus dans le dom & de wrap les éléments
								<div key={article.id}>
									<h2 className="text-sm text-slate-500">
										{convertToStringDate(article.date)}
									</h2>
									<h3 className="text-sm text-slate-500">
										{article.title}
									</h3>
									<div
										dangerouslySetInnerHTML={{
											__html: article.excerpt,
										}}
									/>
									<Link
										className={
											'flex items-center text-sm font-medium text-indigo-900'
										}
										href={`/blog/${article.slug}`}
									>
										{"Lire l'article"}
										<span className="material-icons-round mt-1 text-base text-indigo-900">
											chevron_right
										</span>
									</Link>
								</div>
							))
						}
					</div>
					<div className="space-y-10 lg:pl-16 xl:pl-24">
						<Newsletter />
						<Resume />
					</div>
				</div>
				<div className="flex w-full justify-center">
					<Footer alternativemode={true} />
				</div>
			</Container>
		</>
	)
}
