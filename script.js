let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
function setBackground(){
	body.style.background="linear-gradient(to right, " + color1.value +", " + color2.value +")";
	css.textContent = body.style.background;}

color1.addEventListener("input", setBackground ); //setBackground function must not be called, otherwise it only gets executed once, when loading
color2.addEventListener("input", setBackground ); //same!!!!




//body.style.background="linear-gradient(to right, color1.value, color2.value)";
	// console.log(css);
	// console.log(color1);
	// console.log(color2); 