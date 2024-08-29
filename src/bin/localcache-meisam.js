#!/usr/bin/env node

import { execSync } from "child_process";

// Run the "start" script from package.json
execSync("npm run start", { stdio: "inherit" });
