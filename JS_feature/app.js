// // default params

// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }
// // rollDie() => for default will be 6

// Rest params, if you have more params than you set in function

// function sum() {
//   console.log(arguments);
// }

// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// error and do this
// function sum(...nums) {
//   console.log(nums);
// }

function Golden(gold, silver, ...metal) {
  console.log(
    `Gold: ${gold}, silver: ${silver} and other metals like: ${metal}`
  );
}
