let text = "";
let food = ["Pizza" , "Beans" , "Tacos" , "Fish" , "Chicken"];
let i;
for (i = 0 ; i < food.length ; i++) {
    text += "I love " + food[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;