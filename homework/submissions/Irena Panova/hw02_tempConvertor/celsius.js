var degrees = parseFloat(prompt("Please enter the degrees: "));
var d = prompt("Are the degrees in celsius (enter 'C'), or fahrenheit (enter 'F')?");

if(d == "C" || d == "c") {
    convert(degrees);
} else if(d == "F" || d == "f"){
    Convert(degrees);
} else {
    alert("You have entered an invalid character");
}

function convert(degrees) {
    var x;
    x = degrees*1.8+32;
    document.write(degrees + " degrees celsius are " + x + " degrees fahrenheit.");
}

function Convert(degrees) {
    var y;
    y= (5/9)*(degrees-32);
    document.write(degrees + " degrees fahrenheit are " + y + " degrees celsius.");
}

