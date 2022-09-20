const { Stack } = require('../Stack');

describe('Stack Tests', () => {
    it('Should add an item to an array', () => {
        const itemArray = new Stack([]);
        itemArray.classPush('fox');
        itemArray.classPush('goose');
        itemArray.classPush('lizard');
        expect(itemArray.readableArr).toEqual(['fox', 'goose', 'lizard']);
    });
    it('pop should return the array without the', () => {
        const itemArray = new Stack(['fox', 'goose', 'lizard']);
        itemArray.classPop();
        expect(itemArray.readableArr).toEqual(['fox', 'goose'])
    })
});