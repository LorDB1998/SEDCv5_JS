//2. Decription: Celsius to Fahrenheit formula: X�C x 1.8 + 32
//Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
//Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);

var celsiusP = (prompt("Napisi Celsius za da doznaes kolku e vo Fahrenheit "));

function celsiusTofahrenheit (){

var Fahrenheitofcelsius = celsiusP * 1.8 + 32;
document.write("Temperaturava vo Fahrenheit e " + Fahrenheitofcelsius);

}
celsiusTofahrenheit();