let numbers = [4, 7, 3, 10];
let a = numbers[Symbol.iterator]();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
let _array = [2, 5, 9, 11];
for (let n of _array) {
console.log(n);
}