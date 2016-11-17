function celsiusFunction(){
    var f = parseInt(prompt("Enter a value for Fahrentheit:"));
    var finalC = ((5 / 9) * (f - 32)).toFixed(0);
    alert(f + " Fahrentheits are: " + finalC + " Celsius degrees.");
}

function fahrentheitFunction(){
    var c = parseInt(prompt("Enter a value for Celsius:"));
    var finalF = (c * 1.8 + 32).toFixed(1);
    alert(c + " Celsius degrees are: " + finalF + " Fahrentheits.");
}