/*
let counter = {
    count:0,
    increment : function(){
        counter.count++;
    }
}
counter.increment();
counter.increment();
console.log(counter);
*/
/*
//inside object
let counter = createCounter();
let counter1 = createCounter();
//factory function
function createCounter(){
    return{
    count:0,
    increment : function(){
        this.count++;
    }
  }
}
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter);
console.log(counter1);
*/
//outside object
/*
var count=0;
function incrementCounter(){
    count++;
}
incrementCounter();
incrementCounter();
incrementCounter();
console.log(count);
*/
/*
var count=0;
function incrementCounter(){
    this.count++;
    console.log(this);
}
incrementCounter();
incrementCounter();
incrementCounter();
console.log(count);
*/
//constuctor function 
function Car(name){
    this.name = name;
    this.start = function(){
        console.log(this.name + 'started');
        console.log(this);
    }
}
//let lambo = new Car ('lambo');
//console.log(lambo);
//lambo.start();
let lambo =  Car ('lambo');
console.log(this.name);
//console.log(this);
//console.log(name);