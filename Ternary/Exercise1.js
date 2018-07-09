function checkName() {
    var firstName = document.getElementById("fname").value;
    var result = (firstName == "Soumyajit" ? "Hello Soumyajit" : "You are Not Soumyajit"); 
    document.getElementById("demo").innerHTML = result;
  }