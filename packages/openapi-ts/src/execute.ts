import fs from "node:fs";
import path from "node:path";

import type { Ctx } from "./type";
import { transformSchema } from "./transformSchema";
import { lintSchema } from "./lintSchema";
import { setCtx } from "./ctx";
import { printResult } from "./printResult";

export const execute = (file: string, options: any) => {
	// TODO: ファイルの特定。なければエラーとして返す
	const CWD = new URL(`file://${process.cwd()}/`);
	const filePath = new URL(file, CWD);

	const ctx = setCtx({
		pathToSchema: filePath,
		options: options,
	});

	// TODO: OpenAPiのスキーマかどうかをチェックする
	const isValid = lintSchema(ctx);

	// TODO: 実際に処理する
	const isSuccess = transformSchema();

	// TODO: 結果を表示する
	printResult(isSuccess);
};
