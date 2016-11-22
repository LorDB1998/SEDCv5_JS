/*Write a loop in JavaScript that in range from 0 till 20 will write in the html document every number, 
and will add the html “<br>” tag after every even number or add space after every odd number.*/


function writeNumbers(number) {
    for(var i=0 ;i<=number ;i++) {
        document.write(i + " ");
        if(i%2==0) {
            document.write("<br>");
        } 
    }
}

writeNumbers(20);