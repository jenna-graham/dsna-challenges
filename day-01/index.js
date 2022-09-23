function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function addCapitolLetter(string) {
  return string
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

function multiplesOfN(n) {
  const multiples = [];
  for (let i = 1; i <= 50; i++) {
    if (n * i <= 50) {
      multiples.push(n * i);
    }
  }
  return multiples;
}

// function fizzBuzz(number) {
//   return number > 0
//     ? Array.from({ length: number }, (v, i) => i + 1).map((num) => {
//         if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
//         if (num % 3 === 0) return 'Fizz';
//         if (num % 5 === 0) return 'Buzz';
//         return num;
//       })
//     : [];
// }
function fizzBuzz(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}

function addPunctuation(string) {
  return function addExcitement(str) {
    return str + string;
  };
}

function rootDigit(num) {
  const firstN = num
    .toString()
    .split('')
    .map((number) => parseInt(number))
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  return firstN < 10 ? firstN : rootDigit(firstN);
}

module.exports = {
  reverseSentence,
  addCapitolLetter,
  oddOrEven,
  at,
  anagrams,
  multiplesOfN,
  fizzBuzz,
  addPunctuation,
  rootDigit,
};
