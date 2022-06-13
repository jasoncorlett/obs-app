class FifoQueue {
    constructor(queue = []) {
        this.queue = queue
    }

    put(item) {
        this.queue.push(item)
    }

    get(deleteItem = true) {
        if (deleteItem)
            return this.queue.shift()
        else
            return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    clear() {
        this.queue = []
    }
}

module.exports = FifoQueue