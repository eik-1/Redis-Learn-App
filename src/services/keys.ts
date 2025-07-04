export const pageCacheKey = (id: string) => {
	return `pagecache#${id}`;
};

export const usersKey = (userId: string) => {
	return `users#${userId}`;
};

export const sessionsKey = (sessionId: string) => {
	return `sessions#${sessionId}`;
};

export const usernameUniqueKey = () => `username:unique`;

export const usernamesKey = () => 'usernames';

export const userLikesKey = (userId: string) => {
	return `users:likes#${userId}`;
};

// Items
export const itemsKey = (itemId: string) => {
	return `items#${itemId}`;
};
export const itemsByViewsKey = () => {
	return `items:views`;
};
export const itemsByEndingAtKey = () => 'items:endingAt';
export const itemsViewsKey = (itemId: string) => `items:views#${itemId}`;

// Users
