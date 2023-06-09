<script>
	import { onMount } from 'svelte';
	import { fade, slide, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { fullTime, contracts, education } from './data';
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
<section class="relative p-6">
	<div class="container py-20 mx-auto">
		{#if animate}
			<button
				in:fly={{ x: -100, opacity: 0, delay: 300, easing: backOut }}
				out:fade
				class="transition-all btn btn-circle hover:btn-info"
				><Icon icon="tabler:download" class="text-xl" /></button
			>
		{/if}
	</div>
	<div class="container mx-auto">
		{#if animate}
			<div class="grid grid-cols-6 gap-5">
				<div
					in:fly={{ y: 50, opacity: 0, delay: 100, easing: backOut }}
					out:fade
					class="col-span-full md:col-span-2"
				>
					<h2 class="mb-3 text-2xl font-bold xl:text-3xl font-display">Education</h2>
				</div>
				{#each education as item, i}
					<div
						in:fly={{ y: 50, opacity: 0, delay: 100, easing: backOut }}
						out:fade
						class="col-span-full md:col-span-4"
					>
						<h3 class="text-xl font-semibold font-display">{item.school}</h3>
						<p class="text-xs tracking-wide uppercase dark:text-gray-400">{item.degree}</p>
						<time class="text-xs tracking-wide uppercase dark:text-gray-400">{@html item.date}</time
						>
						{@html item.description}
					</div>
				{/each}
			</div>
			<div in:slide={{ axis: 'x', delay: 100, easing: backOut }} out:fade class="divider" />
		{/if}
	</div>
	<div class="container mx-auto">
		<div class="grid grid-cols-6 gap-5">
			<div class="col-span-full md:col-span-2">
				{#if animate}
					<h2
						in:fly={{ y: 50, opacity: 0, delay: 150, easing: backOut }}
						out:fade
						class="mb-3 text-2xl font-bold xl:text-3xl font-display"
					>
						Experience
					</h2>
					<div in:fly={{ y: 50, opacity: 0, delay: 200, easing: backOut }} out:fade class="join">
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
				<div class="relative space-y-12 sm:px-4 sm:-ml-4 sm:space-y-8">
					<div
						transition:fade
						class="invisible sm:visible sm:absolute sm:top-2 sm:bottom-0 sm:w-0.5 sm:-left-3 dark:bg-gray-700"
					/>
					{#key experience}
						{#if animate}
							{#each experience as item, i}
								<div class="flex flex-col sm:relative">
									<div
										in:fly={{
											x: -50,
											opacity: 0,
											delay: 150 + 50 * i,
											duration: 200,
											easing: backOut
										}}
										out:fade
										class="invisible sm:visible sm:absolute sm:top-2 sm:w-4 sm:h-4 sm:rounded-full sm:left-[-35px] sm:z-[0] bg-primary"
									/>
									<div
										in:fly={{ y: 50, opacity: 0, delay: 150 + 50 * i, easing: backOut }}
										out:fade
									>
										<p class="text-xs tracking-wide uppercase">{item.company}</p>
										<h3 class="text-xl font-semibold tracking-wide font-display">
											{item.title}
										</h3>
										<time class="text-xs tracking-wide uppercase dark:text-gray-400"
											>{@html item.date}</time
										>
										<p class="max-w-lg mt-3 text-sm">
											{@html item.description}
										</p>
									</div>
								</div>
							{/each}
						{/if}
					{/key}
				</div>
			</div>
		</div>
		<div class="mt-10 mb-10 divider" />
		<div class="flex flex-col gap-1 text-xs">
			<h4 class="text-sm font-semibold font-display">Contact</h4>
			<a
				href="mailto:hello@dylangluck.com"
				target="_blank"
				class="hover:text-primary"
				in:fly={{ y: 50, opacity: 0, delay: 150, easing: backOut }}>hello@dylangluck.com</a
			>
			<a
				href="https://linkedin.com/in/dylangluck"
				target="_blank"
				class="hover:text-primary"
				in:fly={{ y: 50, opacity: 0, delay: 150, easing: backOut }}>LinkedIn</a
			>
			<a
				href="https://github.com/dylan-gluck"
				target="_blank"
				class="hover:text-primary"
				in:fly={{ y: 50, opacity: 0, delay: 150, easing: backOut }}>Github</a
			>
		</div>
	</div>
</section>
