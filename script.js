function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var button = document.getElementById("element");
button.addEventListener("click", myFunction);
