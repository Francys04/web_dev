// create for not quit from the app with while
let input = prompt("What would you like to do!!!!!");
// create storage for data
const todos = ["Colection", "collectio1"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*********");
    // read all from the list todos
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*********");
    // for creating a new list
  } else if (input === "new") {
    const newTodo = prompt("What is new of ToDo list?: ");
    todos.push(newTodo);
    console.log(`${newTodo} add to the list`);
    // create delete for list
  } else if (input === "delete") {
    const index = parseInt(
      prompt("What is index of delete the item from list?: ")
    );
    // convert to the int for recognize the string to the number in prompt
    // if not a number you try delete your todo list
    if (!Number.isNaN(index)) {
      parseInt(index);
      const deleted = todos.splice(index, 1);
      console.log(`OK, deleted item: ${deleted[0]}`);
      //   if unknown index
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What would you like to do");
}
// quit from app
console.log("QUIT FROM APP !!!!");
