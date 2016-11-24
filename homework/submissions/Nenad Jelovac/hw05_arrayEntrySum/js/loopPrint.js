function loopPrinter(positiveInteger){
    for (var i = 0; i < positiveInteger; i +=1){
        if (i%2==0 && i!=0){
            document.write(i + "<br />");
        } else {
            document.write(i + " ");
        }
    }
}

var readUsersNumber = parseInt(prompt("Please enter positive integer"));

loopPrinter(readUsersNumber);