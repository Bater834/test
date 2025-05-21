// Hello World

// console.log("Hello, World!");
// output:
// Hello, World!
// -------------------------------------------------------------
// Variables and Types
// Exercise
// You must define the following variables:

// 1. A number called myNumber which contains the number 4;
// 2. A string called myString which contains the sentence Variables are great.;
// 3. A boolean called myBoolean which contains the value false;

// const myNumber=4;
// const myString="Variables are great.";
// const myBoolean=false;
// console.log("myNumber is equal to " + myNumber);
// console.log("myString is equal to " + myString);
// console.log("myBoolean is equal to " + myBoolean);

// Output:
// myNumber is equal to 4
// myString is equal to Variables are great.
// myBoolean is equal to false

// --------------------------------------------------------------
// ARRAY

// Exercise
// You must define an array with the following three variables:

// 1. A string which has the value of "What is the meaning of life?"
// 2. A number which has a value of 42
// 3. A boolean which has a value of true

// TODO: change myArray to contain the variables
// var myArray = ["What is the meaning of life?", 42, true];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// Output:
//  What is the meaning of life?
// 42
// true

// -----------------------------------------------------------
// MANIFULATING ARRAYS

// Exercise
// In this tutorial, you must manipulate the array called myArray and do the following:
// 1. Push the number 42 to the end of the array
// 2. Shift a variable from the beginning of the array

// var myArray = [true, "What is the meaning of life?"];
// myArray.push(42);
// myArray.shift();

// console.log(myArray[0]);
// console.log(myArray[1]);

// output:
// What is the meaning of life?
// 42

// ---------------------------------------------------------------

// var firstName = "John";
// var lastName = "Smith";
// var myNumber = 21;

// var fullName = firstName + " " + lastName;
// var meaningOfLife = myNumber * 2;

// console.log("The name is " + fullName);
// console.log("The meaning of life is " + meaningOfLife);

// output:
// The name is John Smith
// The meaning of life is 42

// -----------------------------------------------------------------
// Exercise
// In this exercise, you must construct an if inside the checkNumber
// function statement that checks if the number myNumber is equal to 42.
//  If that is the case, the function must print out using console.log the word correct.
//   If myNumber is not equal to 42, the function must print out using console.log the word incorrect.
//   You can name the argument passed to a function by supplying the name inside the parentheses.
//   For example, function myFunction(myArgument).

function checkNumber(myNumber) {
  if (myNumber === 42) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
}
checkNumber(3);
checkNumber(7);
checkNumber(42);

// output:
// incorrect
// incorrect
// correct
