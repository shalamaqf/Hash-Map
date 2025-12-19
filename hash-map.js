import { LinkedList } from "./linkedList.js";

// Create a hash map class
class hashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.size = 0;
        this.table = new Array(this.capacity);
    }

    // Create a hash map function to hash a key and produce a hash code
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    // Create a method to set key-value pair in the bucket of the hash table
    set(key, value) {
        // Hash the key to get the hash code
        const hashCode = hash(key);

        // Create a linked list object in the bucket if it's empty and set the pair in it
        if (this.table[hashCode] === undefined) {
            this.table[hashCode] = new LinkedList();
            this.table[hashCode].add(key, value);
            return;
        }

        // Overwrite the key-value pair if the key is same
        if (this.table[hashCode].isExist(key)) {
            this.table[hashCode].update(key, value);
            return;
        }


        // Add new key-value pair if the key is not same
        this.table[hashCode].add(key, value);
    }

    // Create a method to get the key's value
    get(key) {
        const hashCode = hash(key);

        // Check if the key is in the bucket
        if (!this.table[hashCode].isExist(key)) return null;

        // If exist, return the key's value
        return this.table[hashCode].findValue(key);
    }
}