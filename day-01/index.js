function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addCapitolLetter(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

function oddOrEven(num) {
  const theNumber = num
    .toString()
    .split('')
    .map((number) => parseInt(number))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  return theNumber % 2 === 0 ? 'Evenish' : 'Oddish';
}

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

function anagrams(wordOne, wordTwo) {
  const a1 = wordOne.split('').sort().join();
  const a2 = wordTwo.split('').sort().join();
  return a1 === a2 ? true : false;
}

module.exports = { reverseSentence, addCapitolLetter, oddOrEven, at, anagrams };
