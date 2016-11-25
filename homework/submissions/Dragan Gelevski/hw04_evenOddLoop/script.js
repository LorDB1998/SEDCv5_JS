function countAndWrite(num){
    for(i = 0;i <= num;i++)
    {
        document.write("<text> " + i + "</text>");
        if (i % 2 == 0){
            document.write("</br>");
        }
    }
}

function countButton(){
    document.write(`<HEAD>
		<LINK href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
		<LINK rel="stylesheet" type="text/css" href="style.css">
		<TITLE> Homework assignment 2.1 </TITLE>
	</HEAD><H1> Assignment 2.1 </H1>
		<P> Write a loop in JavaScript that in range from 0 till 20 will write in the html document every number, 
and will add the html &lt;br&gt; tag after every even number or add space after every odd number. </P>`);
    var inputNum = parseInt(prompt("Vnesete do koj broj sakate da pecati skriptata: ", 20));
    countAndWrite(inputNum);
}