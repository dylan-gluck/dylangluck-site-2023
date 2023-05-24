<script>
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/theme';
	import { t, locale, locales } from '$lib/i18n';
</script>

<li>
	<a href="/" aria-label={$t('nav.home')} class="hover:cursor-pointer text-primary"
		>{$t('nav.home')}</a
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
	<a
		href="/downloads/dylan-gluck_resume.pdf"
		target="_blank"
		aria-label={$t('nav.resume')}
		class="hover:cursor-pointer hover:text-primary">{$t('nav.resume')}</a
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
<li class="dropdown dropdown-end dropdown-hover">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label tabindex="0" class="text-lg hover:cursor-pointer hover:text-primary leading-none"
		>{$locale} <Icon icon="icon-park-solid:down-one" class="inline" /></label
	>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul
		tabindex="0"
		class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-18 text-center"
	>
		{#each locales as l}
			<li>
				<button
					on:click={() => {
						$locale = l;
					}}>{l}</button
				>
			</li>
		{/each}
	</ul>
</li>
