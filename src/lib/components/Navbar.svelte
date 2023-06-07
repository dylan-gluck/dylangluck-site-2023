<script>
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import NavItems from '$lib/components/NavItems.svelte';
	import LangSwitch from '$lib/components/LangSwitch.svelte';

	let showMobileNav = false;
</script>

<header class="relative z-10 w-full px-6 navbar text-base-content flex-0">
	<div class="container mx-auto">
		<div class="flex-1">
			<a href="/" class="font-bold">Dylan Navajas Gluck</a>
		</div>
		<div class="flex-none hidden md:block">
			<ul class="flex gap-6 px-2 mx-2">
				<NavItems />
				<LangSwitch header="true" />
			</ul>
		</div>
		<div class="flex-none md:hidden">
			<button
				aria-label="Show menu"
				class="btn btn-square btn-ghost"
				on:click={() => {
					showMobileNav = true;
				}}><Icon icon="material-symbols:menu" class="text-2xl" /></button
			>
		</div>
	</div>
</header>

{#if showMobileNav}
	<ul
		transition:slide
		class="fixed top-0 z-20 flex flex-col items-center w-full h-full gap-10 px-10 pt-20 text-3xl font-bold bg-base-200"
	>
		<li>
			<button
				class="btn"
				aria-label="Close menu"
				on:click={() => {
					showMobileNav = false;
				}}><Icon icon="material-symbols:close" class="text-2xl" /></button
			>
		</li>
		<!-- Sidebar content here -->
		<NavItems />
		<LangSwitch />
	</ul>
{/if}
