// let totalEggs = 0;
// function collectEggs() {
//   totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = "Scarlet";
// function birdWatch() {
//   let bird = "Great Blue bird";
// }
// birdWatch();
// console.log(bird);

// let radius = 8;
// if (radius > 0) {
//   var PI = 3.13159;
//   let msg = "hi";
// }
// console.log(PI);
// console.log(radius);
// console.log(msg);

// const add = function (x, y) {
//   return x + y;
// };
// console.log(add(2, 1));

// high order function
// function callTwise(func) {
//   func();
//   func();
// }
// // not a function
// // callTwise(1);

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwise(rollDie);

// returning functions
// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("Iam a good function");
//     };
//   } else {
//     return function () {
//       alert("You have virus");
//     };
//   }
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// // makeBetweenFunc(5, 10) =>

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// methods
// const myMath = {
//   PI: 3.14,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   },
// };

// this method
// const cat = {
//   firstName: "alex",
//   lastName: "John",
//   fullName() {
//     console.log(`${firstName}, ${this.firstName}`);
//   },
// };
