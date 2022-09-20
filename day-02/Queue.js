class Queue {
    #list = [];
    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }
    enqueue(item) {
        this.#list.push(item)
    }
    get readableArr() {
        return this.#list;
    }
}

module.exports = { Queue };
