
// Initialize whosTurn at player 1 / x
var whosTurn = 1;

var squares = document.getElementsByClassName('square')
for(let i = 0; i < squares.length; i++){
	squares[i].addEventListener('click', function(event){
		console.log("User clicked on a square!")
		markSquare(this)
	});
}
// create a 'marksquare' function

function markSquare(currentSquare){
	if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML == "O")){
		console.log("This square is taken")		
		squareResult = "Sorry, this square is taken!"
	}else if(whosTurn == 1){
		currentSquare.innerHTML = "X"
		whosTurn = 2;
		squareResult = ""
	}else{
		currentSquare.innerHTML = "O"
		whosTurn = 1;
		squareResult = ""
	}
	var messageElement = document.getElementById('message');
	messageElement.innerHTML = squareResult;
	
}