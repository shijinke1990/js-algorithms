class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {

    length = 0
    head = null

    append(element) {
        const newNode = new Node(element)
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.length++
    }

    get string() {
        let str = ''
        let current = this.head
        while (current) {
            str = str + "," + current.element
            current = current.next
        }
        return str.slice(1)
    }

    insert(position, element) {
        if (position > this.length || position < 0) {
            return false
        }
        let current = this.head
        let previuos = null
        const newNode = new Node(element)
        if (position === 0) {
            this.head = newNode
            newNode.next = current
        } else {
            while (index++ < position) {
                previuos = current
                current = current.next
            }
            previuos.next = newNode
            newNode.next = current
        }
        this.length++
        return true
    }

    removeAt(position) {
        if (position > this.length || position < 0) {
            return null
        }
        let index = 0
        let current = this.head
        let previous = null
        if (position === 0) {
            this.head = current.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length--
        return current.element

    }

    indexOf(element) {
        let index = 0
        let current = this.head
        while (current) {
            if (current.element === element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    remove(element) {
        return this.removeAt(this.indexOf(element))
    }

    get size() {
        return this.length
    }

    get isEmpty() {
        return this.length === 0
    }

    get first() {
        return this.head.element
    }

}

// const list = new LinkedList()

// list.append(15)
// list.append(10)
// list.append(20)

// console.log(list)

// console.log(list.string)

// list.insert(0, 996)

// console.log(list.string)

// list.remove(10)

// console.log(list.string)

// console.log(list.indexOf(20))

// console.log(list.removeAt(1))

// console.log(list.string)

// console.log(list.size)
// console.log(list.isEmpty)

module.exports =  LinkedList