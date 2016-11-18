var currentExperience = parseInt(prompt("Enter current experience."));
var neededExperience = parseInt(prompt("Enter needed experience."));
var winExperience = parseInt(prompt("Enter win experience."));

function willLevelUp(currentExperience, neededExperience, winExperience){
    if (neededExperience<=currentExperience+winExperience){
        alert("You Level Up!");
    } else{
        alert("You need more experience!");
    }
}

willLevelUp(currentExperience, neededExperience, winExperience);