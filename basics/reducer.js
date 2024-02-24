// A reducer function in javascript is a function that takes an existing state and a new value and returns a merged state

const arr = [1,2, 5,6,4,8];

const reducerFunction = (acc, itr) => {
  return acc + itr;
}
const initialValue = 0

const reducedValue = arr.reduce(reducerFunction, initialValue)
console.log("Reduced value = ", reducedValue)