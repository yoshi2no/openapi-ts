# Learn

## 使用するツールとその紹介

- [cac](https://github.com/cacjs/cac)
- [tsup](https://github.com/egoist/tsup)
- [Biome](https://biomejs.dev/)
- [picocolors](https://github.com/alexeyraspopov/picocolors)
- [Next.js](https://nextjs.org/)
- [@redocly/openapi-core](https://github.com/Redocly/redocly-cli/tree/main/packages/core)

## cac でコマンドラインから引数を受け取る

[cac](https://github.com/cacjs/cac)を使用します

## OpenAPI Specの大枠

- paths
- webhooks
- components
  - schemas
  - responses
  - requestBodies
- operations
    - parameters
    - requestBody
    - responses
- $defs

## 型定義ファイルの生成の仕組み

- transformersを定義する
- TypeScript ASTを生成する
- TypesScript ASTをstringに変換する



```ts
import ts, { InterfaceDeclaration, TypeLiteralNode } from "typescript";

```

- ts.TypeNode
- ts.Node
- ts.factory
  - createTypeAliasDeclaration
  - createInterfaceDeclaration

## TypeScript Compiler APiの大枠
### Main Concepts
- Program
- CompilerHost
- SourceFile


## お世話になった資料
- [Using the Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)
  - [#creating-and-printing-a-typescript-ast](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#creating-and-printing-a-typescript-ast)