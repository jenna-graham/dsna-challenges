const { reverseSentence, addCapitolLetter } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it.only('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
});
describe('primitive code challenges', () => {
  describe('Add capitol letters to words', () => {
    it.only('should add a capitol to first letter in each word', () => {
      expect(addCapitolLetter('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });
  });
});
