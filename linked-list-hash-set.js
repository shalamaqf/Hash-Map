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

    // Create a method to check if a key is exist in the list
    isExist(key) {
        if (this.head === null && this.tail === null) return false;

        let temp = this.head;
        while(temp !== null) {
            if (temp.key === key) return true;
            temp = temp.next;
        }
        return false;
    }

    // Create a method to return a key
    getKey(key) {
        if (this.head === null && this.tail === null) return null;

        let temp = this.head;
        while (temp !== null) {
            if (temp.key === key) return temp.key;
            temp = temp.next;
        }
        return null;
    }


}

// Create a class for the node
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}