// import user, { printname, printage } from "/app.js";

// const user = new user("daisy", 13);
// console.log(user);
// pName(user);
// printAge(user);
//console.log("hello world");

// function sayhello() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// sayhello();
//variables declared with the keyword var are accessible in the function
//in which they are defined

// function sayhello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// sayhello();
//variables declared with the keyword let are accessible in the block in
//which they are defined

//the keyword const is also sculpt to the block in which it is defined

// this  keyword
// const person = {
//   name: "daisy",
//   walk: function () {
//     console.log(this);
//   },
// };
//  const walk = person.walk();
//  console.log(walk);

// const walk = person.walk.bind(person);
// console.log(walk);

//walk();
//the this keyword in javascript is determined by how a function
//is called if u call a function as a method in an object it
// will return a reference to that object
//if u call the function as a stand alone object or outside
//of an object it will return the global object which is the window
// object in browsers

//we can solve the "this" problem by using binding
//functions in javascript are objects they have
// properties and method eg bind
//which can set the value of 'this' permanently
//the argument we pass in the bind determines the value of "this"

//arrow functions
// const area = function numb(number) {
//   return number * number;
// };
// console.log(area(5));

// const area = (number) => number * number;
// console.log(area(5));

// arrow functions dont rebind the this keyword

// const person = {
//   talk() {
//     console.log("this", this);
//   },
// };
// person.talk();

//array.map
// const colours = ["red", "green ", "blue"];
// const items = colours.map((colour) => `<li> ${colour}</li>`);
// console.log(items);

// const person = {
//   name: "brian",
//   age: 30,
//   salary: 40000000,
//   talk: function () {
//     console.log("something");
//   },
// };
// person.talk();

// const person2 = {
//     name: "daisy",
//     age: 30,
//     salary: 40000000,
//     talk: function () {
//       console.log("something");
//     },
//   };
//   person.talk();

// class Person {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   talk() {
//     console.log(
//       `${this.name} is${this.age}years old and has salary of${this.salary}shs`
//     );
//   }
//   walk() {
//     console.log("anything");
//   }
// }

// const person1 = new Person("Brian", 30, 1000);
// const person2 = new Person("Ligare", 30, 1000);
// const person3 = new Person("daisy", 30, 1000);
//this is instantiating it is used to assign values to the unknowns

// person1.talk();
// person2.walk();

// console.log(person1);

// class Person {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   talk() {
//     console.log(
//       `${this.name} is${this.age}years old and has salary of${this.salary}shs`
//     );
//   }
//   walk() {
//     console.log("anything");
//   }
// }
// //inheritance
// class Teacher extends Person{
//   constructor(name, age, salary, height) {
//     this.height = height;
//     super(name, age, salary);
//   }
//   teach() {
//     console.log("i teach");
//   }
// }

// this basics
//this advance
//factory functions
//constructor functions
//property look up
//prototype property
//binds
//calls

// function Person(name, age, salary) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// }
// Person.prototype.cows = function () {
//   console.log(`${this.name} how are you. you are ${this.age}years old`);
// };
// Person.prototype.fullname = function () {
//   console.log(
//     `${this.name}is ${this.age}years old and has a salary of${this.salary}`
//   );
// };

// const daisy = new Person("daisy", 20, 354676);

// console.log(daisy.fullname());

function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
}
function Teacher(name, age, salary, height) {
  Person.call(this, name, age, salary);
  this.height = height;
}
Person.prototype.cows = function () {
  console.log(`${this.name} how are you. you are ${this.age}years old`);
};
Person.prototype.fullname = function () {
  console.log(
    `${this.name}is ${this.age}years old and has a salary of${this.salary}`
  );
};

const teacher1 = new Teacher("ligare", 28, 287367, 40);
console.log(teacher1);
// function anything() {
//   console.log(this);
// }

// const person = {
//   name: "daisy",
//   age: 27,
//   occupation: "teacher",
//   height: 40,
//   anything,
// };

// const human = {
//   teeth: 20,
//   weight: 27,
//   gender: "male",
//   anything,
// };

// person.anything();
// human.anything();

// let buttonOne = document.querySelector("#one");
// let buttonTwo = document.querySelector("#two");

// buttonOne.addEventListener("click", anything);
// buttonTwo.addEventListener("click", function () {
//   anything();
// });
