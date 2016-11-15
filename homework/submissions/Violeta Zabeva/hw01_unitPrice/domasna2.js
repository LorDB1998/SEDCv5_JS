var numOfTablets = 30 ;   // prompt ("Vnesi kolku tableti :");
var tabletPrice = 119.95; // prompt ("Vnesi kolku kosta eden tablet : ");
var tax = (tabletPrice * 5) / 100 ;
var sum = (tax + tabletPrice) * numOfTablets ;
alert ("Cenata na " + numOfTablets + "tableti e " + sum + ".");