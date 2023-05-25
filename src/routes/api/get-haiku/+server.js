import openai from '$lib/openai';

export async function POST({ request }) {
	try {
		const { locale } = await request.json();

		const completion = await openai.createChatCompletion({
			model: 'gpt-4',
			messages: [
				{
					role: 'system',
					content:
						'Write a haiku about UX design in whatever language the user specifies. Add <br/> for line breaks.'
				},
				{
					role: 'user',
					content: `lang: ${locale}`
				}
			]
		});

		console.log(completion.data.choices[0].message.content);

		return new Response(JSON.stringify({ haiku: completion.data.choices[0].message.content }), {
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
