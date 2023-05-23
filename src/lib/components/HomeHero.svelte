<script>
	import RotateWords from '$lib/components/RotateWords.svelte';

	let words = ['beautiful', 'usable', 'responsive', 'accessible'];
</script>

<div class="grid w-full place-items-center flex-1 bg-base-100 p-6">
	<div class="w-full pt-20 md:pt-0">
		<h2 class="text-5xl md:text-6xl lg:text-7xl font-bold">
			Full-stack engineer with <span class="text-primary">13+ years</span> experience building <RotateWords
				{words}
			/>
			applications.
		</h2>
		<p class="py-6">
			Currently: UX Engineering Manager <a
				href="http://unqork.com"
				aria-label="Unqork company website"
				class="text-primary cursor-pointer"
				target="_blank">@Unqork</a
			>
		</p>
	</div>
</div>
