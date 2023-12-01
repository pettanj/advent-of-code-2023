import { getInput } from "../utils/input";
import { printPart1, printPart2 } from "../utils/result";
import Timer from "../utils/timer";

export async function day1() {
  const timer = new Timer();
  timer.start();
  const result = await part1();
  const time = timer.stop();
  printPart1(result, time);
  timer.start();
  const result2 = await part2();
  const time2 = timer.stop();
  printPart2(result2, time2);
}

async function part1() {
  const input = [...(await getInput(1))];
  let sum = 0;
  input.forEach((line) => {
    const matches = line.match(/\d/g);
    if (matches == null || matches.length < 1) return 0;
    const num = parseInt(matches![0] + matches![matches!.length - 1]);
    sum += num;
  });
  return sum;
}

async function part2() {
  const input = [...(await getInput(1))];
  let sum = input.reduce((acc: number, line: string) => {
    const matches = getMatches(line);
    if (matches != null) {
      const num = parseInt(
        getNumberAsString(matches![0])! +
          getNumberAsString(matches![matches.length - 1])
      );
      return (acc += num);
    }
    return acc;
  }, 0);
  return sum;
}

const numberMap = new Map<string, string>([
  ["zero", "0"],
  ["one", "1"],
  ["two", "2"],
  ["three", "3"],
  ["four", "4"],
  ["five", "5"],
  ["six", "6"],
  ["seven", "7"],
  ["eight", "8"],
  ["nine", "9"],
]);

function getNumberAsString(input: string) {
  const numberOrNaN = parseInt(input);
  if (Number.isNaN(numberOrNaN)) {
    return numberMap.get(input);
  }
  return input;
}

function getMatches(line: string) {
  const regex = /\d|one|two|three|four|five|six|seven|eight|nine/;

  const matches: string[] = [];

  for (let i = 0; i < line.length; i++) {
    let match = regex.exec(line.slice(i));
    if (match == null) break;
    matches.push(match[0]);
  }
  return matches;
}
