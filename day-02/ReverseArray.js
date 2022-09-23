/* eslint-disable no-console */
class ReverseArray {
    #list = [];
    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }
    classReverse() {
        this.#list.reverse();
    } 
    get readableArr() {
        return this.#list;
    }
}

module.exports = { ReverseArray };