
var celsius = parseInt(prompt("Vnesi celziusovi stepeni"));

//celsiusintoFr(); povikuvanje (beleshka za mene :)
celsiusintoFr(celsius);

function celsiusintoFr(celsius){  //definiranje
    var fahrenheits = Math.round(celsius*1.8+32);
    outcome= (celsius+" Celziusovi stepeni se "+fahrenheits+" Farenhajtovi Stepeni");
    alert(outcome);
    return (outcome);
 }
   fahrenheits =parseInt(prompt("Vnesi farenhajtovi stepeni"));
   fahrenheitsIntoC(fahrenheits);

function fahrenheitsIntoC(fahrenheits){ 
    var celsius= Math.round((5/9)*(fahrenheits-32));
    outcome= (fahrenheits+" Farenhajtovi stepeni se "+celsius+" celziusovi stepeni");
    alert(outcome);
    return(outcome);
}

