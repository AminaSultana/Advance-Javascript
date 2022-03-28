/* let multiply = function(x,y){
    console.log(x*y);
}
 */
/* let multiplyByTwo = function(y){
    let x=2;
    console.log(x+y);
} */
/* let multiplyByTwo = multiply.bind(this);
multiplyByTwo(5,3);
 */
/* let multiplyByTwo = multiply.bind(this,4);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,10);
multiplyByThree(11);

 */


let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByThree = multiply(5);
multiplyByThree(3)

let multiplyByTwo = multiply(3);
multiplyByTwo(3)
