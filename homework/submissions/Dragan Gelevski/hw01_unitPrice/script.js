function tabletCalculator(){
var numOfTablets = parseInt(prompt("Vnesi kolichina na tableti:"));
var tabletPrice = parseInt(prompt("Vnesi kolku pari e eden tablet:"));
var tax = (tabletPrice * 5) / 100;
var sum = ((tax + tabletPrice) * numOfTablets).toFixed(2); 
alert("Cenata na " + numOfTablets + " tableti e " + sum );
}