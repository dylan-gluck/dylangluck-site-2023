import openai from '$lib/openai';

export async function POST({ request }) {
	try {
		const { messages } = await request.json();

		const completion = await openai.createChatCompletion({
			model: 'gpt-4',
			messages
		});

		return new Response(JSON.stringify({ message: completion.data.choices[0].message }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err) {
		console.error('Error in POST method:', err);

		return new Response(JSON.stringify({ error: { message: err.message } }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
