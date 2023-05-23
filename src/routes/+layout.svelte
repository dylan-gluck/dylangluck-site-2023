<script>
	import '../app.css';
	import NavItems from '$lib/components/NavItems.svelte';
	import { theme } from '$lib/theme.js';
</script>

<div class="drawer" data-theme={$theme}>
	<input id="nav-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="nav-drawer" class="drawer-overlay" />
		<ul class="flex flex-col gap-10 text-2xl font-bold pt-20 px-10 w-80 bg-base-200">
			<!-- Sidebar content here -->
			<NavItems />
		</ul>
	</div>
</div>
