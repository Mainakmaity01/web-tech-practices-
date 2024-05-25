//Declaring a class
class Product {
    constructor(itemName,price,discount,productCode){
    this.itemName=itemName;
    this.price=price;
    this.discount=discount;
    this.productCode=productCode;
    }
}
let pencil = new Product ('pencil',40,5,'p40');

const Product1=class Product {
    constructor(itemName,price,discount,productCode){
    this.itemName=itemName;
    this.price=price;
    this.discount=discount;
    this.productCode=productCode;
    }
    //Getter
    get getDiscountValue(){
        return this.discount;
    }
    //Setter
    set setDiscountValue(value){
        this.discount=value;
    }
    //Method Defination
    discountValue(){
        return this.discount * this.price/100 
    }
};

let chair = new Product1 ('chair',840,50,'c40');