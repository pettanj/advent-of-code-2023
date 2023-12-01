import { solve } from "./days";

async function main() {
  const commands = process.argv.slice(2);
  const day = parseInt(commands[0]);
  solve(day);
}

main();
