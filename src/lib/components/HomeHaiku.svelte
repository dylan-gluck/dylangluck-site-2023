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

<section class="grid place-items-center min-h-screen bg-primary text-primary-content">
	<div class="py-10">
		<h5 class="text-sm uppercase font-bold mb-5">{$t('gpt.prompt')}</h5>
		{#await haikuPromise}
			<h4 class="text-xl md:text-4xl font-bold mb-5">
				<Icon icon="ph:spinner" class="inline-block mr-2 animate-spin" />
				{$t('gpt.loading')}
			</h4>
		{:then haiku}
			<h4 class="text-xl md:text-4xl font-bold mb-5">{@html haiku}</h4>
			<span class="uppercase text-sm">{@html $t('gpt.signature')}</span>
		{/await}
	</div>
</section>
