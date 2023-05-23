<script>
	import Icon from '@iconify/svelte';

	export let projects = [];
</script>

<div class="grid w-full place-items-start flex-0 bg-base-100 p-6">
	<div class="w-full flex flex-col">
		<h2 class="uppercase font-semibold opacity-50 py-4 flex items-center gap-2">
			<a
				href="https://github.com/dylan-gluck"
				target="_blank"
				aria-label="Github profile for Dylan Gluck"
				class="hover:text-primary"><Icon icon="fontisto:github" class="inline-block" /></a
			>
			<span>Recent Projects</span>
		</h2>
		<div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
