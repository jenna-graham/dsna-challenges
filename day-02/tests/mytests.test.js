const { Stack } = require('../Stack');

describe('Stack Tests', () => {
    it('Should add an item to an array', () => {
        const itemArray = new Stack([]);
        itemArray.classPush('fox');
        expect(itemArray.readableArr).toEqual(['fox']);
    });
  
});