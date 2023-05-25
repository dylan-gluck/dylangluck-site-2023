<script>
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	let words = ['hero.words_1', 'hero.words_2', 'hero.words_3', 'hero.words_4'];
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
			<span class="relative z-0 slide-in">{$t(word)}</span>
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
