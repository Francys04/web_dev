console.log("Starting");

let stdents = [];
console.log(typeof stdents);
stdents.sort();

let board = [
  ["o", "x", "o"],
  ["o", "x", "x"],
  ["x", "o", "x"],
];
board[0][1] = "b";
console.log(board);
