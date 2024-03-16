class Family{

    static tomato=10; 
    constructor(name){
        this.name=name; 
    }

    eat(number){ 
        // variables that you created inside the method is called ? local variable 
        // every time when we eat, it will reduce from the tomato. 
        Family.tomato-=number; 
    }

    static sayGoodMorning(){
        console.log("Good morning!");
    }
} 

module.exports=Family; 

let p1=new Family("David"); 
p1.eat(2); 
let p2=new Family("Adam"); 
p2.eat(3); 
//10
console.log(Family.tomato); // 5

Family.sayGoodMorning(); 
// p1.sayGoodMorning(); // You need to call this method with Class name. 

