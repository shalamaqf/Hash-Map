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
}