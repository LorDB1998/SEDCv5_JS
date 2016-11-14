var fahrenheit;
var celsius;
function convertToFahrenheit(celsius){
	
	fahrenheit=celsius*1.8 + 32;
	return document.write("Vnesenite " +celsius +" celsiusovi iznesuvaat "+fahrenheit+" stepeni.<br>");
}
function convertToCelsius(fahrenheit){
	celsius=(fahrenheit-32)/1.8;
	return document.write("Vnesenite "+fahrenheit+ " stepeni iznesuvaat "+celsius+ " celsiusovi.");


}

convertToFahrenheit(30);
convertToCelsius(30);