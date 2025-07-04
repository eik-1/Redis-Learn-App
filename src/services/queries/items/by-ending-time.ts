import { itemsByEndingAtKey, itemsKey } from '$services/keys';
import { client } from '$services/redis';
import { deserialize } from './deserialize';

export const itemsByEndingTime = async (order: 'DESC' | 'ASC' = 'DESC', offset = 0, count = 10) => {
	const ids = await client.zRange(itemsByEndingAtKey(), Date.now(), '+inf', {
		BY: 'SCORE',
		LIMIT: {
			offset,
			count
		}
	});

	const results = await Promise.all(
		ids.map((id) => {
			return client.hGetAll(itemsKey(id));
		})
	);

	return results.map((item, i) => {
		return deserialize(ids[i], item);
	});
};
