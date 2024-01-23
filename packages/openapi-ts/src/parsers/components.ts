import { components } from "./../../../../examples/next/src/openapi/openapi-typescript/simple";
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
	// const componentsProperties = [];
	// const start = "{";
	// const end = "}";
	// for (const [key, value] of Object.entries(components)) {
	// 	// schemas
	// 	let componentsString = start;
	// 	console.log(key, value);
	// 	// componentsString += `${key}: {`;
	//     // componentsString += defaultComponentsList.schemas;
	// 	// componentsString += `${end};`;
	// 	componentsProperties.push({
	// 		name: `"${key}"`,
	// 		type: componentsString,
	// 	});
	// }
	// return componentsProperties;
};
