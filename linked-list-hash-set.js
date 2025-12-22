// Create a linked list class for the hash set
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Create a method to add the key to the list
    add(key) {
        const newNode = new Node(key);

        // If the list is empty
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        newNode.next = null;
    }
}

// Create a class for the node
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}