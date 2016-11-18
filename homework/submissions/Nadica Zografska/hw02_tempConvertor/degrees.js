var celsius = parseInt(prompt("Please insert celsius degrees."));

function celsiusToFahrenheit(celsius){
    var fahrenheit = Math.round(celsius*1.8+32);
    alert(celsius+" Celsius Degrees is " + fahrenheit+" Fahrenheits.");
}

alert(celsiusToFahrenheit(celsius));