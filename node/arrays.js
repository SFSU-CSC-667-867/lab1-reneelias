// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const arrayTest = [9, 3, 4];
// arrayTest[5] = 9;
console.log(arrayTest);
array.forEach((n) => {
    console.log(n);
});
// use map

//if there is only one parameter in function, parantheses are unecessary
const newArray = arrayTest.map(i => i + 1);
console.log(newArray);

// use pop
newArray.pop();
console.log(newArray);

// use push
newArray.push(6);
console.log(newArray);

// use shift
newArray.shift();
console.log(newArray);

// use unshift
newArray.unshift(5);
console.log(newArray);

// use filter