var option = prompt("vnesi F ako sakaz da se pretvori od celzius vo farenhajt ili vnesi C ako sakaz da se pretvori od farenhajt vo celzius" );

if (option == "F" || option == "f") {
	var C = parseInt(prompt("vnesi C"));
	var FirstF = C * 1.8 + 32;
	alert("imate " + FirstF + " farenhajt");
} else if  (option == "C" || option == "c") {
	var F = parseInt(prompt("vnesi F"));
	var SecondC = (5 / 9) * (F - 32);
	alert("imate " + SecondC + " farenhajt");
}
else{alert("ne se dezava nisto");
}