 const fun=require("./Test.js"); 
 const TestClass=require("./TestClass.js");
 const Family=require("./Family"); 

console.log(fun.divide(8,2));
console.log(fun.multiple(2,5)); 

let t=new TestClass(); 
// we can not directly call the methods from this class without object. 
t.start(); 

let p1=new Family("John"); 
p1.eat(4); 
console.log(Family.tomato);

