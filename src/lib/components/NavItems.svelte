<script>
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/theme';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';
</script>

<li>
	<a
		href="/"
		aria-label={$t('nav.home')}
		class="cursor-pointer"
		class:text-primary={$page.url.pathname == '/'}>{$t('nav.home')}</a
	>
</li>
<li>
	<a
		href="https://github.com/dylan-gluck"
		target="_blank"
		aria-label={$t('nav.github')}
		class="cursor-pointer md:hover:text-primary">{$t('nav.github')}</a
	>
</li>
<li>
	<a
		href="https://www.linkedin.com/in/dylangluck/"
		target="_blank"
		aria-label={$t('nav.linkedin')}
		class="cursor-pointer md:hover:text-primary">{$t('nav.linkedin')}</a
	>
</li>
<li>
	<a
		href="/resume"
		aria-label={$t('nav.resume')}
		class="cursor-pointer md:hover:text-primary"
		class:text-primary={$page.url.pathname == '/resume'}>{$t('nav.resume')}</a
	>
</li>
<li>
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
