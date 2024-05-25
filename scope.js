
/*//The scope is by default global
var name ='Mainak';

function sayname() {
    console.log(name);
}
sayname()



var x = 0;

//global scope
function first(){
    //local scope #1
    var x= 1;
    console.log(x);
    function childOfFirst(){
        var x= 2;
        console.log(x);
        //local scope #2
    }
    childOfFirst()
}
first()

//Global scope #3
function second(){
    console.log(x);
    //local scope #3
}
//global scope #4
second()
*/
/*
//Block Code not execute by var
var x =0;
{
    var x = 10;
    console.log(x);//10
}
console.log(x); //10
*/
/*
//block code executed by let
let x =0;
{
    let x = 10;
    console.log(x);//10
}
console.log(x); //0
*/
/*
if(true){
    //this if condition block doesn't create new block
    //let foo = 'bar'; // error 
    var foo = 'bar';
}
console.log(foo);
*/
/*
//Lexical scope
function Dada(){
    var name = 'Mainak Maity';
    //likes is not assessible here
    function Papa(){
        console.log(name);
        //name is assessible here
        //like is not assessible here
        function Beta(){
            //innermost level of the scope chain
            //name is also accessible here
            var likes = 'coding';
        }
       // console.log(likes);//error
        Beta()
    }
    Papa()
}
Dada()
*/