const {
  reverseSentence,
  addCapitolLetter,
  oddOrEven,
  at,
  anagrams,
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('Add capitol letters to words', () => {
    it('should add a capitol to first letter in each word', () => {
      expect(addCapitolLetter('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });
  describe('Determines if odd or even', () => {
    it('should determine oddness', () => {
      expect(oddOrEven(121)).toBe('Evenish');
    });
    it('should determines if even', () => {
      expect(oddOrEven(41)).toBe('Oddish');
    });
  });

  describe('takes in an array and an index and returns the corresponding index', () => {
    it('should return corresponding index value from array', () => {
      const arr = ['a', 'b', 'c', 'd', 'e'];
      expect(at(arr, 1)).toEqual('b');
      expect(at(arr, -2)).toEqual('d');
    });
  });

  describe('takes two words as arguments and returns true if they are anagrams', () => {
    it('should return true if words are anagrams', () => {
      const wordOne = 'superintended';
      const wordTwo = 'unpredestined';
      const wordThree = 'cat';
      const wordFour = 'dog';
      expect(anagrams(wordOne, wordTwo)).toEqual(true);
      expect(anagrams(wordThree, wordFour)).toBe(false);
    });
  });
});
