import PocketBase from 'pocketbase'

export function initPocketBase() {
	return new PocketBase('https://api.formenu.fr')
}
