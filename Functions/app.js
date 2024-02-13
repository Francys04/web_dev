let die1 = Math.floor(Math.random() * 6) + 1;
console.log(die1);

function nameNAme() {
  console.log("let me");
}

nameNAme();

// const t = "alex";
function promp(t) {
  console.log(`${t} is here`);
}

promp("alex");

function repeat(str, numTimes) {
  let result = " ";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

repeat("alex", 4);
