class Node {
    constructor(element) {
        this.element = element
        this.previous = null
        this.next = null
    }
}

class DoublyLinkedList {
    length = 0
    head = null
    tail = null

    append(element) {
        const newNode = new Node(element)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.previous = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    insert(position, element) {
        if (position < 0 || position >= this.length) {
            return false
        } else {
            const newNode = new Node(element)
            if (position === 0) {
                if (this.head === null) {
                    this.head = newNode
                    this.tail = newNode
                } else {
                    newNode.next = this.head
                    this.head.previous = newNode
                    this.head = newNode
                }
            } else if (position === this.length) {
                this.tail.next = newNode
                newNode.previous = this.tail
                this.tail = newNode
            } else {
                let index = 0
                let current = this.head
                let previous = null
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = newNode
                current.previous = newNode
                newNode.next = current
                newNode.previous = previous
            }
            this.length++
            return true
        }
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) {
            return null
        }

        let current = this.head
        if (position === 0) {
            if (this.length === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.previous = null
            }
        } else if (position === this.length - 1) {
            current = this.tail
            this.tail = current.previous
            this.tail.next = null
        } else {
            let index = 0
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            current.next.previous = previous
        }
        this.length--
        return current.element
    }

    /**
     * 
     * @param {*} position 
     * @returns 
     */
    getElement(position) {
        if (position < 0 || position >= this.length) {
            return null
        } else {
            let index = 0
            let current = this.head
            while (index++ < position) {
                current = current.next
            }
            return current.element
        }
    }

    indexOf(element) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.element === element) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    remove(position) {
        return this.removeAt(this.indexOf(position))
    }

    update(position, element) {
        if (position < 0 || position >= this.length) {
            return false
        }
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        current.element = element
        return true
    }

    get forwardString() {
        let str = ""
        let current = this.head
        while (current) {
            str = str + " , " + current.element
            current = current.next
        }
        return str.slice(3)
    }

    get reverseString() {
        let str = ""
        let current = this.tail
        while (current) {
            str = str + " , " + current.element
            current = current.previous
        }
        return str.slice(3)
    }


}

const list = new DoublyLinkedList()

list.append("12")
list.append("34")
list.append("56")
list.append("78")

console.log(list.forwardString)

list.insert(3, "99")

console.log(list.forwardString)

console.log(list.remove("34"))
console.log(list.forwardString)