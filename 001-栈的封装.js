class Stack {
    list = []

    push(val) {
        this.list.push(val)
    }

    pop() {
        return this.list.pop()
    }

    peek() {
        return this.list[this.list.length - 1]
    }

    toString() {
        return this.list.join(' , ')
    }

    get size() {
        return this.list.length
    }

    get isEmpty() {
        return this.list.length === 0
    }


}

const s = new Stack()

s.push('sxy')

s.push('sll')

s.push('xc')

s.push('sk')

console.log(s.toString())

console.log(s.pop())

console.log(s.toString())