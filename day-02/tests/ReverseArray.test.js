const { ReverseArray } = require('../ReverseArray');

describe('Reverse Array Stack Test', () => {
    it('should return a reversed array', () => {
        const newArr = new ReverseArray([12, 3, 5, 7]);
        newArr.classReverse();
        expect(newArr.readableArr).toEqual([7, 5, 3, 12]);
    });
});

