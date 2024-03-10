// JAVA: String [] cities={"Houston", "Chicago"}; 

const cities=['Houston', "Chicago", "New York", 10, true]; 

console.log(cities[1]); // Chicago

const cars=new Array("Tesla", "Honda", "Lexus"); 

console.log(cars[100]); // undefined

console.log(cars);  //[ 'Tesla', 'Honda', 'Lexus' ]
console.log(cars.toString()); // Tesla,Honda,Lexus

// regex = regular expressions [^0-9], [a-z] 

let str="t,a,1,c,5,p"; 
let str2="tec1h4to3ri8al";

// split --> ',', " ", "." --> regex

let splitArr=str.split(","); 

console.log(splitArr);