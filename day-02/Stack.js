class Stack {
    #list = [];

    constructor(initialList) {

        if (initialList) this.#list = initialList;
    }
    classPush(item) {
        this.#list.push(item);
    }

    get readableArr() {
        return this.#list;
    }
}

module.exports = { Stack };
