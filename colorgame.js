
var numsquares = 6;
var colors = [];
var colorPicked;
var colorDisplay = document.querySelector("#colorDisplay");


var squares = document.querySelectorAll(".square");

var result = document.querySelector("#result");

var h1 = document.querySelector("h1");

var resetbutton = document.querySelector("#newgamebutton");
var modebuttons = document.querySelectorAll(".modebuttons");

init();

function init()
{
	setupModeButtons();
	setupSquares();
	reset();
}



function setupModeButtons()
{
	for(var i=0; i<modebuttons.length; i++)
	{
		modebuttons[i].addEventListener("click", function()
		{
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");

			this.classList.add("selected");

			this.textContent=="EASY" ? numsquares=3 : numsquares=6;
			reset();

		});
	}
}

function setupSquares()
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function()
		{
			if(this.style.backgroundColor == colorPicked)
			{
				for(var j=0; j<squares.length; j++)
				{
					squares[j].style.backgroundColor=colorPicked;
				}
				result.textContent = "correct!"
				resetbutton.textContent = "PLAY AGAIN?"
				h1.style.backgroundColor = colorPicked;
			}
			else
			{
				this.style.backgroundColor="#232323";
				result.textContent="try again!"
			}
		}
		);
	}
}

resetbutton.addEventListener("click", function()
{
	reset();
});

function reset()
{
	colors = pickrandomcolors(numsquares);
	colorPicked = colors[getRandomInt(colors.length)];

	colorDisplay.textContent = colorPicked.toUpperCase();

	resetbutton.textContent = "NEW COLORS";
	result.textContent = "";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}

}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pickrandomcolors(num)
{
	arr = [];
	for(var i=0; i<num; i++)
	{
		r = getRandomInt(256);
		g = getRandomInt(256);
		b = getRandomInt(256);

		arr.push("rgb(" + r + ", " +g+ ", " +b+ ")");
	}
	
	return arr;
}




