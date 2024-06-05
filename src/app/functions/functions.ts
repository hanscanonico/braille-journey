import fs from "node:fs";
import path from "node:path";

export const getBrailleLetters = async (): Promise<Record<string, string>> => {
	const filePath = path.join(process.cwd(), "data", "braille.json");
	const fileContents = fs.readFileSync(filePath, "utf8");
	const brailleData = JSON.parse(fileContents);
	return brailleData;
};
