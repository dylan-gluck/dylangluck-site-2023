<script>
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n';

	export let projects = [];

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<div class="grid w-full p-6 bg-transparent place-items-start flex-0">
	<div class="container flex flex-col mx-auto">
		{#if animate}
			<h2
				in:fly={{ y: 200, opacity: 0, delay: 600, easing: backOut }}
				out:fade
				class="flex items-center gap-2 py-4 font-semibold uppercase"
			>
				<a
					href="https://github.com/dylan-gluck"
					target="_blank"
					aria-label="Github profile for Dylan Gluck"
					class="opacity-50 hover:text-primary hover:opacity-100"
					><Icon icon="fontisto:github" class="inline-block" /></a
				>
				<span class="pt-1 opacity-50 font-display">{$t('hero.recent')}</span>
			</h2>
		{/if}
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
			{#if animate}
				{#each projects as project, i}
					<a
						href={project.html_url}
						aria-label="{project.name} on Github by Dylan Gluck"
						target="_blank"
						class="flex flex-col gap-1 cursor-pointer group"
						in:fly={{ y: 50, opacity: 0, easing: backOut, delay: 600 + 50 * i }}
						out:fade
					>
						<span class="font-bold group-hover:text-primary">{project.name}</span>
						<p class="text-sm line-clamp-2">
							{project.description}
						</p>
					</a>
				{/each}
			{/if}
		</div>
	</div>
</div>
