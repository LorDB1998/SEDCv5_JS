//150, 180, 50
var currentExperience= parseInt(prompt("Enter current experience"));
var neededExperience= parseInt(prompt("Enter needed experience"));
var winExperience= parseInt(prompt("Enter win experience"));

willLevelUp(neededExperience,currentExperience,currentExperience);

function willLevelUp(currentExperience,neededExperience,winExperience){    
    if(neededExperience<=currentExperience+winExperience){
        alert("You leveled up!");  
        } else{
        alert("You need more experience!");
    }    
}