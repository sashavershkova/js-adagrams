// CONSTANTS

const LETTER_POOL = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3,
  H: 2, I: 9, J: 1, K: 1, L: 4, M: 2, N: 6,
  O: 8, P: 2, Q: 1, R: 6, S: 4, T: 6, U: 4,
  V: 2, W: 2, X: 1, Y: 2, Z: 1
};

const SCORE_CHART = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

const HAND_SIZE = 10;

// HELPER FUNCTIONS
const pileOfLetters = function() {
  const unpackedLetters = [];
  for (const [letter, count] of Object.entries(LETTER_POOL)) {
    unpackedLetters.push(...letter.repeat(count));
  } return unpackedLetters;
};

const buildFrequencyMap = function(array) {
  const frequencyMap = new Object();
  let count = 0;
  for (let char of array) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  } return frequencyMap;
};

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
};

// def score_word(word):
//     word = word.upper()
//     word_score = 0

//     for letter in word:
//         word_score += SCORE_CHART[letter]

//     if 7 <= len(word) <= 10:
//         word_score += 8

//     return word_score

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
