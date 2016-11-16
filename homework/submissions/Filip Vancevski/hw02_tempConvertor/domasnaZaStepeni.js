/*var option = prompt("Insert F or C"); // option = "F";
if (option == "F" || option == "f"){
    var F = parseInt(prompt("Insert Fahrenheit")); 
    var FnalC = ((5/9)*(F-32)).toFixed(0);// za da zaokruzi
    var FnalCR = Math.round((5/9)*(F-32)); //za da zaokruzi 
    alert("Toa e "+FnalCR+ " stepeni"); 
}
else if (option == "C" || option == "c"){
    var FinalF = parseInt(prompt("Insert Celsius"))*1.8+32;
    alert("Toa e "+ FinalF+" stepeni"); 
    
}
else {
    alert("Wrong input"); 
}*/

function matematikaZaCelziusovi(){
    var celsius = parseInt(prompt("Enter Celsius"));   
    var celsiusToFahrenheit = Math.round(celsius*1.8+32);
    alert(celsius+" Celsiusovi stepeni se "+celsiusToFahrenheit+ " Farenhajtovi stepeni.");
}
 matematikaZaCelziusovi();

function matematikaZaFarenhajtovi(){
    var fahrenheit = parseInt(prompt("Enter Fahrenheit"));
    var fahrenheitToCelsius = Math.round((5/9)*(fahrenheit-32));
    alert(fahrenheit+" Fahrenhajtovi stepeni se "+fahrenheitToCelsius+" Celziusovi stepeni.");
}
 matematikaZaFarenhajtovi();




