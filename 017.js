class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {

    root = null

    insert(key) {
        const newNode = new Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(baseNode, newNode) {
        if (newNode.key < baseNode.left) {
            if (baseNode.left === null) {
                baseNode.left = newNode
            } else {
                this.insertNode(baseNode.left, newNode)
            }
        } else {
            if (baseNode.right === null) {
                baseNode.right = newNode
            } else {
                this.insertNode(baseNode.right, newNode)
            }
        }
    }

    /**
     * 先序遍历
     */
    preOrderTraversal(handle) {
        this.preOrderTraversalNode(this.root, handle)
    }

    preOrderTraversalNode(node, handle) {
        if (node !== null) {
            handle(node.key)
            this.preOrderTraversalNode(node.left, handle)
            this.preOrderTraversalNode(node.right, handle)
        }
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

console.log(bst)

bst.preOrderTraversal(function (key) {
    console.log(key)
})