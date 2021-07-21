const LinkedList = require("./008-链表")

/**
 * 循环方法反转链表
 */
LinkedList.prototype.reverse = function () {
    let current = this.head
    let previous = null
    while (current) {
        let toBeHandled = current.next
        current.next = previous
        previous = current
        current = toBeHandled
    }
    this.head = previous
}

/**
 * 递归方法反转链表
 */
function reverse(head){
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

const ll = new LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
ll.append(50)

console.log(ll.string)
ll.head = reverse(ll.head)
console.log(ll.string)
