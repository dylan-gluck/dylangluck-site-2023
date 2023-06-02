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

<section class="grid min-h-screen place-items-center bg-primary text-primary-content">
	<div class="py-10">
		<h5 class="mb-5 text-sm font-bold uppercase">{$t('gpt.prompt')}</h5>
		{#await haikuPromise}
			<h4 class="mb-5 text-xl font-bold md:text-4xl">
				<Icon icon="ph:spinner" class="inline-block mr-2 animate-spin" />
				{$t('gpt.loading')}
			</h4>
		{:then haiku}
			<h4 class="mb-5 text-xl font-bold md:text-4xl">{@html haiku}</h4>
			<span class="text-sm uppercase">{@html $t('gpt.signature')}</span>
		{/await}
	</div>
</section>
