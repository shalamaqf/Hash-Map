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

    // Create a method to return a node's key
    getKey(key) {
        if (this.head === null && this.tail === null) return null;

        let temp = this.head;
        while (temp !== null) {
            if (temp.key === key) return temp.key;
            temp = temp.next;
        }
        return null;
    }

    // Create a method to remove a node's key from the list
    removeKey(key) {
        if (this.head === null && this.tail === null) return null;

        let temp = this.head;
        let current = temp.next;

        if (this.head === this.tail) {
            if (this.head.key === key) {
                this.head = null;
                this.tail = null;
                return;
            }
        }

        if (this.head.key === key) {
            this.head = current;
            temp.next = null;
            return;
        }

        while (current.next !== null) {
            if (current.key === key) {
                temp.next = current.next;
                current.next = null;
                return;
            }
            temp = temp.next;
            current = current.next;
        }

        if (this.tail.key === key) {
            this.tail = temp;
            temp.next = null;
            return;
        }

        return null;
    }

    // Create a method to count total nodes in the list
    getTotal() {
        let total = 0;

        if (this.head === null && this.tail === null) return total;

        let temp = this.head;
        while(temp !== null) {
            total++;
            temp = temp.next;
        }
        return total;
    }

    // Create a method to remove all nodes in the list
    removeAllNodes() {
        if (this.head === null && this.tail === null) return null;

        this.head = null;
        this.tail = null;
        return;
    }

    // Create a method to returns an array containing all keys in the list
    getAllKeys() {
        let arrayKeys = [];

        if (this.head === null && this.tail === null) return arrayKeys;

        let temp = this.head;
        while(temp !== null) {
            arrayKeys.push(temp.key);
            temp = temp.next;
        }
        return arrayKeys;
    }


}

// Create a class for the node
class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}