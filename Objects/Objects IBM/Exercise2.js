
var person = {
    firstName : 'Soumyajit',
    lastName : 'Das',
    age : 22,

    myInfo : function(){
        document.write(person.firstName + " " + person.lastName + " is " + person.age + " years Old");
    }
}
person.myInfo();