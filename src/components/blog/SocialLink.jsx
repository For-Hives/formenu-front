import Link from 'next/link'
import React from 'react'

export default function SocialLink({ icon: Icon, ...props }) {
	return (
		<Link className="group -m-1 p-1" {...props}>
			<Icon className="h-6 w-6 fill-slate-500 transition group-hover:fill-slate-600 dark:fill-slate-400 dark:group-hover:fill-slate-300" />
		</Link>
	)
}
