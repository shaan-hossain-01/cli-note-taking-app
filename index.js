#!/usr/bin/env node
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

await import(join(__dirname, "src", "command.js"));
