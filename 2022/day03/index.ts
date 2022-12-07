import { readFile } from "fs/promises";

const rawData = await readFile("./2022/day03/input.txt", { encoding: "utf8" });

const backpacks = rawData.split('\n');

const getScore = (character) => {

    // Check if the string is in UpperCase
    let number = 0;
    let char = character;

    if (character.toUpperCase() === character) {
        number = 26;
        char = char.toLowerCase();
    }

    const ascii = char.charCodeAt();

    if(ascii >= 97 && ascii <= 122) {
        number += ascii - 96
    };

    return number;
};

let finalNumber = 0;

for (const items of backpacks) {
    const half = items.length / 2;

    const firstHalf = items.substr(0, half);
    const secondHalf = items.substr(half);

    let characterInBothStrings: string;

    for (const letter of firstHalf) {
        if (secondHalf.indexOf(letter) !== -1) {
            characterInBothStrings = letter;
        }
    }

    const score = getScore(characterInBothStrings);
    
    finalNumber += score;
};

console.log(finalNumber)

//////////////////// Second Half ////////////////////

const groups = backpacks.flatMap((b, i, arr) => i % 3 === 0 ? [[arr.at(i), arr.at(i + 1), arr.at(i + 2)]]: []);

let finalScore = 0;

for (const [one, two, three] of groups) {

    let characterInAllStrings: string;

    for (const letter of one) {
        if (two.indexOf(letter) !== -1 && three.indexOf(letter) !== -1) {
            characterInAllStrings = letter;
            break;
        }
    }

    const score = getScore(characterInAllStrings);
    
    finalScore += score;
};

console.log(finalScore)