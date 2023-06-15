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
