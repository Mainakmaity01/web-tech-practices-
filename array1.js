//const array = Array [1,2,3,4,5,6,7,8,9,10];
//const num = new Array (1,2,3,4,5,6,7,8,9,10);

//Push
//num.push(11)
//console.log(num.push(11))
//console.log(num[num.length-1])

//Unshift
//num.unshift()
//console.log(num.unshift(0))

//pop
//num.pop()
//console.log(num.pop())

//shift
//num.shift()
//console.log(num.shift())

//num[0]=10
//num[1]='Mainak'
//console.log(num)

//find kora place return korba
//const names = ['Mainak','Joyati','Sayan','Nabankur'];

//index of

//names.indexOf('Joyati')
//console.log(names.indexOf('Joyati'))

//names.lastIndexOf('Joyati')
//console.log(names.lastIndexOf('Joyati'))

//include(true/false)

//names.includes('Nabankur')
//console.log(names.includes('Nabankur'))

//Find Element
let channels =[{
    name:'Mainak',
    subscribers:100000
},{
    name:'Joyati',
    subscribers:1000000
},{
    name:'Joya',
    subscribers:10000
}];
/*console.log(channels.find(function(element){
    return element.subscribers === 10000
    return element.subscribers === 'Joya'
}))
*/
//Using Arrow simbol
/*
console.log(channels.find((element) => {
    return element.name==='Mainak'
}))
*/
//one or Example
//console.log(channels.find(element => element.name==='Mainak'))

//Add Element
//let name1 = ['Mainak','Joyati','Sayan']
//let name2 = [' Arnab','Subham','Nabankur']
//console.log(name1.concat('Bokachoda'))
//console.log(name1.concat(name2))

//Another Prosses of Add 

//let name1 = ['Mainak','Joyati','Sayan']
//let name2 = [' Arnab','Subham','Nabankur']
//name3=[...name1,...name2]
//console.log(name3)

//remove Element
//let name1 = ['Mainak','Joyati','Sayan']
//let name2 = [' Arnab','Subham','Nabankur']
//let name3 = name1.concat(name2)
//console.log(name3.slice(1,3))
//console.log(name3.slice(3))

//for loop
const names = ['Mainak','Joyati','Sayan','Nabankur'];
for(let i=0;i<names.length;i++){
    //console.log(names[i])
}
//for of 
for(let name of names){
    //console.log(name)
}
//for each
names.forEach(function (name,index){
    //console.log(name,index);
})
//join
let student =['M','a','i','n','a','k'];
//console.log(student.join(''))
///we use any saperator
//console.log(student.join('_'))
student = student.join('_');
//split
console.log(student.split('_'))

//filter
let cities =[
    {name:'mumbai',population:54211241},
    {name:'kolkata',population:44211241},
    {name:'bihar',population:34211241},
    {name:'channai',population:64211241}
];
console.log(cities.filter(city => city.population>3000000))
console.log(cities.map(city => city.population*2))