// JavaScript-д callback гэдэг нь өөр функц дотор аргументаар дамжуулж өгдөг функц юм.
//  Callback функц нь тухайн үйлдэл дууссаны дараа дууддаг функц юм.

// 🎯 Callback-ын зорилго:
// Үйлдэл дууссаныхаа дараа нэг зүйл хийх

// Тухайн функцийн дараа ямар нэгэн код гүйцэтгэх

// ✅ Энгийн жишээ:

// function greet(name, callback) {
//   console.log("Сайн байна уу, " + name);
//   callback(); // callback функцийг дуудаж байна
// }

// function sayBye() {
//   console.log("Баяртай!");
// }

// greet("Тэмүүжин", sayBye);

// 🧠 Энд юу болж байна вэ?
// greet() функц 2 аргумент авна: name болон callback

// callback функц нь sayBye

// greet функц callback() буюу sayBye()-г дуудаж байна
// _________________________________________________________________

// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("John", sayGoodbye);
// Output:
// Hello, John!
// Goodbye!
// _________________________________________________________
// 📌 Callback-ийн онцлог:
// Ажлын дарааллыг хянахад тустай

// Асинхрон код (сүлжээ, файл, г.м) зохицуулахад хэрэглэгддэг

// Илүү цэвэр, уян хатан код бичихэд тус болдог

// setTimeout(function () {
//   console.log("3 секундийн дараа энэ гарна.");
// }, 2000);
// -------------------------------------------------------

// hello(wait);
// function hello() {
//   setTimeout(function () {
//     console.log("Hello!");
//   }, 3000);
// }

// ___________________________________________________________

// function hello(callback) {
//   console.log("Hello!");
//   callback();
// }
// function wait() {
//   console.log("wait!");
// }
// function leave() {
//   console.log("Leave!");
// }
// hello(wait);

const a = (callback) => {
  console.log("a");
  callback();
};

const b = () => {
  console.log("b");
};

a(b);
