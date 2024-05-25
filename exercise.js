const product ={
    itemName='Flower',
    price=50,
    discount=20,
    itemCode='F20'
}
//factory function
function creatProduct (name,price,discount,itemCode){
    return{
        itemName: name,
        price: price,
        discount: discount,
        itemCode:itemCode
    }
}
const football = creatProduct('football' ,400,10,'F30');

//constractor function
function Product (name,price,discount,itemCode){
    this.itemName=name;
    this.price=price;
    this.discount=discount;
    this.itemCode=itemCode;
    this.discountValue= function(){
        return price * discount/100;
    }
}
const mobile =new Product('Oneplus',31000,5,'one20')