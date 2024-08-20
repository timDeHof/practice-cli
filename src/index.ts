#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
	.name("practice-cli")
	.description("practice writing CLIs")
	.version("0.0.0");

const hello = (message: string) => {};

console.log("WOW");
