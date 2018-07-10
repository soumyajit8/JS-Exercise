var person = {
    firstName : "Soumyajit",
    lastName : "Das",
    age : 22
};

Object.getOwnPropertyNames(person).forEach(
    function(val,idx,array){
        console.log(val + '->' + person[val]);
    }
);