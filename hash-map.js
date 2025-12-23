import { LinkedList } from "./linked-list.js";

// Create a hash map class
export class HashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
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
        const hashCode = this.hash(key);

        // Create a linked list object in the bucket if it's empty and set the entry in it
        if (this.table[hashCode] === undefined) {
            this.table[hashCode] = new LinkedList();
        }

        // Overwrite the entry if the key is same
        if (this.table[hashCode].isExist(key)) {
            this.table[hashCode].update(key, value);
            return;
        }


        // Add new entry if the key is not same
        this.table[hashCode].add(key, value);

        // Expand the table size in case the load factor is more than 0.75
        this.expand();
    }

    // Create a method to get the key's value
    get(key) {
        const hashCode = this.hash(key);

        // Check if a bucket is still empty/undefined
        if (this.table[hashCode] === undefined) return false;

        // Check if the key is in the bucket
        if (!this.table[hashCode].isExist(key)) return null;

        // If exist, return the key's value
        return this.table[hashCode].findValue(key);
    }

    // Create a method to check if the key is in the hash table
    has(key) {
        const hashCode = this.hash(key);

        if (this.table[hashCode] === undefined) return false;

        return this.table[hashCode].isExist(key);
    }

    // Create a method to remove an entry from the hash table
    remove(key) {
        const hashCode = this.hash(key);
        
        // Return if a bucket is empty/undefined
        if (this.table[hashCode] === undefined) return false;

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
                this.table[i].removeAllNodes();
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

    // Create a method to returns an array containing all values inside the hash map
    values() {
        let values = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                values.push(this.table[i].getAllValues());
            }
        }

        return values.flat();
    }

    // Create a method to returns an array containing each (key, value) pair inside the hash map
    entries() {
        let entries = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                entries.push(this.table[i].getAllPairs());
            }
        }

        return entries.flat(1);
    }

    // Expand the table capacity if the entries load factor is more than 0.75
    expand() {
        let totalEntries = this.length();
        let totalBuckets = this.capacity;
        let currentLoadFactor = totalEntries / totalBuckets;

        // Check if the current load factor is more than 0.75
        if (currentLoadFactor <= this.loadFactor) return;

        // Create a temporary table to store all entries
        let temporaryTable = this.entries();

        // Clear the entries from the original table
        this.clear();

        // Set the new value of the hash map properties
        this.capacity = this.capacity * 2;
        this.table = new Array(this.capacity)

        // Set the entreis to the new table
        for (let i = 0; i < temporaryTable.length; i++) {
            this.set(temporaryTable[i][0], temporaryTable[i][1]);
        }
    }

}