window.onload = function(event) {
    cLog(" ---> Document loaded.");
    setEventsToNumberButtons();
    setEventsToOperatorButtons();
}

document.onkeydown = function(event) {
    var key = event.key;
    if(!isNaN(key)) {
        setNumberToDisplay(key);
        getButtonByValue(key).classList.add("button__clicked");
    } else if(key === "+" || key === "-" || key === "*" || key === "/") {
        setOperator(key);
        getButtonByValue(key).classList.add("button__clicked");
    } else if(key === "=" || key === "Enter") {
        setResultToDisplay();
        getButtonByValue("=").classList.add("button__clicked");
    } else if(key === "Backspace") {
        resetCalc();
        getButtonByValue("C").classList.add("buttonDelete__clicked");
    }
}

document.onkeyup = function(event) {
    var key = event.key;
    if(key === "Enter") getButtonByValue("=").classList.remove("button__clicked");
    else if(key === "Backspace") getButtonByValue("C").classList.remove("buttonDelete__clicked");
    else getButtonByValue(key).classList.remove("button__clicked");
}

var firstNumber = "";
var number = "";
var operator = "";

var display = document.getElementById("display");
var btnEqual = document.getElementById("btnEqual");
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("btnOperator");
var buttonDelete = document.getElementsByClassName("buttonDelete")[0];

buttonDelete.addEventListener("click", function() {
    resetCalc();
});

btnEqual.addEventListener("click", function() {
    setResultToDisplay();
});

function setEventsToNumberButtons() {
    for(var i = 0; i < numbers.length; ++i) {
        numbers[i].onclick = function(event) {
            setNumberToDisplay(event.target.value);
        }
    }
}

function setEventsToOperatorButtons() {
    for(var i = 0; i < operators.length; ++i) {
        if(operators[i].value !== "=") {
            operators[i].onclick = function(event) {
                setOperator(event.target.value);
            }
        }
    }
}

function setNumberToDisplay(input) {
    if(display.value === "0") display.value = "";
    display.value += input;
}

function setOperator(opr) {
    operator = opr;
    firstNumber = display.value;
    display.value = "0";
}

function setResultToDisplay() {
    number = display.value;
    var result = getResult();
    display.value = result;
}

function getResult() {
    var sum = 0;
    if(operator === "+") sum = toInt(firstNumber) + toInt(number);
    if(operator === "-") sum = toInt(firstNumber) - toInt(number);
    if(operator === "*") sum = toInt(firstNumber) * toInt(number);
    if(operator === "/") sum = Math.floor(toInt(firstNumber) / toInt(number));
    return sum;
}

function resetCalc() {
    display.value = "0";
    firstNumber = "";
    number = "";
    operator = "";
}

function getButtonByValue(input) {
    var element;
    var buttons = document.getElementsByClassName("button");
    for(var i = 0; i < buttons.length; ++i) {
        if(input === buttons[i].value) {
            element = buttons[i];
            break;
        }
    }
    return element;
}


function toInt(input) {
    return parseInt(input, 10);
}

function cLog(input) {
    console.log(input);
}