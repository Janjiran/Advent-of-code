import { readFile } from "fs/promises";

const data = await readFile("./2022/day02/input.txt", { encoding: "utf8" });

const pointsPerShape = (shape) => {
  switch (shape) {
    case "A":
      return 1;
    case "B":
      return 2;
    case "C":
      return 3;
    default:
      return 0;
  }
};

const shapes = ["A", "B", "C"];

const pointsPerOutcome = (outcome) => {
  switch (outcome) {
    case "X":
      return 0;
    case "Y":
      return 3;
    case "Z":
      return 6;
  }
};

// X = loose
// Y = draw
// Z = win
const chooseShape = (opponentsShape, outcome) => {
  // Draw
  if (outcome === "Y") return opponentsShape;

  const indexOfShape = shapes.indexOf(opponentsShape);

  // Loss
  if (outcome === "X") return shapes.at(indexOfShape - 1);
  // Win
  if (outcome === "Z") {
    if (opponentsShape === "C") return shapes[0];
    return shapes.at(indexOfShape + 1);
  }
};

const rounds = data.split("\n");

const pointsPerRounds = [];

for (const [opponent, , outcome] of rounds) {
  const shape = chooseShape(opponent, outcome);

  const perShape = pointsPerShape(shape);
  const perOutcome = pointsPerOutcome(outcome);

  pointsPerRounds.push(perShape + perOutcome);
}

const totalScore = pointsPerRounds.reduce((a, b) => a + b, 0);

console.log(totalScore);
