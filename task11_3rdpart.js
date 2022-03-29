class Student{
    static noOfStudents=0;
    constructor(name1,age,phoneNumber,boardMarks){
        this.name = name1,
        this.age=age,
        this.phoneNumber=phoneNumber,
        this.boardMarks=boardMarks
        Student.noOfStudents+=1;
    }
    eligibleForPlacements(minMark){
        return (age1) =>{
            if(age1<this.age && this.boardMarks>minMark){
               console.log(`${this.name} is eligible for placements`);
            }     
            else{
               console.log(`${this.name} is not eligible for placements`);
            }  
        }
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

const lili = new Student('Lili', 16, '2827384788', 50);
const ria = new Student('Ria', 23, '2827384788', 30);
const piyush = new Student('Piyush', 25, '2827384788', 60);
const nirav = new Student('Nirav', 20, '2827384788', 20);
const jasmin = new Student('Jasmin', 21, '2827384788', 50);

lili.checkEligibility();
ria.checkEligibility();
piyush.checkEligibility();
nirav.checkEligibility();
jasmin.checkEligibility();
//console.log(jasmin.getNoOfStudents());
lili.eligibleForPlacements(40)(15)
