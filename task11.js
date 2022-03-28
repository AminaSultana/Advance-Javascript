//this inside global scope
this.table = 'window table'
this.garage = {
    table: 'garage table'
}
//this inside an object
let john = {
    table: 'johns table'
}
//this inside a method
let jack = {
    table:'jack table',
    cleanTable(){
        console.log(`cleaning ${this.table}`);
    }
}
jack.cleanTable()
console.log(jack.table);
//this using call
this.chair = 'window chair'
const cleanChair = function(){
    console.log(`cleaning ${this.chair}`);
}
cleanChair.call(this)
//this using bind
this.bed = 'window bed'
/* const cleanBed = function(){
    const innerFunc = function(){
        console.log(`cleaning ${this.bed}`);
    }
    innerFunc.bind(this)
}
 */
//this using arrow function
/* const cleanBed = function(){
    const innerFunc =()=>{
        console.log(`cleaning ${this.bed}`);
    }
    innerFunc()
}
cleanBed.call(this) */
//this inside a constructor
/* let CreateRoom = function(name){
    this.table = `${name} table`
}
CreateRoom.prototype.cleanTable = function(){
    console.log(`cleaning ${this.table}`);
}
const jia = new CreateRoom('jia')
const ria = new CreateRoom('ria')
jia.cleanTable()
ria.cleanTable() */
//this inside a class
class CreateRoom{
    constructor(name){
        this.table = `${name}`
    }  
    cleanTable(soap){
        console.log(`cleaning ${this.table} table using ${soap}`);
    } 
}
const jia = new CreateRoom('jia')
const ria = new CreateRoom('ria')
jia.cleanTable('some soap')
ria.cleanTable('some soap')
