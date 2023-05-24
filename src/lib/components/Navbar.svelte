<script>
	import Icon from '@iconify/svelte';
	import NavItems from '$lib/components/NavItems.svelte';
	import LangSwitch from '$lib/LangSwitch.svelte';
</script>

<div class="w-full navbar bg-base-100 text-base-content flex-0">
	<h1 class="flex-1 px-2 mx-2 font-bold">Dylan Navajas Gluck</h1>
	<div class="flex-none hidden lg:block">
		<ul class="flex gap-6 px-2 mx-2">
			<!-- Navbar menu content here -->
			<NavItems />
			<LangSwitch header="true" />
		</ul>
	</div>
	<div class="flex-none lg:hidden">
		<label aria-label="Mobile navigation toggle" for="nav-drawer" class="btn btn-square btn-ghost">
			<Icon icon="material-symbols:menu" class="inline-block w-6 h-6 stroke-current" />
		</label>
	</div>
</div>
