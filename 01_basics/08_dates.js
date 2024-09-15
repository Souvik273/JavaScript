

let date = new Date()
console.log(date)
console.log(date.getDate())
console.log(date.toDateString())                // Sun Sep 15 2024
console.log(date.toLocaleDateString())          // 9/15/2024

let myBirthDay = new Date(2002,2,27)
console.log(myBirthDay.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)                    // it will provide me miliseconds value
console.log(myBirthDay.getTime())