const { Queue } = require('../Queue')

describe('Queue Tests', () => {
    it('enqueue should add item to back of queue', () => {
       const newItemArr = new Queue([]);
       newItemArr.enqueue('fox');
       newItemArr.enqueue('goose');
       newItemArr.enqueue('lizard');
       expect(newItemArr.readableArr).toEqual(['fox', 'goose', 'lizard']);
    });

    it('dequeue should remove item from the front', () => {
        const newArr = new Queue();
        newArr.enqueue('fox');
        newArr.enqueue('goose');
        newArr.enqueue('lizard');
        const item = newArr.dequeue();
        expect(newArr.count).toBe(2);
        expect(newArr.next).toBe('goose');
        expect(item).toBe('fox');
      });
});