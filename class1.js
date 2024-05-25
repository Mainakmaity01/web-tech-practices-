class product{
    constructor(itemName){
        console.log('passed by Furniture'+ itemName);
        this.itemName = itemName;
    }
    getItemName(){
        return this.itemName + "is a product";
    }

    class Furniture extends Product {
        constructor (itemName){
            super(itemName);
        }

        getItemName(){
            return this.itemName + "is a Furniture"
        }
    }
    let chair = new Furniture(chair)

   // let pencil = new Product ('pencil',20,2,'p40');
    //let chair = new Product ('chair',200,20,'c20');
