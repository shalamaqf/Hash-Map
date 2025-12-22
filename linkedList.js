// Create a linked list class
export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Create a method to add new node to the list
    add(key, value) {
        const newNode = new Node(key, value); 

        // If list is empty
        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        newNode.next = null;
    }

    // Create a method to update the old node with the new node, if the key is same.
    update(key, value) {
        const newNode = new Node(key, value);

        let temp = this.head;
        while (temp !== null) {
            if (temp.key === key) {
                temp.key = key;
                temp.value = value;
                return;
            }
            temp = temp.next;
        }

            return null;
    }

    // Create a method to traversal the list and get the key's value
    findValue(key) {
        if (this.head === null && this.tail === null) return null;

        let temp = this.head;
        while (temp !== null)  {
            if (key === temp.key) return temp.value;
            temp = temp.next;
        }
        return null;
    }

    // Create a method to traverse the list and check if a key is exist
    isExist(key) {
        if (this.head === null && this.tail === null) return false;

        let temp = this.head;
        while (temp !== null) {
            if (key === temp.key) return true;
            temp = temp.next;
        }
        return false;
    }

    // Create a method to traverse the list and removes all nodes from the list
    removeAllNodes() {
        if (this.head === null && this.tail === null) return null;

        this.head = null;
        this.tail = null;
    }

    // Create a method to traverse the list and remove the node from the list
    removeNode(key) {
        if (this.head === null && this.tail === null) return null;

        let temp = this.head;
        let current = temp.next;

        // If there's only one node
        if (this.head === this.tail) {
            if (this.head.key === key) {
                this.head = null;
                this.tail = null;
                return;
            }
            return null;
        }

        // If the head is the key
        if (this.head.key === key) {
            this.head = current;
            temp.next = null;
            return;
        }

        // If the key is somewhere between the list
        while (current.next !== null) {
            if (current.key === key) {
                temp.next = current.next;
                current.next = null;
                return;
            }

            temp = temp.next;
            current = current.next;
        }


        // If the tail is the key 
        if (current.key === key) {
            this.tail = temp;
            temp.next = null;
            return;
        }

        return null;

    }

    // Create a method to count the number of nodes in the list
    countNode() {
        let total = 0;

        if (this.head === null && this.tail === null) return total;

        let temp = this.head;
        while (temp !== null) {
            total++;
            temp = temp.next;
        }
        
        return total;
    }

    // Create a method to return an array containing all the key in the list
    getAllKeys() {
        let arrayKeys = [];
        
        if (this.head === null && this.tail === null) return arrayKeys;

        let temp = this.head;
        while (temp !== null) {
            arrayKeys.push(temp.key);
            temp = temp.next;
        }

        return arrayKeys;
    }

    // Create a method to return an array containing all the value in the list
    getAllValues() {
        let arrayValues = [];

        if (this.head === null && this.tail === null) return arrayValues;

        let temp = this.head;
        while (temp !== null) {
            arrayValues.push(temp.value);
            temp = temp.next;
        }

        return arrayValues;
    }

    // Create a method to return an array containing all the key-value pair in the list
    getAllPairs() {
        let arrayPairs = [];

        if (this.head === null && this.tail === null) return arrayPairs;

        let temp = this.head;
        while (temp !== null) {
            const pair = [];
            pair.push(temp.key);
            pair.push(temp.value);
            arrayPairs.push(pair);
            temp = temp.next;
        }

        return arrayPairs;
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