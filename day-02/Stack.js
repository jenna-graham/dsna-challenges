class Stack {
    #list = [];

    constructor(initialList) {

        if (initialList) this.#list = initialList;
    }
    classPush(item) {
        this.#list.push(item);
    }

    classPop() {
        this.#list.pop()
    }

    get readableArr() {
        return this.#list;
    }
}

module.exports = { Stack };
