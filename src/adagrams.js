import {
  SCORE_CHART,
  HAND_SIZE,
} from "constants";

import {
  pileOfLetters,
  buildFrequencyMap,
} from "utilities";

// MAIN LOGIC
export const drawLetters = () => {
  const lettersPile = pileOfLetters();
  const hand = [];
  for (let i = 0; i < HAND_SIZE; i++) {
    const randomIndex = Math.floor(Math.random()*(lettersPile.length));
    [lettersPile[randomIndex], lettersPile[lettersPile.length - 1]] =
    [lettersPile[lettersPile.length - 1], lettersPile[randomIndex]];
    hand.push(lettersPile.pop());
  } return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const wordLetters = input.toUpperCase().split('');
  const wordFreqMap = buildFrequencyMap(wordLetters);
  const handFreqMap = buildFrequencyMap(lettersInHand);
  for (let [letter, count] of Object.entries(wordFreqMap)) {
    if ((handFreqMap[letter] || 0) < count) {
      return false
    }
  } return true
};

export const scoreWord = (word) => {
  const wordUpper = word.toUpperCase();
  let wordScore = 0;
  for (const letter of wordUpper) {
    wordScore += SCORE_CHART[letter];
  }
  if (word.length >= 7 && word.length <= 10) {
    wordScore += 8;
  } return wordScore;
};

export const highestScoreFrom = (words) => {
  let winningWord = '';
  let highestScore = 0;
  let lenWord = 0;
  for (const word of words) {
    if (scoreWord(word) > highestScore) {
      highestScore = scoreWord(word);
      winningWord = word;
      lenWord = word.length;
    }
    else if (scoreWord(word) === highestScore) {
      if (
        (word.length === 10 && lenWord !== 10) ||
        (word.length !== 10 && lenWord !== 10 && word.length < lenWord)) {
          winningWord = word;
          lenWord = word.length;
        }
    }
  } return {word: winningWord, score: highestScore};
};

