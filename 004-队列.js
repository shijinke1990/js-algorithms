class Queue {
    items = []

    enqueue(newItem) {
        this.items.push(newItem)
    }

    dequeue() {
        return this.items.shift()
    }

    toString() {
        return '左入 '+this.items.reverse().join(' ')+' 右出'
    }

    isEmpty() {
        return this.items.length > 0
    }

    front(){
        return this.items[0]
    }

    size = this.items.length


}

const queue = new Queue()

queue.enqueue('sxy')

queue.enqueue('sll')

queue.enqueue('xc')

console.log(queue.toString())

console.log(queue.front())