var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = ""
var i;
for (i = 0; i < cars.length; i++) {
    if(cars[i] == "Saab") continue;
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;