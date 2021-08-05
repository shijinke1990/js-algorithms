class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    root = null

    insert(data) {
        const newNode = new Node(data)
        const insertNode = (node, newNode) => {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode
                } else {
                    insertNode(node.left, newNode)
                }
            } else {
                if (node.right === null) {
                    node.right = newNode
                } else {
                    insertNode(node.right, newNode)
                }
            }
        }

        if (this.root === null) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }

    min() {
        let node = this.root
        while (node.left) {
            node = node.left
        }
        return node.data
    }

    /**
     * 递归方法求最小值
     * @param {*} node 
     */
    min2(node) {
        const minNode = (node) => {
            if (node == null) {
                return null
            }
            if (node.left === null) {
                return node.data
            } else {
                return minNode(node.left)
            }
        }
        return minNode(node || this.root)
    }

    max() {
        let node = this.root
        if (node == null) {
            return null
        }
        while (node.right) {
            node = node.right
        }
        return node.data
    }

    max2(node) {
        const maxNode = (node) => {
            if (node === null) {
                return null
            } else {
                if (node.right) {
                    return maxNode(node.right)
                } else {
                    return node.data
                }
            }
        }
        return maxNode(node || this.root)
    }

    has(data) {
        let node = this.root
        while (node) {
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

    remove(data) {
        let current = this.root
        let parent = null
        let isLeftChild = true

        while (current.data !== data) {
            isLeftChild = (key < current.key)
            current = (isLeftChild ? current.left : current.right)

            if (current === null) {
                return false
            }

        }

        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null
            } else {
                isLeftChild ? (parent.left = null) : (parent.right = null)
            }
        } else if (current.right == null) {
            if (current == this.root) {
                this.root = current.left
            } else if (isLeftChild) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else if (current.left = null) {
            if (current == this.root) {
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        }


    }

}


const bst = new BinarySearchTree()

bst.insert(11)
bst.insert(7)
bst.insert(11)
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


console.log(bst.max2())