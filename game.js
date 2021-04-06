
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var pickedColor = pickRandomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var squares = document.querySelectorAll(".square");
colorDisplay.textContent = pickedColor;


easyBtn.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; ++i)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";	
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; ++i)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click" , function(){
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	colors = generateRandomColors(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; ++i)
	{
		squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";
	//messageDisplay.textContent = "";
});

for(var i = 0 ; i < squares.length; ++i)
{
	//colors for squares
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click" , function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor == pickedColor)
		{
			resetButton.textContent = "Try Again ?";
			h1.style.backgroundColor = clickedColor;
			messageDisplay.textContent = "Correct !";
			changeColors(pickedColor);
		}
		else
		{
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	});

}

function changeColors(color)
{
	for(var i = 0; i < squares.length; ++i)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];

	for(var i = 0; i < num; ++i)
	{
		var generatedColor = randomColor();
		arr[i] = generatedColor;
	}

	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}