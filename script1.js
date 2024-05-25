//for(let i=0;i<=10;i++){
  //  console.log(i);
//}


/*let animal={
    name:"Zebra",
    leg:4
};
for(let key in animal){
    console.log(key,animal[key]);
}*/

//let names= ["Mainak","Joyati"];
//for(let index in names){
  //  console.log(index,names[index]);
//}

let animal={
    name:"cow",
    legs:4
}
//console.log(animal);
//Dot notation
console.log(animal.name);

let legsprop ="legs"
//Brecket Notation
console.log(animal[legsprop]);

//Arrays
let selectBooks=["Mainak Biography","Joyati Biography","Both Boigraphy"]
console.log(selectBooks);
console.log(selectBooks[1]);
console.log(selectBooks.length);

//funtion
function namasteworld(name , lastName){
    console.log("Namaste " + name + lastName);
}
namasteworld(" Mainak "," Maity ")
namasteworld(" Joyati "," Maity ")

//addition
function addition(a,b){
    return a+b;
}
console.log(addition(5,4));