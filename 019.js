class Node {
    constructor(data) {
        this.root = this
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const newNode = new Node(data)
        if (!this.root) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    /**
     * 中序遍历所有节点）
     */
    inOrderTraverse() {
        let backs = []
        const callback = data => {
            return data
        }
        const inOrderNode = (node, callBack) => {
            if (node !== null) {
                inOrderNode(node.left, callBack)
                backs.push(callBack(node.data));
                inOrderNode(node.right, callBack)
            }
        }
        inOrderNode(this.root, callback)
        return backs

    }

    get min() {
        if (this.root === null) {
            return null
        }
        let node = this.root
        while (node.left !== null) {
            node = node.left
        }
        return node.data
    }


    get max() {
        if (this.root === null) {
            return null
        }
        let node = this.root
        while (node.right !== null) {
            node = node.right
        }
        return node.data
    }

    has(data) {
        let node = this.root

        while (node !== null) {
            if (data < node.data) {
                node = node.left
            } else if (data > node.data) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }


    search(data) {
        const searchNode = (node, data) => {
            if (node === null) {
                return false
            }
            if (node.data == data) {
                return node
            } else {
                if (data > node.data) {
                    node = node.right
                } else {
                    node = node.left
                }
                return searchNode(node, data)
            }
        }
        return searchNode(this.root, data)
    }







}


const bst = new BinarySearchTree()

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

//console.log(bst.inOrderTraverse())
// console.log(bst.min)
// console.log(bst.max)
// console.log(bst.has('1'))
// console.log(bst.has('2'))
// console.log(bst.has('3'))
// console.log(bst.has('4'))

console.log(bst.search(5))