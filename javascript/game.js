 $(document).ready(function() {
 	//The player will be shown a random number at the start of the game.
 	var numToGuess = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
 	$("#matchNumber").html(numToGuess);

//COUNTERS
 	var wins = 0;
 	var losses = 0;
 	var counter = 0;
 	$("#userScore").html(counter);
 	
 	// Each crystal should have a random hidden value between 1 - 12
 	var crystalValue1=(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
 	var crystalValue2=(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
 	var crystalValue3=(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
 	var crystalValue4=(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
 	console.log(crystalValue1);
 	console.log(crystalValue2);
 	console.log(crystalValue3);
 	console.log(crystalValue4);
 	
 	
 	
 	// When the player clicks on a crystal it will add a specific amount of points to the player's total score.
	
    $('.crystalImage1').on('click', function(){
   		counter = counter + crystalValue1;
   		console.log(counter);
   		$("#userScore").html(counter);
   	if (counter == numToGuess){
    	alert('You WON!');
    	wins++;
    }
    else if (counter > numToGuess){
    	alert("You LOST");
    	losses++;
    }

	$("#win").html(wins);
 	$("#lose").html(losses);

    });

    $('.crystalImage2').on('click', function(){
   		counter = counter + crystalValue2;
   		$("#userScore").html(counter);
   		console.log(counter);
   	if (counter == numToGuess){
    	alert('You WON!');
    	wins++;
    }
    else if (counter > numToGuess){
    	alert("You LOST");
    	losses++;
    }
    });

    $('.crystalImage3').on('click', function(){
   		counter = counter + crystalValue3;
   		$("#userScore").html(counter);
   		console.log(counter);
   	if (counter == numToGuess){
    	alert('You WON!');
    	wins++;
    }
    else if (counter > numToGuess){
    	alert("You LOST");
    	losses++;
    }
    });

    $('.crystalImage4').on('click', function(){
   		counter = counter + crystalValue4;
   		$("#userScore").html(counter);
   		console.log(counter);
   	if (counter == numToGuess){
    	alert('You WON!');
    	wins++;
    }
    else if (counter > numToGuess){
    	alert("You LOST");
    	losses++;
    }
    });

 });

// * The player wins the game if their total score matches the random number and the player loses the game if their total score goes above the random number.
// * The amount of points each crystal adds is not shown to the player, but their total score is displayed and updated after each crystal is clicked.
// * The number of games won and lost will be displayed.
// * If the player successfully matches their total score to the random number they get 1 win, if the player's total score is above the random number the player get 1 loss, either way the game restarts.
// * When the game is restarted, the player will be shown a new random number, all the crystals will now have 4 different hidden values, and the player's total score is reset to 0.

// ##### Game design note:
// ###### The random number shown at the start of the game should be between 19 - 120
// ###### Each crystal should have a random hidden value between 1 - 12
