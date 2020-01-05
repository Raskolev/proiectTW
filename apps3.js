document.getElementById("demo").innerHTML = document.lastModified;

var para = document.createElement("p");
var node = document.createTextNode("All rights reserved.");
para.appendChild(node);
var element = document.getElementById("new");
element.appendChild(para);