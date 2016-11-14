var a;
var b;
var neto;
var bruto;
function calculate(a,b){
bruto=a*b;
neto=bruto-(bruto*0.05);
return document.write(neto);
}
calculate(119.95,30);
