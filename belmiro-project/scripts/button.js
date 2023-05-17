const button = document.querySelectorAll(".button");
const mainButton = document.querySelector(".submitBtn");
const formulario = document.querySelector("form");

function scrolldiv() {
    var elem = document.getElementById("header-button");
    elem.scrollIntoView({behavior: "smooth"});
    formulario.style.animation = "glow 0.3s ease-in-out 15";
    setInterval(function() {formulario.removeAttribute("style")}, 6000);
    
}



