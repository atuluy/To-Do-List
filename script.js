var currentDate = new Date();

var getText = document.getElementById("addText");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

document.getElementById("currentDate").innerHTML = currentDate.toDateString();

document.addEventListener("keydown", pressEnter);

function pressEnter() {
  if (event.key === "Enter") {
    addNewLine();
  } else {
    return;
  }
}

btn.addEventListener("click", addNewLine);

function addNewLine() {
  if (getText.value === "") {
    return;
  } else {
    list.innerHTML += "" + getText.value + "<hr>";

    getText.value = "";
  }
}

btn2.addEventListener("click", clearList);

function clearList() {
  list.innerHTML = "";
}
