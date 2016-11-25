

var x = [2, 5, "dfkgkfdlgj", 90, 78, 456, -156, 89, "dorkotgkeropg"];
var vtorArray = [9, 1, "dl;fkgl;ekr", undefined, 89, 4];

function zbirNaBroevi(x) { 
  var sumaNabroevi = 0;
  
  for(i = 0; i < x.length; i++){
    if (typeof x[i] === "number"){
      sumaNabroevi = sumaNabroevi + x[i];
    }
  }
  return sumaNabroevi;
}

alert(zbirNaBroevi(vtorArray));
 
