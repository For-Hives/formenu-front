import logoPlanetaria from '@/images/planetaria.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BriefcaseIcon from '@/components/blog/BriefcaseIcon'
import ArrowRightIcon from '@/components/blog/ArrowRightIcon'

export default function Resume() {
    let resume = [
        {
            company: 'Web : v.1',
            title: 'Mise en ligne du site web',
            logo: logoPlanetaria,
            start: '2023',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'App : v.1',
            title: 'Mise en ligne de l\'application',
            logo: logoPlanetaria,
            start: 'juillet 2023',
            end: 'novembre 2023',
        }
    ]

    return (
        <div className="rounded-2xl border border-slate-100 p-6">
            <h2 className="flex text-sm font-semibold text-slate-900">
                <BriefcaseIcon className="h-6 w-6 flex-none"/>
                <span className="ml-3">Changelog</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div
                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5">
                            <Image src={role.logo} alt="" className="h-7 w-7" unoptimized/>
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-slate-900">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-slate-500">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-slate-400"
                                aria-label={`${role.start.label ?? role.start} until ${
                                    role.end.label ?? role.end
                                }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>
                                {' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Link
                href="#"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-sm font-medium text-slate-900 outline-offset-2 transition hover:bg-slate-100 active:bg-slate-100 active:text-slate-900/60 active:transition-none"
            >
                Voir les changelogs
                <ArrowRightIcon className="h-4 w-4 stroke-slate-400 transition group-active:stroke-slate-600"/>
            </Link>
        </div>
    )
}
