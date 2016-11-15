var price = 119.95;
var tax = 5;
var numberOfTablets = parseInt(prompt("Vnesi kolku tableti sakas da kupis: "));
var celaSuma = (price*tax)/100+price;

alert("Cenata na tabletot/ite e " + numberOfTablets*celaSuma.toFixed(2) + " " +"dolari");