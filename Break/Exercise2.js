var text = "";
var i;
for (i = 1; i < 10; i++) {
    if(i === 5) continue;
    document.getElementById("demo").innerHTML += i + "<br>";
}