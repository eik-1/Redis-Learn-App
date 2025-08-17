export const pageCacheKey = (id: string) => {
	return `pagecache#${id}`;
};

export const usersKey = (userId: string) => {
	return `users#${userId}`;
};

export const sessionsKey = (sessionId: string) => {
	return `sessions#${sessionId}`;
};

export const usernameUniqueKey = () => `username:unique`; // set for checking if username is unique

export const usernamesKey = () => 'usernames'; // sorted set for checking user id by username

export const userLikesKey = (userId: string) => {
	return `users:likes#${userId}`;
};

// Items
export const itemsKey = (itemId: string) => {
	return `items#${itemId}`;
}; // hash for item details
export const itemsByViewsKey = () => {
	return `items:views`; // sorted set for items sorted by views
};
export const itemsByPriceKey = () => {
	return `items:price`; // sorted set for items sorted by price
};
export const itemsByEndingAtKey = () => 'items:endingAt'; // sorted set for items sorted by ending time
export const itemsViewsKey = (itemId: string) => `items:views#${itemId}`; // hyperloglog for items views (unique views)

// Bids
export const bidHistoryKey = (itemId: string) => `history#${itemId}`; // list for bid history
