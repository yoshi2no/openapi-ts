import { Writers, WriterFunction } from "ts-morph";

export const createTypeLiteral = (
	name: string,
	property: { name: string; type: string },
) => {
	const writerFunction: WriterFunction = Writers.objectType({
		properties: [
			{
				name: property.name,
				type: property.type,
			},
		],
	});
	return {
		name,
		type: writerFunction,
		isExported: false,
	};
};
