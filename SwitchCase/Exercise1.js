function checkFruit(){
    let text;
    let fruits = document.getElementById("myInput").value;
    switch(fruits){
        case "Banana" :
            text = "Banana is Good!";
            break;
        
        case "Orange" :
            text = "I am not a fan of Orange.";
            break;
        
        case "Apple" :
            text = "How you like them Apples?"
            break;
        
        default :
            text = "I have never heard of that fruit."
    } 
    document.getElementById("demo").innerHTML = text;
}