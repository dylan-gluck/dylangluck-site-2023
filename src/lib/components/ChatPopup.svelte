<script>
	import { slide, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	let chatOpen = false;

	async function chatSubmit(event) {
		event.preventDefault();
	}
</script>

<details class="dropdown dropdown-end dropdown-top">
	<summary
		in:slide={{ axis: 'x', delay: 300, easing: backOut }}
		out:fade
		class="transition-all btn btn-circle md:hover:btn-info"
		on:click={() => {
			chatOpen = !chatOpen;
		}}
		>{#if chatOpen}
			<div in:slide><Icon icon="iconamoon:close" class="text-2xl" /></div>
		{:else}
			<div in:slide><Icon icon="basil:chat-solid" class="text-2xl" /></div>
		{/if}</summary
	>
	{#if chatOpen}
		<div
			in:slide={{ easing: backOut }}
			class="flex flex-col justify-end p-2 mb-2 transition-all shadow h-60 dropdown-content bg-base-200 rounded-box w-60"
		>
			<div class="flex flex-col justify-end flex-1 overflow-y-auto">
				<div in:slide={{ delay: 200, easing: backOut }} class="chat chat-start">
					<div class="mb-1 text-xs chat-header">Assistant</div>
					<div class="text-xs chat-bubble">Ask me anything about Dylan, I'm here to help!</div>
				</div>
				<div in:slide={{ delay: 300, easing: backOut }} class="chat chat-end">
					<div class="mb-1 text-xs chat-header">You</div>
					<div class="text-xs chat-bubble chat-bubble-info">Where is dylan located?</div>
				</div>
			</div>
			<form class="flex-0" on:submit={chatSubmit}>
				<div in:slide={{ delay: 100, easing: backOut }} class="w-full mt-2 join">
					<input
						type="text"
						placeholder="Type here"
						class="w-full input input-xs input-bordered join-item"
					/>
					<button type="submit" class="btn btn-info btn-xs join-item"
						><Icon icon="cil:send" /></button
					>
				</div>
			</form>
		</div>
	{/if}
</details>
