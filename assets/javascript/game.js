$(document).ready (function() {

// Function to get random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Declaring global variables
var wins = 0;
var losses = 0;
var playerCounter = 0;

// Generates random number between 19-120 for player to guess
var targetNumber = getRandomInt(19,120);

// Shows random number on html page
var newNumber = $('.randnumber').append(targetNumber);

// Generates random number value between 1-12 for crystal
var crystalNumber = getRandomInt(1,12);

// Four number options for the four crystals
var crystalNumberOptions = [getRandomInt(1,12), getRandomInt(1,12), getRandomInt(1,12), getRandomInt(1,12)];

// URLs for crystals
var crystalPicUrl = [

'assets/images/greencrystal.png',
'assets/images/purplecrystal.png',
'assets/images/pinkcrystal.png',
'assets/images/bluecrystal.png'

]

// Generates crystal pictures and values to html
for (var i = 0; i < crystalNumberOptions.length; i++) {
	var imageCrystal = $('<img>');

	imageCrystal.addClass('crystal-pic');

	imageCrystal.attr('src', crystalPicUrl[i]);

	imageCrystal.attr('data-crystalnumber', crystalNumberOptions[i]);

	$('.crystals').append(imageCrystal);

}

// Adds value of crystal to text in html and updates it with each click
$('.crystal-pic').on('click', function() {

	var crystalCount = ($(this).attr('data-crystalnumber'));

	crystalCount = parseInt(crystalCount);

	playerCounter += crystalCount;

	$('.yournumber').text(playerCounter);

if (playerCounter === targetNumber) {

	alert("Congratulations, you won!");
	wins++;
	reset();

	console.log(wins);
}

else if (playerCounter > targetNumber) {

	alert("Sorry, you lost!  Better luck next time!");
	losses++;
	reset();

	// console.log('losses: ' + losses);
	// console.log('playerCounter: ' + playerCounter);
}

})


// Reset function
function reset() {

	$('.yournumber').text(0);
	targetNumber = getRandomInt(19,120);
	playerCounter = 0;
	newNumber = $('.randnumber').text(targetNumber);

	crystalNumber = getRandomInt(1,12);
	crystalNumberOptions = [getRandomInt(1,12), getRandomInt(1,12), getRandomInt(1,12), getRandomInt(1,12)];
	$('.score').html('<p>Wins: ' + wins + '</p>' + '<p>Losses: ' + losses + '</p>');
	
	
}






});
//