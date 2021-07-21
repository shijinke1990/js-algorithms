/**
 * 封装栈类
 */
// class Stack {
//     list = []

//     push(newItem) {
//         this.list = [newItem, ...this.list]
//     }

//     pop() {
//         const [first, ...rest] = this.list
//         this.list = rest
//         return first
//     }

// }

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
    isEmpty = this.items.length === 0

}


const s = new Stack()

s.push(1)
s.push(2)
s.push(3)
s.push(3)
s.push(5)

console.log(s.toString())
console.log(s.pop())
console.log(s.toString())
console.log(s.pop())
console.log(s.toString())
console.log(s.pop())
console.log(s.toString())
console.log(s.pop())
console.log(s.toString())
console.log(s.pop())
console.log(s.toString())

