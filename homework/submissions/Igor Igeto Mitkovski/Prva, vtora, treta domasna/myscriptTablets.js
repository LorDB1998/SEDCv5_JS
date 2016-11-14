function calculatePrice (ammount, netoPrice, tax) {
    brutoPrice = netoPrice + netoPrice * (tax / 100);
    price = brutoPrice * ammount;
    alert ("The price of 30 tablets is " + Math.round(price));
}

var ammount = 30;
var netoPrice = 119.95;
var tax = 5;

calculatePrice (ammount, netoPrice, tax);