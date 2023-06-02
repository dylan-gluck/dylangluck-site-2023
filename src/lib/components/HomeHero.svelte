<script>
	import { onMount } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { t, locale } from '$lib/i18n';
	import RotateWords from '$lib/components/RotateWords.svelte';
	import ChatPopup from '$lib/components/ChatPopup.svelte';

	let animate = false;

	onMount(() => {
		setTimeout(() => {
			animate = true;
		}, 300);
	});
</script>

<div class="grid flex-1 w-full p-6 place-items-center bg-base-100">
	<div class="container pt-20 mx-auto md:pt-0">
		{#if animate}
			{#key $locale}
				<h1
					in:slide={{ delay: 100, easing: backOut }}
					out:fade={{ duration: 100 }}
					class="text-5xl font-bold font-display md:text-6xl lg:text-7xl xl:text-8xl"
				>
					{@html $t('hero.title_1')}
					<RotateWords />
					{$t('hero.title_2')}
				</h1>
				<p
					in:slide={{ delay: 200, easing: backOut }}
					out:fade={{ duration: 100 }}
					class="flex flex-wrap items-center gap-1 py-6"
				>
					<span class="badge badge-info badge-sm badge-outline">{$t('hero.currently')}</span>
					<span>{$t('hero.position')}</span>
					<a
						href="http://unqork.com"
						aria-label="Unqork company website"
						class="no-underline cursor-pointer link hover:text-primary"
						target="_blank">@Unqork</a
					>
				</p>
			{/key}
			<div class="fixed bottom-0 flex justify-end w-full px-10 py-6 flex-0 md:relative md:py-0">
				<ChatPopup />
			</div>
		{/if}
	</div>
</div>
