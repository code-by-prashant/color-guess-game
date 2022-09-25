var numSquares = 6;
var color = generateRandomColor(numSquares);



var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisp = document.querySelector("#messageDisp");
var h1 = document.querySelector("h1");
var resat = document.querySelector("#reset");
var easyB = document.querySelector("#easyBtn")
var hardB = document.querySelector("#hardBtn")

easyB.addEventListener("click",function(){
	easyBtn.classList.add("mode");
	hardBtn.classList.remove("mode");
	numSquares = 3
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
		if(color[i]){
			squares[i].style.background = color[i];
		}
		else{
			squares[i].style.display = "none";
		}
	   
    }
})

hardB.addEventListener("click",function(){
	easyBtn.classList.remove("mode");
	hardBtn.classList.add("mode");
	numSquares = 6
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
		squares[i].style.background = color[i];
	   squares[i].style.display = "block";
    }

})


resat.addEventListener("click", function(){
	color = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "NEW GAME"
	for(var i=0; i< squares.length; i++){
	   squares[i].style.background = color[i];
    }
    h1.style.background = "steelblue";


})

colorDisplay.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
	squares[i].style.background = color[i];

	squares[i].addEventListener("click", function(){
	
	var clickedColor = this.style.background;

	if(clickedColor === pickedColor){
		messageDisp.textContent= "Correct :)"
		resat.textContent = "Play Again"
		changeColor(clickedColor);
		h1.style.background = clickedColor;
	}else{
		this.style.background = "#232323";
		messageDisp.textContent= "TRY AGAIN !"
	}


})

}

function changeColor(colors){
	for(var i=0; i< squares.length; i++){
		squares[i].style.background = colors;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}


function generateRandomColor(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor())

	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" +r +", " +g +", " +b +")";

}

