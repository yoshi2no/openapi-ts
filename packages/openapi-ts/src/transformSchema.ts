import { Project } from "ts-morph";
import fs from "fs";

import type { Ctx } from "./types";

import { makeDocumentFromString } from "@redocly/openapi-core";

export const transformSchema = (ctx: Ctx): boolean => {
	const input = fs.readFileSync(ctx.pathToSchema, "utf8");

	const { parsed } = makeDocumentFromString(input, "");

	const CWD = new URL(`file://${process.cwd()}/`);
	const outputFile = new URL(ctx.options.output, CWD);
	const project = new Project();
	const sourceFile = project.createSourceFile(outputFile.pathname, "", {
		overwrite: true,
	});

	for (const [key, value] of Object.entries(
		parsed as Record<string, unknown>,
	)) {
		switch (key) {
			case "paths": {
				const properties = [];
				for (const [path, pathValue] of Object.entries(
					value as Record<string, unknown>,
				)) {
					console.log(pathValue);
					for (const [method, methodValue] of Object.entries(
						pathValue as Record<string, unknown>,
					)) {
					}
					properties.push({
						name: `"${path}"`,
						type: "string",
					});
				}
				sourceFile.addInterface({
					name: key,
					isExported: true,
					properties,
				});
				break;
			}
			case "components": {
				const properties = [];
				for (const [path, pathValue] of Object.entries(
					value as Record<string, unknown>,
				)) {
					// console.log("path", path);
					// console.log("pathValue", pathValue);
					// properties.push({
					// 	name: `"${path}"`,
					// 	type: "string",
					// });
				}
				// sourceFile.addInterface({
				// 	name: key,
				// 	isExported: true,
				// 	properties,
				// });
				break;
			}
		}
	}
	sourceFile.saveSync();

	return true;
};
