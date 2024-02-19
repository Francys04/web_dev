// String.prototype.yell = function () {
//   return `OMG!!! ${this.toUpperCase()}!!!!! AGGGG`;
// };

// Array.prototype.pop = function () {
//   return "Sorry i want that element, i will never pop it off";
// };

//______ OOP _______

// factory function
// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
//#ff161f

// make one function with two function, make object with prop and methods, trandform color in hex or rgb

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex();

// contructor function

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b})`;
// };

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);

// Java  Script Classes

class Color {
  constructor(r, g, b, name) {
    // console.log("Inside constructor");
    // console.log(r, g, b);
    this.r = r;
    this.g = g;
    this.b = b;
    this.colorName = name;
  }
  //   methods
  greet() {
    return "Hello from color" + " " + this.colorName;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgb() {
    return `${this.innerRGBA()}`;
  }
  innerRGBA() {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b})`;
  }
  rgba(a = 1.0) {
    console.log(`${this.innerRGBA()} ${a})`);
  }
}

const c1 = new Color(255, 67, 89, "tomato");
const red = new Color(255, 100, 89, "red");
c1.greet();
