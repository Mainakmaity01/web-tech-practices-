let breads = prompt("what the fuck u want in breads");
let vageies = prompt("what the fuck u want in vageies");
let sauses = prompt("what the fuck u want in sauses");

function makesandwich(breads,vageies,sauses){
    let sandwich =  breads  +  "breads"  +   vageies  + " vageies "  + sauses + " sadwich is ready ";
return sandwich;
}


let vegsandwich = makesandwich (breads,vageies,sauses);
console.log(vegsandwich);