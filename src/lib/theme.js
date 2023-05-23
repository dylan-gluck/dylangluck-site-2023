import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
	let theme = 'forest';

	let userPrefDark = false;
	if (browser) {
		userPrefDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	theme = userPrefDark ? 'forest' : theme;

	const { subscribe, set } = writable(theme);

	return {
		subscribe,
		setLight: () => set('emerald'),
		setDark: () => set('forest')
	};
}

export const theme = createTheme();
