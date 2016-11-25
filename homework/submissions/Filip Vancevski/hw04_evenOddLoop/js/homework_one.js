/*Write a function that takes an array as an input parameter 
and returns the sum of all numerical values.
ex.
sumNumbers([1, 2, "3", "potato", undefined, null, 7, 11])
returns a result of 21.*/
var someArr = [1, 2, "3", "potato", undefined, null, 7, 11];
var secondArr = [1, 2, "3", "potato", undefined];


sumOfAllNumbersInArray(secondArr);

function sumOfAllNumbersInArray(arr){
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
        if (typeof(arr[i]) == "number"){
           sum += arr[i];
        }
    } 
    return sum;
}
document.write(sumOfAllNumbersInArray(someArr));
