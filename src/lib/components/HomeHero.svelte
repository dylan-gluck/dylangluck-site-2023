<script>
	import { t } from '$lib/i18n';
	import RotateWords from '$lib/components/RotateWords.svelte';
</script>

<div class="grid w-full place-items-center flex-1 bg-base-100 p-6">
	<div class="w-full pt-20 md:pt-0">
		<h2 class="text-5xl md:text-6xl lg:text-7xl font-bold">
			{@html $t('hero.title_1')}
			<RotateWords />
			{$t('hero.title_2')}
		</h2>
		<p class="py-6">
			{$t('hero.currently')}
			<a
				href="http://unqork.com"
				aria-label="Unqork company website"
				class="text-primary cursor-pointer"
				target="_blank">@Unqork</a
			>
		</p>
	</div>
</div>
