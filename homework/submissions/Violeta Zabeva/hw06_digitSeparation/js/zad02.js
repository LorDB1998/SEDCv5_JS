var arr = [8,4,12,"7",undefined,null,"potato",14];
sum = 0;

function SumNumber(arr) {
    for(i=0;i<arr.length;i++) {
        if(typeof(arr[i]) === "number") {
            sum=sum + arr[i];
        }
    }
    return sum;
}

alert(SumNumber(arr));