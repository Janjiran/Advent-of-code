import { readFile } from "fs/promises";

const data = await readFile("./2022/day02/input.txt", { encoding: "utf8" });

const pointsPerShape = (shape) => {
  switch (shape) {
    case "A":
    case "X":
      return 1;
    case "B":
    case "Y":
      return 2;
    case "C":
    case "Z":
      return 3;
    default:
      return 0;
  }
};

const pointsPerOutcome = (opponentsShape, myShape) => {
  // Draw
  if (
    (opponentsShape === "A" && myShape === "X") ||
    (opponentsShape === "B" && myShape === "Y") ||
    (opponentsShape === "C" && myShape === "Z")
  )
    return 3;
  // Rock
  if (opponentsShape === "A" && myShape === "Y") return 6; // Win
  if (opponentsShape === "A" && myShape === "Z") return 0; // Loss
  // Paper
  if (opponentsShape === "B" && myShape === "X") return 0;
  if (opponentsShape === "B" && myShape === "Z") return 6;
  // Scissors
  if (opponentsShape === "C" && myShape === "X") return 6;
  if (opponentsShape === "C" && myShape === "Y") return 0;
};

const rounds = data.split("\n");

const pointsPerRounds = [];

for (const [opponent, , me] of rounds) {
  const perShape = pointsPerShape(me);
  const perOutcome = pointsPerOutcome(opponent, me);

  pointsPerRounds.push(perShape + perOutcome);
}

const totalScore = pointsPerRounds.reduce((a, b) => a + b, 0);

console.log(totalScore)
