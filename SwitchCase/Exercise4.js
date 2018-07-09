function checkCar(){
    let text;
    let favCar = document.getElementById("myInput").value;
    switch(favCar){
        case "BMW" :
            text = "German Car.";
            break;
        
        case "Ford" :
            text = "American Car.";
            break;
        
        case "Peugeot" :
            text = "French Car."
            break;
        
        default :
            text = "Unknown Car Name."
    } 
    document.getElementById("demo").innerHTML = text;
}