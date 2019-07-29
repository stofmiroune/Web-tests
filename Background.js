var css = document.querySelector("h3");
var color1 = document.querySelector(".a");
var color2 = document.querySelector(".b");
var body = document.getElementById("body");
function Grad() {body.style.background="linear-gradient(to right," + color1.value +","+color2.value+")";
css.textContent = body.style.background + ";";
}



color1.addEventListener("input",Grad);
color2.addEventListener("input",Grad);
