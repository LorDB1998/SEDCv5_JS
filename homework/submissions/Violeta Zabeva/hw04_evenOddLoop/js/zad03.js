var number=prompt("Write a number: ");

function writeDigits(number) {
    for(i=0; i<number.length; i++) {
        document.write(number[i] + "<br>");
    }
}

writeDigits(number);