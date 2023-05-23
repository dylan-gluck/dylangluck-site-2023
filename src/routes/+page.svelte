<script>
	import Icon from '@iconify/svelte';

	export let data;

	console.log(data);
</script>

<svelte:head>
	<title>Home | Dylan Navajas Gluck</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<div class="grid w-full place-items-center flex-1 bg-base-100 p-6">
		<div class="w-full pt-20 md:pt-0">
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold">
				Full-stack Engineer with <span class="text-primary">13+ years</span> experience building beautiful
				applications.
			</h1>
			<p class="py-6">
				Currently: UX Engineering Manager <a
					href="http://unqork.com"
					class="text-primary cursor-pointer"
					target="_blank">@Unqork</a
				>
			</p>
		</div>
	</div>
	<div class="grid w-full place-items-start flex-0 bg-base-100 p-6">
		<div class="w-full flex flex-col">
			<h2 class="uppercase font-semibold opacity-50 py-4 flex items-center gap-2">
				<Icon icon="fontisto:github" class="inline-block" />
				<span>Recent Projects</span>
			</h2>
			<div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{#each data.projects as project}
					<a href={project.html_url} target="_blank" class="flex flex-col gap-1 cursor-pointer">
						<span class="font-bold">{project.name}</span>
						<p class="text-sm line-clamp-3">
							{project.description}
						</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
