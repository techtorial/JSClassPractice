let num1=3; 
let num2=2; 

console.log(num1+num2); // 8
console.log(num1-num2); // 2
console.log(num1*num2); // 15
console.log(num1/num2); // 1.6

console.log("Module result=" + (num1%num2)); // 10 = 3+3+3+1 = 1

console.log(num1**num2); // 10 * 10 * 10 = 1000;

// PEMDAS = parant , exponential, multip, division, mod, add, sub
let result =  num1 ** num2 / 2 * 5 % 2 + 8 - (9*0);

console.log(result);

let res= 2 / 2 * 3 + (5 ** 2) % 3 + 3; 

// 2 / 2 * 3 + 25 % 3 + 3; ---->  3 + 1 + 3 = 7  

console.log(res);

let number=9;

let test= 5 + ++number; // number is still 9 on this line. it will be 10 after this line. 

let test2= 5 + number; // 15

console.log("Test1: "+ test); // 14
console.log("Test2: "+ test2); // 15
console.log(number); //10