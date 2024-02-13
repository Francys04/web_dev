let comment = {
  usernameName: "alex",
  lastNAme: "admin",
  age: 30,
  40: true,
};

let nums = [1, 2, 3, 4, 5, 6, 7, 8];
nums[2];
console.log(nums[0]);
console.log(comment["usernameName"]);
console.log(comment.usernameName);
console.log(comment[40]);
console.log((comment.usernameName = "alexander"));
console.log(comment);

const nestedData = [
  {
    name: "John",
    age: 30,
    hobbies: ["reading", "playing guitar"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipcode: "12345",
    },
  },
  {
    name: "Alice",
    age: 25,
    hobbies: ["painting", "hiking"],
    address: {
      street: "456 Elm St",
      city: "AnotherTown",
      state: "NY",
      zipcode: "54321",
    },
  },
];
console.log(nestedData);

console.log(nestedData[0].name); // Output: John
console.log(nestedData[1].hobbies[0]); // Output: painting
console.log(nestedData[0].address.city); // Output: Anytown
