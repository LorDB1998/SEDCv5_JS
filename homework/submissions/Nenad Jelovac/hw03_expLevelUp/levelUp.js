//User enters XP via prompt pop-up
var userCurrentXP = prompt("Enter your current XP");

// Next level up is calculation is based on user current XP (e.g. if user has 120XP the nxt level up 
// will happen on 200, if 290 on 300 and so on. \next level up happens on every 100 xp. If you want to cahnge
// the next level to happen on every 250 point, just change 100 with 250 in the equation below
var nextLevelUp = 100 - userCurrentXP % 100 + userCurrentXP;

var pointsToLevelUp = 75;

function levelUp(ucXP, nLXP, ptsXP){
    if(ucXP + ptsXP > nLXP ){
        return "Level up"
    } else {
        //Comment
        return "You didn't level up"
    }
}

alert(levelUp(userCurrentXP, nextLevelUp, pointsToLevelUp));