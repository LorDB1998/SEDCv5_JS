function printDigitsOfInt(integerParam){
    
    //Make string from the integer
    var stringParam = integerParam.toString();
    
    //Once you have a string you can loop through it as array of chars
    for(var i = 0; i < stringParam.length; i++){
        document.write(stringParam[i] + "<br />");
    }
}

var someInegerParam = parseInt(prompt("Please enter Integer"));

printDigitsOfInt(someInegerParam);