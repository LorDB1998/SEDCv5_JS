function willLevelUp(currentExp,neededExp,winExp){
    var levelUp = currentExp+winExp;
    var outcome;  
    if (levelUp<neededExp){
        var expNeeded = neededExp - levelUp;
        outcome= "You did not manage to level up,you need "+expNeeded+"  more to be able to learn powerful new spells."; 
    }
    else { 
        outcome= "Congratulations you just leveled up!";
    }
    return outcome;         
}

var currentExp = parseInt(prompt("Enter Current XP"));
var neededExp = 100-currentExp%100+currentExp;
var winExp = 75;

alert(willLevelUp(currentExp,neededExp,winExp));