import { Project } from "ts-morph";

import type { Ctx } from "./types";

export const transformSchema = (ctx: Ctx): boolean => {
	// const input = fs.readFileSync(ctx.pathToSchema, "utf8");

	// TODO: 型ファイルを生成する

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
