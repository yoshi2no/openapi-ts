export interface paths {
	"/pets": {
		parameters: { query?: never; header?: never; path?: never; cookie?: never };
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/pets/{petId}": {
		parameters: { query?: never; header?: never; path?: never; cookie?: never };
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
}

export interface operations {
	listPets: {
		parameters: { query?: never; header?: never; path?: never; cookie?: never };
		requestBody?: never;
		responses?: never;
	};
	createPets: {
		parameters: { query?: never; header?: never; path?: never; cookie?: never };
		requestBody?: never;
		responses?: never;
	};
	showPetById: {
		parameters: { query?: never; header?: never; path?: never; cookie?: never };
		requestBody?: never;
		responses?: never;
	};
}

export interface components {
	components: {
		tag: string;
	};
	components2: {
		id: string;
		name: {
			miyoji: string;
			namae: string;
		};
	};
}

export type webhooks = Record<string, never>;
export type $defs = Record<string, never>;
