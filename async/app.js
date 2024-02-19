// syncronous

// console.log(" I ");

// console.log(" eat ");

// console.log(" ice cream");

// console.log(" with ");

// console.log(" spoon ");

// asynccronous

// console.log(" I ");
// console.log(" eat ");

// setTimeout(() => {
//   console.log(" with ");

//   console.log(" spoon ");
// }, 4000);

// console.log(" ice-cream ");
// function abcd(){}

// let abcde = (a, b,c,d) => {}

// callbacks
// calling function in another function
// function one(call_two) {
//     // call_two()
//   console.log(" step 1 complete. Please call step 2");
//   call_two();
// }

// function two() {
//   console.log(" step 2 ");
// }

// one(two);

// ice_cream_shop, callbacks
// back-end function
// let stocks = {
//   Fruits: ["strabery", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// // call obj stocks
// // console.log(stocks.Fruits[2]);

// // front-end function

// let order = (Fruit_name, call_production) => {
//   //   console.log("order placed, please call production");

//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`);

//     call_production();
//   }, 2000);
// };

// let production = () => {
//   //   console.log("order received, please start production");
//   setTimeout(() => {
//     console.log("production was started");
//     setTimeout(() => {
//       console.log("the fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.group("machine has been started");

//           setTimeout(() => {
//             console.log(`${stocks.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was placed on icecream`);
//             }, 2000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

// callbacks to promisses

// let stocks = {
//   Fruits: ["strabery", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// // if close store or open store

// let is_shop_open = false;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`)).then(() => {
//   return order(2000, () => console.log("production was started"))
//       .then(() => {
//         return order(2000, () => console.log("Fruit was chocked"));
//       })
//       //   error handling
//       .catch(() => {
//         console.log(
//           "customer left with catch (error handling, shop was closed)"
//         );
//       })
//       .finally(() => {console.log('day ended');
//     });

// promiss man and recieve the promiss men
function getWheather() {
  return new Promise((resolve, reject) => {
    reject("clloud");
  });
}

const promise = getWheather();
// console.log(promise);
promise.then(
  function (data) {
    console.log(`First param: ${data}`);
  },
  function (data) {
    console.log(`Second param: ${data}`);
  }
);
