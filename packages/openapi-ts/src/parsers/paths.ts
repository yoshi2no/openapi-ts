import type { PathsObject } from "../types/schema";

const defaultPathsList = {
	parameters: {
		query: "query?: never;",
		header: "header?: never;",
		path: "path?: never;",
		cookie: "cookie?: never;",
	},
	get: "get?: never;",
	put: "put?: never;",
	post: "post?: never;",
	delete: "delete?: never;",
	options: "options?: never;",
	head: "head?: never;",
	patch: "patch?: never;",
	trace: "trace?: never;",
};

export const pathsParser = (paths: PathsObject) => {
	const start = "{";
	const end = "}";
	const properties = [];
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
			pathsString += end;
		}

		// TODO: 各メソッドのチェック
		// for (const [method, methodValue] of Object.entries(pathValue)) {
		// 	if (method in defaultPathsList) {
		// 		// defaultPathsListからメソッドのデフォルト値を取得
		// 		pathsString += method + ": " + defaultPathsList[method] + ",";
		// 	}
		// }

		pathsString += "}";

		properties.push({
			name: `"${path}"`,
			type: pathsString,
		});
	}
	return properties;
};
