class Queue {
    items = []
    enqueue(newItem) {
        this.items.push(newItem)
    }

    dequeue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

}



function jgch(list, num) {
    const queue = new Queue()
    for (let index in list) {
        queue.enqueue(list[index])
    }

    let t
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            t = queue.dequeue()
            queue.enqueue(t)
        }
        queue.dequeue(t)
    }
    return t

}

const list = ['sxy', 'sll', 'xc', 'bxd', 'wch']
const num = 7

console.log(jgch(list, num))