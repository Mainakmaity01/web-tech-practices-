const characters = [
    {
        name: 'Mainak Maity',
        height:'175',
        mass:'77',
        eye_color:'brown',
        gender:'male',
    },
    {
        name: 'Mayank Maity',
        height:'145',
        mass:'70',
        eye_color:'red',
        gender:'male',
    },
    {
        name: 'Joyati Maity',
        height:'122',
        mass:'50',
        eye_color:'white',
        gender:'Female',
    },
    {
        name: 'Joya Maity',
        height:'120',
        mass:'52',
        eye_color:'Black',
        gender:'Female',
    },
];

// Get an Array of all names
/*
const names = characters.map(ch => ch.name)
//console.log(names);
*/
/*Get An array of objects with just name and height properties
const propertiesOfCh = characters.map(ch => {
    return{
        name: ch.name,
        height:ch.height
    }
})
//console.log(propertiesOfCh);
*/

//Get the total height of all characters
/*const totalHeight = characters.reduce((prevHeight ,character) => {
    return prevHeight + Number(character.height);
},0);
//console.log(totalHeight);
*/
//Get characters with mass grater than 100

const greaterThanMass = characters.filter(character => character.mass > 100)
   console.log(greaterThanMass);
//Get all male characters
const maleCh = characters.filter((character) => {
    return character.gender == 'male'
})
 //   console.log(maleCh);
//sort by gender
const sortByGender = characters.sort((character1,character2) => {
    if(character1.gender < character2.gender){
        return -1;
    }
    if(character1.gender > character2.gender){
        return 1;
    }
    return 0;
})
console.log(sortByGender);

 //sort by name
    const sortByName = characters.sort((character1,character2) => {
        if(character1.name < character2.name){
            return -1;
        }
        if(character1.name > character2.name){
            return 1;
        }
        return 0;
    })
    //console.log(sortByName);


// Does every character have mass more than 40?

//console.log(characters.every((character) => character.mass > 40))

// does any body have blue eyes

console.log(characters.every((character) => character.eye_color == 'blue'))
//is there at least on male characters
console.log(characters.some((character) => character.gender))
//is there at least on male characters taler than 200
console.log(characters.some((character) => character.height > 200 ))