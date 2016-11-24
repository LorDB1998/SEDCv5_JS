function displayMenu(){
    var user = returnUserRole();
    if (user == "student"){
        document.write(
        `<ul>
            <li>Grades</li>
            <li>School Schedule</li>
        </ul>
        <br>
        <br>
        <a href="index.html"> Back to index. 
        </a>`);
    } else if (user == "professor") {
        document.write(
        `<ul>
            <li>Students
                <ul>
                    <li>Grades</li>
                </ul>
            </li>
            <li>School Schedule</li>
        </ul>
        <br>
        <br>
        <a href="index.html"> Back to index. 
        </a>`);
    } else {
        document.write(
        `<ul>
            <li>School Schedule</li>
        </ul>
        <br>
        <br>
        <a href="index.html"> Back to index. 
        </a>`);
    }
}


function returnUserRole(){
    var formOutput = document.getElementById("rb");
    for(var i = 0; i < formOutput.length; i++){
        if(formOutput[i].checked){
            return formOutput[i].value;
        }
    } 
}


var typeOfUser = returnUserRole();
displayMenu(typeOfUser);
