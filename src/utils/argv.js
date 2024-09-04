import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import debug from "debug";

const argv = yargs(hideBin(process.argv))
  .option("ip", {
    describe: "IP address",
    type: "string",
    default: "0.0.0.0",
  })
  .option("port", {
    alias: "p",
    describe: "PORT",
    type: "number",
    default: 3000,
  })
  .option("dbDir", {
    alias: "db",
    describe: "Data Storage Directory",
    type: "string",
    default: "DATA",
  })
  .option("debug", {
    describe: "Show debug logs",
    type: "boolean",
    default: false,
  })
  .check((argv) => {
    if (isNaN(argv.port)) {
      throw new Error("The port option should be a valid number");
    }
    return true;
  })
  .help()
  .alias("help", "h").argv;

if (argv.debug) {
  debug.enable("app");
}

export { argv };
