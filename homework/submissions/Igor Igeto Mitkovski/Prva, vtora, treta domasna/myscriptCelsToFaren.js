function celsiusToFahrenheit (celsius) {
    convertedFahrenheit = celsius * 1.8 + 32;
    alert (celsius + " celziusovi stepeni se " + convertedFahrenheit + " farenhajtovi stepeni");
}
function fahrenheitToCelsius (fahrenheit) {
    convertedCelsius = (5 / 9) * (fahrenheit - 32);
    alert (fahrenheit + " farenhajtovi stepeni se " + convertedCelsius + " celziusovi stepeni");
}

var celsius = 20;
var fahrenheit = 90;

celsiusToFahrenheit (celsius);
fahrenheitToCelsius (fahrenheit);