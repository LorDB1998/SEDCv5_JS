var fahrenheitStepeni = parseInt(prompt("Kolkava e temperaturata vo stepeni Fahrenheit"));
	celsiusStepeni = (5 / 9) * (fahrenheitStepeni -32);
	celsiusStepeni = Math.round(celsiusStepeni * 10) / 10;
document.write("Temperaturata izmerena vo Celsius-ovi stepeni e " + celsiusStepeni + " .");
