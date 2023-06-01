<script>
	import '../app.css';
	import { theme } from '$lib/theme.js';
	import NavItems from '$lib/components/NavItems.svelte';
	import LangSwitch from '$lib/components/LangSwitch.svelte';
</script>

<div class="drawer" data-theme={$theme}>
	<input id="nav-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="nav-drawer" class="drawer-overlay" />
		<ul class="flex flex-col h-full gap-10 px-10 pt-20 text-2xl font-bold w-80 bg-base-200">
			<!-- Sidebar content here -->
			<NavItems />
			<LangSwitch />
		</ul>
	</div>
</div>
