
//[ 'math', 'computer','coding','playwright',<1 empty item>,'cypress']

const classes=["math", "computer", "coding", "playwright"]; 

console.log(classes.length);

classes[5]="cypress"; 

console.log(classes[4]); 
console.log(classes[5]);

console.log(classes.length);

// const str="test";
// str='newvalue'; // it will throw an error since str is contstant. 

console.log(classes.at(3)); // returns the value from given index number. 

classes.push("javascript"); // it will add new value at the end of the array

console.log(classes);

classes.pop(); // it will remove the last element from the array

console.log(classes);

classes.forEach((cl) => console.log(cl));
