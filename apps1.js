var names = [];
document.getElementById("demo").innerHTML =names;

function myFunction() {
  names.push("Luke, Skywalker");
  document.getElementById("demo").innerHTML = names;
}
function myFunction2() {
  names.pop();
  document.getElementById("demo").innerHTML =names;
}
function myFunction3() {
  var firstname = ["Anakin"];
  var lastname = ["Skywalker"];
  var name = firstname.concat(lastname); 
  document.getElementById("demo").innerHTML = name;
}