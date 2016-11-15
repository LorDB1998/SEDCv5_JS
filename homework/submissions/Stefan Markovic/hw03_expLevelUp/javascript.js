var currentExperience = parseInt (prompt("Kolku imas experience momentalno? "));
var neededExperience = parseInt (prompt("Kolku experience treba da imas za da bides na next level?"));
var winExperience = parseInt (prompt("Kolku experience ostvari? "));

if (currentExperience + winExperience >= neededExperience){

	alert("You have leveled up");
} else {
	alert ("You did't level up");
}