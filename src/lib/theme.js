import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createTheme() {
	let theme = 'dark';

	let userPrefDark = false;
	if (browser) {
		userPrefDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	theme = userPrefDark ? 'dark' : theme;

	const { subscribe, set } = writable(theme);

	return {
		subscribe,
		setLight: () => set('light'),
		setDark: () => set('dark')
	};
}

export const theme = createTheme();
