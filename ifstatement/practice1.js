let computer$=1000; 

let budget$=1100; 

// if budget is bigger than comp price, print leftover after payment. + 
// if budget is equals comp price, print "you can buy the computer" +
// if budget is less than comp price, "you can not buy" + 
if(budget$ > computer$){
    let leftOver=budget$ - computer$; 
    console.log('You can buy the computer. This is the leftover after payment: '+ leftOver); 
} else if (budget$ == computer$){

    console.log('You can buy the computer.'); 

}else {
    console.log("You can not buy the computer now. Try again!");
}

console.log("This code will be executed");


