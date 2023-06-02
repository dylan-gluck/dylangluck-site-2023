<script>
	import { slide } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import NavItems from '$lib/components/NavItems.svelte';
	import LangSwitch from '$lib/components/LangSwitch.svelte';

	let showMobileNav = false;
</script>

<div class="w-full px-6 bg-transparent navbar text-base-content flex-0">
	<div class="container mx-auto">
		<a href="/" class="flex-1 font-bold">Dylan Navajas Gluck</a>
		<div class="flex-none hidden lg:block">
			<ul class="flex gap-6 px-2 mx-2">
				<NavItems />
				<LangSwitch header="true" />
			</ul>
		</div>
		<div class="flex-none lg:hidden">
			<button
				aria-label="Mobile navigation toggle"
				class="relative z-20 btn btn-square btn-ghost"
				on:click={() => {
					showMobileNav = !showMobileNav;
				}}
				>{#if showMobileNav}
					<span in:slide><Icon icon="material-symbols:close" class="text-2xl" /></span>
				{:else}
					<span in:slide><Icon icon="material-symbols:menu" class="text-2xl" /></span>
				{/if}
			</button>
		</div>
	</div>
</div>

{#if showMobileNav}
	<ul
		transition:slide
		class="fixed top-0 z-10 flex flex-col items-center w-full h-full gap-10 px-10 pt-20 text-3xl font-bold bg-base-200"
	>
		<!-- Sidebar content here -->
		<NavItems />
		<LangSwitch />
	</ul>
{/if}
