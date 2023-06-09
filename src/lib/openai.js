import { Configuration, OpenAIApi } from 'openai';
import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';

const configuration = new Configuration({
	apiKey: PRIVATE_OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default openai;
