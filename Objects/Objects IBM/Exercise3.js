
class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    printName() {
       
        document.write(this.firstName + " " + this.lastName + " is " + this.age + " years Old <br>");
        // console.log(this.firstName + this.lastName);
    }
}

//  Person.prototype.printName{
    
//     console.log(this.firstName + this.lastName);
       
//     document.write(person.firstName + " " + person.lastName + " is " + person.age + " years Old");
// }

let soumyo = new Person('Soumyajit ' , 'Das ' , 22);
let saikat = new Person('SAikat ','datta',23);

soumyo.printName();
saikat.printName();
