const accountId = 12345
let email = "souvikgoswami@gmail.com"
var accountPassword = "abcd@efgh"
userCity = "Jaipur"
let accountState;

// accountId = 21345 // not allowed 
console.log(accountId)

console.table([email,accountPassword,userCity,accountState])

email = "souvik@gmail.com"
accountPassword="12345"
userCity="Bengaluru"
accountState=true
var accountPassword="I have changed the password"
// let email="i am trying to change the email"     // throws error : cannot redeclare block-scope variable

console.table([email,accountPassword,userCity,accountState])


/*
Never use "var" due to functional and block scope try to use let and const
var can be re-defined again and again and always it will store the modified value and will change all the previous values
if we define a variable and not assign any value then by-default javascript will give them undefined value
*/