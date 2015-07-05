$(document).ready(function() {

	// generate random number
	generateRandNum();

	// event listener on box click
	$('.box').on('click', function() {
		count++;
		var boxId = $(this).attr('id');
		console.log('BoxId: ' + boxId);
		var status = checkBox(boxId);
		if (status == 'win') {
			$(this).toggleClass('green');
			checkLowScore();
			// End of game, reset and increment
			count = 0;
			gameCount++;
		} 
		else {
			$(this).toggleClass('blue');
		};
	});

	// reset listener
	$('button').on('click', function() {
		resetGame();
	});
});

// setup some variables for readability
var randomNumber;
var lowScore;
var count = 0;
var gameCount = 0;

var generateRandNum = function() {
	randomNumber = Math.floor((Math.random() * 8) + 1);
	console.log('Random number is: ' + randomNumber);
};

var checkBox = function(id) {
	console.log('RN inside of checkBox(): ' + randomNumber);
	if (id == randomNumber) {
		console.log('Win!');
		$('#game-status h1').empty().append('Win!');
		return 'win'
	} else {
		console.log('Not a win...');
		return 'lose'
	};
};

var resetGame = function() {
	$.each($(".box"), function(){
		$(this).removeClass("green");
		$(this).removeClass("blue");
	});
	$('#game-status h1').empty().append('Let\'s go again.');
	generateRandNum();
};

var checkLowScore = function() {
	if (checkFirstGameRun()) {
		lowScore = count;
	} else {
		if (count < lowScore) {
			lowScore = count;
		};
	};
	appendLowScore();
};

var checkFirstGameRun = function() {
	if (gameCount == 0) {
		return true;
	}
	else if (gameCount > 0) {
		return false;
	};
};

var appendLowScore = function() {
	$('#low-score').css('visibility', 'visible');
	$('#score').empty().append(lowScore);
};