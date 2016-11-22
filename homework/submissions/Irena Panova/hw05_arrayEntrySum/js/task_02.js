// Write a function that takes an array as an input parameter and returns the sum of all numerical values.


var arr = [1, 2, "3", "potato", undefined, null, 7, 11];
sum=0;

function sumNumbers(arr) {
    for(var i=0; i<arr.length; i++) {
        if(typeof(arr[i]) === "number")
            sum += arr[i];
    }
    return sum;
}

document.write(sumNumbers(arr));