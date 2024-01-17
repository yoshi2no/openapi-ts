import type { Ctx } from "./type";

export const ctx: Ctx = {
	pathToSchema: new URL("file://"),
	options: {},
};

export const getCtx = () => {
	return ctx;
};

export const setCtx = (newCtx: Ctx) => {
	ctx.pathToSchema = newCtx.pathToSchema;
	ctx.options = newCtx.options;

	return ctx;
};
