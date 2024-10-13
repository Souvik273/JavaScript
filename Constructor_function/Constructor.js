// ------------------------Call -----------------
var person1 = {
    name: "John",
  };

  var person2 = {
    name: "Jill"
  };

  function myName() {
    console.log(this.name);
  }
 
  myName.call(person1); 
  myName.call(person2); 

  function printDetails(age,city) {
    console.log(`${this.name} is ${age} years old and live in ${city}`);
  }
  
  printDetails.call(person1,28,"New york"); // John is 28 years old and lives in New york
  printDetails.call(person2,32,"Bengaluru");

  var person = {
    name : 'Yash',
    age : 28 
}
var obj = {
    name : 'roshan',
    age : 27 ,
    print : function (){
        console.log(`Name : ${this.name} and Age : ${this.age}`)
    }
}
obj.print.call(person)
  

  // -----------------------------Apply ---------------------

printDetails.apply(person2,[34,'New Jersey'])

// ----------------------------Bind-----------------

var myBind = printDetails.bind(person1,25,'US')
myBind()


// Factory function : here we have to create the object 

function iPhone1(ASIN, color, display, camera) {
  let obj = {};
  
  // Your code here
  obj.ASIN=ASIN
  obj.color = color
  obj.display = display
  obj.camera = camera
  
  obj.dial = function(){
    console.log('tring...,tring...')
  }
  
  obj.sendMessage = function(){
    console.log('Sending message...')
  }
  obj.cameraClick = function (){
    console.log('Camera clicked')
  }
  
  return obj;
}

// Example invocation: 
let i1 = iPhone1(1,'B09X67JBQV',7.8,'IOS', '128mb','Gray','90mm','2.0 MP')
i1.dial(); // "tring.. tring..."
i1.sendMessage(); // "Sending message..."
i1.cameraClick(); // "Camera clicked"


// Constructor function 

function animal(noOfLegs, vegetarian) {
  let obj = {};

  obj.noOfLegs = noOfLegs
  obj.vegetarian = vegetarian 
  
  obj.eat = function(){
    console.log('eating...')
  }
  
  obj.greet = function(){
    console.log(`Hi , I have ${noOfLegs} legs`)
  }
  
  
  return obj;
}

// example invocation
let a1 = animal(4,true);
a1.eat() // eating...
a1.greet() // Hi, I have 4 legs.