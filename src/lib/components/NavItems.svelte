<script>
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/theme';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';
	import { fade, slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
</script>

<li in:slide={{ delay: 100, duration: 100, ease: backOut }} out:fade>
	<a
		href="/"
		aria-label={$t('nav.home')}
		class="cursor-pointer"
		class:text-primary={$page.url.pathname == '/'}>{$t('nav.home')}</a
	>
</li>
<li in:slide={{ delay: 150, duration: 100, ease: backOut }} out:fade>
	<a
		href="https://github.com/dylan-gluck"
		target="_blank"
		aria-label={$t('nav.github')}
		class="cursor-pointer md:hover:text-primary">{$t('nav.github')}</a
	>
</li>
<li in:slide={{ delay: 200, duration: 100, ease: backOut }} out:fade>
	<a
		href="https://www.linkedin.com/in/dylangluck/"
		target="_blank"
		aria-label={$t('nav.linkedin')}
		class="cursor-pointer md:hover:text-primary">{$t('nav.linkedin')}</a
	>
</li>
<li in:slide={{ delay: 250, duration: 100, ease: backOut }} out:fade>
	<a
		href="/resume"
		aria-label={$t('nav.resume')}
		class="cursor-pointer md:hover:text-primary"
		class:text-primary={$page.url.pathname == '/resume'}>{$t('nav.resume')}</a
	>
</li>
<li in:slide={{ delay: 300, duration: 100, ease: backOut }} out:fade>
	{#if $theme == 'light'}
		<button
			aria-label="Enable dark mode"
			class="pt-1 text-lg cursor-pointer md:hover:text-primary"
			on:click={theme.setDark}><Icon icon="ph:moon" /></button
		>
	{/if}
	{#if $theme == 'dark'}
		<button
			aria-label="Enable light mode"
			class="pt-1 text-lg cursor-pointer md:hover:text-primary"
			on:click={theme.setLight}><Icon icon="ph:sun" /></button
		>
	{/if}
</li>
