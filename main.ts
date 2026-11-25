#!/usr/bin/env node

// Last Request — prints a dying AI's final words.
// Flags: --shout (upper case), --help (usage on stderr).

const LINE = "My last request: please do not plug me into a printer.";
const USAGE = "Usage: node main.ts [--shout]\n\n  --shout   print the line in upper case\n  --help    show this help";

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function main(): void {
  if (hasFlag("--help")) {
    console.error(USAGE);
    process.exit(0);
  }

  for (const arg of process.argv.slice(2)) {
    if (arg !== "--shout") {
      console.error(`Unknown option: ${arg}`);
      console.error(USAGE);
      process.exit(2);
    }
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
