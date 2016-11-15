var numberOfTablets = parseInt(prompt("Vnesi broj na tableti:"));
var priceOfTablets = parseInt(prompt("Vnesi cena na tableti:"));
var tax = (priceOfTablets * 5) / 100;
var sum = (tax + priceOfTablets) * numberOfTablets; 
var sum = Math.round(sum);
document.write("Cenata na " + numberOfTablets + " tableti e " + sum + ".");
