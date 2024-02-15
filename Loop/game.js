// verify if string or number -> convert string to number

let maximum = parseInt(prompt("Enter the maximum number"), 10);

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"));
}

// generate random number from 0 tu maximum num
const tragetNum = Math.floor(Math.random() * maximum) + 1;
// how many attemps
let attemps = 1;

// create algorithm , prompt returns the string
let guess = prompt("Enter first guess");

while (parseInt(guess) !== tragetNum) {
  if (guess === "q") break;
  //   parse to integer guess
  guess = parseInt(guess);
  //   attemps++;
  if (guess > tragetNum) {
    guess = prompt("Too high guess, enter low guess number: ");
    attemps++;
  } else if (guess < tragetNum) {
    guess = prompt("Too low guess, enter high guess number: ");
    attemps++;
  } else {
    guess = prompt("Please enter a number or 'q' for quit the game");
  }
}
// if want to quit from the game loop
if (guess === "q") {
  console.log("OK, you are quit from the game");
} else {
  console.log(`You win the game, took ${attemps} attemps`);
}
console.log(tragetNum);
console.log(typeof tragetNum);
