function buttonClick(){
    document.write(`<HEAD>
		<LINK href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
		<LINK rel="stylesheet" type="text/css" href="style.css">
		<TITLE> Homework assignment 2.3 </TITLE>
	</HEAD>
        <H1> Assignment 2.3 </H1>`);
    var input = (parseInt(prompt("Enter a number:"))).toString(); 
    for(var i = 0; i < input.length; i++){
        document.write(input[i]+ "<br>");
    }
}