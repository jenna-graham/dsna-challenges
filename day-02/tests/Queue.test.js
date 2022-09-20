const { Queue } = require('../Queue')

describe('Queue Tests', () => {
    it('enqueue should add item to back of queue', () => {
       const newItemArr = new Queue([]);
       newItemArr.enqueue('fox');
       newItemArr.enqueue('goose');
       newItemArr.enqueue('lizard');
       expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
    });
});