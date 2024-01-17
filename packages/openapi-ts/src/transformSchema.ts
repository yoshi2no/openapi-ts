import fs from "node:fs";
import { getCtx } from "./ctx";

export const transformSchema = (): boolean => {
	const input = fs.readFileSync(getCtx().pathToSchema, "utf8");
	return true;
};
