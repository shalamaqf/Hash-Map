// Create a linked list class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Create a method to traversal the list and get the key
    find(key) {
        if (this.head === null && this.tail === null) return null;

        let temp = this.head;
        while (temp !== null)  {
            if (key === temp.key) return temp;
            temp = temp.next;
        }
        return null;
    }

    isExist(key) {
        if (this.head === null && this.tail === null) return false;

        let temp = this.head;
        while (temp !== null) {
            if (key === temp.key) return true;
            temp = temp.next;
        }
        return false;
    }
}

// Create a node class
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}