import React from 'react'

export default function MailIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
				className="fill-slate-100 stroke-slate-400"
			/>
			<path
				d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
				className="stroke-slate-400"
			/>
		</svg>
	)
}
