import { HashMap } from "./hash-map.js";
import { HashSet } from './hash-set.js';

// Hash Map
const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')

console.log(test.capacity);
console.log(test.length())
console.log(test.entries())

// Hash Set
const test_2 = new HashSet();
test_2.set('bon iver');
test_2.set('jeff buckley');
test_2.set('paramore');
test_2.set('daughter');
test_2.set('fleetwood mac');
test_2.set('hozier');
test_2.set('syd matters');
test_2.set('the cranberries');
test_2.set('the smiths');
test_2.set('queen');
test_2.set('john mayer');
test_2.set('the beatles');
test_2.set('5sos');

console.log(test_2.length())
console.log(test_2.capacity)
console.log(test_2.keys())
