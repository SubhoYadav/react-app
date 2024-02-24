import {cloneDeep} from 'lodash'
const address = {
  city: "Kolkata",
  state: "WB"
}

const student = {
  name: 'Subho',
  age: 23,
  address // Now student has this complex object address
}

// deep copy using JSON.parse and JSON,stringify
// const studentCopy = JSON.parse(JSON.stringify(student))
// console.log(studentCopy.address == student.address)

// deep copy using lodash module
// https://lodash.com/docs/#cloneDeep

const studentCopy = cloneDeep(student)
console.log(studentCopy.address == student.address)