console.log(Math)

console.log(Math.abs(-4));      // abs() will give the positive value
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(3,4,5,6,7))
console.log(Math.max(78,4,6,787,3))

console.log(Math.random())                             // always gives number between 0 and 1
console.log((Math.random()*10)+1)                      // mul by 10 and add 1 will make more then 1
console.log(Math.floor((Math.random())*10))            // always it will be integer 

const min = 111111
const max = 999999

console.log(Math.floor(Math.random() * (max-min+1)) + min )
