

let userName = "abc@2002"
let anotherUserName = userName
anotherUserName = "RakeshDas"

console.log(userName)
console.log(anotherUserName)

let user1 = {
    name: "Hitesh",
    age: 22
}
let user2=user1

user2.age = 27

console.log(user1)
console.log(user2)


/*
    All primitive data types are stored in stack memory here when we pass it or copy it to another variable 
    the actual memory is not shared a copy of the variable is shared so when we change anything in the copy actual 
    value is not changed 

    But all the non-primitive are shared a reference so changes are directly reflected to the original copy


    Here it explained using diagram :
     https://excalidraw.com/#json=irK-q3geCVKNtd3gxnxra,wl788VYZ1SYk0Brtb0Gnxg
*/