

var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

//  Question No-1


for(i=0;i<myObj.length;i++)
{
  if(myObj[i].occupation=="Programmer")
  console.log(myObj[i]);
}
console.log();
console.log(myObj.sort(function(a, b){return a.age < b.age}));
console.log();



// Question No ---2

console.log(
    myObj.sort(function(obj1, obj2) {
        return obj1.age - obj2.age;
    })
)


// Question---3



const arrayToObject = (array) =>
array.reduce((obj, item) => {
    obj[item.occupation] = item
    return obj
  }, {})
const yrObj = arrayToObject(myObj);
console.log(yrObj);



// Question---4


function myFunction() {
    
    var name= [] 
    myObj.map(data => name.push(data.name));
    console.log(name);
}

myFunction();