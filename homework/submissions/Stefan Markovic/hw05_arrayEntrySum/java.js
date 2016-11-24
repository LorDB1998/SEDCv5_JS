var sumNumbers = [1, 2, "3", "potato", undefined, null, 7, 11];
var totalnumb = 0;

	for (var i = 0; i < sumNumbers.length; i++){
			if(typeof(sumNumbers[i]) === "number"){
				totalnumb += sumNumbers[i];
				
			}
	}
	document.write (totalnumb);