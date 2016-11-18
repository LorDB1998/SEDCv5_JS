var currentExperience = parseInt(prompt("Enter current experience"));
var neededExperience = parseInt(prompt("enter needed experience"));
var winExperience = parseInt(prompt("enter win experience"));

function willLevelUp(currentExperience, neededExperience, winExperience) {
    if(neededExperience <= currentExperience + winExperience) {
        alert("You will level up!");
    } else {
        alert("You need more experience!");
    }
}

willLevelUp(currentExperience, neededExperience, winExperience);