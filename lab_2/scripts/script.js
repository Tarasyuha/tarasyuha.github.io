function changeColor() {
  var col = document.getElementById("changeColor");
  var col2 = document.getElementById("colorh1");
  if (col.style.backgroundColor === "lightblue") {col.style.backgroundColor = "coral"; col.style.boxShadow = "0 0 120px coral";}
  else {col.style.backgroundColor = "lightblue";                                       col.style.boxShadow = "0 0 120px lightblue";}
  if (col.style.backgroundColor === "lightblue") {col2.style.color = "coral";}
  else {col2.style.color = "lightblue";}
}

function addElement() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("New element"));
  li.setAttribute("id", "element4");
  ul.appendChild(li);
}

function hidetext() {
  var x = document.getElementById("toggle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mouseOver()
{
    backup = document.getElementById("changetext").innerHTML
    originalColor = document.getElementById("changetext").style.boxShadow;
    document.getElementById("changetext").innerHTML = "New text WOW!";
    document.getElementById("changetext").style.boxShadow = "0 0 90px white";
}
function mouseOut()
{
    document.getElementById("changetext").style.boxShadow = originalColor;
    document.getElementById("changetext").innerHTML = backup;
}





//Button 1
function mouseDown1() {
  pershe1 = document.getElementById("button1").style.color;
  druhe1 = document.getElementById("button1").style.boxShadow;
  document.getElementById("button1").style.color = "brown";
  document.getElementById("button1").style.boxShadow = "0 0 110px #ff9e62";
}

function mouseUp1() {
  document.getElementById("button1").style.color = pershe1;
  document.getElementById("button1").style.boxShadow = druhe1;
}

//Button 2
function mouseDown2() {
  pershe2 = document.getElementById("button2").style.color;
  druhe2 = document.getElementById("button2").style.boxShadow;
  document.getElementById("button2").style.color = "brown";
  document.getElementById("button2").style.boxShadow = "0 0 110px #ff9e62";
}

function mouseUp2() {
  document.getElementById("button2").style.color = pershe2;
  document.getElementById("button2").style.boxShadow = druhe2;
}

//Button 3
function mouseDown3() {
  pershe3 = document.getElementById("button3").style.color;
  druhe3 = document.getElementById("button3").style.boxShadow;
  document.getElementById("button3").style.color = "brown";
  document.getElementById("button3").style.boxShadow = "0 0 110px #ff9e62";
}

function mouseUp3() {
  document.getElementById("button3").style.color = pershe3;
  document.getElementById("button3").style.boxShadow = druhe3;
}