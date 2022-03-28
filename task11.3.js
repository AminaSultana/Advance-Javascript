//Design pattern problem - How will you design a Student class which stores the name ,
// age , phone number, board marks of each student. Make a constructor to initialize the values.
//Write a function to check whether the student is egligible or not for college. 
//If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this
//Create 5 students with different names and age.

class Student{
    static noOfStudents=0;
    constructor(name,age,phoneNumber,boardMarks){
        this.name = name,
        this.age=age,
        this.phoneNumber=phoneNumber,
        this.boardMarks=boardMarks
        Student.noOfStudents+=1;
    }
    checkEligibility(){
        if(this.boardMarks>40){
            console.log(`${this.name} is eligible for college`);
        }
        else{
            console.log(`${this.name} is not eligible for college`);
        }
    }
    getNoOfStudents(){
        return Student.noOfStudents;
    }
}

const lili = new Student('Lili', 23, '2827384788', 50);
const ria = new Student('Ria', 23, '2827384788', 30);
const piyush = new Student('Piyush', 23, '2827384788', 60);
const nirav = new Student('Nirav', 23, '2827384788', 20);
const jasmin = new Student('Jasmin', 23, '2827384788', 50);

lili.checkEligibility();
ria.checkEligibility();
piyush.checkEligibility();
nirav.checkEligibility();
jasmin.checkEligibility();
console.log(jasmin.getNoOfStudents());