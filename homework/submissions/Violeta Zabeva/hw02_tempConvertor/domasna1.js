function celsius(input) { /*convert to Celsius*/

    var conversion;
    conversion = (5.0 / 9.0) * (input - 32);

    return conversion;
}

function fahrenheit(input) { /*convert to Fahrenheit*/

    var conversion;
    conversion = (9.0 / 5.0) * (input + 32);

    return conversion;
}

var temp; /*temperature that will be converted*/
temp = parseFloat(prompt("Enter a temperature to convert"));
var converter; /*type of conversion needed*/
converter = prompt("Enter 'c' to convert to Celsius or 'f' for Fahrenheit ");
converter = converter.toLowerCase();

if (converter == 'c') {
    alert(celsius(temp));
} else if (converter == 'f') {
    alert(fahrenheit(temp));
}
