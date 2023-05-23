<script>
	import { onMount } from 'svelte';

	export let words = [];
	let current = 0;

	onMount(() => {
		const interval = setInterval(() => {
			current = (current + 1) % words.length;
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<span class="rotate-words">
	{#each words as word, i (i)}
		{#if i === current}
			<span class="relative slide-in">{word}</span>
		{/if}
	{/each}
</span>

<style>
	@keyframes slideUpIn {
		0% {
			top: 50px;
			opacity: 0;
		}
		100% {
			top: 0;
			opacity: 1;
		}
	}

	.slide-in {
		opacity: 1;
		animation: slideUpIn 500ms ease;
	}
</style>
