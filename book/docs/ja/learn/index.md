# Learn

## このチュートリアルすること
## 前提条件

## 使用するツールとその紹介

- [cac](https://github.com/cacjs/cac)
- [tsup](https://github.com/egoist/tsup)
- [Biome](https://biomejs.dev/)
- [picocolors](https://github.com/alexeyraspopov/picocolors)
- [Next.js](https://nextjs.org/)
- [@redocly/openapi-core](https://github.com/Redocly/redocly-cli/tree/main/packages/core)
- [ts-morph](https://ts-morph.com/)

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


## スキーマをパースして扱えるようにする
```
  import { makeDocumentFromString } from "@redocly/openapi-core";
	const { parsed } = makeDocumentFromString(input, "");
```


### オブジェクトの型を文字列で定義する
オブジェクトの型は文字列で定義する必要があるため、parserを作成して処理します

- pathsParser
- componentsParser


## お世話になった資料
- [Using the Compiler API](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API)
  - [#creating-and-printing-a-typescript-ast](https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API#creating-and-printing-a-typescript-ast)

- [OpenAPI Specification](https://swagger.io/specification/)

- [TypeScript AST Viewer](https://ts-ast-viewer.com/#)

## Roadmap
