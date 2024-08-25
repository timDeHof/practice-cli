#!/usr/bin/env node
import { init } from "@/src/commands/init";
import { Command } from "commander";

async function main() {
	const program = new Command();

	program
		.name("practice-cli")
		.description("practice writing CLIs")
		.version("0.0.0");

	program.addCommand(init);

	program.parse();
}
main();
