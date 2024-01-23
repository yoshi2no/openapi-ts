import { Writers, WriterFunction } from "ts-morph";

export const createTypeLiteral = (
	name: string,
	property: { name: string; type: string | object; optional?: boolean },
) => {
	const writerFunction: WriterFunction = Writers.objectType({
		properties: processPropertyType(property),
	});
	return {
		name,
		type: writerFunction,
		isExported: false,
	};
};

type ProcessPropertyType = {
	name: string;
	type: string | object;
	optional?: boolean;
};

// TODO: remove any
const processPropertyType = ({
	name,
	type,
	optional = false,
}: ProcessPropertyType): any => {
	if (typeof type === "object") {
		return Object.entries(type).map(([propName, propType]) => {
			if (typeof propType === "object") {
				return {
					name: propName,
					type: Writers.objectType({
						properties: processPropertyType({
							name: propName,
							type: propType,
						}),
					}),
					hasQuestionToken: optional,
				};
			}
			return {
				name: propName,
				type: propType as string,
				hasQuestionToken: optional,
			};
		});
	}
	return [
		{
			name,
			type,
			hasQuestionToken: optional,
		},
	];
};
