
function print(){

    console.log("Hello World!");

}

print();

function greeting(name){

    console.log("Welcome to the class, "+name);

}

greeting("David"); 



function getAreaOfRectangle( a , b ){

    return a*b; 
}

console.log("Area of Rectangle is "+getAreaOfRectangle(2.2, 4.5));

// create the method which takes one param and return factorial number of this param. 
// factorial 6 = 6 * 5 * 4 * 3 * 2 * 1 

function getFact(num){
    if(num === 1 || num === 2){
        return num; 
    }

    let result=1; 
    for(let i=num; i >1; i-- ){
        result*=i; //6 , 5, 4, 3,
    }
    return result; 
}

console.log("Factorial num: "+getFact(9));









