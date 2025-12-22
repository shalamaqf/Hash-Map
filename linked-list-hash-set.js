// Create a linked list class for the hash set
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

// Create a class for the node
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}