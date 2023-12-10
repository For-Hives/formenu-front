import { remark } from 'remark'
import html from 'remark-html'

export function toDateLongMonthYear(date) {
	return new Date(date).toLocaleDateString('fr-FR', {
		year: 'numeric',
		month: 'long',
	})
}

export function convertToStringDate(date) {
	// convert article.attributes.updatedAt to a date string like September 17, 2021 (base : 2023-06-10T09:20:48.754Z)
	const dateObject = new Date(date)
	const options = { year: 'numeric', month: 'long', day: 'numeric' }
	return dateObject.toLocaleDateString('fr-FR', options)
}

/**
 * Process markdown content
 * @param markdownContent
 * @returns {Promise<string>}
 */
export async function processMarkdown(markdownContent) {
	const result = await remark().use(html).process(markdownContent)
	return result.toString()
}

/**
 * Update nested property
 * @param obj
 * @param path
 * @param newValue
 * @returns {*}
 */
export function updateNestedProperty(obj, path, newValue) {
	// Convertir le chemin en tableau de clés
	const keys = Array.isArray(path) ? path : path.split('.')

	// Cloner l'objet
	let newObj = { ...obj }

	// Pointer vers l'objet à modifier
	let pointer = newObj
	for (let i = 0; i < keys.length - 1; i++) {
		pointer[keys[i]] = { ...pointer[keys[i]] }
		pointer = pointer[keys[i]]
	}

	// Mettre à jour la propriété
	pointer[keys[keys.length - 1]] = newValue

	return newObj
}
