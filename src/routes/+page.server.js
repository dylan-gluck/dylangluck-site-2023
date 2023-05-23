import octokit from '$lib/octokit';

export async function load(event) {
	const projects = await octokit.request('GET /user/repos', {
		visibility: 'public',
		sort: 'created',
		direction: 'desc',
		per_page: 4,
		page: 1,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});

	return { projects: projects.data };
}
