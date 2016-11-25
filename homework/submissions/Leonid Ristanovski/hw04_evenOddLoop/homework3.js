someArr(20);

function someArr(newArr){
	for(var i = 0; i <= newArr; i++){
		if(i % 2 == 0){
			document.write(i + "<br/>");
		}
		else {
			document.write(i + " ");
		}
	}
}
