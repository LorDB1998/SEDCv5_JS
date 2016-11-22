//Write a JavaScript program that will read in an integer and write out its digits.


var num = prompt("Write an integer: ");

function writeDigits(num) {
    for(var i=0; i<num.length; i++){
        document.write(num[i] + "<br>");
    }
}

writeDigits(num);