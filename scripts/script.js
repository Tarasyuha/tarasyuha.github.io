function changeColor() {
  var col = document.getElementById("changeColor");
  var col2 = document.getElementById("colorh1");
  if (col.style.backgroundColor === "lightblue") {
    col.style.backgroundColor = "coral";
  }else {
    col.style.backgroundColor = "lightblue";
  }
  if (col.style.backgroundColor === "lightblue") {
    col2.style.color = "coral";
  }else {
    col2.style.color = "lightblue";
  }
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
    document.getElementById("changetext").innerHTML = "New text WOW!";
}
function mouseOut()
{
    document.getElementById("changetext").innerHTML = backup
}