// Objects inside object
var user = {
    name : "Rahul",
    age  : 25,
    gender: "male",
    city  : "Bangalore",
    hobbies: "coding",
    marks : [25, 100, 80, 90, 80],

    address : {
            state : "Uttarakhand",
            country : "india",
            district : "Dehradun",
            pincode : "249201"
    }
};

for(let key in user){
    console.log(user[key])
}

