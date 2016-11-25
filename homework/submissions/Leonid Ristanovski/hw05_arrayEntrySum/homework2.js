var someThings = [1, 2, "3", "potato", undefined, null, 7, 11];

	function someArr(someThings){
		var sum = 0
	for (var i = 0; i < someThings.length; i++){
		if(typeof(someThings[i]) === 'number'){
			sum += someThings[i];
		}
	}
	return sum;
}
document.write(someArr(someThings));