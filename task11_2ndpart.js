"use strict";

let getA = a => a;
console.log(getA(3));

let getSqr = a => a*a;
console.log(getSqr(5));

let getCube = (a) => {return a*a*a};
console.log(getCube(5));

var a = 5;
let addNum = () => { console.log(a+5);}
addNum()

let mult = (a,b) => { return a*b}
console.log(mult(5,6));

var x = function(){
    this.val = 1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val);
    },5000)
};
var xx = new x();

var x = (...n)=>{
    console.log(n[0]);
}
x(1,2,3);
