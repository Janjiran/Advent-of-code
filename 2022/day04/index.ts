import { readFile } from "fs/promises";

const rawData = await readFile("./2022/day04/input.txt", { encoding: "utf8" });

const pairs = rawData.split("\n");

let containedRanges = 0;

for (const pair of pairs) {
  const [section1, section2] = pair.split(",");

  // Define the first range
  const [start1, end1] = section1.split("-");

  // Define the second range
  const [start2, end2] = section2.split("-");
  // Check if the first range is fully contained within the second range
  // 4-6
  // 2-8
  if (Number(start1) >= Number(start2) && Number(end1) <= Number(end2)) {
    containedRanges++;
    // Check if the second range is fully contained within the first range
  } else if (Number(start2) >= Number(start1) && Number(end2) <= Number(end1)) {
    containedRanges++;
  }
}

console.log(containedRanges);

//////////////////// Second Half ////////////////////

let overlapingRanges = 0;

for (const pair of pairs) {
  const [section1, section2] = pair.split(",");

  // Define the first range
  const [start1, end1] = section1.split("-");

  // Define the second range
  const [start2, end2] = section2.split("-");

  // Check if ranges overlap
  
  if (
    (Number(start1) >= Number(start2) && Number(start1) <= Number(end2)) ||
    (Number(start2) >= Number(start1) && Number(start2) <= Number(end1))
  ) {
    overlapingRanges++;
  }
}

console.log(overlapingRanges);
