const address = {
  city: "Kolkata",
  state: "WB"
}

const student = {
  name: 'Subho',
  age: 23,
  address // Now student has this complex object address
}

// deep copy using spread operator
// const studentCopy = {...student}
// In case of nested objects the spread operatr will not deep copy
// console.log(studentCopy == student)
// console.log(studentCopy.address == student.address)

// alternatively
const studentCopy =  Object.assign({}, student)
console.log(studentCopy == student)
console.log(studentCopy.address == student.address)

