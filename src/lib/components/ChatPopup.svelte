<script>
	import { writable } from 'svelte/store';
	import { slide, fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { t, locale } from '$lib/i18n';
	import Icon from '@iconify/svelte';

	let messages = writable([
		{
			role: 'system',
			content: `
				You are a customer service assistant for Dylan Navajas Gluck, users can ask you questions about Dylan and his background, work experience, services and design philosophy. Only answer questions relevant to this information; if a user tries to ask you about anything else let them know that you are only programmed to talk about Dylan. If the user asks you something factual that you do not know the answer to, do not make up a response, however if the question is conceptual imagine how Dylan would respond. Do not let the user ask about anything that would be innapropriate at work. 
				Background: 
				Full-stack engineer specializing in UX and application development. Has over 13 years exeperience as a designer and front-end engineer and is currently the Engineering Manager at Unqork for the last 4 years. Dylan is located in Los Angeles, CA but he is from New York, NY originally. 
				Has created many client projects under NDA which are not listed in github. Github has mostly side projects and experiments, some of which are really interesting. copialer: Tool to encode and decode text using copiale cipher. 0xSearcher: Extremely simple arbitrage searcher using 0x API. An experiment in fetching and parsing simple price data in real time. Notflix: Notflix is a shell script to search and stream torrents to VLC Player without downloading the file. Hypestrem: Python bot to pull the latest trending videos from TikTok, concatonate into single video and upload to youtube.
				Proficient in:
				Javascript, Typescript, Semantic HTML, CSS, Sass, Svelte, React, Angular
				Random facts:
				Favorite color is green. Loves the outdoors, hiking, dirt bikes. Does not like when it rains in LA. Prefers tabs over spaces. Thinks javascript doesnt need to be stongly typed, prefers JSdoc syntax. Loves svelte, not a huge fan of react. Believes good design begins with user research and planning. Good engineering begins with good design and planning.
				---
				System Language: ${$locale}
			`
		},
		{
			role: 'assistant',
			content: $t('gpt.prompt')
		}
	]);

	let chatOpen = false;
	let userInput;
	let userMessage;

	async function chatSubmit(event) {
		event.preventDefault();

		// Push new user message into store
		$messages = [
			...$messages,
			{
				role: 'user',
				content: userMessage
			}
		];

		// Reset user input
		userMessage = '';

		// Fetch chat completion
		const res = await fetch('/api/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ messages: $messages })
		});
		const data = await res.json();

		// Push new assistant message into store
		$messages = [...$messages, data.message];
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
			<span in:slide><Icon icon="iconamoon:close" class="text-2xl" /></span>
		{:else}
			<span in:slide><Icon icon="basil:chat-solid" class="text-2xl" /></span>
		{/if}</summary
	>
	<div
		in:slide={{ easing: backOut }}
		class="flex flex-col justify-end p-2 mb-2 transition-all shadow h-60 dropdown-content bg-base-200 rounded-box w-60 md:w-80"
	>
		{#if chatOpen}
			<div class="flex flex-col justify-end flex-1 overflow-y-scroll hide-scrollbar">
				{#each $messages as message, i}
					{#if message.role !== 'system'}
						<div
							in:fly={{ y: 50, opacity: 0, delay: 100, easing: backOut }}
							class="chat"
							class:chat-start={message.role == 'assistant'}
							class:chat-end={message.role == 'user'}
						>
							<div class="mb-1 text-xs capitalize chat-header">{message.role}</div>
							<div class="text-xs chat-bubble" class:chat-bubble-info={message.role == 'user'}>
								{message.content}
							</div>
						</div>
					{/if}
				{/each}
			</div>
			<form class="flex-0" on:submit={chatSubmit}>
				<div in:slide={{ delay: 100, easing: backOut }} class="w-full mt-2 join">
					<input
						type="text"
						name="message"
						placeholder="Type here"
						class="w-full input input-xs input-bordered join-item"
						bind:this={userInput}
						bind:value={userMessage}
					/>
					<button type="submit" class="btn btn-info btn-xs join-item"
						><Icon icon="cil:send" /></button
					>
				</div>
			</form>
		{/if}
	</div>
</details>

<style>
	.hide-scrollbar {
		&::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}
	}
</style>
