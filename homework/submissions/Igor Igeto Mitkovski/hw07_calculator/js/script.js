function addToNumber() {
	switch (operation) {
			case "+": 
				result = number1 + number2;
				break;
			case "-":
				result = number1 - number2;
				break;
			case "*":
				result = number1 * number2;
				break;
			case "/":
				result = Math.floor(number1 / number2);
				break;
	}
}
var number1 = 0;
var number2 = 0;
var operation = "+";
var result;
var currentNumber = 0;
var screen = document.getElementById("table__thead__screen");

var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var button5 = document.getElementById("5");
var button6 = document.getElementById("6");
var button7 = document.getElementById("7");
var button8 = document.getElementById("8");
var button9 = document.getElementById("9");
var button0 = document.getElementById("zeroButton");
var addition = document.getElementById("+");
var subraction = document.getElementById("-");
var multiplication = document.getElementById("*");
var divison = document.getElementById("/");
var pow = document.getElementById("pow");
var sqrt = document.getElementById("sqrt");
var reset = document.getElementById("C");
var equals = document.getElementById("equalsButton");

button1.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "1";
	} else
		currentNumber += "1";
	screen.innerHTML = currentNumber;
});
button2.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "2";
	} else
		currentNumber += "2";
	screen.innerHTML = currentNumber;
});
button3.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "3";
	} else
		currentNumber += "3";
	screen.innerHTML = currentNumber;
});
button4.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "4";
	} else
		currentNumber += "4";
	screen.innerHTML = currentNumber;
});
button5.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "5";
	} else
		currentNumber += "5";
	screen.innerHTML = currentNumber;
});
button6.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "6";
	} else
		currentNumber += "6";
	screen.innerHTML = currentNumber;
});
button7.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "7";
	} else
		currentNumber += "7";
	screen.innerHTML = currentNumber;
});
button8.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "8";
	} else
		currentNumber += "8";
	screen.innerHTML = currentNumber;
});
button9.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "9";
	} else
		currentNumber += "9";
	screen.innerHTML = currentNumber;
});
button0.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "0";
	} else
		currentNumber += "0";
	screen.innerHTML = currentNumber;
});
addition.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = 0;
	} else if (number1 === 0) {
		number1 = parseInt(currentNumber);
		operation = "+";
		currentNumber = 0;
		screen.innerHTML = "+";
	} else {
		number2 = parseInt(currentNumber);
		addToNumber();
		number1 = result;
		operation = "+";
		currentNumber = 0;
		screen.innerHTML = "+";
	}
})
subraction.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = "-";
		screen.innerHTML = "-";
	} else if (number1 === 0) {
		number1 = parseInt(currentNumber);
		operation = "-";
		currentNumber = 0;
		screen.innerHTML = "-";
	} else {
		number2 = parseInt(currentNumber);
		addToNumber();
		number1 = result;
		operation = "-";
		currentNumber = 0;
		screen.innerHTML = "-";
	}
})
multiplication.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = 0;
	} else if (number1 === 0) {
		number1 = parseInt(currentNumber);
		operation = "*";
		currentNumber = 0;
		screen.innerHTML = "*";
	} else {
		number2 = parseInt(currentNumber);
		addToNumber();
		number1 = result;
		operation = "*";
		currentNumber = 0;
		screen.innerHTML = "*";
	}
})
divison.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = 0;
	} else if (number1 === 0) {
		number1 = parseInt(currentNumber);
		operation = "/";
		currentNumber = 0;
		screen.innerHTML = "/";
	} else {
		number2 = parseInt(currentNumber);
		addToNumber();
		number1 = result;
		operation = "/";
		currentNumber = 0;
		screen.innerHTML = "/";
	}
})
pow.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = 0;
	} else {		
		screen.innerHTML = Math.pow(currentNumber, 2);
		currentNumber = Math.pow(currentNumber, 2);
	}
})
sqrt.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = 0;
	} else {		
		screen.innerHTML = Math.sqrt(currentNumber);
		currentNumber = Math.sqrt(currentNumber);
	}
})
equals.addEventListener("click", function() {
	if (currentNumber == 0) {
		currentNumber = 0;
	} else if (number1 === 0) {
		currentNumber = 0;
	} else {
		number2 = parseInt(currentNumber);
		addToNumber();
		screen.innerHTML = result;
		number1 = 0;
		number2 = 0;
		currentNumber = 0;
		result = 0;
	}
})
reset.addEventListener("click", function() {
	number1 = 0;
	number2 = 0;
	currentNumber = 0;
	result = 0;
	screen.innerHTML = 0;
})

document.onkeyup = function(event){
	var key = event.key;
	if (!isNaN(key)) {
		if (currentNumber == 0) {
			currentNumber = key;
		} else
			currentNumber += key;
		screen.innerHTML = currentNumber;
	}
	if (key === "+") {
		if (currentNumber == 0) {
			currentNumber = 0;
		} else if (number1 === 0) {
			number1 = parseInt(currentNumber);
			operation = "+";
			currentNumber = 0;
			screen.innerHTML = "+";
		} else {
			number2 = parseInt(currentNumber);
			addToNumber();
			number1 = result;
			operation = "+";
			currentNumber = 0;
			screen.innerHTML = "+";
		}
	}
	if (key === "-") {
		if (currentNumber == 0) {
			currentNumber = "-";
			screen.innerHTML = "-";
		} else if (number1 === 0) {
			number1 = parseInt(currentNumber);
			operation = "-";
			currentNumber = 0;
			screen.innerHTML = "-";
		} else {
			number2 = parseInt(currentNumber);
			addToNumber();
			number1 = result;
			operation = "-";
			currentNumber = 0;
			screen.innerHTML = "-";
		}
	}
	if (key === "*") {
		if (currentNumber == 0) {
			currentNumber = 0;
		} else if (number1 === 0) {
			number1 = parseInt(currentNumber);
			operation = "*";
			currentNumber = 0;
			screen.innerHTML = "*";
		} else {
			number2 = parseInt(currentNumber);
			addToNumber();
			number1 = result;
			operation = "*";
			currentNumber = 0;
			screen.innerHTML = "*";
		}
	}
	if (key === "/") {
		if (currentNumber == 0) {
			currentNumber = 0;
		} else if (number1 === 0) {
			number1 = parseInt(currentNumber);
			operation = "/";
			currentNumber = 0;
			screen.innerHTML = "/";
		} else {
			number2 = parseInt(currentNumber);
			addToNumber();
			number1 = result;
			operation = "/";
			currentNumber = 0;
			screen.innerHTML = "/";
		}
	}
	if (key === "w") {
		if (currentNumber == 0) {
			currentNumber = 0;
		} else {		
			screen.innerHTML = Math.pow(currentNumber, 2);
			currentNumber = Math.pow(currentNumber, 2);
		}
	}
	if (key === "q") {
		if (currentNumber == 0) {
			currentNumber = 0;
		} else {		
			screen.innerHTML = Math.sqrt(currentNumber);
			currentNumber = Math.sqrt(currentNumber);
		}
	}
	if (key === "=" || key === "Enter") {
		if (currentNumber == 0) {
			currentNumber = 0;
		} else if (number1 === 0) {
			currentNumber = 0;
		} else {
			number2 = parseInt(currentNumber);
			addToNumber();
			screen.innerHTML = result;
			number1 = 0;
			number2 = 0;
			currentNumber = 0;
			result = 0;
		}
	}
	if (key === "Esc" || key === "Backspace") {
		number1 = 0;
		number2 = 0;
		currentNumber = 0;
		result = 0;
		screen.innerHTML = 0;
	}
}