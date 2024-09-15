let name = "souvik"
let age = 33
let address = "31/7A New Delhi"
let salary = undefined
let isMarried = false
let city = NaN 

let numberName = Number(name)
let numberage = Number(age)
let numberaddress = Number(address)
let numbersalary = Number(salary)
let numberisMarried = Number(isMarried)
let numbercity = Number(city) 

console.table([numberName,numberage,numberaddress,numbersalary,numberisMarried,numbercity])


/*
    If we try to convert anything into number then :
        1. String(character) => NaN
        2. String (number) => number
        3. String (character + number) => NaN
        4. undefined => NaN
        5. boolean value => true (1) / false (0)
        6. NaN => NaN
*/

let booleanIsMarried = Boolean(isMarried)

let state = ""
let booleanState = Boolean(state)
let arr = []

let booleanName = Boolean(name)
let booleanAge = Boolean(age)
let booleanAddress = Boolean(address)
let booleanSalary = Boolean(salary)
let booleanCity = Boolean(city)
let booleanArr = Boolean(arr)

console.table([booleanIsMarried,booleanState,booleanName,booleanAge,booleanAddress,booleanSalary,booleanCity,booleanArr])

/*
    If we try to convert anything into boolean then :
        1. String(character) => true
        2. String (number) => true
        3. String (character + number) => true
        4. undefined => false
        6. NaN => false
        7. Empty String : false
        8. 0 => false 
*/

/*
    Falsy Value in JavaScript :
        1. 0
        2. null
        3. undefined
        4. NaN
        5. empty String
        6. false
*/
