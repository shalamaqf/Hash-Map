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
}