// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let num = 40; num >= 20; num -= 2) {
//   console.log(num);
// }

// for (let n = 10; n <= 100; n *= 2) {
//   console.log(n);
// }

// const animals = ["getah", 3, 4, 5, 6, 7];

// for (let i = 0; i <= animals.length; i++) {
//   console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(i, animals[i]);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`i is ${i}`);
//   for (let j = 0; j < 4; j++) {
//     console.log(`j is ${j}`);
//   }
// }

//i   0
//  j   1
//  j   2
//  j   3
//    1
//      1
//      2
//      3
//    2
//      1
//      2
//      3...

// const seatingChart = [
//   ["a", "b", "c"],
//   ["e", "f", "g"],
//   ["h", "i", "j"],
// ];

// for (i = 0; i < seatingChart.length; i++) {
//   console.log(`row #${i + 1}`);
//   const row = seatingChart[i];
//   for (let j = 0; j < row.length; j++) console.log(row[j]);
// }
// console.log(seatingChart[0]);

// let count = 0;
// while (count < 10) {
//   console.log(count++);
// }

// const SECRET = "alex";

// let gues = prompt("Enter your secret: ");

// while (gues !== SECRET) {
//   gues = prompt("Enter your secret:");
// }
// console.log("Success");

// let input = prompt("Enter something");

// while (true) {
//   input = prompt(input);
//   if (input.toLocaleLowerCase() === "stop") {
//     break;
//   }
// }
// console.log("you WIN");

// game guess

// let maximum = parseInt(prompt("Please enter maximum number"));

// while (!maximum) maximum = parseInt(prompt("Please enter valid number"));

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// // console.log(targetNum);
// let attemps = 1;
// let guess = prompt("Enter your first guess: ");
// while (parseInt(guess) !== targetNum)break; {
//   attemps++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Too high"));
//   } else {
//     guess = parseInt(prompt("Too low"));
//   }
// }
// console.log(
//   `you got it! target num ${targetNum} it took you ${attemps} guesses`
// );

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let num of numbers) {
//   console.log(num ** 2);
// }
