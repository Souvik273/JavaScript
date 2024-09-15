const name = "souvik"
const age = 22
console.log(name+" "+age)

console.log(`My name is ${name} and my age is ${age}`)          // string concatination

const gameName = new String("freefire")
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('f'))

const newString = gameName.substring(0,4)           // substring(start,end) :=> end excluded
const anotherString = gameName.slice(-7,4)          // Here we can give negetive value also :=> negetive will count from the backward

console.log(newString)
console.log(anotherString)

const newStringOne = "      hitesh      "
console.log(newStringOne.trim())        // trim() will trim out the extra white spaces

const url="https://youtube .com"
console.log(url.replace(' ','-'))       // it will replace a particular thing
console.log(name.includes('h'))

const fruits="apple-bannana-mango"
console.log(fruits.split('-'))          // split always return us array so it is mostly used to store string into array