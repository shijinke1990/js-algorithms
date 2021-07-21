class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue {
    items = []

    isEmpty() {
        return this.items.length === 0
    }

    enqueue(element, priority) {
        const qe = new QueueElement(element, priority)
        if (this.isEmpty()) {
            this.items.push(qe)
        } else {
            let inserted = false
            for (let i = 0; i < this.items.length; i++) {
                if (qe.priority < this.items[i].priority) {
                    this.items.splice(i, 0, qe)
                    inserted = true
                    break
                }
            }
            if (!inserted) {
                this.items.push(qe)
            }
        }
    }

    dequeue() {
        this.items.shift()
    }

    front() {
        return this.items[0]
    }

    size() {
        return this.items.length
    }

    toString() {
        console.log(this.items)
        return this.items.map(v => {
            return v.element + '-' + v.priority
        }).join('\n')
    }


}

const pQ = new PriorityQueue()

pQ.enqueue('abc', 10)
pQ.enqueue('cba', 5)
pQ.enqueue('nba', 12)
pQ.enqueue('mba', 3)

console.log(pQ.toString())
console.log(pQ.size())

/**
 * splice会把处理前处于该位置的元素剪切掉然后插入新元素，然后在出入元素后粘贴剪切的元素
 */

