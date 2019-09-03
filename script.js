var css = document.querySelector('h3');
var colorOne = document.querySelector(".colorOne");
var colorTwo = document.querySelector(".colorTwo");
var body = document.getElementById('gradient');
var Rdm = document.querySelector("#random")





function rdmGradient() {

  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

	}


function newCombo(){

	colorOne.setAttribute("value", rdmGradient());
	colorTwo.setAttribute("value", rdmGradient());
	body.style.background = 
	"linear-gradient(to right, " + colorOne.value + " , " + colorTwo.value + ")";
		
		css.textContent = body.style.background + ";" ;

}	



function gradientChange(){
	body.style.background = 
		"linear-gradient(to right," 
		+ colorOne.value 
		+ ", "
		+ colorTwo.value
		+")";

		css.textContent = body.style.background + ";";
}



Rdm.addEventListener("click", newCombo);

colorOne.addEventListener("input", gradientChange);

colorTwo.addEventListener("input", gradientChange);

	