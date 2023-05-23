<script>
	import HomeHero from '$lib/components/HomeHero.svelte';
	import RecentProjects from '$lib/components/RecentProjects.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home | Dylan Navajas Gluck</title>
	<meta
		name="description"
		content="Full-stack engineer with 13+ years experience building beautiful applications. Currently: UX Engineering Manager @Unqork"
	/>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<HomeHero />
	<RecentProjects projects={data.projects} />
</div>
