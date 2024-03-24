//primitive datatype 
//Number,String,null,undefined,BigInt,Symbol,Boolean
let id=Symbol('123')

let anotherId=Symbol('123');
console.log(id===anotherId);
let bignumber=123333333333333n;
console.log(typeof bignumber);

//Reference(non primitive datatype)
//arrays,objects,functions
let array=["delhi","bengalore","chandigarh"];  // typeof array is object

let myobj={
    name:"sunnny",
    age:21,
};

const myFunction=function(){
console.log("hello world");

//here datatype of myfunction is object-function
}

// datatype of null is object
console.log(typeof anotherId); 
