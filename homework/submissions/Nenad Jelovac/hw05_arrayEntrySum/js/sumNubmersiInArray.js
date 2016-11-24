var someArr = [1, 2, "3", "potato", undefined, null, 7, 11];

document.write("Sum of the numbers in the given array is: " + sumUpNumbersInArray(someArr));






function sumUpNumbersInArray(someArr){
    var sumOfNumbersInPassedArray = 0;

    //Go trough the array and sum up all of the numbers
    for(var i = 0; i<someArr.length; i++){
        if(typeof(someArr[i]) === "number"){
            sumOfNumbersInPassedArray += someArr[i];
        }
    }
    return sumOfNumbersInPassedArray;
}