<script>
	import Icon from '@iconify/svelte';
	import { locale, locales } from '$lib/i18n';

	export let header = false;
</script>

<li class="dropdown" class:dropdown-end={header} class:dropdown-hover={header}>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label tabindex="0" class="hover:cursor-pointer hover:text-primary leading-none"
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
