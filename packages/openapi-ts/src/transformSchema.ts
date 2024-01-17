import fs from "node:fs";
import type { Ctx } from "./types";

export const transformSchema = (ctx: Ctx): boolean => {
	const input = fs.readFileSync(ctx.pathToSchema, "utf8");

	// TODO: 型ファイルを生成する

	return true;
};
