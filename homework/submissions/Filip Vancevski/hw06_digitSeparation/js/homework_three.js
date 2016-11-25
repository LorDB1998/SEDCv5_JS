/*Write a loop in JavaScript that in range from 0 till 20 
will write in the html document every number, 
and will add the html “<br>” tag after every even number 
or add space after every odd number.*/
readAndAddNumbers(20);

function readAndAddNumbers(inputNumber){
    for(var i = 0; i <= inputNumber; i++){
        //document.write(i+ " ");
        
        if(i % 2 == 0){
            document.write(i+"<br>");
        }
        else {
            document.write(i+ " ");
        }
    }
}