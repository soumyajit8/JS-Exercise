class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    printName() {
       
        document.write(this.firstName + " " + this.lastName + " " + this.age + " <br>");
        // console.log(this.firstName + this.lastName);
    }
}

let soumyo = new Person('Soumyajit ' , 'Das ' , 22);

soumyo.printName();