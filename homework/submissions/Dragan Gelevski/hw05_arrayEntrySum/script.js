var sumNumbers = [1, 2, "3", "potato", undefined, null, 7, 11];

function sumOfArray(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        if (typeof(array[i]) == "number"){
           sum += array[i];
        }
    } 
    return sum;
}
function buttonClick(){
document.write(sumNumbers);
alert("The sum of the numbers in this array is: " + sumOfArray(sumNumbers));
}
// Nadole e resenie so user input ama ne mi ispagase for some reason. 

/*function sumOfArray(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        if (typeof(array[i]) == "number"){
           sum += array[i];
        }
    } 
    return sum;
}

function clickButton(){
    var inputLenght = parseInt(prompt("How much elements are there in the Array:"));
            var stuffArray = [];
    for(i = 0; i < inputLenght; i++){
        //stuffArray.push(prompt("Enter " + i + " element of the array: "));
        stuffArray[i] = prompt("Enter " + i + " element of the array: ");
        }
    alert(" The sum of the numbers in the Array you typed in is: " + sumOfArray(stuffArray));
    alert(stuffArray[0] + stuffArray[1] + stuffArray[2] + stuffArray[3]);
} */