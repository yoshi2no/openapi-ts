export interface paths {
	"/pet": string;
	"/pet/findByStatus": string;
	"/pet/findByTags": string;
	"/pet/{petId}": string;
	"/pet/{petId}/uploadImage": string;
	"/store/inventory": string;
	"/store/order": string;
	"/store/order/{orderId}": string;
	"/user": string;
	"/user/createWithList": string;
	"/user/login": string;
	"/user/logout": string;
	"/user/{username}": string;
}
