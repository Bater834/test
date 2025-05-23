// ✅ Жишээ 1: Хоёр тоог нэмэх

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(3, 5)); // 8
// -------------------------------------------------

// ✅ Жишээ 2: Нэг мөрний функц (return үггүй)

const multiply = (a, b) => a * b;

console.log(multiply(4, 6)); // 24

// ✅ Жишээ 3: Нэг параметртэй бол хаалтгүй байж болно

const greet = (name) => `Hello, ${name}!`;

console.log(greet("Bold")); // Hello, Bold!
// -------------------------------------------------------
// _______________________________________________________________
// TODO: define the function divideByTwo here

const divideByTwo = (number) => number / 2;
console.log(divideByTwo(4));
console.log(divideByTwo(8));
console.log(divideByTwo(12));
console.log(divideByTwo(6));
// Output:
// 2
// 4
// 6
// 3
// _______________________________________________________________
console.log("Gap ");

// _______________________________________________________

// Here are some exercises to practice using arrow functions in JavaScript:
// Basic Arrow Function:
// Write an arrow function named multiplyByTwo that takes a number as an argument and returns the result of multiplying that number by 2.
// JavaScript

const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(5)); // Output: 10
// ______________________________________________________________________________________
// Arrow Function with No Arguments:
// Write an arrow function named sayHello that takes no arguments and returns the string "Hello!".
// JavaScript

const sayHello = () => "Hello!";
console.log(sayHello()); // Output: Hello!
// _____________________________________________________________________________________________________
// Arrow Function with Multiple Arguments:
// Write an arrow function named add that takes two numbers as arguments and returns their sum.
// JavaScript

const add = (num1, num2) => num1 + num2;
console.log(add(3, 7)); // Output: 10
// ____________________________________________________________________________________________________________
// Arrow Function and Array Methods:
// Given an array of numbers, use the map method with an arrow function to create a new array where each number is squared.
// JavaScript

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// _______________________________________________________________________________________________________________________
// Arrow Function and Filtering:
// Given an array of numbers, use the filter method with an arrow function to create a new array containing only the even numbers.
// JavaScript

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]
// _____________________________________________________________________________________________________________________________________
// Arrow Function and Object Methods:
// Create an object with a method that uses an arrow function to access a property of the object.
// JavaScript

const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, my name is ${person.name}`);
  },
};
person.greet(); // Output: Hello, my name is Alice
