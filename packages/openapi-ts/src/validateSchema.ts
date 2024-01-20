import type { Ctx } from "./types";
import { lint, createConfig } from "@redocly/openapi-core";
import { printFailed } from "./console";

export const validateSchema = async (ctx: Ctx): Promise<boolean> => {
	const config = await createConfig({
		extends: ["minimal"],
		rules: {
			"operation-description": "error",
		},
	});
	const results = await lint({ ref: ctx.pathToSchema.pathname, config });
	const isNoError =
		results.length === 0 ||
		results.every((issue) => issue.severity !== "error");

	if (isNoError) return true;
	printFailed("ERROR: OpenAPI schema is invalid.");
	return false;
};
