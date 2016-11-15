function willLevelUp(currentExp, neededExp, winExp){
	wizzardExp = currentExp + winExp;
		if ( wizzardExp >= neededExp)
			alert("Congratulations, you have leveled up!");
		else {
			upExp = neededExp - wizzardExp;
			alert("I am sorry, you still need " + upExp + " experience to level up..")
		}
}
var currentExp = parseInt(prompt("What is your current experience?"));
var neededExp = 100 - currentExp % 100 + currentExp;
var winExp = 50;

willLevelUp(currentExp, neededExp, winExp);