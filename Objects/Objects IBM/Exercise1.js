var person = new Object();
person.firstName = 'Soumyajit';
person.lastName = 'Das';
person.age = '22';
person.myInfo = function(){

    document.write(person.firstName + " " + person.lastName + " is " + person.age + " years Old");

}

person.myInfo();   

