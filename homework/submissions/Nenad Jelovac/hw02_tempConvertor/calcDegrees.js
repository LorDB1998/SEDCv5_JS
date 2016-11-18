function celsiusToFahrenheit(){

    var celsiusDegrees = document.getElementById("enterCelsius").value;
    var fahrenheitDegrees = (celsiusDegrees *  9/5 + 32).toFixed(2);

    //vpisi fahrenheitDegrees vo input formata
    document.getElementById("enterCelsius").value = fahrenheitDegrees;

    //Hiden propertito na sapn elemnt po default e true. So ovaa linija go menuvam vo false
    document.getElementById("skrienSimbolF").hidden = false;
}

function fahrenheitToCelsius(){

    var fahrenheitDegrees = document.getElementById("enterFahrenheit").value;
    var celsiusDegrees = ((fahrenheitDegrees - 32) *  5/9).toFixed(2);

    //vpisi celsiusDegrees vo input formata
    document.getElementById("enterFahrenheit").value = celsiusDegrees;
    
    //Hiden propertito na sapn elemnt po default e true. So ovaa linija go menuvam vo false
    document.getElementById("skrienSimbolC").hidden = false;
    
}