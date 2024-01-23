import type { PathsObject } from "../types/schema";

const defaultPathsList = {
	parameters: {
		query: "query?: never;",
		header: "header?: never;",
		path: "path?: never;",
		cookie: "cookie?: never;",
	},
	methods: {
		get: "get?: never;",
		put: "put?: never;",
		post: "post?: never;",
		delete: "delete?: never;",
		options: "options?: never;",
		head: "head?: never;",
		patch: "patch?: never;",
		trace: "trace?: never;",
	},
};

export const pathsParser = (paths: PathsObject) => {
	const start = "{";
	const end = "}";
	const pathsProperties = [];
	const operationsProperties = [];
	for (const [path, pathValue] of Object.entries(paths)) {
		let pathsString = start;

		// parametersのチェックと定義
		if ("parameters" in pathValue) {
			// TODO: あるときはの定義を追加する
		} else {
			pathsString += "parameters: {";
			for (const [key, value] of Object.entries(defaultPathsList.parameters)) {
				pathsString += value;
			}
			pathsString += `${end};`;
		}

		// TODO: 各メソッドのチェック
		for (const [key, value] of Object.entries(defaultPathsList.methods)) {
			pathsString += value;
		}

		pathsString += end;

		// TODO:operationsを定義する
		for (const [key, value] of Object.entries(pathValue)) {
			let operationsString = start;
			operationsString = "{";

			// parameters
			operationsString += "parameters: {";
			for (const [key, value] of Object.entries(defaultPathsList.parameters)) {
				operationsString += value;
			}
			operationsString += `${end};`;

			// requestBody
			// operationsString += "requestBody: {";
			// operationsString += `${end};`;
			operationsString += "requestBody?: never;";

			// responses
			// operationsString += "responses: {";
			// operationsString += `${end};`;
			operationsString += "responses?: never;";

			operationsString += end;

			operationsProperties.push({
				name: `"${value.operationId}"`,
				type: operationsString,
			});
		}

		pathsProperties.push({
			name: `"${path}"`,
			type: pathsString,
		});
	}
	return {
		pathsProperties,
		operationsProperties,
	};
};
