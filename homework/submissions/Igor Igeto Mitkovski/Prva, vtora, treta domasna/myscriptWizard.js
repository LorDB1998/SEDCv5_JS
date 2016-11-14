function willLevelUp (currentXP, neededXP, duelXP) {
    temp = currentXP + duelXP;
    if (temp >= neededXP)
        alert ("U have leveled up");
    else {
        lvlUpXP = neededXP - temp;
        alert ("U need " + lvlUpXP + " more experience to level up");
    }
}

var currentXP = parseInt(prompt("Insert current experience")); 
var neededXP = 1000 - currentXP % 1000 + currentXP;
var duelXP = 250;

willLevelUp (currentXP, neededXP, duelXP);