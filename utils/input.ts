import { readFile } from "fs";

export async function getInput(day: number): Promise<string[]> {
  return new Promise((resolve, reject) => {
    readFile(`./inputs/${day}.txt`, "utf8", (err: any, data: any) => {
      if (err) {
        reject(err);
      }
      resolve(data.split("\n").map((x: string) => x.trim()));
    });
  });
}
