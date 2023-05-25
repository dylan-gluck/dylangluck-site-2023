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
		class="hover:cursor-pointer"
		class:text-primary={$page.url.pathname == '/'}>{$t('nav.home')}</a
	>
</li>
<li>
	<a
		href="https://github.com/dylan-gluck"
		target="_blank"
		aria-label={$t('nav.github')}
		class="hover:cursor-pointer hover:text-primary">{$t('nav.github')}</a
	>
</li>
<li>
	<a
		href="https://www.linkedin.com/in/dylangluck/"
		target="_blank"
		aria-label={$t('nav.linkedin')}
		class="hover:cursor-pointer hover:text-primary">{$t('nav.linkedin')}</a
	>
</li>
<li>
	{#if $theme == 'emerald'}
		<button
			aria-label="dark"
			class="pt-1 text-lg hover:cursor-pointer hover:text-primary"
			on:click={theme.setDark}><Icon icon="ph:moon" /></button
		>
	{/if}
	{#if $theme == 'forest'}
		<button
			aria-label="light"
			class="pt-1 text-lg hover:cursor-pointer hover:text-primary"
			on:click={theme.setLight}><Icon icon="ph:sun" /></button
		>
	{/if}
</li>
