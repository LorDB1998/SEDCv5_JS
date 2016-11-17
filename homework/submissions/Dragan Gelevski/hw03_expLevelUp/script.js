function willLevelUp(){
    var currentExperience = parseInt(prompt("Enter your current XP:"));
    var neededExperience = parseInt(prompt("Enter full XP for lvl up:"));
    var winExperience = parseInt(prompt("Enter XP gained from duel:"));
    var finalExperience = currentExperience + winExperience;
    var notLvl = neededExperience - finalExperience;
    if (finalExperience >= neededExperience){
        alert("You leveled up. Your current XP is " + finalExperience + "!");
    }
    else if (finalExperience < neededExperience) {
        alert("You did not lvl up. You need " + notLvl + " XP to lvl up.");
    }
    else {
        alert("You entered wrong parametars. Please try again.")
    }
}