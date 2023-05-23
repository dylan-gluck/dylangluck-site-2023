<script>
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/theme.js';
</script>

<li><a href="/" class="hover:cursor-pointer text-primary">Home</a></li>
<li>
	<a
		href="https://github.com/dylan-gluck"
		target="_blank"
		class="hover:cursor-pointer hover:text-primary">Github</a
	>
</li>
<li>
	<a
		href="https://www.linkedin.com/in/dylangluck/"
		target="_blank"
		class="hover:cursor-pointer hover:text-primary">LinkedIn</a
	>
</li>
<li>
	<a
		href="/downloads/dylan-gluck_resume.pdf"
		target="_blank"
		class="hover:cursor-pointer hover:text-primary">Resume</a
	>
</li>
<li>
	{#if $theme == 'emerald'}
		<button class="pt-1 text-lg hover:cursor-pointer hover:text-primary" on:click={theme.setDark}
			><Icon icon="ph:moon" /></button
		>
	{/if}
	{#if $theme == 'forest'}
		<button class="pt-1 text-lg hover:cursor-pointer hover:text-primary" on:click={theme.setLight}
			><Icon icon="ph:sun" /></button
		>
	{/if}
</li>
