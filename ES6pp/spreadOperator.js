///Spread Operator use
const numbers = [1,5,33,676,7]
const largest = Math.max(...numbers)
console.log(...numbers)
console.log(largest)

const numbers1 = [...numbers]
numbers1.push(100)
console.log(numbers1)

const numbers2 = [1,2,323,22,22,]
const largest2 = Math.max(...numbers2)
console.log(numbers2)
console.log(largest2)
