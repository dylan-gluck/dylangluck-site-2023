<script>
	import { t, locale } from '$lib/i18n';
	import Icon from '@iconify/svelte';

	$: haikuPromise = (async function getHaiku(currentLocale) {
		const res = await fetch('/api/get-haiku', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ locale: currentLocale })
		});
		const data = await res.json();

		return data.haiku;
	})($locale);
</script>

<section class="grid place-items-center py-10 bg-primary text-primary-content">
	<div class="px-6 py-10">
		<div class="chat chat-start mb-10">
			<div class="chat-header">Dylan Navajas Gluck</div>
			<div class="chat-bubble text-sm md:text-base">{$t('gpt.prompt')}</div>
		</div>

		{#await haikuPromise}
			<h4 class="text-2xl md:text-6xl font-bold mb-5">
				<Icon icon="ph:spinner" class="inline-block mr-2 animate-spin" />
				{$t('gpt.loading')}
			</h4>
		{:then haiku}
			<h4 class="text-2xl md:text-6xl font-bold mb-5">{@html haiku}</h4>
			<span class="uppercase text-sm">{@html $t('gpt.signature')}</span>
		{/await}
	</div>
</section>
