$(document).ready(function() {

		// generate random number
		generateRandNum();

		// event listener on box click
		$('.box').on('click', function() {
				var boxId = $(this).attr('id');
				console.log('BoxId: ' + boxId);
				var status = checkBox(boxId);
				if (status == 'win') {
					$(this).toggleClass('green');
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

var randomNumber;

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