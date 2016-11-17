
function willLevelUp(currentExp,neededExp,winExp){

    var levelUp = currentExp+winExp;
    var answer;  

        if (levelUp<neededExp){
    var expNeeded = neededExp - levelUp;
        answer= "You didn't reach to next level ,you need "+expNeeded+"  more to be able to learn new spells."; 
    }
        else { 
        answer= "Congratulations you just move level Up!";
    }
         return answer;         
}

     var currentExp = parseInt(prompt("Enter Current XP"));
     var neededExp = 100 - currentExp%100 + currentExp;
     var winExp = 75;

alert(willLevelUp(currentExp, neededExp, winExp));