import fs from "node:fs";
import path from "node:path";

export const execute = (file: string, options: any) => {
    // TODO: ファイルの特定。なければエラーとして返す
    const CWD = new URL(`file://${process.cwd()}/`);
    const filePath = new URL(file, CWD);
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data)

    // TODO: 実際に処理する

    // TODO: 結果を表示する
}