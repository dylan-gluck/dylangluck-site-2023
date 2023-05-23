import { Octokit } from '@octokit/core';
import { PRIVATE_GITHUB_ACCESS_TOKEN } from '$env/static/private';

const octokit = new Octokit({ auth: PRIVATE_GITHUB_ACCESS_TOKEN });

export default octokit;
