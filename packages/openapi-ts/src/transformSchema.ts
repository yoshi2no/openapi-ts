import { Project } from "ts-morph";
import fs from "fs";

import type { Ctx } from "./types";

import { makeDocumentFromString } from "@redocly/openapi-core";

export const transformSchema = (ctx: Ctx): boolean => {
	const input = fs.readFileSync(ctx.pathToSchema, "utf8");

	const { parsed } = makeDocumentFromString(input, "");

	// TODO: parsedから型ファイルを生成する
	console.log(parsed, "parsed");

	const CWD = new URL(`file://${process.cwd()}/`);
	const outputFile = new URL(ctx.options.output, CWD);
	const project = new Project();
	const sourceFile = project.createSourceFile(outputFile.pathname, "", {
		overwrite: true,
	});

	sourceFile.addTypeAlias({
		name: "User",
		isExported: true,
		type: "{ id: string; name: string; age?: number; }",
	});
	sourceFile.saveSync();

	return true;
};
