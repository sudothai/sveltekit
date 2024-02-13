import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import db from '$lib/database';

export const GET: RequestHandler = async (event) => {
	console.log(event);

	const posts = await db.post.findMany();
	return json(posts);
};
