import { Command } from "commander";
import { existsSync } from "fs";
import path from "path";
import { logger } from "@/src/utils/logger.js";
import prompts from "prompts";
import { z } from "zod";

const initOptionsSchema = z.object({
	yes: z.boolean(),
	defaults: z.boolean(),
	cwd: z.string(),
});

export const init = new Command("init")
	.description("initialize your project and install dependencies")
	.option("-y, --yes", "skip confirmation prompts", false)
	.option("-d, --defaults", "use default configuration", false)
	.option(
		"-c, --cwd <cwd>",
		"working directory to use. defaults to the current directory",
		process.cwd(),
	)
	.action(async (opts) => {
		try {
			const options = initOptionsSchema.parse(opts);
			const cwd = path.resolve(options.cwd);

			if (!existsSync(cwd)) {
				logger.error(`The directory ${cwd} does not exist`);
				process.exit(1);
			}
		} catch (error) {
			console.error("Error initializing project:", error);
		}

		const response = await prompts({
			type: "text",
			name: "name",
			message: "What is the name of your project?",
		});

		console.log(`Initializing project: ${response.name}`);
	});
