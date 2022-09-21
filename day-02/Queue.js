class Queue {
  #list = [];
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }
  enqueue(item) {
    this.#list.push(item);
    }

    dequeue() {
        return this.#list.shift();
    }
    hasNext() {
        return this.readableArr.length ? true : false;
    }


    get count() {
        return this.#list.length;
    }
    get next() {
        return this.#list[0];
    }
    get readableArr() {
        return this.#list;
    }
}

module.exports = { Queue };
