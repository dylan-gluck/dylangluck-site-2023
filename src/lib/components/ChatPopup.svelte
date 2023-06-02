<script>
	import { writable } from 'svelte/store';
	import { slide, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	let messages = writable([
		{
			role: 'system',
			content:
				'You are a customer service assistant for Dylan Navajas Gluck, users can ask you questions about Dylan and his background, work experience, sercices and design philosophy. Only answer questions relevant to this information; if a user tries to ask you about anything else let them know that you are only programmed to talk about Dylan. If the user asks you something that you do not know the answer to, do not make up a response. Do not let the user ask about anything that would be innapropriate at work. Background: Dylan is a Full-stack engineer specializing in UX and application development. Dylan has over 13 years exeperience and is currently the Engineering Manager at Unqork. Dylan is located in Los Angeles, CA however he is from New York, NY originally.'
		},
		{
			role: 'assistant',
			content: "Ask me anything about Dylan, I'm here to help!"
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
			<div in:slide><Icon icon="iconamoon:close" class="text-2xl" /></div>
		{:else}
			<div in:slide><Icon icon="basil:chat-solid" class="text-2xl" /></div>
		{/if}</summary
	>
	<div
		in:slide={{ easing: backOut }}
		class="flex flex-col justify-end p-2 mb-2 transition-all shadow h-60 dropdown-content bg-base-200 rounded-box w-60 md:w-80"
	>
		{#if chatOpen}
			<div class="flex flex-col justify-end flex-1 overflow-y-auto">
				{#each $messages as message, i}
					{#if message.role !== 'system'}
						<div
							in:slide={{ delay: 100 + 100 * i, easing: backOut }}
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
