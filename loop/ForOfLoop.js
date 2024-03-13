// Iterable Objects = Array, String. 

let city='New York'; 

for(let ch of city){

    console.log(ch);

}

for(let i=0;i<city.length ; i++){

    console.log(city[i]); // at(i), charAt(i); [i]

}
// truth or falsy 
// everything considered as truty in javascript except false, '', null, undefined
const arr=['abc','bc','cdf','','df', false, null];
// Loop through the elements in array and make String value 
// upper case and print them. 

for(let a of arr){

    if(a){
        console.log(a.toUpperCase());
    }
        
}










