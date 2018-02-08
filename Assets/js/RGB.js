var numSquares = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#target");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

init();

function init(){
	// mode butttons
	SetUpModeButtons();

	// set up squares
	SetUpSquares();

	reset();
}

function SetUpModeButtons(){
	for(var i = 0;i<modebuttons.length;i++){
		modebuttons[i].addEventListener("click",function(){
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent === "Easy"){
			numSquares = 3;
			}else{
			numSquares = 6;
			}

			reset();
		});
	}
}

function SetUpSquares(){
	for(var i = 0;i<squares.length;i++){
		//adding function when a square is picked
		squares[i].addEventListener("click",function(){
			// picking the clicked color
			var clickedcolor = this.style.background;

			// comparing color
			if(clickedcolor === pickedcolor){
				message.textContent = "Correct!!";
				changecolor(clickedcolor);
				h1.style.background = clickedcolor;
				resetbutton.textContent = "Play Again??"
			}else{
				this.style.background = "#232323";
				message.textContent = "Try Again !!";
			}
		});
	}
}

// for(var i = 0;i<squares.length;i++){
// 	// giving colors to all squares
// 	squares[i].style.background = colors[i];

// 	//adding function when a square is picked
// 	squares[i].addEventListener("click",function(){
// 		// picking the clicked color
// 		var clickedcolor = this.style.background;

// 		// comparing color
// 		if(clickedcolor === pickedcolor){
// 			message.textContent = "Correct!!";
// 			changecolor(clickedcolor);
// 			h1.style.background = clickedcolor;
// 			resetbutton.textContent = "Play Again??"
// 		}else{
// 			this.style.background = "#232323";
// 			message.textContent = "Try Again !!";
// 		}
// 	});
// }

function changecolor(color){
	// changing all squares to be picked color
	for(var j = 0; j < colors.length ; j++){
				squares[j].style.background = pickedcolor;
	}

}

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generaterandomcolor(num){
	// make an empty array
	var arr = [];
	// add into array
	for(var i = 0 ;i < num ;i++){
		arr.push(randomcolor());
	}
	// return that array
	return arr;
}

function randomcolor(){
	// pick red between 0-255
	var red = Math.floor(Math.random() * 256);
	// pick green between 0-255
	var green = Math.floor(Math.random() * 256);
	// pick blue between 0-255
	var blue = Math.floor(Math.random() * 256);

	// generating random color
	var str = "rgb("+red+", "+green+", "+blue+")";

	// returning random color
	return str;
}

resetbutton.addEventListener("click",function(){
	reset();
});

function reset(){
	colordisplay.textContent = pickedcolor;
	resetbutton.textContent = "New Colors";
	message.textContent = "";
	// generate new random colors
	colors = generaterandomcolor(numSquares);
	// pick a new random color
	pickedcolor = pickcolor();
	// match the picked color with color to be displayed
	colordisplay.textContent = pickedcolor;
	// change colors of squares
	for(var i = 0; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.background = "none";
		}
	}

	h1.style.background = "steelblue";
}
