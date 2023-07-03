import React from 'react'
import MailIcon from '@/components/blog/MailIcon'

export default function Newsletter() {
	return (
		<form
			action="/thank-you"
			className="rounded-2xl border border-slate-100 p-6"
		>
			<h2 className="flex text-sm font-semibold text-slate-900">
				<MailIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">Stay up to date</span>
			</h2>
			<p className="mt-2 text-sm text-slate-600">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>
			<div className="mt-6 flex">
				<input
					type="email"
					placeholder="Email address"
					aria-label="Email address"
					required
					className="min-w-0 flex-auto appearance-none rounded-md border border-slate-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-slate-800/5 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
				/>
				<button
					type="submit"
					className="ml-4 inline-flex flex-none items-center justify-center gap-2
                 rounded-md bg-slate-800 px-3 py-2 text-sm
                  font-semibold text-slate-100 outline-offset-2 transition hover:bg-slate-700 active:bg-slate-800 active:text-slate-100/70 active:transition-none"
				>
					Join
				</button>
			</div>
		</form>
	)
}
