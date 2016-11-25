

var arr = makeStringFromInteger(prompt("enter integer"));

for(var i = 0; i < arr.length; i++){
    document.write(arr[i] + "<br />");
}

function makeStringFromInteger(number){
    return number.toString();
}