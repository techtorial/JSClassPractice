const Product=require("./Product")

class Computer extends Product{

    // we need to call the parent class constructor
    constructor(name, price, ram){
        super(name, price); 
        this.ram=ram; 
    }

    start(){
        console.log("The computer is starting");
    }

}



let c=new Computer("HP", 999, 16); 

c.displayInfo(); 
c.start(); 