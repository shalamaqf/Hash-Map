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

    // Create a method to set entry in the bucket of the hash table
    set(key, value) {
        // Hash the key to get the hash code
        const hashCode = hash(key);

        // Create a linked list object in the bucket if it's empty and set the entry in it
        if (this.table[hashCode] === undefined) {
            this.table[hashCode] = new LinkedList();
            this.table[hashCode].add(key, value);
            return;
        }

        // Overwrite the entry if the key is same
        if (this.table[hashCode].isExist(key)) {
            this.table[hashCode].update(key, value);
            return;
        }


        // Add new entry if the key is not same
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

    // Create a method to check if the key is in the hash table
    has(key) {
        const hashCode = hash(key);

        return this.table[hashCode].isExist(key);
    }

    // Create a method to remove an entry from the hash table
    remove(key) {
        const hashCode = hash(key);

        // Return false if the key is not exist
        if (!this.table[hashCode].isExist(key)) return false;

        // If exist, remove the entry from the table
        this.table[hashCode].removeNode(key);
        return true;
    }

    // Create a method to returns the number of stored keys in the hash map
    length() {
        let total = 0;

        // Loop the hash table
        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                total += this.table[i].countNode();
            }
        }

        return total;
    }

    // Create a method to removes all entries in the hash map
    clear() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                this.table[i].removeNode();
            }
        }
    }

    // Create a method to returns an array containing all keys inside the hash map
    keys() {
        let keys = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                keys.push(this.table[i].getAllKeys());
            }
        }

        return keys.flat();
    }
}