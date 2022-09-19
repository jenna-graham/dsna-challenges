const { reverseSentence, addCapitolLetter, oddOrEven } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
});
describe('primitive code challenges', () => {
  describe('Add capitol letters to words', () => {
    it('should add a capitol to first letter in each word', () => {
      expect(addCapitolLetter('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });
});

describe('primitive code challenges', () => {
  describe('Determines if odd or even', () => {
    it.only('should determine oddness', () => {
      expect(oddOrEven(121)).toBe('Evenish');
    });
  });
});
