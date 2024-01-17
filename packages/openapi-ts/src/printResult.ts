import { printSuccess, printFailed } from "./console";

export const printResult = (isSuccess: boolean) => {
	return isSuccess
		? printSuccess("Successです!やったね！")
		: printFailed("残念ながらFailedです...");
};
