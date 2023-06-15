var i = 0;
var txt = 'Welcome to my landing page'
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }