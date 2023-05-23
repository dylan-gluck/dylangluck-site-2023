<script>
	import '../app.css';
	import Icon from '@iconify/svelte';
</script>

<div class="drawer">
	<input id="nav-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Navbar -->
		<div class="w-full navbar bg-base-100 text-base-content md:fixed">
			<div class="flex-1 px-2 mx-2 font-bold">Dylan Navajas Gluck</div>
			<div class="flex-none hidden lg:block">
				<ul class="flex gap-6 px-2 mx-2">
					<!-- Navbar menu content here -->
					<li><a class="hover:cursor-pointer text-primary">Home</a></li>
					<li><a class="hover:cursor-pointer hover:text-primary">Github</a></li>
					<li><a class="hover:cursor-pointer hover:text-primary">LinkedIn</a></li>
					<li><a class="hover:cursor-pointer hover:text-primary">Resume</a></li>
					<li><a class="hover:cursor-pointer hover:text-primary">Contact</a></li>
				</ul>
			</div>
			<div class="flex-none lg:hidden">
				<label for="nav-drawer" class="btn btn-square btn-ghost">
					<Icon icon="material-symbols:menu" class="inline-block w-6 h-6 stroke-current" />
				</label>
			</div>
		</div>
		<!-- Page content here -->
		<slot />
	</div>
	<div class="drawer-side">
		<label for="nav-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-200">
			<!-- Sidebar content here -->
			<li><a>Home</a></li>
			<li><a>Github</a></li>
			<li><a>LinkedIn</a></li>
			<li><a>Resume</a></li>
			<li><a>Contact</a></li>
		</ul>
	</div>
</div>
