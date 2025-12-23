import { LinkedList } from './linked-list-hash-set.js';

// Create a hash set class
export class HashSet {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.table = new Array(this.capacity);
    }

    // Create a method to hash the key and get the hash code
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }

    // Create a method to set the key in the table
    set(key) {
        const hashCode = this.hash(key);

        if (this.table[hashCode] === undefined) {
            this.table[hashCode] = new LinkedList();
        }

        if (this.table[hashCode].isExist(key)) return;

        this.table[hashCode].add(key);
        this.expand();
    }

    // Create a method to get the key from the table
    get(key) {
        const hashCode = this.hash(key);

        if (this.table[hashCode] === undefined) return null;
        if (!this.table[hashCode].isExist(key)) return null;

        return this.table[hashCode].getKey(key);
    }

    // Create a method to check if key is exist in the table
    has(key) {
        const hashCode = this.hash(key);

        if (this.table[hashCode] === undefined) return false;

        return this.table[hashCode].isExist(key);
    }

    // Create a method to remove a key from the table
    remove(key) {
        const hashCode = this.hash(key);

        if (this.table[hashCode] === undefined) return false;
        if (!this.table[hashCode].isExist(key)) return false;
    
        this.table[hashCode].removeKey(key);
        return true;
    }

    // Create a method to returns the number of stored keys in the table
    length() {
        let total = 0;

        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                total += this.table[i].getTotal();
            }
        }
        return total;
    }

    // Create a method to clear all entries in the list
    clear() {
        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                this.table[i].removeAllNodes();
            }
        }
    }

    // Create a method to returns an array containing all keys in the table
    keys() {
        let keys = [];

        for (let i = 0; i < this.capacity; i++) {
            if (this.table[i] instanceof LinkedList) {
                keys.push(this.table[i].getAllKeys());
            }
        }

        return keys.flat();
    }

    // Create a method to expand table's capacity if load factor more than 0.75
    expand() {
        const totalEntries = this.length();
        const totalBuckets = this.capacity;
        const currentLoadFactor = totalEntries / totalBuckets;

        if (currentLoadFactor <= this.loadFactor) return;

        const temporaryTable = this.keys();

        this.clear();

        this.capacity = this.capacity * 2;
        this.table = new Array(this.capacity);

        for (let i = 0; i < temporaryTable.length; i++) {
            this.set(temporaryTable[i]);
        }
    }

}