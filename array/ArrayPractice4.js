
const countries= new Array("USA", "MEXICO", "GERMANY","FRANCE");

let indexNum1=countries.indexOf("GERMANY"); 

let indexNum2=countries.indexOf("GER");

console.log(indexNum1); // 2 index 
console.log(indexNum2); // -1 


console.log(countries.includes("FRANCE")); // true
console.log(countries.includes("ENGLAND")); //false




