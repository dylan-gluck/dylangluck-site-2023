<script>
	import '../app.css';
	import { theme } from '$lib/theme.js';
	import { onMount } from 'svelte';

	let light;

	onMount(() => {
		window.onpointermove = (event) => {
			const { clientX, clientY } = event;

			light.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 5000, fill: 'forwards' }
			);
		};
	});
</script>

<main data-theme={$theme}>
	{#if $theme == 'dark'}
		<div
			class="z-0 light aspect-square h-1/3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
			bind:this={light}
		/>
	{/if}
	<div class="z-0 blur" />
	<slot />
</main>

<style>
	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}
	.light {
		position: fixed;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		animation: rotate 30s infinite;
		opacity: 0.8;
	}

	.blur {
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		backdrop-filter: blur(12vmax);
	}
</style>
