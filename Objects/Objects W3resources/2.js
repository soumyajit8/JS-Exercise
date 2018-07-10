class Person {
    constructor(firstName,lastName,age,rollNo){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.rollNo = rollNo;
    }

    printName() {
       
        document.write(this.firstName + " " + this.lastName + " " + this.age +
        " " + this.rollNo + " <br>");
        
    }

    printNameedited(){
         delete this.rollNo;
        document.write(this.firstName + " " + this.lastName + " " + this.age  
       +" " + this.rollNo + " <br>");

    }
}

let soumyo = new Person('Soumyajit ' , 'Das ' , 22 , "14UCS005" );

soumyo.printName();

soumyo.printNameedited();