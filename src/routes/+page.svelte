<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import RecentProjects from '$lib/components/RecentProjects.svelte';
	import HomeHero from '$lib/components/HomeHero.svelte';
	import HomeHaiku from '$lib/components/HomeHaiku.svelte';

	export let data;
</script>

<svelte:head>
	<title>Dylan Navajas Gluck | UX Specialist</title>
	<meta
		name="description"
		content="Full-stack engineer with 13+ years experience building beautiful applications. Currently: UX Engineering Manager @Unqork"
	/>
</svelte:head>

<section class="flex flex-col min-h-screen">
	<Navbar />
	<HomeHero />
	<RecentProjects projects={data.projects} />
</section>

<HomeHaiku />
