<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Navbar from '$lib/components/Navbar.svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

<section class="bg-base-100">
	<Navbar />
	<div class="container mx-auto">
		{#if animate}
			<div class="grid grid-cols-6 gap-5 p-6 pt-40">
				<div in:slide={{ delay: 100, easing: backOut }} class="col-span-full md:col-span-2">
					<h2 class="text-2xl font-bold">Education</h2>
				</div>
				<div in:slide={{ delay: 100, easing: backOut }} class="col-span-full md:col-span-4">
					<h3 class="text-xl font-semibold">Savannah College of Art & Design</h3>
					<p class="text-xs tracking-wide uppercase dark:text-gray-400">BA Graphic Design</p>
					<time class="text-xs tracking-wide uppercase dark:text-gray-400">2009 &mdash; 2013</time>
					<p class="max-w-xl mt-3">
						Non qui esse dolore consequat tempor dolore tempor consequat nostrud. Id veniam veniam
						ad eiusmod fugiat occaecat aliquip duis mollit.
					</p>
				</div>
			</div>
		{/if}
		<div class="px-6 divider" />
	</div>
	<div class="container mx-auto">
		{#if animate}
			<div class="grid grid-cols-6 gap-5 p-6">
				<div in:slide={{ delay: 200, easing: backOut }} class="col-span-full md:col-span-2">
					<h2 class="text-2xl font-bold">Experience</h2>
				</div>
				<div class="col-span-full md:col-span-4">
					<div
						class="space-y-12 relative sm:px-4 sm:-ml-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700"
					>
						<div class="flex flex-col sm:relative">
							<div
								in:slide={{ axis: 'x', delay: 300, duration: 200, easing: backOut }}
								class="sm:absolute sm:top-2 sm:w-4 sm:h-4 sm:rounded-full sm:left-[-35px] sm:z-[1] bg-primary"
							/>
							<div in:slide={{ delay: 200, easing: backOut }}>
								<p class="text-xs tracking-wide uppercase">Unqork</p>
								<h3 class="text-xl font-semibold tracking-wide">Engineering Manager</h3>
								<time class="text-xs tracking-wide uppercase dark:text-gray-400"
									>2019 &mdash; Present</time
								>
								<p class="max-w-xl mt-3">
									Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum
									et malesuada fames ac ante ipsum primis in faucibus.
								</p>
							</div>
						</div>
						<div class="flex flex-col sm:relative">
							<div
								in:slide={{ axis: 'x', delay: 400, duration: 200, easing: backOut }}
								class="sm:absolute sm:top-2 sm:w-4 sm:h-4 sm:rounded-full sm:left-[-35px] sm:z-[1] bg-primary"
							/>
							<div in:slide={{ delay: 300, easing: backOut }}>
								<p class="text-xs tracking-wide uppercase">Unqork</p>
								<h3 class="text-xl font-semibold tracking-wide">Engineering Manager</h3>
								<time class="text-xs tracking-wide uppercase dark:text-gray-400"
									>2019 &mdash; Present</time
								>
								<p class="max-w-xl mt-3">
									Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum
									et malesuada fames ac ante ipsum primis in faucibus.
								</p>
							</div>
						</div>
						<div class="flex flex-col sm:relative">
							<div
								in:slide={{ axis: 'x', delay: 500, duration: 200, easing: backOut }}
								class="sm:absolute sm:top-2 sm:w-4 sm:h-4 sm:rounded-full sm:left-[-35px] sm:z-[1] bg-primary"
							/>
							<div in:slide={{ delay: 400, easing: backOut }}>
								<p class="text-xs tracking-wide uppercase">Unqork</p>
								<h3 class="text-xl font-semibold tracking-wide">Engineering Manager</h3>
								<time class="text-xs tracking-wide uppercase dark:text-gray-400"
									>2019 &mdash; Present</time
								>
								<p class="max-w-xl mt-3">
									Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum
									et malesuada fames ac ante ipsum primis in faucibus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
