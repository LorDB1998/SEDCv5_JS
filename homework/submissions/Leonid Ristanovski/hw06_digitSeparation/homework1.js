var number = (1234567890);
var numbersArray = writeDigits(number);

for(var i = numbersArray.length - 1; i >= 0; i--){
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

