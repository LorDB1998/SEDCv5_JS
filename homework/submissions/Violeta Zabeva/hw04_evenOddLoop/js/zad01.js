
/*var i;
document.write("0"+" ");
for(i=1;i<=20;i++) {
    if(i%2==0) 
        document.write(i+"<br>");
    else
        document.write(i+" ");
}*/

function writeNumbers(number) {
    for(var i=0; i<=number; i++) {
        document.write(i + " ");
        if(i % 2 == 0) {
            document.write("<br>");
        }
    }
}

writeNumbers(20);