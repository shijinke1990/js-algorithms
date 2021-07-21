class Stack {
    items = []
    push(newItem) {
        this.items.unshift(newItem)
        return this.items
    }
    pop() {
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    toString() {
        return this.items.join(' ')
    }

    size = this.items.length
    isEmpty = this.items.length > 0

}

function dec2bin(num) {
    num = parseInt(num)
    const stack = new Stack()
    while (num !== 0) {
        stack.push(num % 2)
        num = parseInt(num / 2)
    }
    return stack.items.join('')
}

process.stdin.on('data',(input)=>{
    console.log(dec2bin(input))
})
