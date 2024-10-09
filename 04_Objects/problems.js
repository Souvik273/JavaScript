// " hello " : - h - 1 , e - 1 , l - 2 , o -1 

var str = 'hello'

var diary = {} 

for(let i = 0 ; i < str.length; i++) {
	var char = str[i]
	if(diary[char] == undefined) {
		diary[char] = 1
	}
	else {
		diary[char] = diary[char] + 1
	}
}
console.log(diary)

/*
**Given amazon data, We need to find the following :**

1. **Find All Products Name and rating**
2. **Find Average Rating**
3. **Find the product having minimum price**
*/

var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];

var x = {name:"mixer",price:2000, rating:4}
amazon.push(x);

// Part 1 : Find All Products Name and rating

for(let i = 0 ; i< amazon.length;i++){
    console.log(amazon[i].name,':',amazon[i].rating)
}

// Part 2 : Find Average Rating

var avg_rating = 0

for(let i =0;i<amazon.length;i++){
    avg_rating += amazon[i].rating
}
console.log('Avg rating is : ',avg_rating)

// Part 3 : Find the product having minimum price

let min_price = amazon[0].price
let product = amazon[0].name

for(let i = 1 ; i< amazon.length;i++){
    if(amazon[i].price<min_price){
        min_price=amazon[i].price
        product=amazon[i].name
    }
}
console.log(`The product ${product} has the min price ${min_price}`)


/*
**Given amazon data, We need to find the following :**

1. **Print those products name : whose rating is 4**
2. **Print All those products name, whose prices are between 2500 and 10000  including both**
*/

var amazon = [
	{name:"Speakers", price:5400, rating:4},
	{name:"headphones", price:3000, rating:3},
	{name:"playstation",price:20000, rating:5},
	{name:"mixer",price:2000, rating:4}
];

// 1. Products whose rating is 4 

let products = []

for(let i = 0 ;i<amazon.length;i++){
	if(amazon[i].rating===4){
		products.push(amazon[i].name)
	}
}
console.log(`${products} having the rating 4`)

// // Part 2 : Print All products name, whose prices are between 2500 and 10000  including both

let products_range = []

for(let i = 0 ;i<amazon.length;i++){
	if(amazon[i].price>= 2500 && amazon[i].price<=10000){
		products_range.push(amazon[i].name)
	}
}
console.log(`${products_range} have price between 2500 and 10000`)



mapChar(5);

function mapChar(N) {
  let obj = {}

let alphabets = "abcdefghijklmnopqrstuvwxyz"

for(let i = 0 ; i < N ; i++){
    let char = alphabets[i]

    obj[char] = i+1
}

// console.log(obj)

for(let key in obj){
  console.log(key + "-" + obj[key] )
}
}