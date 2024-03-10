const states=['CA', 'TX', 'IL', 'NY','WA']; // one array is created in MEMORY. 

states.shift(); // removes the first element. it updates existing array in the MEMORY. 
console.log(states);

states.unshift('FL'); // add element into the beginning of the array. 
console.log(states);

states.unshift('AZ'); //it updates existing array in the MEMORY. 
console.log(states);

//states=[ 'AZ', 'FL', 'TX', 'IL', 'NY', 'WA' ];
//  it creates new array in the memory. Since states is const, it is not possible. 
//[ 'AZ', 'FL', 'TX', 'IL', 'NY', 'WA' ]
const newArr=states.slice(2); 

console.log(newArr); // [ 'TX', 'IL', 'NY' ]

newArr.sort(); 

console.log(newArr);



