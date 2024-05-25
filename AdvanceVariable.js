/*
function sayHello(){
    console.log('Hello');
}

var i=10;
sayHello();
console.log(i);
*/
/*
let foo = 'bar'

if(true){
    let foo = 'baz';
    console.log(foo);//baz
}
console.log(foo);//bar
*/
/*
// block scope(shadowing)
let foo = 'bar';
var bar = 'foo';
if(true){
    let foo = 'baz';
    var bar = 'foobaz';
    console.log(foo);//baz
    console.log(bar);//foobaz
}
console.log(foo);//bar
console.log(bar);//foobaz
*/
//function (shadowing)
let foo = 'bar';
var bar = 'foo';
//factoty function
function sayHello(){
    let foo = 'baz';
    var bar = 'foobaz';
    console.log(foo);//baz
    console.log(bar);//foobaz
}
sayHello();
console.log(foo);//bar
console.log(bar);//foo
/*
//error
let foo = 'bar';
var bar = 'foo';
function sayHello(){
    var foo = 'baz';
    var bar = 'foobaz';
    console.log(foo);
    console.log(bar);
}
sayHello();
console.log(foo);
console.log(bar);
*/