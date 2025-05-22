// Объектыг эхлүүлэхийн тулд буржгар хаалт ашиглана:
// var emptyObject = {};

// var personObject = {
//   firstName: "John",
//   lastName: "Smith",
// };
// -------------------------------------------------------------
var personObject = {
  firstName: "John",
  lastName: "Smith",
};
personObject.age = 23;
personObject["salary"] = 14000;
// --------------------------------------------------------------------
for (var member in personObject) {
  if (personObject.hasOwnProperty(member)) {
    console.log(
      "the member " + member + " of personObject is " + personObject[member]
    );
  }
}
// ----------------------------------------------------------------------
// Exercise
// You must define an object called person with the following members:

// The member firstName of the person is "Jack"
// The member lastName of the person is "Smith"
// The member age of the person is 19
// The member employed of the person is true

var person = {
  firstName: "Jack",
  lastName: "Smith",
  age: 19,
  employed: true,
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);

// output:
// Jack
// Smith
// 19
// true
