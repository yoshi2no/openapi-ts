import { createTypeLiteral } from "../helpers";
import { ComponentsObject } from "./../types/schema";

const defaultComponentsList = {
	schemas: "schemas?: never;",
	responses: "responses?: never;",
	parameters: {
		query: "query?: never;",
		header: "header?: never;",
		path: "path?: never;",
		cookie: "cookie?: never;",
	},
	requestBodies: "requestBodies?: never;",
	headers: "headers?: never;",
	pathItems: "pathItems?: never;",
};

export const componentsParser = (components: ComponentsObject) => {
	// TODO: 配列で渡したらそのプロパティでobjectを作るようにする
	return [
		// createTypeLiteral("schemas", [
		// 	{
		// 		name: "Pet",
		// 		type: "any",
		// 	},
		// 	{
		// 		name: "Pets",
		// 		type: "any",
		// 	},
		// 	{
		// 		name: "Error",
		// 		type: "any",
		// 	},
		// ]),
		createTypeLiteral("responses", { name: "tag", type: "string" }),
		// TODO: 配列で渡したらそのプロパティでobjectを作るようにする
		// createTypeLiteral("parameters", [{ name: "tag", type: "string" }, { name: "tag2", type: "string" }]),
		createTypeLiteral("requestBodies", { name: "tag", type: "string" }),
		createTypeLiteral("headers", { name: "tag", type: "string" }),
		createTypeLiteral("pathItems", { name: "tag", type: "string" }),
	];
};

// export interface components {
// 	schemas: {
// 		Pet: {
// 			id: number;
// 			name: string;
// 			tag?: string;
// 		};
// 		Pets: components["schemas"]["Pet"][];
// 		Error: {
// 			code: number;
// 			message: string;
// 		};
// 	};
// 	responses: never;
// 	parameters: never;
// 	requestBodies: never;
// 	headers: never;
// 	pathItems: never;
// }
