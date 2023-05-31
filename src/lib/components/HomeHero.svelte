<script>
	import { t } from '$lib/i18n';
	import RotateWords from '$lib/components/RotateWords.svelte';
</script>

<div class="grid flex-1 w-full p-6 place-items-center bg-base-100">
	<div class="container pt-20 mx-auto md:pt-0">
		<h1 class="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
			{@html $t('hero.title_1')}
			<RotateWords />
			{$t('hero.title_2')}
		</h1>
		<p class="py-6">
			{$t('hero.currently')}
			<a
				href="http://unqork.com"
				aria-label="Unqork company website"
				class="cursor-pointer text-primary"
				target="_blank">@Unqork</a
			>
		</p>
	</div>
</div>
