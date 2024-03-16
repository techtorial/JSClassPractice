class Product {

    constructor(name, price){
        this.name=name; 
        this.price=price; 
    }

    displayInfo(){
        console.log('The product name is '+this.name+' and the product price is '+ this.price);
        console.log(`The product name is ${this.name} and the product price is ${this.price}`);
    }
}

module.exports=Product; 
