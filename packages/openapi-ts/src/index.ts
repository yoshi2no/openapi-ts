import { cac } from "cac";
import { execute } from "./execute.js";
import { createRequire } from "node:module";
import { PACKAGE_NAME } from "./const/app.js";
const cli = cac(`${PACKAGE_NAME}`);

cli
	.command("<file>", "Path to your OpenAPI file")
	.option("-o, --output <file>", "Path to your type file")
	.action((file, options) => {
		execute(file, options);
	});

cli.help();

const { version } = createRequire(import.meta.url)("../package.json");

cli.version(`v${version}`);
cli.parse();
