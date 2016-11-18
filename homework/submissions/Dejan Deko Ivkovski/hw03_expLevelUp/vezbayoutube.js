/*
willLevelUp(1000, 1020, 40); - returns true as a result;
willLevelUp(25299546, 25299766, 400); - returns true as a result;
willLevelUp(2050, 3000, 600); - returns false as a result;
*/
willLevelUp(1000, 1020, 40);

function willLevelUp (currentExperiance, neededExperiance, winExperiance){

if(currentExperiance  => neededExperiance){
  
     document.write("You are now level up!");
return true

    }else {
         document.write("You hero is dead");
        return false
      
    }
}