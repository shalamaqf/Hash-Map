import { LinkedList } from './linked-list-hash-set';

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
            this.table[hashCode].add(key);
            return;
        }

        if (this.table[hashCode].isExist(key)) return;

        this.table[hashCode].add(key);
    }

    // Create a method to get the key from the table
    get(key) {
        const hashCode = this.hash(key);

        if (!this.table[hashCode].isExist(key)) return null;

        return this.table[hashCode].getKey(key);
    }

    // Create a method to check if key is exist in the table
    has(key) {
        const hashCode = this.hash(key);

        if (this.table[hashCode] === undefined) return false;

        return this.table[hashCode].isExist(key);
    }
}