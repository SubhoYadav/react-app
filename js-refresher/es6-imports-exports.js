// An attempt to import the default exports causes the imported file to execute

// import PrintName from "./arrow-functions.js";
// import { multiply as mult, add as sum } from "./arrow-functions.js";
import * as mathBundle from "./arrow-functions.js";

// console.log("Multiplication", mult(5));
// console.log("Summation", sum(5, 7))

console.log("Sumation", mathBundle.add(4, 6));
console.log("Multiplication", mathBundle.multiply(8));
