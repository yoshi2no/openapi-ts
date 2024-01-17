import type { Ctx } from "./type";
import { lint, createConfig } from "@redocly/openapi-core";
import { printFailed } from "./console";

export const lintSchema = async (ctx: Ctx): Promise<boolean> => {
	const config = await createConfig({
		extends: ["minimal"],
		rules: {
			"operation-description": "error",
		},
	});
	const lintResults = await lint({ ref: ctx.pathToSchema.pathname, config });
	console.log(lintResults, "lintResults");

	const isNoError =
		lintResults.length === 0 ||
		lintResults.every((issue) => issue.severity !== "error");

	if (isNoError) return true;
	printFailed("ERROR: OpenAPI schema is invalid.");
	return false;
};
