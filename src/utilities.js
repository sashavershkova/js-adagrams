import {
  LETTER_POOL,
} from "constants";

export const pileOfLetters = function() {
  const unpackedLetters = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    unpackedLetters.push(...letter.repeat(count));
  } return unpackedLetters;
};

export const buildFrequencyMap = function(array) {
  const frequencyMap = new Object();
  let count = 0;
  for (let char of array) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  } return frequencyMap;
};