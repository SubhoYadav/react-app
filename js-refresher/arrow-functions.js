const multiply = (number) => number * 2;

const printMyName = () => {
  console.log("SY");
};

const add = (num1, num2) => num1 + num2;

console.log(multiply(4));
console.log(add(4, 8));

printMyName();

export { multiply, add };
export default printMyName;
