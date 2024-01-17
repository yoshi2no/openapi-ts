import fs from "node:fs";
import path from "node:path";
import { transformSchema } from "./transformSchema";

export const execute = (file: string, options: any) => {
    // TODO: ファイルの特定。なければエラーとして返す
    const CWD = new URL(`file://${process.cwd()}/`);
    const filePath = new URL(file, CWD);
    const input = fs.readFileSync(filePath, 'utf8');

    // TODO: OpenAPiのスキーマかどうかをチェックする

    // TODO: 実際に処理する
    transformSchema(input)

    // TODO: 結果を表示する
}