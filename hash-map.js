// Create a hash map class
class hashMap {
    constructor() {
        this.capacity = 16;
        this.loadFactor = 0.75;
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