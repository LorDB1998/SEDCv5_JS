var currentExperience = parseInt(prompt("Enter current experience"));
var totalExperience = parseInt(prompt("Enter total experience needed for lvlup"));
var winExperience = parseInt(prompt("Enter experience from duel"));

function expLvl (currentExperience,totalExperience,winExperience){

	if((currentExperience+winExperience)>totalExperience)
	{
		return document.write("true");
	}
	else
	{
		return document.write("false");
	}
}

expLvl(currentExperience,totalExperience,winExperience);