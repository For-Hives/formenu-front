import { useState } from 'react'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'

export function ToggleButton({ onToggle }) {
	const [enabled, setEnabled] = useState(true)

	const handleToggle = value => {
		setEnabled(value)
		if (onToggle) {
			onToggle(value)
		}
	}

	return (
		<Switch.Group as="div" className="flex items-center">
			<Switch.Label as="span" className="mr-3 text-sm">
				<span className="font-medium text-gray-900">Mode alternatif</span>
			</Switch.Label>
			<Switch
				checked={enabled}
				onChange={handleToggle}
				className={clsx(
					enabled ? 'bg-indigo-600' : 'bg-gray-200',
					'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
				)}
			>
				<span
					aria-hidden="true"
					className={clsx(
						enabled ? 'translate-x-5' : 'translate-x-0',
						'pointer-events-none inline-block h-5 w-5  transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
					)}
				/>
			</Switch>
		</Switch.Group>
	)
}
