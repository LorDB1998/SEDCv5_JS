//Write a JavaScript program that will read in an integer and write out its digits.
var number = (11225);


/*for(var i = numbersArray.length - 1; i >= 0; i--){
    document.write(numbersArray[i]+ "<br>");
}

function writeDigits(number){
    var arr = [];
    while(number != 0){
        var digit = number % 10;
        number = parseInt(number/10);
        arr.push(digit);
    }
    return arr;
}
var numbersArray = writeDigits(number);*/




var x =  number.toString();

for(var i = 0; i<x.length; i++){
    document.write(x[i]+ "<br>");
}