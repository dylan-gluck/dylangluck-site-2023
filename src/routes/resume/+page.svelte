<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { fullTime, contracts } from './data';
	import Navbar from '$lib/components/Navbar.svelte';
	import Icon from '@iconify/svelte';

	let tab = 'full-time';
	let experience = fullTime;

	let animate = false;

	onMount(() => {
		setTimeout(() => {
			animate = true;
		}, 200);
	});
</script>

<svelte:head>
	<title>Résumé | Dylan Navajas Gluck | UX Specialist</title>
	<meta
		name="description"
		content="Full-stack engineer with 13+ years experience building beautiful applications. Currently: UX Engineering Manager @Unqork"
	/>
</svelte:head>

<Navbar />
<section class="p-6 bg-base-100">
	<div class="container py-20 mx-auto">
		{#if animate}
			<button
				in:slide={{ axis: 'x', delay: 300, easing: backOut }}
				out:fade
				class="btn btn-circle btn-info"><Icon icon="tabler:download" class="text-xl" /></button
			>
		{/if}
	</div>
	<div class="container mx-auto">
		{#if animate}
			<div class="grid grid-cols-6 gap-5">
				<div
					in:slide={{ delay: 100, easing: backOut }}
					out:fade
					class="col-span-full md:col-span-2"
				>
					<h2 class="mb-3 text-2xl font-bold xl:text-3xl font-display">Education</h2>
				</div>
				<div
					in:slide={{ delay: 100, easing: backOut }}
					out:fade
					class="col-span-full md:col-span-4"
				>
					<h3 class="text-xl font-semibold font-display">Savannah College of Art & Design</h3>
					<p class="text-xs tracking-wide uppercase dark:text-gray-400">BA Graphic Design</p>
					<time class="text-xs tracking-wide uppercase dark:text-gray-400">2009 &mdash; 2013</time>
					<ul class="max-w-lg mt-3 text-sm list-disc list-inside">
						<li class="list-item">
							Classically trained in traditional graphic design process and technique
						</li>
						<li class="list-item">Focus on user experience & interaction</li>
						<li class="list-item">Graduated with a 4.0 GPA</li>
					</ul>
				</div>
			</div>
			<div in:slide={{ axis: 'x', delay: 100, easing: backOut }} out:fade class="divider" />
		{/if}
	</div>
	<div class="container mx-auto">
		<div class="grid grid-cols-6 gap-5">
			<div class="col-span-full md:col-span-2">
				{#if animate}
					<h2
						in:slide={{ delay: 200, easing: backOut }}
						out:fade
						class="mb-3 text-2xl font-bold xl:text-3xl font-display"
					>
						Experience
					</h2>
					<div in:slide={{ delay: 300, easing: backOut }} out:fade class="join">
						<button
							class="capitalize btn join-item btn-xs"
							class:btn-primary={tab == 'full-time'}
							on:click={() => {
								tab = 'full-time';
								experience = fullTime;
							}}>Full-time</button
						>
						<button
							class="capitalize btn join-item btn-xs"
							class:btn-primary={tab == 'contracts'}
							on:click={() => {
								tab = 'contracts';
								experience = contracts;
							}}>Contract</button
						>
					</div>
				{/if}
			</div>
			<div class="col-span-full md:col-span-4">
				<div
					class="space-y-12 relative sm:px-4 sm:-ml-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700"
				>
					{#key experience}
						{#if animate}
							{#each experience as item, i}
								<div class="flex flex-col sm:relative">
									<div
										in:slide={{ axis: 'x', delay: 300 + 50 * i, duration: 200, easing: backOut }}
										out:fade
										class="sm:absolute sm:top-2 sm:w-4 sm:h-4 sm:rounded-full sm:left-[-35px] sm:z-[0] bg-primary"
									/>
									<div in:slide={{ delay: 200 + 50 * i, easing: backOut }}>
										<p class="text-xs tracking-wide uppercase">{item.company}</p>
										<h3 class="text-xl font-semibold tracking-wide font-display">
											{item.title}
										</h3>
										<time class="text-xs tracking-wide uppercase dark:text-gray-400"
											>{@html item.date}</time
										>
										<p class="max-w-lg mt-3 text-sm">
											{item.description}
										</p>
									</div>
								</div>
							{/each}
						{/if}
					{/key}
				</div>
			</div>
		</div>
		{#if animate}
			<div
				in:slide={{ axis: 'x', delay: 300, easing: backOut }}
				out:fade
				class="mt-10 mb-10 divider"
			/>
			<div class="flex flex-col gap-1 text-xs">
				<h4 class="text-sm font-semibold font-display">Contact</h4>
				<a
					href="mailto:hello@dylangluck.com"
					target="_blank"
					class="hover:text-primary"
					in:slide={{ delay: 300, easing: backOut }}>hello@dylangluck.com</a
				>
				<a
					href="https://linkedin.com/in/dylangluck"
					target="_blank"
					class="hover:text-primary"
					in:slide={{ delay: 300, easing: backOut }}>LinkedIn</a
				>
				<a
					href="https://github.com/dylan-gluck"
					target="_blank"
					class="hover:text-primary"
					in:slide={{ delay: 300, easing: backOut }}>Github</a
				>
			</div>
		{/if}
	</div>
</section>
