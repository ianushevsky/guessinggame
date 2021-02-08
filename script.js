var output="";
function lognum(p1) {
output +=p1;
document.getElementById("output").innerHTML=output;
}
function getanswer(){
  document.getElementById("output").innerHTML=(eval(output))
}
function clearoutput(){
  output=""
  document.getElementById("output").innerHTML=""
}
