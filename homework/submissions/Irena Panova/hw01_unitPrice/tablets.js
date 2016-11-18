var numOfTablets = 30;
var price = 119.95;
var taxRate = 0.05;
var priceWithTax = (price*taxRate)/100;
var totalPrice;
totalPrice = (priceWithTax+price)*numOfTablets;
alert(totalPrice);