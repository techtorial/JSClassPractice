
let myCash= 5000; 
let ccLimit= 6000;
let total=myCash + ccLimit; // 11000

let carPrice=8000; // tax included. 

// || --> if one of the condition is true, result is true. 
// ccLimit >= carPrice  AND carPrice <= ccLimit ARE SAME THING
let result= total >= carPrice++ || myCash >= carPrice++ || ccLimit >= carPrice++ ; 

console.log(result); 


console.log(carPrice); // 8003

let num1=10; 
let num2=15; 
// && - if one of the condition is false, the result will be false. 
let final=num1 > 13 && num2 <19; // false

// 18 years  AND I should have passport -- DUBAI

// cash 1000 or cclimit 1000 or (cash + ccLimit) 1000 -- COMPUTER






