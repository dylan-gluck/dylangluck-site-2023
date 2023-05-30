<script>
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n';

	export let projects = [];
</script>

<div class="grid w-full p-6 place-items-start flex-0 bg-base-100">
	<div class="flex flex-col w-full">
		<h2 class="flex items-center gap-2 py-4 font-semibold uppercase opacity-50">
			<a
				href="https://github.com/dylan-gluck"
				target="_blank"
				aria-label="Github profile for Dylan Gluck"
				class="hover:text-primary"><Icon icon="fontisto:github" class="inline-block" /></a
			>
			<span>{$t('hero.recent')}</span>
		</h2>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
			{#each projects as project}
				<a
					href={project.html_url}
					aria-label="{project.name} on Github by Dylan Gluck"
					target="_blank"
					class="flex flex-col gap-1 cursor-pointer group"
				>
					<span class="font-bold group-hover:text-primary">{project.name}</span>
					<p class="text-sm line-clamp-2">
						{project.description}
					</p>
				</a>
			{/each}
		</div>
	</div>
</div>
