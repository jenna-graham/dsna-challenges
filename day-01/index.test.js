const {
  reverseSentence,
  addCapitolLetter,
  oddOrEven,
  at,
  anagrams,
  multiplesOfN,
  fizzBuzz,
  addPunctuation,
  rootDigit,
} = require('./index');

describe('DEMO primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('PRIM01 Add capitol letters to words', () => {
    it('should add a capitol to first letter in each word', () => {
      expect(addCapitolLetter('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });
  describe('PRIM02 Determines if odd or even', () => {
    it('should determine oddness', () => {
      expect(oddOrEven(121)).toBe('Evenish');
    });
    it('should determines if even', () => {
      expect(oddOrEven(41)).toBe('Oddish');
    });
  });

  describe('PRIM03 takes in an array and an index and returns the corresponding index', () => {
    it('should return corresponding index value from array', () => {
      const arr = ['a', 'b', 'c', 'd', 'e'];
      expect(at(arr, 1)).toEqual('b');
      expect(at(arr, -2)).toEqual('d');
    });
  });

  describe('PRIM04 takes two words as arguments and returns true if they are anagrams', () => {
    it('should return true if words are anagrams', () => {
      const wordOne = 'superintended';
      const wordTwo = 'unpredestined';
      const wordThree = 'cat';
      const wordFour = 'dog';
      expect(anagrams(wordOne, wordTwo)).toEqual(true);
      expect(anagrams(wordThree, wordFour)).toBe(false);
    });
  });

  describe('PRIM06 takes a positive integer `n`, and returns an array that contains, all of the numbers from 1 to 50 that are multiples of `n`.', () => {
    it('should return an array that contains all the numbers from 1 to 50 that are multiples of n', () => {
      expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiplesOfN(25)).toEqual([25, 50]);
      expect(multiplesOfN(75)).toEqual([]);
    });
  });

  describe('PRIM05 takes a positive integer `n`, and returns an array that contains all of the numbers from `1` to `n`.', () => {
    it('should return Fizz for multiples of three, Buzz for multiples of five, FizzBuzz for multiples of both three and five', () => {
      expect(fizzBuzz(16)).toEqual([
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
        16,
      ]);
    });
  });

  describe('HOF01', () => {
    describe('takes a string of `punctuation` and returns a function that also takes a strings but returns the string plus the initially provided `punctuation`', () => {
      it('should return a string plus punctuation', () => {
        expect(addPunctuation('!!')('hello world')).toEqual('hello world!!');
      });
    });
  });

  describe('REC01 takes a number and returns one digit that is the result of summing all the digits of the input number', () => {
    it('should return added value of all numbers, if double digits, adds them together as if they were single', () => {
      expect(rootDigit(123)).toEqual(6);
      expect(rootDigit(4322)).toEqual(2);
      expect(rootDigit(999888777)).toEqual(9);
    });
  });
});
