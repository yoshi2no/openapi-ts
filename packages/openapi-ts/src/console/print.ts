import pc from "picocolors";

export const printSuccess = (message: string) => {
	console.log(pc.green(message));
};

export const printFailed = (message: string) => {
	console.log(pc.red(message));
};
