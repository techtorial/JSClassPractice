const Animal=require("./Animal"); 

class Cat extends Animal{

    #dailySleepHour=10; 
    city='Houston'; 
    constructor (name, age, kindOfCat, color){
        this.name=name; 
        this.age=age;
        this.kindOfCat=kindOfCat; 
        this.color=color;  
    }

    #greetingMessage(){
        console.log("hello from the "+this.name);
    }

    getSleepHour(){
        this.#greetingMessage(); 
        return this.#dailySleepHour; 
    }
}

let dodo=new Cat("Dodo", 10, "Napoliten", "white");
console.log(dodo.kindOfCat);
console.log(dodo.city);
console.log(dodo.getSleepHour()); 

let prencess=new Cat("Prencess", 12, "Scottish", "black"); 
console.log(prencess.kindOfCat);
console.log(prencess.city);

prencess.swim(); 
