/*
let lecture =10;
let section =3;
let title= 'javascript';

const course={
    lecture:10,
    section:3,
    title:'javascript',
    notes:{
        introduction:"welcome to bsdk home"
    },
    enroll(){
        console.log('you are mf');
    }
   function enroll(){
       console.log('you are mf');
    }
}
course.enroll()
//console.log(course.title)
console.log(course)
course.price=666
*/



//Factory Function

/*function createCourse(){
    return{
        lecture:10,
        section:3,
        title:'javascript',
        notes:{
            introduction:"welcome to bsdk home"
        },
        enroll(){
            console.log('you are mf');
        }
    }
}
*/
//const course = createCourse('javascript');

//course.enroll()
//console.log(course)

/*
function createCourse(title){
    return{
        title: title,
        enroll(){
            console.log('you are mf');
        }
    }
}

//const course = createCourse('javascript');

//course.enroll()
//console.log(course)
*/



//constractor function
/*function Course (title){
    this.title=title,
    this.enroll=function(){
        console.log('you are mf');
    }
}*/
//const course =new Course('javascript')
//delete course.title;
//course.cheakEnrollment = function(){
//    console.log('30 student enrolled');
//}
//course.enroll()
//console.log(course)




//const course='jgj'//console a giya  input nita  hoba

//const course =new Course('javascript');
//console.log(course.constructor)
//console.log(new Course.constructor)


//const Course_1 = new Function('title' ,` 
//this.title = title,
  // this.enroll = function () {
    //   console.log('you are mf13231');
    //}`
//)
//const course_2 =new Course_1('javascript');
//course_2.enroll();

//primitive data type
//let number= 10;
// passby value
//let  number_2=number
//number=15;

//console.log(number);
//console.log(number_2);


//Reference DataType
//let obj = { number : 10}
//pass by reference
//let obj_2=obj;

//obj.number=14;
//console.log(obj);
//console.log(obj_2);
/*

const course ={
    title: 'javascript',
    enroll(){
        console.log('My Name Is Mainak Maity');
    }
}
//const course_1 = {...course}
//cource_1.tittle ="c++"
*/

/*
const course ={
    title: 'javascript',
    enroll(){
        console.log('My Name Is Mainak Maity');
    }
}
//const course_1 = object.assign({},course)
//cource_1.tittle ="c++"
*/


/*
for(let key in course){
    console.log(key,course[key]);
}
*/
const course_1 = {};
for(let key of object.keys(course)){
    //console.log(key,course[key]);
    course_1[key] = course[key]
}

