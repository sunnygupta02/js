let a=null>0;
console.log(typeof a);
console.log(a);
//here null is converted to Number =0 thats y 0>0 is false;

let b=null!=0;
console.log(typeof b);
console.log(b);

console.log("2"==2);
//but if we use === then it strictly checks value as well as its datatype
console.log("2"===2); //. o/p  is false 
