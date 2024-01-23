import { createTypeLiteral } from "./helpers/createTypeLiteral";
import { Project } from "ts-morph";
import fs from "fs";

import type { Ctx } from "./types";

import { makeDocumentFromString } from "@redocly/openapi-core";

import { pathsParser, componentsParser } from "./parsers";

export const transformSchema = (ctx: Ctx): boolean => {
	const input = fs.readFileSync(ctx.pathToSchema, "utf8");

	const { parsed } = makeDocumentFromString(input, "") as any;

	const CWD = new URL(`file://${process.cwd()}/`);
	const outputFile = new URL(ctx.options.output, CWD);
	const project = new Project();
	const sourceFile = project.createSourceFile(outputFile.pathname, "", {
		overwrite: true,
	});

	for (const [key, value] of Object.entries(parsed)) {
		switch (key) {
			case "paths": {
				const { pathsProperties, operationsProperties } = pathsParser(
					value as any,
				);
				sourceFile.addInterface({
					name: key,
					isExported: true,
					properties: pathsProperties,
				});
				sourceFile.addInterface({
					name: "operations",
					isExported: true,
					properties: operationsProperties,
				});
				break;
			}
			case "components": {
				const properties = componentsParser(value as any);
				sourceFile.addInterface({
					name: "components",
					isExported: true,
					properties: [
						createTypeLiteral("components", { name: "tag", type: "string" }),
						createTypeLiteral("components2", {
							name: "name",
							type: {
								id: "string",
								name: {
									miyoji: "string",
									namae: "string",
								},
							},
						}),
					],
				});
				break;
			}
		}
	}

	sourceFile.addTypeAliases([
		{
			name: "webhooks",
			isExported: true,
			type: "Record<string, never>",
		},
		{
			name: "$defs",
			isExported: true,
			type: "Record<string, never>",
		},
	]);

	sourceFile.saveSync();

	return true;
};
