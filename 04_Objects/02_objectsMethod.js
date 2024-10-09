var user = {
    name: "John",
    age: 30
  };
  user.sayHi = function() {
    console.log("Hello!");
  };
  
  user.sayHi(); // Hello!

  var user1 = {
    name:'souvik',
    age : 23 ,
    print : function (){
        console.log(`${user1.name} is saying hello`)
    }
  }
  user1.print()

  var details = {
    name : "Shubham",
    age : 31,
  
    print : function(x){
              var y = x+2;
              return y;
            }
  };
  
  console.log(details.print(4));

  var details = {
    name : "Shubham",
    age : 31,
  
    print : function(name){
              console.log("Hello",this.age,this.name);
            }
  };
  
  var name = "Shyam";
  details.print(name);

  /*
  ### Problem 13 : Create two methods for the rectangle object

1. **perimeter**
2. **area**
  */
 var rectangle = {
    length : 10 ,
    breadth : 20 ,

    perimeter : function (){
        return (2*(this.length+this.breadth))
    },

    area: function(){
        return this.length*this.breadth
    }
 }

console.log(`Area of the rectangle is ${rectangle.area()}`)
console.log(`perimeter of the rectangle is ${rectangle.perimeter()}`)

rectangle.length=20
rectangle.breadth=30

console.log(`Area of the rectangle is ${rectangle.area()}`)
console.log(`perimeter of the rectangle is ${rectangle.perimeter()}`)

//Create an object with the following functionality
//Ability to add student details and 3 subject marks

var details = {

    data : [],
  
    addStudent : function(name, math, sci, eng)
                {
                    var obj = {};
                    obj.name = name;
                    obj.maths = math;
                    obj.science = sci;
                    obj.english = eng;
  
                    this.data.push(obj);
                }
  };
  
  details.addStudent("Shubham", 10, 20, 30);
  details.addStudent("Rahul", 15, 25, 35);
  
  console.log(details.data);



  var details = {

    data : [],
  
    addStudent : function(nam, math, sci, eng)
                {
                    var obj = {};
                    obj.name = nam;
                    obj.maths = math;
                    obj.science = sci;
                    obj.english = eng;
  
                    this.data.push(obj);
                },
  
    lowScore : function(){
  
                var lowStudent = null;
                var lowTotal = null;
  
                for(var i=0; i<this.data.length; i++)
                {
                  var currStudent = this.data[i];
                  var total = currStudent.maths + currStudent.science + currStudent.english;
  
                  if(lowTotal == null || total<lowTotal)
                  {
                    lowTotal = total;
                    lowStudent = currStudent;
                  }
  
                }
  
                return lowStudent;
  
    }
  
  
  };
  
  details.addStudent("Shubham", 10, 20, 30);
  details.addStudent("Rahul", 15, 25, 35);
  
  // console.log(details.data);
  console.log(details.lowScore());