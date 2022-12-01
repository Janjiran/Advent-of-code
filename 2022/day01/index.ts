import { readFile } from "fs/promises";

const data = await readFile('./2022/day01/input.txt', { encoding: 'utf8' });

const splittedByWhiteSpaces: string[] = data.split('\n\n');

const groups = splittedByWhiteSpaces.map((group) => group.split('\n'))

const countedGroups = groups.map((group) => group.reduce((prev, curr) => Number(prev) + Number(curr), 0));

const largestGroup = Math.max(...countedGroups);

const groupsPosition = countedGroups.indexOf(largestGroup);

console.log("🚀 ~ file: index.ts:14 ~ groupsPosition", groupsPosition)
