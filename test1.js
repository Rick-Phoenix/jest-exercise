function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

function calculator() {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return {add, subtract, multiply, divide}
}

function caesarCypher(string, shiftFactor) {
  const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  const upperCaseAlphabet = alphabet.map((letter) => letter.toUpperCase());
  let newWord = '';
  
  for (let character of string) {
    if (!alphabet.includes(character) && !upperCaseAlphabet.includes(character)) {
      newWord += character;
      continue;
    }

    if (upperCaseAlphabet.includes(character)) {
      const index = upperCaseAlphabet.indexOf(character);
      newWord += upperCaseAlphabet[index + shiftFactor % 26];
      continue;
    }

    else {
      const index = alphabet.indexOf(character);
      newWord+= alphabet[index + shiftFactor % 26];
    };
  }

  return newWord;
}

function analyzeArray(array) {
  const sortedArray = array.slice().sort((a, b) => a - b);
  const average = Math.round(sortedArray.reduce((acc, curr) => {
    return acc + curr;
  }) / array.length);
  const min = sortedArray[0];
  const max = sortedArray[array.length -1];

  return {
    average: average,
    min: min,
    max: max,
    length: array.length
  }

}

module.exports = {capitalize, reverseString, caesarCypher, calculator, analyzeArray};